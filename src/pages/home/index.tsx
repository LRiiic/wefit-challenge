import React, { useEffect, useState } from 'react';
import { Product } from '../../types/index.types';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';

import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import MessagePage from '../../components/MessagePage/MessagePage';
const Home: React.FC = () => {
    const location = useLocation();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchKeyword, setSearchKeyword] = useState<string>(searchParams.get('search-query') || '');

    async function fetchProducts(keyword: string): Promise<Product[] | void> {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:3000/products?title_like=' + keyword);
            const data = await response.json();
            setProducts(data);
            if (data.length === 0 && !loading) {
                setError("Nenhum resultado encontrado");
            }
            return data;
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(searchKeyword);
    }, []);
  
    return (
        <Wrapper>
            <Header/>

            {location.pathname === "/" || location.pathname === "/search" ?
                <>
                    <SearchBar
                        searchKeyword={searchKeyword}
                        setSearchKeyword={setSearchKeyword}
                        fetchProducts={fetchProducts}
                    />

                    { error && <MessagePage message="Parece que não há nada por aqui :(" type="error" />}

                    { loading && <Loading/> }
                    { !loading && 
                    <>
                        <CardGrid products={products}/> 
                    </>
                    }
                </>
            : <Outlet/>}
        
            
        </Wrapper>
    );
};

export default Home;
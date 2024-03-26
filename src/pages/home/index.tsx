import React, { useEffect, useState } from 'react';
import { Product } from '../../types/index.types';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';

import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
const Home: React.FC = () => {

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
            <SearchBar
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                fetchProducts={fetchProducts}
            />

            { error && <p>{error}</p>}

            { loading && <Loading/> }
            { !loading && 
            <>
                <CardGrid products={products}/> 
            </>
            }
            
        </Wrapper>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { Product } from '../../types/index.types';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    async function fetchProducts(): Promise<Product[] | void> {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            setProducts(data);
            return data;
        } catch (error: any) {
            setError(error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);
  
    return (
        <Wrapper>
            <Header/>

            { loading && <Loading/> }

            { error && products.length === 0 && <Error/> }

            { !loading && !error && <CardGrid products={products}/> }
            
        </Wrapper>
    );
};

export default Home;
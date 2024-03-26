import React, { useEffect, useState } from 'react';
import { Product } from '../../types/index.types';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';

const Home: React.FC = () => {

    const [products, setProducts] = useState([]);

    async function fetchProducts(): Promise<Product[]> {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();

        setProducts(data);

        return data;
    }

    useEffect(() => {
        fetchProducts();
    }, []);
  
    return (
        <Wrapper>
            <Header/>

            { products.length === 0 && <p>Loading...</p> }

            { products.length > 0 && <CardGrid products={products}/> }
            
        </Wrapper>
    );
};

export default Home;
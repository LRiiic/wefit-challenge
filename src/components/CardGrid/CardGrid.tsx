import { styled } from "styled-components";
import { Product } from '../../types/index.types';
import { useCart } from "../../hooks/useCart";
import cartIconButton from "../UI/SVG/cartIconButton.svg";
import { useState } from "react";

const Grid = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "16px",
});

const Card = styled.div`
    background-color: #FFFFFF;
    color: #333333;
    width: 100%;
    max-width: 349.33px;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
    }
    height: 324px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    gap: 8px;
    box-sizing: border-box;

    img {
        width: 100%;
        max-width: 147px;
        object-fit: cover;
    },

    p {
        margin: 0;
    },

    .title{
        font-size: 12px;
        font-weight: 700;
        line-height: 16.34px;
        text-align: center;   
        color: #333333;     
    },

    .price {
        font-size: 16px;
        font-weight: 700;
        line-height: 21.79px;
        text-align: center;
        color: #2F2E41;
    },
`;

interface IButtonProps {
    cart: string;
}

const Button = styled.button<IButtonProps>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${props => props.cart === "true" ? "#039B00" : "#009EDD"};
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    color: #FFFFFF;
    border: none;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: center;
    text-transform: uppercase;
    transition: all 300ms ease-out;
    &:hover {
        background-color: ${props => props.cart === "true" ? "#039B00" : "#0073A1"};
    }

    span {
        display: flex;
        font-weight: 400;
        font-size: 12px;
        line-height: 16.34px;
    }

    i {
        display: block;
        width: 13.6px;
        height: 13.6px;
        background-image: url(${cartIconButton});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
`;


const CardGrid: React.FC<{ products: Product[] }> = ({ products }) => {
    const { addToCart, getCart, setCartItemsCount, getProductQuantity } = useCart(() => {
        setCartItemsCount(getCart().length);
        setCart(getCart());
    });
    const [cart, setCart] = useState<Product[]>(products);

    function inCart(productId: number): boolean {
        const cart = getCart();

        return cart.some((product: Product) => product.id === productId);
    }
    
    return (
        <Grid>
            { products.length > 0 && products.map((product) => (
                <Card key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <p className="title">{product.title}</p>
                    <p className="price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                    <Button cart={inCart(product.id).toString()} onClick={() => addToCart(product)}><span><i></i>{getProductQuantity(product.id)}</span>Adicionar ao carrinho</Button>
                </Card>
            ))}
        </Grid>
    );
}

export default CardGrid;
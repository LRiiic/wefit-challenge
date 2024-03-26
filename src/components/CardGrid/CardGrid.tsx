import { styled } from "styled-components";
import { Product } from '../../types/index.types';

const CardGrid: React.FC<{ products: Product[] }> = ({ products }) => {
    const CardGrid = styled.div({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
    });

    const Card = styled.div({
        backgroundColor: "#FFFFFF",
        color: "#333333",
        width: "100%",
        maxWidth: "349.33px",
        height: "324px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "4px",
        gap: "8px",
        boxSizing: "border-box",

        img: {
            width: "100%",
            maxWidth: "147px",
            objectFit: "cover",
        },

        p: {
            margin: "0",
        },

        ".title": {
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "16.34px",
            textAlign: "center",   
            color: "#333333",     
        },

        ".price": {
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "21.79px",
            textAlign: "center",
            color: "#2F2E41",
        },

        button: {
            cursor: "pointer",
            width: "100%",
            height: "40px",
            padding: "8px",
            gap: "12px",
            borderRadius: "4px",
            backgroundColor: "#009EDD",
            color: "#FFFFFF",
            border: "none",
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "16.34px",
            textAlign: "center",
            textTransform: "uppercase",
            transition: "all 300ms ease-out",
            "&:hover": {
                backgroundColor: "#0073A1",
            }
        }
    });

    {console.log(products)}
    return (
        <CardGrid>
            {products.map((product) => (
                <Card key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <p className="title">{product.title}</p>
                    <p className="price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                    <button>Adicionar ao carrinho</button>
                </Card>
            ))}
        </CardGrid>
    );
}

export default CardGrid;
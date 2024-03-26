import { styled } from "styled-components";
import CartIcon from "../UI/SVG/cartIcon.svg";


const Nav = styled.nav({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "88px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 16px",
    boxSizing: "border-box",

    ".title": {
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "27.24px",
    },

    ".cart": {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        p: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontSize: "14px",
            lineHeight: "19.07px",
            fontWeight: "600",
            color: "#FFFFFF",
        },

        span: {
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "16.34px",
            textAlign: "left",
            color: "#999999",
        },

        i: {
            display: "block",
            backgroundImage: `url(${CartIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "40px",
            height: "40px",
        }
    },
});

const Header: React.FC = () => {

    return (
        <Nav>
            <h1 className="title">WeMovies</h1>
            <div className="cart">
                <p>Meu Carrinho <span>0 itens</span></p>
                <i></i>
            </div>
        </Nav>
    );
}

export default Header;


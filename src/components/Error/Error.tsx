import { styled } from "styled-components";
import ErrorIcon from "../UI/SVG/error.svg";


const Error: React.FC = () => {
    const Error = styled.div({
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        padding: "64px",
        boxSizing: "border-box",
        gap: "24px",

        h2: {
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "27.24px",
            textAlign: "center",
            color: "#2F2E41",
        },

        i: {
            display: "block",
            backgroundImage: `url(${ErrorIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "100%",
            height: "264px", 
        },

        button: {
            cursor: "pointer",
            backgroundColor: "#009EDD",
            height: "40px",
            minWidth: "173px",
            padding: "8px",
            border: "none",
            borderRadius: "4px",
            boxSizing: "border-box",
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "16.34px",
            textAlign: "center",
            color: "#FFFFFF",

        },
    });

    return (
        <Error>
            <h2>Parece que não há nada por aqui :(</h2>
            <i />
            <button onClick={() => window.location.reload()}>Recarregar página</button>
        </Error>
    );
}

export default Error;


import { styled } from "styled-components";
import ErrorIcon from "../UI/SVG/error.svg";
import SuccessIcon from "../UI/SVG/success.svg";


const MessageWrapper = styled.div({
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

const Figure = styled.figure({
    width: "100%",
    i: {
        display: "block",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        width: "100%",
        height: "264px",
    },
    ".error": {
        backgroundImage: `url(${ErrorIcon})`,
    },
    ".success": {
        backgroundImage: `url(${SuccessIcon})`,
    }
});

interface IProps {
    message: string,
    type: string
}

const MessagePage: React.FC<IProps> = (props: IProps)=> {
    return (
        <MessageWrapper>
            <h2>{props.message}</h2>
            <Figure>
                <i className={props.type}/>
            </Figure>
            {props.type === "error" && <button onClick={() => window.location.href = "/"}>Recarregar página</button>}

            {props.type === "success" && <button onClick={() => window.location.href = "/"}>Voltar</button>}
        </MessageWrapper>
    );
}

export default MessagePage;


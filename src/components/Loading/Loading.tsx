import { styled } from "styled-components";
import SpinnerIcon from "../UI/SVG/spin.svg";

const Spinner = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 16px",
    boxSizing: "border-box",

    i: {
        display: "block",
        backgroundImage: `url(${SpinnerIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        width: "40px",
        height: "40px",
        animation: "spin 1s linear infinite",

        "@keyframes spin": {
            from: {
                transform: "rotate(0deg)",
            },
            to: {
                transform: "rotate(360deg)",
            },
        },
    }
});

const Loading: React.FC = () => {
    return (
        <Spinner>
            <i></i>
        </Spinner>
    );
}

export default Loading;


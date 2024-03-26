import { styled } from "styled-components";
import SearchIcon from "../UI/SVG/search.svg";
import { Product } from "../../types/index.types";
import { Dispatch, SetStateAction, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SearchBarContainer = styled.label({
    position: "relative",
    width: "100%",
    height: "56px",
    padding: "0px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",

    form: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },

    button: {
        position: "absolute",
        right: "19px",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        opacity: "0.5",

        i: {
            display: "block",
            backgroundImage: `url(${SearchIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "18px",
            height: "18px",
        }
    }
});

const Input = styled.input({
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21.79px",
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "8px",

    "&::placeholder": {
        color: "#C0C0C0",
    },

    "&:focus": {
        outline: "2px solid #009EDD",
        "~ button": {
            opacity: "1",
        }
    }
});

interface IProps {
    searchKeyword: string
    fetchProducts: (keyword: string) => Promise<Product[] | void>
    setSearchKeyword: Dispatch<SetStateAction<string>>
}
const SearchBar: React.FC<IProps> = (props: IProps) => {
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        props.setSearchKeyword(e.target.value);
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>):void => {
        if (!e.target.value) {
            return;
        }
        navigate("/search?search-query=" + e.target.value);
        props.fetchProducts(e.target.value);
    }

    return (
        <SearchBarContainer>
            <form onSubmit={(e) => e.preventDefault()}>
                <Input
                    placeholder="Buscar filme pelo nome"
                    type="text"
                    value={props.searchKeyword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button type="submit"><i></i></button>
            </form>
        </SearchBarContainer>
    );
}

export default SearchBar;


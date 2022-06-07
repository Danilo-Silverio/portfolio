import React from "react";
import { useNavigate } from "react-router-dom";
import { PageError } from "../../assets/styles/Error/ErrorStyle";

const ErrorPage = () => {
    
    const navigate = useNavigate();
    
    return (
        <PageError>
            <div>
                <h1><span>Ops,</span> não encontramos esse caminho!</h1>
                <button onClick={() => navigate("/movie/feed")}>Catálogo</button>
            </div>
        </PageError>
    )
};

export default ErrorPage;
import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Maria");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {/* Condicional simples, só checa se é true ou false */}
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <h2>If ternário</h2>
            {name === 'João' ? (
                <div>
                    <p>Olá, João!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Clica aqui!</button>
        </div>
    );
};

export default ConditionalRender;
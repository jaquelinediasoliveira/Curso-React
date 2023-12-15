// Meu primeiro componente funciona assim

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return(
    //As tags organizadas dentro de uma tag principal se chama ENCAPSULAMENTO
        <div>
            <h2>Meu primeiro componente</h2>
            <MyComponent/>
        </div>
    );

};

export default FirstComponent;
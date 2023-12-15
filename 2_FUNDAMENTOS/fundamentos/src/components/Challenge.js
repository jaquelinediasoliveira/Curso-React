const Challenge = () => {
    const valor1 = 2;
    const valor2 = 6;

    const somar = () =>{
        console.log(valor1+valor2)
    }

    return(
        <div>
            <p>Os valores são respectivamente {valor1} e {valor2}</p>
            <button onClick={somar}>Somar valores</button>
        </div>
    );
};

export default Challenge;
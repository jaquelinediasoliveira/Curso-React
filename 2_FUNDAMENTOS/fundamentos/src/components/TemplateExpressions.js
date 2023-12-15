const TemplateExpressions = () => {

    const name = "Jaqueline";
    const data = {
        age: 20,
        job: 'programmer',
    };

    return(
        <div>
            <h2>Olá {name}, aqui está seu teste de Template Expressions.</h2>
            <p>Você tem {data.age} anos e é {data.job}</p>
            <p>{console.log("Você está indo bem!")}</p>
        </div>
    );
};

export default TemplateExpressions;
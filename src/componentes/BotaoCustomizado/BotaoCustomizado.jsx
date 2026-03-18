import "./BotaoCustomizado.css";

function BotaoCustomizado({ tipo, aoClicar, children }) {
    let classes = "botao-customizado__root";

    switch (tipo) {
        case "primario":
            classes += " botao-customizado__primario";
            break;
        case "segundario":
            classes += " botao-customizado__segundario";
            break;
    }
    return <button className={classes} onClick={aoClicar}>
        {children}
    </button>
}

export default BotaoCustomizado;
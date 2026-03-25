import "./ItemProduto.css";

function ItemProduto({produto}) {
    return ( 
        <div className="item-produtos__root">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>

        <div className="item-produto__cores">
            {produto.cores.map((aquarela, contagem) => {
                return (
                <div
                 key={contagem} 
                 className="item-produto__cor" 
                 style={{background: aquarela}}></div>
                );
            })}
        </div>
        </div>
        );
}

export default ItemProduto;
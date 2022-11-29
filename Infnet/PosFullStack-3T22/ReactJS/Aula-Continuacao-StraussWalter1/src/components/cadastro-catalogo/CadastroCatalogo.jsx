import React, {useState, useEffect} from "react";

const CadastroCatalogo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [catalogos, setCatalogos] = useState([]);
    console.log(catalogos);
    
    const cadastrarCatalogo = () => {
        let v = {
          title: title,
          description: description,
          image: image,
          novoItem: "oi"
        };
        setCatalogos([...catalogos, v]);
    }

    return (
      <form>
        <label>Título</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Imagem</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
        <br />
        <label>Descrição</label>
        <textarea
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= 255) {
              setDescription(e.target.value);
            } else {
              console.log("Não pode ser maior que 255");
            }
          }}
        />
        <br />
        {description.length} caracteres
        <button type="button" onClick={cadastrarCatalogo}>
          Cadastrar
        </button>
        <ul>
          {catalogos.map((catalogo) => (
            <li>{catalogo.title} - {catalogo.image}</li>
          ))}
        </ul>
      </form>
    );
}

export default CadastroCatalogo;
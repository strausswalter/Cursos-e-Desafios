import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Catalogo from "./components/catalogo/Catalogo"
import CadastroCatalogo from './components/cadastro-catalogo/CadastroCatalogo';

const App = () => {
  const produtos = [
    {
      id: 1,
      name: "Produto 1",
      image:
        "https://cea.vtexassets.com/arquivos/ids/35052078-800-auto?v=637523025182970000&width=800&height=auto&aspect=true",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget metus et eros molestie facilisis. Morbi tincidunt metus sed nibh tempus, eu hendrerit ipsum tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      price: 399.9,
    },
    {
      id: 2,
      name: "Produto 2",
      image:
        "https://i0.wp.com/etiquetamodas.com.br/wp-content/uploads/2022/02/etiqueta-modas-vestido-feminino-manga-curta-decote-v-2307-3.jpg?fit=1000%2C1500&ssl=1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget metus et eros molestie facilisis. Morbi tincidunt metus sed nibh tempus, eu hendrerit ipsum tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      price: 499.9,
    },
    {
      id: 3,
      name: "Produto 3",
      image:
        "https://images.tcdn.com.br/img/img_prod/836526/vestido_feminino_midi_de_moletinho_1467_1_c4bcbf9d418a7831eb422659aa9dd264.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget metus et eros molestie facilisis. Morbi tincidunt metus sed nibh tempus, eu hendrerit ipsum tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      price: 599.9,
    },
  ];
  const olaMundo = () => {
    console.log("Olá mundo");
  }

  const comprar = (id) => {
    console.log("Comprando produto " + id)
  }

  return (
    <div className="App">
      <CadastroCatalogo />
    </div>
  );
}

export default App;

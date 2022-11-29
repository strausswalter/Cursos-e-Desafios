import React, { useEffect, useState } from "react";

const Catalogo = () => {
    // const [catalogos, setCatalogos] = useState([
    //   {
    //     name: "El camino",
    //     image: "https://i.ytimg.com/vi/2ir8eLkz2tQ/maxresdefault.jpg",
    //     description:
    //       "O <strong>fugitivo</strong> Jesse Pinkman tenta superar o passado. Escrito e dirigido pelo criador de Breaking Bad, Vince Gilligan, e estrelado por Aaron Paul.",
    //   },
    //   {
    //     name: "The Crown",
    //     image:
    //       "https://static.poder360.com.br/2022/09/netflix-the-crown-848x477.jpeg",
    //     description:
    //       "Baseada em eventos históricos, esta série dramatiza a vida da rainha Elizabeth II e os eventos políticos e pessoais que moldaram seu reinado.",
    //   },
    // ]);
    const [items, setItems] = useState([]);
    const adicionar = () => {
        setItems([...items, 1])
        // setCatalogos([
        //   ...catalogos,
        //   {
        //     name: "Manifest",
        //     image:
        //       "https://occ-0-1432-586.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQinMSyZj_qxseVeqYNxgZv_Yvh1UGRYsMgeNMfZXa1AFFTKD9nbqXjWx9GfCgZJBfPHojXEOQ7Ya1j0E25iSXInt6N2RdMSSrXM.jpg?r=642",
        //     description:
        //       "Um avião aterrissa misteriosamente cinco anos depois da decolagem, levando os passageiros a viverem a estranheza de retornar a um mundo que seguiu a vida sem eles.",
        //   },
        // ]);
    }
    return (
      <>
        <button onClick={adicionar}>Adicionar novo item</button>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        
      </>
    );
}

export default Catalogo;



{
  /* {catalogos?.map((catalogo) => {
          return (
            <>
              <h2>{catalogo.name}</h2>
              <p>{catalogo.description}</p>
              <img
                src={catalogo.image}
                style={{
                  width: "100%",
                }}
              />
            </>
          );
        })} */
}
import React from 'react';
import frete from '../assets/ic_shipping.png';

export default props => {

  const lista = () => {
    // const frete = false;
    const list = props.list || [];

    // list.map(itens => {
      // if (itens.shipping.free_shipping) {
      //   frete = true;
      // }

      return list.map(itens => (
        <li key={itens.id}>
          <img src={itens.thumbnail} alt="texto"/>
          <div>
            <span>R${itens.price},00</span>
            <img src={frete} hidden={itens.shipping.free_shipping} alt="frete" className="frete"/>
            <span>{itens.title}</span>
            <span className="cidade">{itens.seller_address.city.name}</span>
          </div>
          <span>{itens.seller_address.city.name}</span>
        </li>
      )
    )
  }

  return (
    <section className="container">
      <div className="resultados">
        <ul>
          {lista()}
        </ul>
      </div>
    </section>
  ) 

}
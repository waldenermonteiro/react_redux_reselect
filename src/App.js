import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { createSelector } from "reselect";
const App = ({ cart, total, addProducts, setShipping }) => {
  return (
    <div className="App">
      <h1>Carrinho</h1>
      <p>
        Items: <strong>{cart.items.length}</strong>
      </p>
      <p>
        Frete: <strong>{cart.shipping_value}</strong>
      </p>
      <p>
        Total: <strong>{total}</strong>
      </p>
      <button onClick={addProducts}>Adicionar Produto</button>
      <button onClick={setShipping}>Calcular Frete</button>
    </div>
  );
};
const calculateTotal = createSelector(
  (state) => state.items,
  (items) => {
    console.log('CALCULOU')
    return items.reduce((subtotal, item) => subtotal + item.price, 0);
  }
);

const mapStateToProps = (state) => ({
  cart: state,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProducts: () => dispatch({ type: "ADD" }),
  setShipping: () => dispatch({ type: "SET_SHIPPING" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

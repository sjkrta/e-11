import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils";
import { CartContext } from "../store";
import { CART_ACTIONS } from "../store/actions";

const Product = ({ id, product }) => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div>
      <div>{product.title}</div>
      <div className="pb-2">{formatCurrency(product.price)}</div>
      <div>
        <Button
          onClick={() =>
            dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: id })
          }
        >
          -
        </Button>
        <span className="p-2">{state[id]}</span>
        <Button
          onClick={() =>
            dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: id })
          }
        >
          +
        </Button>
      </div>
    </div>
  );
};

const Cart = ({ data }) => {
  const [cart, dispatch] = useContext(CartContext);

  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <h2>Products:</h2>
          <Button
            variant="danger"
            onClick={() => dispatch({ type: CART_ACTIONS.CLEAR_CART })}
          >
            <i className="fas fa-trash-alt"></i> Clear Cart
          </Button>
        </div>

        {Object.keys(cart).map((id) => {
          return (
            <Card key={id} className="mb-2">
              <Card.Body>
                <Product
                  id={id}
                  product={
                    ((data || {}).products || []).find(
                      (product) => product.id.toString() === id
                    ) || {}
                  }
                />
              </Card.Body>
            </Card>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default Cart;

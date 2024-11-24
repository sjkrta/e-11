import { useContext } from "react";
import { CartContext } from "../store";
import { Badge } from "react-bootstrap";

const Cart = () => {
  const [cart] = useContext(CartContext);

  return (
    <div className="position-relative">
      <i className="fas fa-shopping-cart fa-xl"></i>
      {!!Object.keys(cart).length && (
        <Badge
          className="position-absolute rounded-circle"
          style={{ top: "-14px", right: "-14px" }}
        >
          {Object.values(cart).reduce((total, current) => {
            return total + current;
          }, 0)}
        </Badge>
      )}
    </div>
  );
};

export default Cart;

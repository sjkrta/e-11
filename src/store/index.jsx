import { createContext, useReducer } from "react";
import { cartReducer } from "./reducer";
import { defaultValue } from "./defaults";

export const CartContext = createContext(defaultValue);

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, defaultValue);

  return (
    <CartContext.Provider value={[cart, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

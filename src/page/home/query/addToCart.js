import { loadState, saveState } from "../../../config/data/localStorage";

export function addToCart(product) {
  const cart = loadState("cart") || [];

  cart.push(product);

  saveState("cart", cart);
}

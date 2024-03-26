/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteCartItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../app/globalRedux/Features/cartSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

function CartItem({
  id,
  image,
  title,
  price,
  quantity = 0,
}: {
  id: string | number;
  image: string;
  title: string;
  price: string;
  quantity: number;
}) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <Image
        src={image}
        alt="Some text"
        width="200"
        height="200"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItem__incrDec">
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className="cartItem__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;

"use client";
import React from "react";
import FlipTextButton from "../../global/AnimateBtn/AnimateBtn";
import { Bag } from "iconsax-react";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/Redux/slices/Basket";
import Swal from "sweetalert2";
type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function ProductOrder({ name, id, price, image }: Props) {
  const dispatch = useDispatch();
  const [counter, setCounter] = React.useState<number>(1);
  const [isInBasket, setIsInBasket] = React.useState<boolean>(false);
  if (counter < 1) {
    setCounter(1);
  }
  // check if the product is in the basket
  React.useEffect(() => {
    // chack if we are in client side
    if (typeof window !== "undefined") {
      const savedBasket = localStorage.getItem("basket");
      if (savedBasket) {
        const basketItems = JSON.parse(savedBasket);
        const isInBasket = basketItems.some((item) => item.id === id);
        setIsInBasket(isInBasket);
      }
    }
  }, [id]);

  // handle add to cart
  const addToCart = async () => {
    const CartItems = {
      id,
      name,
      price,
      image,
      quantity: counter,
    };
    dispatch(addToBasket(CartItems));
    setIsInBasket(true);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "محصول به سبد خرید اضافه شد",
      showConfirmButton: false,
      timer: 2000,
      background: "#121212",
      color: "#fff",
    });
  };

  return (
    <div className="flex gap-2">
      <div className="counter border border-gray-500 rounded-full flex">
        <button
          className="p-2 border-l"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
        <p className="p-2">{counter}</p>
        <button
          className="p-2 border-r"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      {isInBasket ? (
        <button className="bg-MainColor text-black px-4 py-2 rounded-lg font-semibold ">
          موجود در سبد خرید
        </button>
      ) : (
        <div className="w-full" onClick={() => addToCart()}>
          <FlipTextButton
            primaryText="افزودن به سبد خرید"
            secondaryText={<Bag size="32" color="#000" />}
          />
        </div>
      )}
    </div>
  );
}

export default ProductOrder;

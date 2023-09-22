import axios from "../axios";
import hexcoin from "../assets/hexcoin.svg";
import { toast } from "react-toastify";
import { useState } from "react";
import useStore from '../store';
/* eslint-disable react/prop-types */
export default function Card({ name, id, price, url, incart }) {
  const [added, setAdded] = useState(incart);
  const {setAmount} = useStore()
  const addToCart = async () => {
    try {
      const response = await axios.post(
        "/api/v1/carts/" + id,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAdded(true);
      localStorage.setItem("amount", response.data.amount_left);
      setAmount(response.data.amount_left)
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail);
      } else {
        toast.error(error?.message);
      }
    }
  };
  const removeFromCart = async () => {
    try {
      const response = await axios.delete("/api/v1/carts/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAdded(false);
      localStorage.setItem("amount", response.data.amount_left);
      setAmount(response.data.amount_left)
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail);
      } else {
        toast.error(error?.message);
      }
    }
  };
  return (
    <div className="flex flex-col min-w-[16rem] justify-evenly bg-[#411623] border-2 border-white/10 p-4 rounded-lg">
      <img src={url} className="w-full h-auto mb-4 self-center" />
      <h2 className="text-lg mt-4 font-DelaGothicOne text-heading">{name}</h2>
      <p className="text-sm my-4 font-SpaceGrotesk text-content">
        These are the only {name} that can be used in your designs.You may
        purchase multiple {name}.
      </p>
      {!added ? (
        <button
          onClick={addToCart}
          className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-md mt-4 font-DelaGothicOne"
        >
          {price} <img src={hexcoin} className="inline w-[1 5%] h-[90%]" />
        </button>
      ) : (
        <button
          onClick={removeFromCart}
          className="bg-red-300 hover:bg-red-700 px-8 py-1 text-sm rounded-md mt-4 font-DelaGothicOne"
        >
          Remove From Cart
        </button>
      )}
    </div>
  );
}

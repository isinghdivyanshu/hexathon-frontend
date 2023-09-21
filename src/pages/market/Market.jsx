/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#34101CCC",
    width: "45%",
    height: "auto",
    border: "3px solid #58373D",
  },
  overlay: {
    backgroundColor: "#250A19B2",
  },
};

export default function Market() {

  const [cart, setCart] = useState({})

  const [categories, setCategories] = useState([]);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false); // State for the modal

  const navigate = useNavigate()

  const checkout = async () => {
    try {
      await axios.post("/api/v1/carts/checkout", {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      navigate("/dashboard/home")
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail)
      } else {
        toast.error(error?.message)
      }
    }
  }

  const getCart = async () => {
    try {
      const res = await axios.get("/api/v1/carts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setCart(res.data.items_added)
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail)
      } else {
        toast.error(error?.message)
      }
    }
  }

  const getCategories = async () => {
    try {
      const response = await axios.get("/api/v1/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    }
  };

  useEffect(() => {
    getCart()
    getCategories();
  }, []);

  // Function to open the modal
  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  // Function to close the modal
  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  return (
    <Layout title={"Marketplace"}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-DelaGothicOne text-heading">
            Shop your essentials
          </h1>
          <p className="text-sm w-3/4 font-SpaceGrotesk text-info">
            Sale! Buy everything you need using your hexcoins. psst saving them
            won&apos;t take you to the moon.
          </p>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne"
          onClick={openCheckoutModal} // Open the modal when the button is clicked
        >
          Checkout
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categories?.map((cat, i) => {
          return (
            <Category items={cart[cat.id]} desc={cat.description} maxnum={cat.max_items} name={cat.name} path={cat.id} key={`category${i}`} />
          );
        })}
      </div>

      <Modal
        isOpen={isCheckoutModalOpen}
        onRequestClose={closeCheckoutModal} // Close the modal when requested
        style={customStyles}
        contentLabel="Confirmation Modal"
      >
        <div className="flex flex-col justify-between">
          <h1 className="my-3 text-xl">Ready to Checkout?</h1>
          <p className="mb-4 text-sm font-SpaceGrotesk text-info">
            You can&apos;t enter and re-select elements from the marketplace
            once you are checked out. So please confirm your choices before you
            checkout.
          </p>
          <div>
            <h1 className="text-lg font-SpaceGrotesk text-medium">
              {categories?.map((category, i) => {
                return (
                  <span className='block' key={i}>
                    {category.name} — <span className="text-green-500">{cart[category.id]?.map((item) => `${item.name} `)}{`(${cart[category.id]?.length || "0"})`}</span>
                  </span>
                )
              })}
            </h1>
          </div>
          <div className="flex w-full justify-end gap-4">
            <button
              onClick={closeCheckoutModal}
              className="border-2 border-red-600 text-red-600 hover:border-red-700 hover:text-red-700 w-[20%] px-3 py-1 text-xs rounded-sm font-DelaGothicOne"
            >
              Cancel
            </button>
            <button onClick={checkout} className=" bg-red-600 hover:bg-red-700 w-[20%] px-3 py-1 text-xs text-white rounded-sm font-DelaGothicOne">
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}

function Category({ name, path, maxnum, desc, items }) {
  return (
    <div className="w-full flex flex-col justify-between bg-[#752E324D] p-5 border-2 border-white/10 rounded-md font-SpaceGrotesk">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-lg text-heading font-bold tracking-wider">
          {name}
        </h1>
        <p>Maximum of {maxnum} items can be bought from this category.</p>
        <p className="text-sm w-1/2 text-content">
          {desc}
        </p>
      </div>
      <div className="w-full flex justify-between mt-4">
        {items?.length && <div className="text-green-500">Selected: {items?.map((item) => `${item.name} `)}{`(${items?.length})`}</div>}
        <Link className='ml-auto' to={`/dashboard/market/category/${path}`}>
          <button className="bg-red-600 hover:bg-red-700 px-5 py-1 text-sm rounded-sm font-DelaGothicOne">
            Choose
          </button>
        </Link>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { toast } from 'react-toastify';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#752E324D",
    width: "30%",
    height: "30%",
  },
  overlay: {
    backgroundColor: "#250A19B2"
  }
};

export default function Market() {


  const [typefaces, setTypefaces] = useState("Poppins, Inter");
  const [colors, setColors] = useState("Neo-pop");
  const [illustration, setIllustration] = useState("Isometric");
  const [theme, setTheme] = useState("Minimalism");

  const [categories, setCategories] = useState([]);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false); // State for the modal

  const getCategories = async () => {
    try {
      const response = await axios.get('/api/v1/categories', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  // Function to open the modal
  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  }

  // Function to close the modal
  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  }

  return (
    <Layout title={'Marketplace'}>
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
            <Category name={cat.name} path={cat.id} key={`category${i}`} />
          )
        })}
      </div>

      <Modal
        isOpen={isCheckoutModalOpen}
        onRequestClose={closeCheckoutModal} // Close the modal when requested
        style={customStyles}
        contentLabel="Confirmation Modal"
      >
        <div className="flex flex-col justify-between">
          <h1 className="">Ready to Checkout?</h1>
          <p>You can&apos;t enter and re-select elements from the marketplace once you are checked out. So please confirm your choices before you checkout.</p>
          <div>
            <h1 className="text-xl font-DelaGothicOne">
              Typefaces - <span className="text-green-500">{typefaces}</span>
              <br />
              Colors - <span className="text-green-500">{colors}</span>
              <br />
              Illustrations - <span className="text-green-500">{illustration}</span>
              <br />
              Theme - <span className="text-green-500">{theme}</span>
            </h1>
          </div>
          <div className="flex justify-end">
            <button onClick={closeCheckoutModal}>Cancel</button>
            <button>Confirm</button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}

function Category({ name, path }) {
  return (
    <div className="w-full flex flex-col justify-between bg-[#752E324D] p-5 border-2 border-white/10 rounded-md font-SpaceGrotesk">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-lg text-heading font-bold tracking-wider">
          {name}
        </h1>
        <p className="text-sm w-1/2 text-content">
          These are the only {name} that can be used in your designs.You may
          purchase multiple {name}.
        </p>
      </div>
      <div className="w-full flex justify-between mt-4">
        <div className="text-green-500">Selected: Gilroy</div>
        <Link to={`/dashboard/market/category/${path}`}>
          <button className="bg-red-600 hover:bg-red-700 px-5 py-1 text-sm rounded-sm font-DelaGothicOne">
            Choose
          </button>
        </Link>
      </div>
    </div>
  );
}

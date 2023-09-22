/* eslint-disable react/prop-types */
import Layout from "../components/Layout";
import HexathonLogo from "../assets/hexathonLogo.svg";
import DownArrow from "../assets/downArrow.svg";
import { useState, useEffect } from "react";
import axios from "../axios";
import { toast } from "react-toastify";
import timeline from "../assets/timeline.svg";

export default function Home() {
  //react function to expand a div for overflow
  const [isExpanded, setIsExpanded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [confirmedProble, setConfirmed] = useState(false);
  const [cart, setCart] = useState({});

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

  const getCart = async () => {
    try {
      const res = await axios.get("/api/v1/carts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCart(res.data.items_added);
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail);
      } else {
        toast.error(error?.message);
      }
    }
  };

  const toggleExpansion = () => {
    console.log("clicked");
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  const [psTitle, setPSTitle] = useState("");
  const [psDescription, setPSDescription] = useState("");
  const [psOneLiner, setPSOneLiner] = useState("");
  const [checkedOut, isCheckedOut] = useState(false);

  const getPS = async () => {
    try {
      const res = await axios.get("/api/v1/problemStatements/team", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPSDescription(res?.data?.description);
      setPSTitle(res?.data?.name);
      setPSOneLiner(res?.data?.one_liner);
      setConfirmed(res?.data?.generations_left === 0);
      console.log(res.data);
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    }
  };

  const getTeam = async () => {
    try {
      const res = await axios.get("/api/v1/teams/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(res)
      isCheckedOut(res.data.items_count !== 0);
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    }
  };

  useEffect(() => {
    getCart();
    getCategories();
    getTeam();
    getPS();
  }, []);

  function OwnedAssets({ name, desc, items }) {
    return (
      <div className="lg:w-[23%] w-[33%] flex flex-col justify-between bg-[#752E324D] p-5 border-2 border-white/10 rounded-md font-SpaceGrotesk">
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-lg text-heading font-bold tracking-wider">
            {name}
          </h1>
          <p className="text-sm w-1/2 text-content">{desc}</p>
        </div>
        <div className="w-full flex justify-between mt-4">
          {items?.length && (
            <div className="text-green-500">
              Owned: {items?.map((item) => `${item.name} `)}
              {`(${items?.length})`}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Layout title={"Welcome"}>
      <div
        className={`${
          (psTitle === "" && psDescription === "") || !confirmedProble
            ? "hidden"
            : "block"
        }`}
      >
        <h1 className="w-max mt-3 mb-6 text-2xl">Problem Statement</h1>
        <div
          className={`bg-[#752E324D] p-5 border-2 border-white/10 rounded overflow-hidden transition-max-height ${
            isExpanded ? "max-h-full" : "max-h-60"
          }`}
        >
          <div className="flex justify-between mb-3">
            <h1 className="w-full text-2xl m-3">{psTitle}</h1>
            <button
              className="mr-2 h-12 w-12 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${DownArrow})` }}
              onClick={toggleExpansion}
            />
          </div>
          <p className="text-sm ml-3">{psOneLiner}</p>
          <p className={`text-sm ml-3 mt-3 ${!isExpanded ? "hidden" : ""}`}>
            {psDescription}
          </p>
        </div>
      </div>
      {/* {OwenedAssets?<OwenedAssets/>:null} */}

      <div className={`${checkedOut ? "block" : "hidden"} mt-8`}>
        <div>
          <h1 className="w-full mt-3 mb-6 text-2xl">Owned Assets</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories?.map((cat, i) => {
            return (
              <OwnedAssets
                items={cart[cat.id]}
                desc={cat.description}
                maxnum={cat.max_items}
                name={cat.name}
                path={cat.id}
                key={`category${i}`}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h1 className="w-full mt-8 mb-6 text-2xl">About</h1>
        <div className="flex lg:flex-row flex-col w-full">
          <p className="lg:w-3/5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eaque
            delectus quo at molestiae itaque, aspernatur quam consequuntur
            beatae sunt mollitia ad! Accusantium quasi magnam aut eos explicabo.
            Dolorem, earum? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Error, quo repudiandae! Quae dolore aut optio mollitia
            reprehenderit iure saepe! Eos, tempore ipsum hic numquam cum
            sapiente culpa vitae veritatis fugit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quia, aspernatur perspiciatis
            reprehenderit quod natus, recusandae, optio consequuntur magnam esse
            alias neque totam voluptatem inventore tenetur non consectetur
            impedit id sapiente?
          </p>
          <img
            src={HexathonLogo}
            alt="Hexathon Logo"
            className="max-w-[45rem] lg:w-2/5"
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#752E324D] p-5 border-2 mt-8 border-white rounded">
        <h1 className="w-full mt-3 mb-6 text-2xl">Timeline</h1>
        <img src={timeline} alt="Hexathon Logo" className="w-full h-96" />
      </div>
    </Layout>
  );
}

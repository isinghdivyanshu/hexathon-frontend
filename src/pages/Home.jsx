/* eslint-disable react/prop-types */
import Layout from "../components/Layout";
import HexathonLogo from "../assets/hexathonLogo.svg";
import DownArrow from "../assets/downArrow.svg";
import { useState, useEffect } from "react";
import axios from '../axios'
import { toast } from 'react-toastify';

export default function Home() {
  //react function to expand a div for overflow
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    console.log("clicked");
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  const [psTitle, setPSTitle] = useState("")
  const [psDescription, setPSDescription] = useState("")

  const getPS = async () => {
    try {
      const res = await axios.get("/api/v1/problemStatements/team", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setPSDescription(res?.data?.description)
      setPSTitle(res?.data?.name)
      console.log(res.data)
    } catch (error) {
      toast.error(error?.response?.data?.detail)
    }
  }

  useEffect(() => {
    getPS()
  }, [])

  function OwnedAssets({ assetType, asset }) {
    return (
      <div className=" relative bg-[#752E324D] p-5 border-2 border-white rounded m-2 w-64 h-32 ">
        <h1 className="w-full text-xl">{assetType}</h1>
        <p className="absolute bottom-5">{asset}</p>
      </div>
    );
  }

  return (
    <Layout title={"Welcome"}>
      <div className={`${(psTitle==="" && psDescription==="") ? "hidden":"block"}`}>
        <h1 className="w-max mt-3 mb-6 text-2xl">Problem Statement</h1>
        <div
          className={`bg-[#752E324D] p-5 border-2 border-white rounded overflow-hidden transition-max-height ${
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
          <p className="text-sm">
            {psDescription}
          </p>
        </div>
      </div>
      {/* {OwenedAssets?<OwenedAssets/>:null} */}

      <div>
        <div>
          <h1 className="w-full mt-3 mb-6 text-2xl">Owned Assets</h1>
        </div>
        <div className="flex flex-wrap">
          <OwnedAssets assetType="Typefaces" asset="Poppins, Inter" />
          <OwnedAssets assetType="Theme" asset="Minimalism" />
          <OwnedAssets assetType="Color Pallete" asset="Neo-pop" />
          <OwnedAssets assetType="Illustration Style" asset="Isometric" />
        </div>
      </div>

      <div>
        <h1 className="w-full mt-6 mb-6 text-2xl">About</h1>
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
      <div className="flex flex-col bg-[#752E324D] p-5 border-2 border-white rounded">
        <h1 className="w-full mt-3 mb-6 text-2xl">Timeline</h1>
        <img
          src={HexathonLogo}
          alt="Hexathon Logo"
          className="max-w-[45rem] w-80 h-auto"
        />
      </div>
    </Layout>
  );
}

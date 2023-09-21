import Layout from "../components/Layout";
import HexathonLogo from "../assets/hexathonLogo.svg";
import DownArrow from "../assets/downArrow.svg";
import { useState } from "react";

export default function Home() {
  //react function to expand a div for overflow
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    console.log("clicked");
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  function OwnedAssets({ assetType, asset }) {
    return (
      <div className=" relative bg-black bg-opacity-40 p-5 border-2 border-white rounded m-2 w-64 h-32 ">
        <h1 className="w-full text-xl">{assetType}</h1>
        <p className="absolute bottom-5">{asset}</p>
      </div>
    );
  }

  return (
    <Layout title={"Welcome"}>
      <div>
        <h1 className="w-max mt-3 mb-6 text-2xl">Problem Statement</h1>
        <div
          className={`bg-black bg-opacity-40 p-5 border-2 border-white rounded overflow-hidden transition-max-height ${
            isExpanded ? "max-h-full" : "max-h-60"
          }`}
        >
          <div className="flex justify-between mb-3">
            <h1 className="w-full text-2xl m-3">Problem Title</h1>
            <button
              className="mr-2 h-12 w-12 bg-center bg-no-repeat bg-cover hover:scale-125"
              style={{ backgroundImage: `url(${DownArrow})` }}
              onClick={toggleExpansion}
            />
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            suscipit inventore quam ad veniam placeat temporibus esse
            architecto, ratione ipsum sunt expedita doloremque maxime incidunt
            quibusdam nesciunt qui cum vel! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores, assumenda minima? Voluptate
            maiores doloremque et nemo inventore molestiae provident quam?
            Blanditiis ipsam officia perspiciatis nobis repellat deleniti magnam
            delectus debitis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Placeat vero, temporibus corporis impedit cupiditate saepe at
            quidem quae, quo quos commodi. Maiores delectus aliquam excepturi,
            tenetur sint quas voluptatibus nisi! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nihil totam incidunt modi sapiente?
            Modi, recusandae officia doloremque expedita obcaecati reprehenderit
            natus minus quam dolore rem repellendus. Amet voluptatem est nemo?
          </p>
        </div>
      </div>
      {/* {OwenedAssets?<OwenedAssets/>:null} */}

      <div>
        <div>
          <h1 className="w-full mt-3 mb-6 text-2xl">Owned Assets</h1>
        </div>
        <div className="flex justify-between">
          <OwnedAssets assetType="Typefaces" asset="Poppins, Inter" />
          <OwnedAssets assetType="Theme" asset="Minimalism" />
          <OwnedAssets assetType="Color Pallete" asset="Neo-pop" />
          <OwnedAssets assetType="Illustration Style" asset="Isometric" />
        </div>
      </div>

      <div>
        <h1 className="w-full mt-3 mb-6 text-2xl">About</h1>
        <div className="flex w-full">
          <p className="w-3/5 text-sm">
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
            className="max-w-[45rem] ml-40 w-80 h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col bg-black bg-opacity-40 p-5 border-2 border-white rounded">
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

import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function Market() {
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
        <button className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne">
          Checkout
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Category name={"Typefaces"} path={"typeface"} />
        <Category name={"Themes"} path={"theme"} />
        <Category name={"Color Palette"} path={"color_palette"} />
        <Category name={"Illustration Style"} path={"illustration_style"} />
      </div>
    </Layout>
  );
}

function Category({ name, path }) {
  return (
    <div className="w-full flex flex-col justify-between bg-black bg-opacity-40 p-2 border-2 border-white rounded-md font-SpaceGrotesk">
      <div className="w-full flex flex-col gap-3">
        <h1 className="text-lg text-heading font-bold">{name}</h1>
        <p className="text-sm w-1/2 text-content">
          These are the only {name} that can be used in your designs.You may
          purchase multiple {name}.
        </p>
      </div>
      <div className="w-full flex justify-between mt-4">
        <div className="text-green-500">Selected: Gilroy</div>
        <Link to={`/dashboard/market/${path}`}>
          <button className="bg-red-600 hover:bg-red-700 px-5 py-1 text-sm rounded-sm font-DelaGothicOne">
            Choose
          </button>
        </Link>
      </div>
    </div>
  );
}

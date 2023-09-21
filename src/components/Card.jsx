import hexcoin from "../assets/hexcoin.svg";
/* eslint-disable react/prop-types */
export default function Card({ name, price, url }) {
  return (
    <div className="flex flex-col min-w-[16rem] bg-[#411623] border-2 border-white/10 p-4 rounded-lg">
      <img src={url} className="w-full h-auto mb-4 self-center" />
      <h2 className="text-lg mt-4 font-DelaGothicOne text-heading">{name}</h2>
      <p className="text-sm my-4 font-SpaceGrotesk text-content">
        These are the only {name} that can be used in your designs.You may
        purchase multiple {name}.
      </p>
      <button className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-md mt-4 font-DelaGothicOne">
        {price} <img src={hexcoin} className="inline w-[1 5%] h-[90%]" />
      </button>
    </div>
  );
}

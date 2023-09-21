export default function Card({ name }) {
  return (
    <div className="flex flex-col min-w-[16rem] bg-[#411623] border-2 border-white p-4 rounded-lg">
      <img className="w-[80%] h-[7rem] mb-4 self-center" />
      <h2 className="text-lg mt-4 font-DelaGothicOne text-heading">Poppins</h2>
      <p className="text-sm my-4 font-SpaceGrotesk text-content">
        These are the only {name} that can be used in your designs.You may
        purchase multiple {name}.
      </p>
      <button className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm mt-4 font-DelaGothicOne">
        Content Here
      </button>
    </div>
  );
}

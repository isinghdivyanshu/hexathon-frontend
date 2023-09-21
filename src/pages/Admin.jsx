import background from "../assets/defaultbg.svg";

export default function Admin() {
  return (
    <div
      className="w-screen h-auto p-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full h-full bg-[#250A19B2] rounded-lg p-8">
        <h1 className="font-DelaGothicOne text-heading text-2xl">
          Team Check in
        </h1>
        <div className="my-5 font-SpaceGrotesk">
          <label
            className="block text-content text-sm font-semibold mb-2"
            htmlFor="membername"
          >
            Team Member&apos;s names
          </label>
          <input
            className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;"
            type="text"
            id="membername"
            placeholder=""
            required
          />
        </div>
        <div className="mb-5 font-SpaceGrotesk">
          <label
            className="block text-content text-sm font-semibold mb-2"
            htmlFor="teamname"
          >
            Team Name
          </label>
          <input
            className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;
              "
            type="text"
            id="teamname"
            placeholder=""
            required
          />
        </div>
        <div className="mb-5 font-SpaceGrotesk">
          <label
            className="block text-content text-sm font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;"
            type="text"
            id="username"
            placeholder=""
            required
          />
        </div>
        <div className="mb-5 font-SpaceGrotesk">
          <label
            className="block text-content text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;
              "
            type="text"
            id="password"
            placeholder=""
            required
          />
        </div>
        <div className="flex w-full justify-center mt-10">
          <button
            type="submit"
            className=" bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

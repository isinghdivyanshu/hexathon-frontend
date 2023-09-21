import Layout from "../components/Layout";

export default function Submission() {
  return (
    <Layout title={"Submissions"}>
      <h1 className="font-DelaGothicOne text-heading text-xl my-4">
        You&apos;re almost there!
      </h1>
      <div className="my-10 font-SpaceGrotesk">
        <label
          className="block text-content text-sm font-semibold mb-2"
          htmlFor="documentation"
        >
          Documentation
        </label>
        <input
          className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;"
          type="url"
          id="documentation"
          placeholder="Documentation link here"
          required
        />
      </div>
      <div className="my-4 font-SpaceGrotesk">
        <label
          className="block text-content text-sm font-semibold mb-2"
          htmlFor="figma"
        >
          Figma Link/Presentation Link
        </label>
        <input
          className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;
              "
          type="url"
          id="figma"
          placeholder="Figma link here"
          required
        />
      </div>
      <div className="flex w-full justify-end my-10">
        <button
          type="submit"
          className=" bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne"
        >
          Submit
        </button>
      </div>
    </Layout>
  );
}

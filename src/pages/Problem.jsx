import Layout from "../components/Layout";

export default function Problem() {
  return (
    <Layout title={"Problem Statement"}>
      <h1 className="w-full mt-3 mb-6 text-xl font-DelaGothicOne text-heading">
        Generate your problem statement
      </h1>
      <div className="flex flex-col bg-black bg-opacity-40 p-5 border-2 border-white rounded font-SpaceGrotesk">
        <h1 className="text-xl mb-6 text-heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="mb-10 text-sm text-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis
          quasi vel eum alias, nam voluptatibus necessitatibus omnis error
          corrupti enim iste consectetur nostrum in officia quidem repudiandae
          doloribus a! Reiciendis assumenda explicabo tenetur eius ut odit
          magnam dignissimos animi fugiat. Nesciunt quia veniam, eius rerum nam
          vel neque inventore! Optio mollitia iusto distinctio non voluptate
          illo, iste neque amet? Nostrum commodi, eum eos corrupti molestias
          exercitationem corporis magnam minus odio quidem ea beatae labore amet
          nesciunt enim neque, consequuntur iusto incidunt excepturi omnis quasi
          iste, voluptates delectus? Hic, inventore.
        </div>
        <div className="text-xs mb-4 text-content font-semibold">
          Click on new button to get new problem Statement. You will get 3
          chances only
        </div>
        <button className="self-start bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm mb-6 font-DelaGothicOne">
          Generate New
        </button>
      </div>
      <div className="width-full text-right my-4 ">
        <span className="mx-6 text-sm text-info font-SpaceGrotesk font-semibold">
          Happy with your problem statement?
        </span>
        <button className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne">
          Confirm Statement
        </button>
      </div>
    </Layout>
  );
}

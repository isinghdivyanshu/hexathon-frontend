/* eslint-disable react/prop-types */
import Layout from "../components/Layout";

export default function Teaminfo() {

  function Member({ name, profile, leader }) {
    return (
      <div className="flex flex-row p-4">
        <img
          src={profile}
          alt="Profile"
          className="w-16 h-16 rounded-full ml-8 mr-16"
        />
        <div className="flex flex-col">
          <h1 className="text-xl">{name}</h1>
          <p className="text-sm">{leader ? "Teamleader" : ""}</p>

        </div>
      </div>
    )
  }

  return (
    <Layout title="Team Info">
      <div className="flex flex-row justify-between">
        <h1 className="w-max mt-3 mb-6 text-2xl">
          Manage Team
        </h1>
        <button className="bg-transparent border-2 border-[#F04E29] hover:bg-red-700 px-5 py-1 text-xl font-bold rounded-sm text-[#F04E29] max-h-12 w-52 mt-2">
          Delete Team
        </button>
      </div>

      <div>
        <h1 className="w-max mt-3 mb-3 text-2xl">Team Name</h1>
        <p className=" text-xs">
          Team name cannot be changed once created.
        </p>
        <div className="flex flex-row justify-between">
          <input className="w-5/6 mx-3 py-3 my-6 pl-8 bg-[#411623] text-[#EAD3C1] rounded-md" type="text" placeholder="Alpha Design" />
          <button className=" w-40 bg-red-600 hover:bg-red-700 mx-10 my-6 py-1 text-xl rounded-md">
            Save
          </button>
        </div>
        <h1 className="w-max mb-6 text-2xl">Team Members</h1>
        <div className="flex flex-col p-6 mt-8  justify-around h-68">
          <Member name="Member 1" profile="" leader={true} />
          <Member name="Member 2" profile="" leader={false} />
          <Member name="Member 3" profile="" leader={false} />
        </div>
      </div>

    </Layout>
  )

}
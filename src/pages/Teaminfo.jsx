/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import axios from '../axios';
import { toast } from 'react-toastify';

export default function Teaminfo() {

  const [teamName, setTeamName] = useState("Loading...")
  const [members, setMembers] = useState(["Loading...",])

  const getTeam = async () => {
    try {
      const res = await axios.get("/api/v1/teams/frontend-team", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      console.log(res)
      setTeamName(res?.data?.name)
      setMembers(res?.data?.members)
    } catch (error) {
      setTeamName("Oops.")
      setMembers(["Err..."])
      toast.error(error?.response?.data?.detail)
    }
  }

  useEffect(()=>{
    getTeam()
  }, [])


  function Member({ name }) {
    return (
      <div className="flex flex-row">
        {/* <img
          src={profile}
          alt="Profile"
          className="w-16 h-16 rounded-full ml-8 mr-16"
        /> */}
        <div className="flex flex-col">
          <h1 className="text-xl">{name}</h1>
          {/* <p className="text-sm">{leader ? "Teamleader" : ""}</p> */}

        </div>
      </div>
    )
  }

  return (
    <Layout title="Team Info">
      <div className="flex flex-row w-full justify-between">
        <h1 className="w-max mt-3 mb-6 text-2xl">
          Manage Team
        </h1>
        {/* <button className="bg-transparent border-2 border-[#F04E29] hover:bg-red-700 px-5 py-1 text-xl font-bold rounded-sm text-[#F04E29] max-h-12 w-52 mt-2">
          Delete Team
        </button> */}
      </div>

      <div>
        <h1 className="w-max mt-3 mb-3 text-2xl">Team Name</h1>
        <p className=" text-xs">
          Team name cannot be changed once created.
        </p>
        <div className="flex flex-row justify-between">
          <h1 className='text-xl'>{teamName}</h1>
          {/* <input className="w-5/6 mx-3 py-3 my-6 pl-8 bg-[#411623] text-[#EAD3C1] rounded-md" type="text" placeholder="Alpha Design" /> */}
          {/* <button className=" w-40 bg-red-600 hover:bg-red-700 mx-10 my-6 py-1 text-xl rounded-md">
            Save
          </button> */}
        </div>
        <h1 className="w-max mb-6 text-2xl mt-10">Team Members</h1>
        <div className="flex flex-col">
          {members.map((member, index) => {
            return (
              <Member name={member} key={`member${index}`} profile="" />
            )
          })}
        </div>
      </div>

    </Layout>
  )

}

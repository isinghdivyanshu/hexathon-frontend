import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from '../axios'
import { toast } from 'react-toastify';

export default function Problem() {

  const [psTitle, setPSTitle] = useState("")
  const [psDescription, setPSDescription] = useState("")
  const [chances, setChances] = useState()

  const getPS = async () => {
    try {
      const res = await axios.get("/api/v1/problemStatements/team", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setPSDescription(res?.data?.description)
      setPSTitle(res?.data?.name)
      setChances(res?.data?.generations_left)
      console.log(res.data)
    } catch (error) {
      toast.error(error?.response?.data?.detail)
    }
  }

  useEffect(() => {
    getPS()
  }, [])


  const GeneratePS = async () => {
      try {
        const res = await axios.post("/api/v1/problemStatements/team",{}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
        setPSDescription(res?.data?.description)
        setPSTitle(res?.data?.name)
        setChances(res?.data?.generations_left)
        console.log(res.data)
      } catch (error) {
        if (error?.response) {
          toast.error(error?.response?.data?.detail)
        } else {
          toast.error(error?.message)
        }
        
      }
    }
  
  const confirmPS = async () => {
    try {
      const res = await axios.put("/api/v1/problemStatements/confirm",{}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      })
      setPSDescription(res?.data?.description)
      setPSTitle(res?.data?.name)
      setChances(res?.data?.generations_left)
      console.log(res.data)
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail)
      } else {
        toast.error(error?.message)
      }
      
    }
  }

  return (
    <Layout title={"Problem Statement"}>
      <h1 className="w-full mt-3 mb-6 text-xl font-DelaGothicOne text-heading">
        Generate your problem statement
      </h1>
      <div className="flex flex-col bg-[#752E324D] p-5 border-2 border-white/10 rounded font-SpaceGrotesk ">
        <h1 className={`text-xl mb-6 text-heading ${(psTitle==='' && psDescription==='') ? 'hidden':'block'}`}>
          {psTitle}
        </h1>
        <div className={`mb-10 text-sm text-content ${(psTitle==='' && psDescription==='') ? 'hidden':'block'}`}>
          {psDescription}
        </div>
        <div className={`text-xs mb-4 text-content font-semibold `}>
          Click on new button to get new problem Statement. You have {chances} chances left
        </div>
        <button className={`self-start bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm mb-6 font-DelaGothicOne ${(chances===0)?'disable bg-red-900 hover:bg-red-900':''}`} onClick={GeneratePS}>
          Generate New
        </button>
      </div>
      <div className={`width-full text-right my-4 ${(psTitle==='' && psDescription==='')||(chances===0) ? 'hidden':'block'}`}>
        <span className="mx-6 text-sm text-info font-SpaceGrotesk font-semibold">
          Happy with your problem statement?
        </span>
        <button onClick={confirmPS} className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne">
          Confirm Statement
        </button>
      </div>
    </Layout>
  );
}

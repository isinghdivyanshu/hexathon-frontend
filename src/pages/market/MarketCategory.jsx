/* eslint-disable react/prop-types */
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { toast } from 'react-toastify';

export default function MarketCategory() {
  const {id} = useParams()
  const [catName, setCatName] = useState("")
  const [catItems, setCatItems] = useState([])

  const getItems = async () => {
    try {
        const res = await axios.get("/api/v1/items?category="+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (res.data.length) {
            setCatName(res.data[0].category_name)
            setCatItems(res.data)
        }
    } catch (error) {
        toast.error(error?.response?.data?.detail)
    }
  }

  useEffect(() => {
    getItems()
  }, [])
  return (
    <Layout title={"Marketplace"}>
      <h1 className="text-xl my-6 font-DelaGothicOne text-heading">{catName}</h1>
      <div className="flex gap-8 pb-6 overflow-x-scroll scrollbar-w-2 scrollbar-track-red scrollbar-thumb-red-dark">
        {catItems?.map((item, i) => {
            return (
                <Card incart={item.in_cart} price={item.price} id={item.id} url={item.photo_url} name={item.name} key={`item${i}`} />
            )
        })}
      </div>
    </Layout>
  );
}

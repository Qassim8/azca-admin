import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      const data = await response.data;

      if (response.status === 200) {
        setEvents(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const getNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/news");
      const data = await response.data;

      if (response.status === 200) {
        setNews(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);


  return (
    <section className="container mx-auto">
      <div className="flex gap-5">
        <div className=" mt-2 p-10 rounded-md bg-red-300/50">
          <h1 className=" text-5xl text-indigo-900">Welcome Again Admin!</h1>
        </div>
      </div>
      <div className="grid col-2 md:grid-cols-3 gap-8 mt-5 p-8 bg-slate-100">
        <div className="p-5 flex flex-col gap-3 rounded-md bg-white shadow-lg">
          <h2 className="text-[50px] font-semibold">{ events?.length }</h2>
          <p className="text-indigo-500 font-semibold">Events</p>
        </div>
        <div className="p-5 flex flex-col gap-3 rounded-md bg-white shadow-lg">
          <h2 className="text-[50px] font-semibold">{ news?.length }</h2>
          <p className="text-indigo-500 font-semibold">News</p>
        </div>
        <div className="p-5 flex flex-col gap-3 rounded-md bg-white shadow-lg">
          <h2 className="text-[50px] font-semibold">12</h2>
          <p className="text-indigo-500 font-semibold">Members</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import Table from "../components/Table.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);

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

  const deleteNews = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/news/${id}`
      );
      if (response.status === 200) {
        setNews(news.filter((item) => item._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      name: "#",
      selector: (row) => (
        <div className="h-[50px] w-[50px]">
          <img
            src={`http://localhost:5000/${row.image}`}
            alt={row._id}
            loading="lazy"
            className="max-w-full "
          />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Publish",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Descreption",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button className="py-[5px] px-4 text-white bg-red-500 rounded-md" onClick={() => deleteNews(row._id)}>
          delete
        </button>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <Table title="News Table" data={news} columns={columns} />
      <Link
        className="mt-5 py-2 px-6 text-white bg-indigo-500 rounded-md"
        to="/dashboard/addnews"
      >
        Add news
      </Link>
    </div>
  );
}

export default News;

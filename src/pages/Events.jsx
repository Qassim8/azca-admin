import React, { useEffect, useState } from 'react'
import Table from '../components/Table.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Events() {

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

      const deleteEvent = async (id) => {
        try {
          const response = await axios.delete(
            `http://localhost:5000/api/events/${id}`
          );
          if (response.status === 200) {
            setEvents(events.filter((item) => item._id !== id));
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
          <button className="py-[5px] px-4 text-white bg-red-500 rounded-md" onClick={() => deleteEvent(row._id)}>
            delete
          </button>
        ),
      },
    ];

  return (
    <div className="container mx-auto">
      <Table title="Events Table" data={events} columns={columns} />
      <Link
        className="mt-5 py-2 px-6 text-white bg-indigo-500 rounded-md"
        to="/dashboard/addevent"
      >
        Add event
      </Link>
    </div>
  );
}

export default Events
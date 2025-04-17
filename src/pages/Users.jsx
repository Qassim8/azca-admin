import React, { useEffect, useState } from 'react'
import Table from '../components/Table.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {

  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('userToken');

        const getNews = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5000/api/users/admins",
              { headers: { Authorization: `Bearer ${token}` } }
            );
            const data = await response.data;

            if (response.status === 200) {
              setUsers(data);
            }
          } catch (err) {
            console.log(err);
          }
        };

        useEffect(() => {
          getNews();
        }, []);

        const deleteUser = async (id) => {
          try {
            const response = await axios.delete(
              `http://localhost:5000/api/users/admins/${id}`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            if (response.status === 200) {
              setUsers(users.filter((item) => item._id !== id));
            }
          } catch (err) {
            console.log(err);
          }
        };

      const columns = [
        {
          name: "Username",
          selector: (row) => row.username,
          sortable: true,
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
        },
        {
          name: "Action",
          cell: (row) => (
            <button className="py-[5px] px-4 text-white bg-red-500 rounded-md" onClick={() => deleteUser(row._id)
            }>
              delete
            </button>
          ),
        },
      ];

  return (
    <div className="container mx-auto">
      <Table title="Users Table" data={users} columns={columns} />
      <Link
        className="mt-5 py-2 px-6 text-white bg-indigo-500 rounded-md"
        to="/dashboard/adduser"
      >
        Add user
      </Link>
    </div>
  );
}

export default Users
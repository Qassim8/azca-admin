import React, { useState } from 'react'
import AddForm from '../components/AddForm.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEvent() {
      const [title, setTitle] = useState("");
      const [desc, setDesc] = useState("");
      const [date, setDate] = useState("");
      const [image, setImage] = useState(null);
      const nav = useNavigate();

      const sendValues = async (e) => {
        e.preventDefault();

        if (!image) {
          alert("Please select an image.");
          return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", desc);
        formData.append("date", date);
        formData.append("image", image);

        try {
          const response = await axios.post(
            "http://localhost:5000/api/events",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (response.status === 201) {
            nav("/dashboard/events");
          }
        } catch (error) {
          console.error("Upload failed:", error);
        }
      };
  
  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mt-5">Add New Event</h1>
        <AddForm
          head="Event"
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          image={image}
          setImage={setImage}
          desc={desc}
          setDesc={setDesc}
          handleSubmit={sendValues}
        />
      </div>
    </section>
  );
}

export default AddEvent
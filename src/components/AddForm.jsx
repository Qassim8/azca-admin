import React from "react";

function AddForm({
  head,
  title,
  setTitle,
  desc,
  setDesc,
  date,
  setDate,
  image,
  setImage,
  handleSubmit,
}) {


  return (
    <form className="flex flex-col gap-8 mt-8" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold pb-1">
          {head} Title:
        </label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 md:w-1/2 rounded-sm border border-slate-300 outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="font-semibold pb-1">
          {head} Description:
        </label>
        <textarea
          name="description"
          id="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="p-2 md:w-1/2 h-[150px] rounded-sm border border-slate-300 resize-none outline-none"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="date" className="font-semibold pb-1">
          {head} Date:
        </label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 md:w-1/2 rounded-sm border border-slate-300 outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold pb-1">
          {head} Image:
        </label>
        <label>
          <div className="mb-5 w-1/2 h-11 rounded-sm border border-gray-300 justify-between items-center inline-flex">
            <h2 className="text-gray-900/20 text-sm font-normal leading-snug pl-4">
              No file chosen
            </h2>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="flex w-28 h-11 px-2 flex-col bg-indigo-500 rounded-r-sm shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
              Choose File
            </div>
          </div>
        </label>
      </div>
      <button
        type="submit"
        className="py-2 px-5 md:w-1/2 text-white bg-indigo-500 rounded-sm cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default AddForm;

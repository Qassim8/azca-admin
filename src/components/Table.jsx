import React from 'react'
import DataTable from 'react-data-table-component'

function Table({ title, columns, data }) {

  const customStyles = {
    tableWrapper: {
      style: {
        border: "2px solid #e5e5f0",
        borderRadius: "0.375rem", // مثل Tailwind rounded-md
        overflow: "hidden",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f3f4f6", // Tailwind gray-100
        color: "#111827", // Tailwind gray-900
        fontWeight: "600",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
      },
    },
    rows: {
      style: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontSize: "0.875rem", // text-sm
        color: "#374151", // Tailwind gray-700
      },
    },
  };

  return (
    <div className="max-w-full my-10 ">
      <DataTable
        title={title}
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </div>
  );
}

export default Table
import React, { useState, useEffect } from "react";
import { getData, createData, updateData, deleteData} from "../api/webinarAPI";
import FormWebinar from "../component/formWebinar";

export default function Webinar() {
  const [action, setAction] = useState("tambah");
  const [data, setData] = useState([]);
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleCreateOrUpdate = async (formData) => {
    if (action === "create") {
      await createData(formData);
    } else if (action === "update") {
      await updateData(selectedWebinar.id, formData);
    }

    // Refresh data
    const response = await getData();
    setData(response.data);
    setAction("create");
    setSelectedWebinar(null);
  };

  const handleUpdateClick = (webinar) => {
    setAction("update");
    setSelectedWebinar(webinar);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus webinar ini?"
    );
    if (confirmed) {
      await deleteData(id);
      const response = await getData();
      setData(response.data);
    }
  };
  return (
    <div className="w-screen h-full bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex justify-start px-8 py-4 w-full mb-8">
        <FormWebinar
          onSubmit={handleCreateOrUpdate}
          defaultValues={action === "update" ? selectedWebinar : null}
          setAction={setAction}
        />
      </div>
      <h3 className="text-gray-500 text-[24pt] font-semibold mb-4">
        List Webinar
      </h3>
      <div className="">
        <table className="table text-black rounded-t-sm">
          <thead className="bg-gray-200 rounded-t-sm">
            <tr className="border-b-2 border-gray-400">
              <th className="p-3">No</th>
              <th className="p-3">Judul Webinar</th>
              <th className="p-3">Tanggal Webinar</th>
              <th className="p-3">Detail</th>
              <th className="p-3">Link Webinar</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 &&
              data.map((webinar, index) => {
                const convDate = new Date(webinar.date);
                const formattedDate = convDate.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                });
                return (
                  <tr className="border-b-2 border-gray-300" key={webinar.id}>
                    <th>{index + 1}</th>
                    <td className="p-3">{webinar.title}</td>
                    <td className="p-3">{formattedDate}</td>
                    <td className="p-3">{webinar.detail}</td>
                    <td className="p-3">{webinar.link}</td>
                    <td className="p-3">
                      <button
                        className="bg-blue-500 text-white mx-2"
                        onClick={() => handleUpdateClick(webinar)}
                      >
                        Ubah
                      </button>
                      <button
                        className="bg-red-500 text-white"
                        onClick={() => handleDelete(webinar.id)}
                      >Hapus</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

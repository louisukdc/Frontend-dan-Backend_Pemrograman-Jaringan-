import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createData } from "../api/registerAPI";

const RegisterForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqData = {
        "webinar_id" : id,
        "date_register" : formData.date,
        "name" : formData.name,
        "email" : formData.email
    }
    const data  = await createData(reqData)
    console.log(data)
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Form Pendaftaran
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-black font-bold">Nama</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input border-2 p-3 w-full text-gray-800 bg-white mt-4"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-black font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input border-2 p-3 w-full text-gray-800 bg-white mt-4"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-black font-bold">
                Tanggal Registrasi
              </span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input border-2 bg-white p-3 w-full text-gray-800 mt-4"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

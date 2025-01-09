import React, { useState, useEffect } from "react";

export default function FormWebinar({ onSubmit, defaultValues, setAction }) {
  const [formValues, setFormValues] = useState({
    title: "",
    date: new Date().toISOString().slice(0, 10),
    link: "",
    detail: "",
  });

  useEffect(() => {
    if (defaultValues) {
      setFormValues({
        ...defaultValues,
        date: defaultValues.date
          ? new Date(defaultValues.date).toISOString().slice(0, 10)
          : "",
      });
    }
  }, [defaultValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    resetForm();
  };

  const resetForm = () => {
    setFormValues({ title: "", date: "", detail: "", link: "" });
    setAction("create"); // Fungsi setAction di sini digunakan untuk mengatur ulang state
  };

  return (
    <div className="w-full p-2 mt-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="label">
            <span className="label-text text-black font-bold">
              Judul Webinar
            </span>
          </label>
          <input
            type="text"
            name="title"
            className="input border-2 p-2 w-full text-gray-800 bg-white mt-4"
            placeholder="Masukan Judul Webinar"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label className="label">
            <span className="label-text text-black font-bold">
              Tanggal Webinar
            </span>
          </label>
          <input
            type="date"
            name="date"
            className="input border-2 p-2 w-full text-gray-800 bg-white mt-4"
            value={formValues.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="label">
            <span className="label-text text-black font-bold">
              Link Webinar
            </span>
          </label>
          <input
            type="text"
            name="link"
            className="input border-2 p-2 w-full text-gray-800 bg-white mt-4"
            placeholder="Masukkan Link Webinar"
            value={formValues.link}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="label">
            <span className="label-text text-black font-bold">
              Detail Webinar
            </span>
          </label>
          <textarea
            name="detail"
            className="input border-2 p-2 w-full text-gray-800 bg-white mt-4"
            placeholder="Masukkan Detail Webinar"
            value={formValues.detail}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-[200px] mt-4 capitalize"
        >
          {defaultValues ? "Ubah" : "Tambah"}
        </button>
      </form>
    </div>
  );
}

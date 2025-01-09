import React from "react";
import { useNavigate } from "react-router-dom";

const WebinarCard = ({id, title, detail, date }) => {
  const convDate = new Date(date);
  const formattedDate = convDate.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const navigate = useNavigate()
  return (
    <div className="w-[450px] m-4 bg-white rounded-lg shadow-md">
      <div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="w-full rounded-t-lg"
          />
        </figure>
        <div className="p-4 flex flex-col items-start">
          <h2 className="text-lg font-bold text-black">{title}</h2>
          <p className="text-sm text-gray-700 mt-2">{formattedDate}</p>
          <p className="text-gray-800 mt-2">{detail}</p>
          <div className="mt-4 text-right">
            <button className="btn btn-primary" onClick={() => navigate(`/register/${id}`)}>
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;

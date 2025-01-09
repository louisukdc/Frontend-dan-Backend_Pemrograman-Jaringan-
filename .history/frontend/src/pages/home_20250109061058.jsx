import React from "react";
import WebinarCard from "../component/webinarCard";
import { getData } from "../api/webinarAPI";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [data, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setDatas(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="bg-gray-100 flex flex-col justify-center w-screen h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Webinar</h1>
      <div className="grid grid-cols-3 gap-3 justify-center">
        {data.length != 0 &&
          data.map((webinar) => (
            <WebinarCard
              key={webinar.id}
              id={webinar.id}
              title={webinar.title}
              detail={webinar.detail}
              date={webinar.date}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

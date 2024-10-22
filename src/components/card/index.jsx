import React, { useState } from "react";
import Selector from "../list/Selector";
import AmouthPicker from "./AmouthPicker";

const Card = ({ item }) => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="bg-black/20 border border-white/50 rounded-3xl pr-5 py-8  lg:py-12 flex items-center">
      <div className="">
        <img
          className="size-[150px] object-contain drop-shadow-2xl"
          src={item.image}
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 ">
        <h2 className="text-2xl font-medium">{item.name}</h2>
        <p className="">Sipariş Tipi:</p>

        <Selector
          setSelectedType={setSelectedType}
          selectedType={selectedType}
        />
        <div className="flex justify-between">
          <p className="text-lg">₺ {item.price} / top</p>
          <button
            onClick={() => setSelectedType(null)}
            className={`border py-1 px-3 rounded-md  hover:bg-white/30 transition 
            ${!selectedType && "invisible"}`}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

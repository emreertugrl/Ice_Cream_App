import React from "react";

const AmountPicker = ({ amouth }) => {
  return (
    <div className={`flex border rounded-md `}>
      <button
        disabled={amouth === 0}
        className="px-3 py-1 border-r hover:bg-white/30 transition"
        onClick={() => {}}
      >
        -
      </button>
      <span className="w-8 text-center py-1">{amouth}</span>
      <button
        disabled={amouth === 0}
        className="px-3 py-1 border-l hover:bg-white/30 transition"
        onClick={() => {}}
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;

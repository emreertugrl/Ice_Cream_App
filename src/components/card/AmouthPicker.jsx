import React from "react";

const AmouthPicker = ({ amouth, setAmouth, selectedType }) => {
  return (
    <div
      className={`flex border rounded-md ${
        !selectedType && "bg-white/30 blur-[0.7px]"
      }`}
    >
      <button
        disabled={amouth === 0 || !selectedType}
        className="px-3 py-1 border-r hover:bg-white/30 transition"
        onClick={() => setAmouth(amouth - 1)}
      >
        -
      </button>
      <span className="w-8 text-center py-1">{amouth}</span>
      <button
        disabled={amouth === 0 || !selectedType}
        className="px-3 py-1 border-l hover:bg-white/30 transition"
        onClick={() => setAmouth(amouth + 1)}
      >
        +
      </button>
    </div>
  );
};

export default AmouthPicker;

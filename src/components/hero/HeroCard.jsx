import React from "react";

const HeroCard = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="bg-white rounded-2xl text-black p-[30px_25px_40px_30px]">
          <div className="flex gap-5">
            <img src="/profile.png" />
            <div>
              <h3 className="text-[24px] font-semibold">Uzi Nexus</h3>
              <div className="flex gap-1">
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star2.svg" />
              </div>
            </div>
          </div>
          <p className="mt-4 lg:max-w-[276px] text-[18px]">
            Indulge in frozen bliss with out irresistible ice cream delights!
          </p>
        </div>
        <img src="/dots.svg" />
      </div>
      <div className="mt-10 lg:mt-20">
        <h3 className="mb-4 fs-5 font-medium">Kategori Seçiniz:</h3>
        <div className="flex gap-10">
          <Button icon={"/icon-3.svg"} />
          <Button icon={"/icon-2.svg"} />
          <Button icon={"/icon-1.svg"} />
          <Button icon={"/icon-4.svg"} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ icon }) => {
  return (
    <button className="border rounded-2xl p-3 border-white/50 bg-white/15 hover:bg-white/40">
      <img src={icon} />
    </button>
  );
};

export default HeroCard;

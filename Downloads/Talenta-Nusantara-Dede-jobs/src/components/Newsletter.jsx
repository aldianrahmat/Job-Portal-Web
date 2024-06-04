import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-blod mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Kirim saya email untuk pekerjaan
        </h3>
        <p className="text-primary/75 text-basemb-4">
          Dapatkan informasi terbaru dari perusahaan favorit kamu.
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nama@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Langganan"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-20">
        <h3 className="text-lg font-blod mb-2 flex items-center gap-2">
          <FaRocket />
          Dapat pemberitahuan Cepat
        </h3>
        <p className="text-primary/75 text-basemb-4">
          Upload CV terbaik kamu dan biarkan perusahaan menghubungi kamu
          
        </p>

        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Kirim CV"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data);
  };

  const option = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "React", label: "React" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Node", label: "Node" },
    { value: "Redux", label: "Redux" },
    { value: "CSS", label: "CSS" },
  ];
  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1 row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Judul Pekerjaan</label>
              <input
                type="text"
                placeholder="Ex: Web Developper" 
                {...register("jobTittle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Nama Perusahaan</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2 row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Gaji Terendah</label>
              <input
                type="text"
                placeholder="Rp 5.000.000,00"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Gaji Maksimal</label>
              <input
                type="text"
                placeholder="Rp 7.500.000,00"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3 row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Jenis Gaji</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="Mr">Pilih Jenis Gaji</option>
                <option value="Hourly">Per Jam</option>
                <option value="Monthly">Bulanan</option>
                <option value="Yearly">Tahunan</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Lokasi Pekerjaan</label>
              <input
                type="text"
                placeholder="Ex: Jakarta Selatan"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4 row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Tanggal Posting Pekerjaan
              </label>
              <input
                type="Date"
                placeholder="Ex: 2024-06-12"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Sistem Kerja</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Pilih Sistem Kerja</option>
                <option value="Work Remotely">WFO</option>
                <option value="Work Remotely">Hybrid</option>
                <option value="Work Remotely">WFH</option>
              </select>
            </div>
          </div>

          {/* 5 row*/}
          <div>
            <label className="block mb-2 text-lg">
              Keterampilan Yang Diperlukan
            </label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={option}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6 row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Logo Perusahaan</label>
              <input
                type="url"
                placeholder="Paste your company logi ULR:https//wetshare.com/img"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Tipe Pekerjaan</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Pilih Tipe Pekerjaan</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Magang</option>
              </select>
            </div>
          </div>

          {/* 7 row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Deskripsi Pekerjaan</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              defaultValue={""}
              placeholder="Ex: Bertanggung jawab untuk menciptakan antarmuka pengguna (User Interface, UI) yang efektif dan pengalaman pengguna (User Experience, UX) yang memuaskan dalam suatu produk digital, seperti aplikasi atau situs web."
              {...register("description")}
            />
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">E-mail</label>
            <input
              type="email"
              placeholder="Masukkan E-mail Perusahaan"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;

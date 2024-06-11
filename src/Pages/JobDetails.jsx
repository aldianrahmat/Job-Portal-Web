import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobsImage from "../../public/images/jobs.png";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  console.log(job);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => {
        const job = data.find((job) => job.id === parseInt(id));
        setJob(job);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleApplyNow = () => {
    setShowModal(true);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-white w-full pl-24 pr-24">
          <div className="bg-gray-100 w-full flex justify-center">
            <div className="p-10">
              <p
                className="text-3xl font-semibold"
                style={{ color: "#3ABEF9" }}
              >
                Tentang Pekerjaan
              </p>
              <div className="text-sm flex justify-center">{job.job_type}</div>
            </div>
          </div>

          <div className="pt-10">
            <p className="font-semibold text-lg" style={{ color: "#3ABEF9" }}>
              Tentang Pekerjaan
            </p>
            <p className="text-sm">{job.companyName}</p>
            <div className="flex items-center pb-5">
              <img
                className="pt-5 mr-3"
                style={{ width: "20px", height: "auto" }}
                src={JobsImage}
                alt="job"
              />
              <p className="pt-6 text-sm font-semibold">{job.jobTitle}</p>
            </div>
            <button
              onClick={handleApplyNow}
              style={{
                color: "white",
                backgroundColor: "#1D24CA",
                width: 300,
                height: 30,
              }}
            >
              Melamar Sekarang
            </button>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="w-full pt-10 pb-10 pr-6">
                <p className="text-sm font-semibold">Deskripsi Pekerjaan</p>
                {job.description}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="pt-5">
                <p className="text-sm font-semibold">Kualifikasi</p>
                {job.experienceLevel}
              </div>

              <div className="pt-5">
                <p className="text-sm font-semibold">Perkiraan Gaji</p>
                Rp{job.minPrice}.000.000,00 - Rp{job.maxPrice}.000.000,00
              </div>

              <div className="pt-5">
                <p className="text-sm font-semibold">Lokasi</p>
                {job.jobLocation}
              </div>

              <div className="pt-5">
                <p className="text-sm font-semibold">Tipe Pekerjaan</p>
                {job.employmentType}
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white rounded-lg p-8 flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white border-4 border-green-500 mb-4">
                <svg
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-semibold mb-4">
                Application Submitted Successfully
              </h1>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#3652AD",
                  width: 50,
                }}
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;

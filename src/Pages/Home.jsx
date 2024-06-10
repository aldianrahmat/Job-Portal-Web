import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Jobs from "./Jobs";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [employment, setEmployment] = useState("");

  // Mengambil data pekerjaan saat komponen dipasang
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        // Tangani kesalahan dengan baik, misalnya tampilkan pesan error kepada pengguna
      });
  }, []);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    if (event.target.name === "location") {
      setLocation(event.target.value.toLowerCase());
    } else if (event.target.name === "salary") {
      setSalary(Number(event.target.value));
    } else if (event.target.name === "employment") {
      setEmployment(event.target.value.toLowerCase());
    }
  };

  // Menangani perubahan input judul pekerjaan
  const handleInputChange = (event) => {
    setQuery(event.target.value.toLowerCase()); // Pastikan pencarian tidak case-sensitive
  };

  // Menangani perubahan lokasi
  const handleLocationChange = (event) => {
    setLocation(event.target.value.toLowerCase()); // Pastikan pencarian tidak case-sensitive
  };

  // Memperbarui pekerjaan yang difilter setiap kali ada perubahan dependensi
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.jobTitle.toLowerCase().includes(query);
      const matchesLocation = job.jobLocation.toLowerCase().includes(location);
      const matchesSalary = Number(job.maxPrice) >= salary;
      const matchesEmployment = job.employmentType
        .toLowerCase()
        .includes(employment);
      return (
        matchesTitle && matchesLocation && matchesSalary && matchesEmployment
      );
    });
    setFilteredJobs(filtered);
  }, [jobs, query, location, salary, employment]);

  return (
    <div>
      <Banner
        query={query}
        handleInputChange={handleInputChange}
        location={location}
        handleLocationChange={handleLocationChange}
      />

      {/* Konten utama */}
      <div className="bg-[#FAFAFA] grid grid-cols-12 gap-4 px-32 py-4">
        {/* Sisi kiri */}
        <div className="bg-white p-4 rounded col-span-2">
          <Sidebar handleChange={handleChange} />
        </div>

        {/* Kartu pekerjaan */}
        <div className="col-span-8 bg-white p-4 rounded-sm">
          <Jobs result={filteredJobs} />{" "}
          {/* Kirim filteredJobs ke komponen Jobs */}
        </div>

        {/* Sisi kanan */}
        <div className="bg-white p-4 rounded col-span-2">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;

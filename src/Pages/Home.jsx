import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Jobs from './Jobs'; // Assuming Jobs component is updated to receive 'result' prop

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); // State for filtered jobs

  // Fetch job data on component mount
  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        // Handle error gracefully, e.g., display an error message to the user
      });
  }, []);

  // Handle input change
  const [query, setQuery] = useState('');
  const handleInputChange = (event) => {
    setQuery(event.target.value.toLowerCase()); // Ensure case-insensitive search
  };

  // Combined filtering logic (improved readability and maintainability)
  const filterJobs = (jobsToFilter, selectedCategory, query) => {
    let filteredJobs = jobsToFilter;

    // Filter by query (case-insensitive)
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query)
      );
    }

    // Filter by category (if selected)
    if (selectedCategory) {
      filteredJobs = filteredJobs.filter((job) => {
        // Use appropriate comparison based on data types
        if (typeof selectedCategory === 'string') {
          // String-based categories (e.g., jobLocation, salaryType)
          return job[selectedCategory].toLowerCase() === selectedCategory.toLowerCase();
        } else if (typeof selectedCategory === 'number') {
          // Numeric-based categories (e.g., maxPrice)
          return parseInt(job.maxPrice) <= selectedCategory;
        } else {
          // Handle other data types as needed
          console.warn('Unsupported category filter data type:', typeof selectedCategory);
          return true; // Avoid accidental filtering out jobs
        }
      });
    }

    return filteredJobs;
  };

  // Update filtered jobs whenever dependencies change
  useEffect(() => {
    const updatedFilteredJobs = filterJobs(jobs, selectedCategory, query);
    setFilteredJobs(updatedFilteredJobs);
  }, [jobs, selectedCategory, query]);

  // Radio or button-based filtering (flexible selection method)
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main content */}
      <div className="bg-[#FAFAFA] flex">
        {/* Left side */}
        <div className="bg-white p-4 rounded m-10">Left</div>

        {/* Jobs cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          <Jobs result={filteredJobs} /> {/* Pass filteredJobs to Jobs component */}
        </div>

        {/* Right side */}
        <div className="bg-white p-4 rounded m-10">Right</div>
      </div>
    </div>
  );
};

export default Home;

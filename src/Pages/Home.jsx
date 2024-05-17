import { useState } from "react";
import Banner from "../components/Banner";
import Contents from "../components/Contents";

export const Home = () => {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <Contents />
    </div>
  );
};

export default Home;

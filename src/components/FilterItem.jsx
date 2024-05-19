import CheckItem from "./CheckItem";

const FilterItem = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Filters</h1>
      <div>
        <h2 className="font-semibold">Lokasi Pekerjaan</h2>
        <CheckItem title="Jakarta Pusat" />
        <CheckItem title="Jakarta Selatan" />
        <CheckItem title="Jakarta Barat" />
        <CheckItem title="Jakarta Timur" />
      </div>
      <div>
        <h2 className="font-semibold">Gaji</h2>
        <CheckItem title="Semua" />
        <CheckItem title="< Rp4.000.000,00" />
        <CheckItem title="< Rp8.000.000,00" />
        <CheckItem title="< Rp10.000.000,00" />
        <CheckItem title="< Rp15.000.000,00" />
      </div>
      <div>
        <h2 className="font-semibold">Tipe Pekerjaan</h2>
        <CheckItem title="Magang" />
        <CheckItem title="Part-time" />
        <CheckItem title="Full-time" />
      </div>
    </div>
  );
};

export default FilterItem;

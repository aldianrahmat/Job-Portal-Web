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
        <CheckItem title="Di bawah Rp 4jt/Bln" />
        <CheckItem title="Rp 4jt - Rp 8jt/Bln" />
        <CheckItem title="Rp 8jt - Rp 10jt/Bln" />
        <CheckItem title="Rp 10jt - Rp 15jt/Bln" />
        <CheckItem title="Di atas Rp 15jt/Bln" />
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

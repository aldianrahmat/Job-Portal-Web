import CheckItem from "./CheckItem";

const FilterItem = () => {
  return (
    <div className="w-2/12">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Filters</h1>
        <div>
          <h2 className="font-semibold">Lokasi Pekerjaan</h2>
          <CheckItem title="Jakarta Pusat" />
          <CheckItem title="Jakarta Selatan" />
          <CheckItem title="Jakarta Barat" />
          <CheckItem title="Jakarta Timur" />
        </div>
        <div>
          <h2 className="font-semibold">Sistem Kerja</h2>
          <CheckItem title="WFO" />
          <CheckItem title="Hybrid" />
          <CheckItem title="WFH" />
        </div>
        <div>
          <h2 className="font-semibold">Tipe Pekerjaan</h2>
          <CheckItem title="Magang" />
          <CheckItem title="Part-time" />
          <CheckItem title="Full-time" />
        </div>
      </div>
    </div>
  );
};

export default FilterItem;

import {
  ArrowsPointingOutIcon,
  CalendarDaysIcon,
  CogIcon,
  CurrencyBangladeshiIcon,
  MagnifyingGlassIcon,
  MapIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToletList() {
  const [tolets, setTolets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://tolet-backend-7e9u.onrender.com/tolets")
      .then((res) => res.json())
      .then((data) => setTolets(data))
      .catch((error) => console.error("Error fetching to-lets:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredTolets = tolets.filter(
    (tolet) =>
      tolet.title.toLowerCase().includes(search.toLowerCase()) ||
      tolet.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white mb-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-900">
          Available To-Lets
        </h2>

        <div className="min-w-0 flex-1 h-10 my-8 md:px-8 lg:px-0 xl:col-span-6">
          <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Search by title or location"
                  type="search"
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-12 sm:gap-x-6 xl:gap-x-8">
          {filteredTolets.map((tolet) => (
            <div
              key={tolet._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={tolet.image_url1}
                    alt="House image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tolet.title}
                  </h3>
                  <p className="text-sm text-gray-500">Available</p>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <p className="flex items-center text-sm text-gray-700">
                      <MapIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.location}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <UserGroupIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.suitableFor}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <TvIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.bedrooms}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <CogIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.bathrooms}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <ArrowsPointingOutIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.area} sqft
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <CalendarDaysIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.availableFrom}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-end  p-4">
                  <p className="relative -bottom-10 text-2xl font-bold flex justify-center items-center text-gray-800">
                    <CurrencyBangladeshiIcon className="h-12 w-8 mt-1" />
                    {tolet.price}
                  </p>
                </div>
              </div>
              <div className="p-4 my-4">
                <Link
                  to={`/tolets/${tolet._id}`}
                  className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

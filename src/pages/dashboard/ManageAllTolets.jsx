/* eslint-disable react/jsx-key */
import { Button } from "@headlessui/react";
import {
  ArrowsPointingOutIcon,
  CalendarDaysIcon,
  CogIcon,
  MapIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ManageAllTolets() {
  const [tolets, setTolets] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchTolets();
  }, []);

  const fetchTolets = async () => {
    try {
      const response = await fetch(
        "https://tolet-backend-7e9u.onrender.com/tolets"
      );
      const data = await response.json();
      setTolets(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        await fetch(`https://tolet-backend-7e9u.onrender.com/tolets/${_id}`, {
          method: "DELETE",
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        fetchTolets();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="bg-white mb-8">
      {showToast && (
        <div className="toast toast-end">
          <div className="alert text-white bg-red-600 font-bold ">
            <span>Item deleted successfully.</span>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-900">
          Manage Tolets
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {tolets.map((tolet) => (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={tolet.image_url1}
                    alt="House image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4 min-h-56">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tolet.title}
                  </h3>
                  <p className="text-sm text-gray-500">Elegant Colors</p>
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
                      {tolet.bedrooms} Beds
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <CogIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.bathrooms} Baths
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
                      {tolet.time}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-end  p-4">
                  <p className="relative -bottom-4 text-2xl font-bold text-gray-800">
                    {tolet.price} <span className="text-lg">৳</span>
                  </p>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center items-center">
                <Link
                  to={`/dashboard/edit-tolet/${tolet._id}`}
                  className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  EDIT
                </Link>
                <Button
                  onClick={() => handleDelete(tolet._id)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageAllTolets;

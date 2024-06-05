import {
  ArrowsPointingOutIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  ShieldCheckIcon,
  TruckIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function AddCard() {
  const [showToast, setShowToast] = useState(false);

  const handleAddTolet = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const location = form.location.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const availableFrom = form.availableFrom.value;
    const area = form.area.value;
    const balcony = form.balcony.value;
    const parking = form.parking.value;
    const floor = form.floor.value;
    const security = form.security.value;
    const summary = form.summary.value;

    if (
      title &&
      brand &&
      price &&
      description &&
      image_url &&
      location &&
      bedrooms &&
      bathrooms &&
      availableFrom &&
      area &&
      balcony &&
      parking &&
      floor &&
      security &&
      summary
    ) {
      const tolet = {
        title,
        brand,
        price,
        description,
        image_url,
        location,
        bedrooms,
        bathrooms,
        availableFrom,
        area,
        balcony,
        parking,
        floor,
        security,
        summary,
      };
      console.log(tolet);

      const confirmAdd = window.confirm(
        "Are you sure you want to add this tolet?"
      );

      if (confirmAdd) {
        try {
          const response = await fetch(
            `https://tolet-backend-7e9u.onrender.com/tolets`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(tolet),
            }
          );

          if (response.ok) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
            form.reset(); // Reset the form after successful submission
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <div className="bg-white shadow-2xl my-2 mx-4 rounded-lg overflow-hidden">
      {/* Toast notification */}
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Tolet added successfully.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleAddTolet} className="p-6 space-y-4">
        <div className="flex items-center text-gray-600">
          <MapIcon className="h-6 w-6 mr-2" />
          <input
            type="text"
            name="location"
            id="location"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Location"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            <input
              type="text"
              name="suitableFor"
              id="suitableFor"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Suitable for"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <TvIcon className="h-6 w-6 mr-2" />
            <input
              type="number"
              name="bedrooms"
              id="bedrooms"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Bedrooms"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <CogIcon className="h-6 w-6 mr-2" />
            <input
              type="number"
              name="bathrooms"
              id="bathrooms"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Bathrooms"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <CalendarDaysIcon className="h-6 w-6 mr-2" />
            <input
              type="text"
              name="availableFrom"
              id="availableFrom"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Available From"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <ArrowsPointingOutIcon className="h-6 w-6 mr-2" />
            <input
              type="number"
              name="area"
              id="area"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Area (sqft)"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <HomeIcon className="h-6 w-6 mr-2" />
            <input
              type="text"
              name="balcony"
              id="balcony"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Balcony"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <TruckIcon className="h-6 w-6 mr-2" />
            <input
              type="text"
              name="parking"
              id="parking"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Parking"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <BuildingOffice2Icon className="h-6 w-6 mr-2" />
            <input
              type="text"
              name="floor"
              id="floor"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Floor"
              required
            />
          </div>

          <div className="flex items-center text-sm text-gray-600 col-span-2">
            <ShieldCheckIcon className="h-6 w-6 mr-2" />
            <input
              type="text"
              name="security"
              id="security"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Security"
              required
            />
          </div>
        </div>

        <div className="flex items-start text-gray-600">
          <textarea
            name="summary"
            id="summary"
            rows="4"
            className="block w-full border-1 border-gray-300 p-2  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Summary"
            required
          ></textarea>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            ADD TOLET
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCard;

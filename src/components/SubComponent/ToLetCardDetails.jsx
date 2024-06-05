import {
  ArrowsPointingOutIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CogIcon,
  CurrencyBangladeshiIcon,
  HomeIcon,
  MapIcon,
  ShieldCheckIcon,
  TruckIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function ToletDetails() {
  const tolet = useLoaderData();
  const {
    title,
    price,
    suitableFor,
    image_url1,
    image_url2,
    image_url3,
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
  } = tolet;
  const images = [image_url1, image_url2, image_url3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className=" shadow-2xl bg-white md:flex justify-center items-center my-2 mx-4 rounded-lg overflow-hidden">
      <div className="relative w-full">
        <img
          src={images[currentImageIndex]}
          alt="Property"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={previousImage}
            className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
          <p className="text-md text-gray-500">Available</p>
        </div>

        <div className="flex items-center text-gray-600">
          <MapIcon className="h-6 w-6 mr-2" />
          <p>Location: {location}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            <p>{suitableFor}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <TvIcon className="h-6 w-6 mr-2" />
            <p>Beds: {bedrooms}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CogIcon className="h-6 w-6 mr-2" />
            <p>Baths: {bathrooms}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CalendarDaysIcon className="h-6 w-6 mr-2" />
            <p>Available From: {availableFrom}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <ArrowsPointingOutIcon className="h-6 w-6 mr-2" />
            <p>Area: {area} sqft</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <HomeIcon className="h-6 w-6 mr-2" />
            <p>Balcony: {balcony}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <TruckIcon className="h-6 w-6 mr-2" />
            <p>Parking: {parking}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BuildingOffice2Icon className="h-6 w-6 mr-2" />
            <p>Floor: {floor}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600 col-span-2">
            <ShieldCheckIcon className="h-6 w-6 mr-2" />
            <p>Security: {security}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Summary:</h3>
          <p className="text-gray-600">{summary}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold flex justify-center items-center text-teal-600">
            <span>
              <CurrencyBangladeshiIcon className="h-12 w-8 mt-1" />
            </span>
            {price}
          </p>
          <a
            href="tel:555-555-5555"
            className="bg-teal-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition duration-300"
          >
            Contact for More Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ToletDetails;

function Features() {
  return (
    <div className="features mx-auto max-w-7xl p-6">
      <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-16">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Advanced Search Options
          </h2>
          <p className="text-gray-600">
            Utilize advanced search and filtering to locate the perfect property
            by price, location, number of bedrooms, and additional amenities.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            User Profiles
          </h2>
          <p className="text-gray-600">
            Users can create profiles to manage their listings, save favorites,
            and receive personalized property alerts.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Secure Property Listing Management
          </h2>
          <p className="text-gray-600">
            Owners can add, update, or remove property listings with ease,
            maintaining full control over their advertisements.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Image Uploads
          </h2>
          <p className="text-gray-600">
            Add multiple high-quality images for each listing to give potential
            tenants a comprehensive view of your property.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Authentication and Security
          </h2>
          <p className="text-gray-600">
            Enhanced security features, including secure login and role-based
            access control for different user types.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Comprehensive Property Details
          </h2>
          <p className="text-gray-600">
            Each listing includes detailed descriptions and specifications such
            as area, number of bedrooms, available amenities, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;

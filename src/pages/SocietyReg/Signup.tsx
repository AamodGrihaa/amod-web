import React from "react";

const SocietyRegistration = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Register Your Society
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <form className="p-8">
            {/* Society/Apartment Name */}
            <div className="mb-6">
              <label
                htmlFor="societyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Name
              </label>
              <input
                type="text"
                id="societyName"
                name="societyName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society/Apartment Name"
                required
              />
            </div>

            {/* Society/Apartment Location */}
            <div className="mb-6">
              <label
                htmlFor="societyLocation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Location
              </label>
              <input
                type="text"
                id="societyLocation"
                name="societyLocation"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society/Apartment Location"
                required
              />
            </div>

            {/* Society/Apartment Contact No */}
            <div className="mb-6">
              <label
                htmlFor="societyContact"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Contact No
              </label>
              <input
                type="tel"
                id="societyContact"
                name="societyContact"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society/Apartment Contact No"
                required
              />
            </div>

            {/* Society/Apartment Email */}
            <div className="mb-6">
              <label
                htmlFor="societyEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Email
              </label>
              <input
                type="email"
                id="societyEmail"
                name="societyEmail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society/Apartment Email"
                required
              />
            </div>

            {/* Society/Apartment Secretary Name */}
            <div className="mb-6">
              <label
                htmlFor="secretaryName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Secretary Name
              </label>
              <input
                type="text"
                id="secretaryName"
                name="secretaryName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Secretary Name"
                required
              />
            </div>

            {/* Society/Apartment Secretary Contact No */}
            <div className="mb-6">
              <label
                htmlFor="secretaryContact"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Secretary Contact No
              </label>
              <input
                type="tel"
                id="secretaryContact"
                name="secretaryContact"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Secretary Contact No"
                required
              />
            </div>

            {/* Society/Apartment Secretary Email */}
            <div className="mb-6">
              <label
                htmlFor="secretaryEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society/Apartment Secretary Email
              </label>
              <input
                type="email"
                id="secretaryEmail"
                name="secretaryEmail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Secretary Email"
                required
              />
            </div>

            {/* Select a Date for Document Verification Meeting */}
            <div className="mb-6">
              <label
                htmlFor="verificationDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select a Date for Document Verification Meeting
              </label>
              <input
                type="date"
                id="verificationDate"
                name="verificationDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Register Society
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SocietyRegistration;
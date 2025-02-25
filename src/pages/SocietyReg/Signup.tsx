import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const SocietyRegistration = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0')",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Register Your Society
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <form className="p-8">
            {/* Society Name */}
            <div className="mb-6">
              <label
                htmlFor="societyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Name
              </label>
              <input
                type="text"
                id="societyName"
                name="societyName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society Name"
                required
              />
            </div>

            {/* Society Location */}
            <div className="mb-6">
              <label
                htmlFor="societyLocation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Location
              </label>
              <input
                type="text"
                id="societyLocation"
                name="societyLocation"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society Location"
                required
              />
            </div>

            {/* Society Contact No */}
            <div className="mb-6">
              <label
                htmlFor="societyContact"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Contact No
              </label>
              <input
                type="tel"
                id="societyContact"
                name="societyContact"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society Contact No"
                required
              />
            </div>

            {/* Society Email */}
            <div className="mb-6">
              <label
                htmlFor="societyEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Email
              </label>
              <input
                type="email"
                id="societyEmail"
                name="societyEmail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter Society Email"
                required
              />
            </div>

            {/* Society Secretary Name */}
            <div className="mb-6">
              <label
                htmlFor="secretaryName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Secretary Name
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

            {/* Society Secretary Contact No */}
            <div className="mb-6">
              <label
                htmlFor="secretaryContact"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Secretary Contact No
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

            {/* Society Secretary Email */}
            <div className="mb-6">
              <label
                htmlFor="secretaryEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Society Secretary Email
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

            {/* Already have an account? Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SocietyRegistration;
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CampaignForm from "../components/CampaignForm";
import UpdateCampaign from "../components/UpdateCampaign";

const Campaigns = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackClick = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="relative">
        {/* Back Arrow */}
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Campaign Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Create Campaign
            </h2>
            <CampaignForm />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Update Campaign
            </h2>
            <UpdateCampaign />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/get-campaigns");
        }}
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get all Campaigns
      </button>
    </div>
  );
};

export default Campaigns;

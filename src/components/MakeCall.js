import React, { useState } from "react";
import axios from "axios";

const MakeCall = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [campaignId, setCampaignId] = useState(""); // Set campaign ID here if needed
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log(name, phoneNumber, campaignId);
      const response = await axios.post(
        "https://www.toingg.com/api/v3/make_call",
        {
          name,
          phoneNumber,
          campID: campaignId, // Pass the campaign ID if required
        }
      );
      console.log("response", response);
      setSuccess("Call initiated successfully!");
      setName("");
      setPhoneNumber("");
      setCampaignId("");
    } catch (err) {
      setError("Failed to initiate call: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Make a Call</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contact Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Campaign ID:</label>
          <input
            type="text"
            value={campaignId}
            onChange={(e) => setCampaignId(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Initiating Call..." : "Initiate Call"}
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
    </div>
  );
};

export default MakeCall;

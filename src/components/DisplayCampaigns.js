import React, { useEffect, useState } from "react";
import { getCampaigns } from "../api";
import { Link } from "react-router-dom";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await getCampaigns();
        console.log("response from displayPage", response);
        setCampaigns(response.data.result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Campaigns</h1>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            {campaign.title} - {campaign.language}
            <Link to={`/update-campaign/${campaign.id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;

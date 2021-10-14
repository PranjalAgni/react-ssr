import React, { useEffect, useState } from 'react';
import Home from '../Home/';
import HomeV2 from '../HomeV2';
import makeAPICall from '../../utils/api';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(false);
  const [featureFlag, setFeatureFlag] = useState(null);

  useEffect(() => {
    const fetchFlag = async () => {
      setLoading(true);
      const response = await makeAPICall({
        endpoint: '/flags',
        method: 'GET',
      });
      setLoading(false);
      console.log('API response: ', response.data);
      setFeatureFlag(response.data.flag);
    };

    fetchFlag();
  }, []);

  if (isLoading) return <p>Loading....</p>;
  else if (featureFlag) return <Home />;
  else return <HomeV2 />;
};

export default Dashboard;

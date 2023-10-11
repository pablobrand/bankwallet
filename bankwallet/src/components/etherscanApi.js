import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getSomething } from '../api/etherscanApiService';

const AccountDetailsEtherscan = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSomething();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
    </View>
  );
};

export default AccountDetailsEtherscan;
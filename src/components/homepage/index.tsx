import React from 'react';
import axios from 'axios';

const Hompage = () => {
  const testApi = async () => {
    const res = await axios.get('https://opentdb.com/api.php?amount=50');
    console.log(res.data);
  };

  return (
    <div>
      <h1>hola desde hompage</h1>
      <button onClick={() => testApi()}>test</button>
    </div>
  );
};

export default Hompage;

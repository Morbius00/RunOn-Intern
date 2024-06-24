"use client"
import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent: React.FC = () => {
  const [money, setMoney] = useState<number>(0);

  const incrementMoney = () => {
    setMoney(prevMoney => prevMoney + 1000);
  };

  const decrementMoney = () => {
    setMoney(prevMoney => prevMoney - 500);
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-black font-bold mb-4">Parent Pocket Money</h1>
      <p className="mb-4 text-2xl text-green-600">Money in Wallet: ${money}</p>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

export default Parent;

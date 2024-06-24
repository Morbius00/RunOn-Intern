import React from 'react';

interface Child1Props {
  incrementMoney: () => void;
}

const Child1: React.FC<Child1Props> = ({ incrementMoney }) => {
  return (
    <div className="mb-4">
      <button 
        onClick={incrementMoney} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment by 1000
      </button>
    </div>
  );
};

export default Child1;

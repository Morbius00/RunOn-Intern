import React from 'react';

interface Child2Props {
  decrementMoney: () => void;
}

const Child2: React.FC<Child2Props> = ({ decrementMoney }) => {
  return (
    <div>
      <button 
        onClick={decrementMoney} 
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Decrement by 500
      </button>
    </div>
  );
};

export default Child2;

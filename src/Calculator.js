import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
    setInput('');
    };
    



  const clear = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Calculator</h1>
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-800 text-white w-full p-2 rounded-lg focus:outline-none"
          placeholder="0"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button
          onClick={() => handleInput('7')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          7
        </button>
        <button
          onClick={() => handleInput('8')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          8
        </button>
        <button
          onClick={() => handleInput('9')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          9
        </button>
        <button
          onClick={() => handleInput('/')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          /
        </button>
        <button
          onClick={() => handleInput('4')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          4
        </button>
        <button
          onClick={() => handleInput('5')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          5
        </button>
        <button
          onClick={() => handleInput('6')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          6
        </button>
        <button
          onClick={() => handleInput('*')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          *
        </button>
        <button
          onClick={() => handleInput('1')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          1
        </button>
        <button
          onClick={() => handleInput('2')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          2
        </button>
        <button
          onClick={() => handleInput('3')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          3
        </button>
        <button
          onClick={() => handleInput('-')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          -
        </button>
        <button
          onClick={() => handleInput('0')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg col-span-2"
        >
          0
        </button>
        <button
          onClick={() => handleInput('.')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          .
        </button>
        <button
          onClick={() => handleInput('+')}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg"
        >
          +
        </button>
        <button
          onClick={calculate}
          className="bg-green-500 hover:bg-green-600 p-4 rounded-lg"
        >
          =
        </button>
        <button
          onClick={clear}
          className="bg-red-500 hover:bg-red-600 p-4 rounded-lg col-span-2"
        >
          Clear
        </button>
      </div>
      <div className="text-center mt-4 text-2xl font-bold">
        Result: {result}
      </div>
    </div>
  );
}

export default Calculator;
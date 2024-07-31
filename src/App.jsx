import { useState } from 'react'
import axios from 'axios';
import './App.css'





function App() {
  





  const [airline, setAirline] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [flightData, setFlightData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setFlightData(null);

    const url = `https://api.flightapi.io/airline/6537facc0175698b26894ef8d67bc`;
    const params = {
      num: flightNumber,
      name: airline,
      date: date.replace(/-/g, '')
    };

    try {
      const response = await axios.get(url, { params });
      setFlightData(response.data);
    } catch (error) {
      setError('Could not fetch flight data. Please check your inputs.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex flex-col items-center p-5">
      <nav className="w-full max-w-4xl flex justify-between items-center bg-white shadow-md p-4 mb-8 rounded-lg">
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold text-gray-800">Flight Status</span>
          <span className="text-sm text-gray-500">by Akash</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </nav>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mb-8">
        <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">Check Flight Status</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap justify-between items-center space-x-4">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-lg font-semibold mb-1" htmlFor="airline">Airline</label>
              <input
                type="text"
                id="airline"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={airline}
                onChange={(e) => setAirline(e.target.value)}
                placeholder="e.g., DL"
                required
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-lg font-semibold mb-1" htmlFor="flightNumber">Flight #</label>
              <input
                type="text"
                id="flightNumber"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                placeholder="e.g., 47"
                required
              />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-lg font-semibold mb-1" htmlFor="date">Select Date</label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-md font-bold hover:bg-pink-600 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {error && <div className="text-red-500">{error}</div>}
      {flightData && (
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Search Result</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-600">Departure</h3>
            <p><strong>Airport:</strong> {flightData[0].departure[0]['Airport:']}</p>
            <p><strong>Scheduled Time:</strong> {flightData[0].departure[0]['Scheduled Time:']}</p>
            <p><strong>Takeoff Time:</strong> {flightData[0].departure[0]['Takeoff Time:']}</p>
            <p><strong>Terminal - Gate:</strong> {flightData[0].departure[0]['Terminal - Gate:']}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-red-600">Arrival</h3>
            <p><strong>Airport:</strong> {flightData[1].arrival[0]['Airport:']}</p>
            <p><strong>Scheduled Time:</strong> {flightData[1].arrival[0]['Scheduled Time:']}</p>
            <p><strong>At Gate Time:</strong> {flightData[1].arrival[0]['At Gate Time:']}</p>
            <p><strong>Terminal - Gate:</strong> {flightData[1].arrival[0]['Terminal - Gate:']}</p>
          </div>
        </div>
      )}
    </div>

    
  )
}

export default App

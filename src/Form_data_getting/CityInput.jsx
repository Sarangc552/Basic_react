import React, { useState } from 'react'

const CityInput = () => {
    const [city, setCity] = useState('');
    const [cities, setCities] = useState([]);
  
    const handleInputChange = (e) => {
      setCity(e.target.value);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (city.trim() && !cities.includes(city.trim())) { // Check if the input is not empty and not a duplicate
          setCities((prevCities) => [...prevCities, city.trim()]); // Add city to the list
          setCity(''); // Clear the input field
        } else if (cities.includes(city.trim())) {
          alert('This city is already in the list.'); // Optional: alert for duplicates
        }

    };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button type="submit">Add City</button>
    </form>
    <ul>
      {cities.map((c, index) => (
        <li key={index}>{c}</li>
      ))}
    </ul>
  </div>
  )
}

export default CityInput
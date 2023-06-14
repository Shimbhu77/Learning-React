import React, { useState } from 'react';

const countries = ['Country 1', 'Country 2', 'Country 3']; // Replace with data from your database
const states = {
  'Country 1': ['State 1', 'State 2', 'State 3'],
  'Country 2': ['State 4', 'State 5', 'State 6'],
  'Country 3': ['State 7', 'State 8', 'State 9']
}; // Replace with data from your database
const cities = {
  'State 1': ['City 1', 'City 2', 'City 3'],
  'State 2': ['City 4', 'City 5', 'City 6'],
  'State 3': ['City 7', 'City 8', 'City 9'],
  // Add more cities for other states
}; // Replace with data from your database

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    function ageCal(today, dob) {
      console.log("inside ageCal function");
      const diffInMs = Math.abs(today - dob);
  
      // Convert milliseconds to years
      const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
      const diffInYears = Math.floor(diffInMs / msPerYear);
  
      return diffInYears;
    }
  
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = `${year}-${month}-${day}`;
  
    const dobDate = new Date(dob); // Convert 'dob' to a Date object
  
    const ageVal = ageCal(today, dobDate); // Pass 'today' and 'dobDate' as parameters
    console.log("ageVal", ageVal);
  
    const details = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      country: country,
      state: state,
      city: city,
      gender: gender,
      dob: dob,
      age: ageVal,
    };
    const url = 'http://localhost:8888/home/users'; // Replace with your API endpoint
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Response:', result);
        alert("record added successfully.")
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
    console.log(details);

    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setState('');
    setCity('');
    setGender('');
    setDob('');
    setAge('');
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          pattern="[A-Za-z]+"
        />
        <small className="form-text text-muted">Must accept alphabets only</small>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          pattern="[A-Za-z]+"
        />
        <small className="form-text text-muted">Must accept alphabets only</small>
      </div>
      <div className="form-group">
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small className="form-text text-muted">Must accept valid email format</small>
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          className="form-control"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
        <small className="form-text text-muted">Must be one of the countries from list stored in the database</small>
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <select
          className="form-control"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Select a state</option>
          {states[country] &&
            states[country].map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
        </select>
        <small className="form-text text-muted">Must be one of the states stored against the selected country</small>
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          className="form-control"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Select a city</option>
          {cities[state] &&
            cities[state].map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
        </select>
        <small className="form-text text-muted">Must be one of the cities stored against the selected state</small>
      </div>
      <div className="form-group">
        <label>Gender</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <small className="form-text text-muted">Must be older than 14 years</small>
      </div>
      {/* <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        //   onClick={diff(dob)}
          readOnly
        />
        <small className="form-text text-muted">(Calculated automatically based on date of birth)</small>
      </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

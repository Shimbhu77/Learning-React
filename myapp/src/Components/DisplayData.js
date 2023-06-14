import React,{useEffect, useState} from 'react'

export default function DisplayData() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8888/home/users')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
      }, []);

    

  return (
    <div>
        {data.map((item, index) => (
        <div key={index}>
            <hr />
          <p>First Name: {item.first_name}</p>
          <p>Last Name: {item.last_name}</p>
          <p>Email: {item.email}</p>
          <p>Country: {item.country}</p>
          <p>State: {item.state}</p>
          <p>City: {item.city}</p>
          <p>Gender: {item.gender}</p>
          <p>Date of Birth: {item.dob}</p>
          <p>Age: {item.age}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

import logo from './logo.svg';
import './App.css';

function App() {
  async function addCustomer() {

    console.log("submitted.");

    let requestBody = {
      login_id: "test@sunbasedata.com",
      password: "Test@123"
    };
    console.log(requestBody);

    const url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Response will be opaque in 'no-cors' mode, so you can't access response data
      // You can still check if the request was successful and show the alert
      console.log(response);
      if (response.ok) {
        console.log(response);
        alert("Login successful");
        const data = await response.json();
        console.log(data);
        console.log(data.access_token);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error('Error:', error);
    }
 }
  return (
    <div className="App">
         <h1>submit api</h1>
         <button onClick={()=>{addCustomer()}}>submit</button>
    </div>
  );
}

export default App;

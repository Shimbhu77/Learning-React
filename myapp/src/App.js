import logo from './logo.svg';
import './App.css';

function App() {
  const data = [  "Tom Cruise",  "Keerthi Suresh",  "Guru Randhawa",  "Pranjal Dahiya" ];
  const movies = [ "Miss India", "Googly", "Harry Potter Series", "Mission Impossible Series"];
  return (
    <div >

      <div className='fav'>
        <h1>My Favourite Stars</h1>
        <ul>
           {data.map((el)=>{
             return <li>{el}</li>
           })}
        </ul>
      </div>


      <div className='fav'>
        <h1>My favourite movies is : </h1>
        <ul>
          {movies.map((el) => {
            return <li>{el}</li>
          }
          )}
        </ul>


      </div>
    </div>
  );
}

export default App;

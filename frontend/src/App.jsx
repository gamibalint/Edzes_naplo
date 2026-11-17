import {useState, useEffect} from 'react';
function App() {
  const [gyakorlatok, setGyakorlat] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/gyakorlat')
      .then(response => response.json())
      .then(data => setGyakorlat(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <h1>Gyakorlatok</h1>
      <ul>
        {gyakorlatok.map(gyakorlat => (
          <li key={gyakorlat.id}>{gyakorlat.nev} - {gyakorlat.leiras}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
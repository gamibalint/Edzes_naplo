import { useState, useEffect } from 'react';

function App() {
  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [gyakorlatok, setGyakorlat] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/gyakorlat')
      .then(response => response.json())
      .then(data => setGyakorlat(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  function torol(id) {
  fetch('http://localhost:8080/gyakorlat/' + id, {
    method: 'DELETE',
  }).then(() => setGyakorlat(gyakorlatok.filter(g => g.id !== id)));
}
  function mentes() {
    fetch('http://localhost:8080/gyakorlat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nev, leiras }),
    })
      .then(valasz => valasz.json())
      .then(uj => setGyakorlat([...gyakorlatok, uj]));
  }
  return (
    <div>
      <h1>Gyakorlatok</h1>
      <input value={nev} onChange={(e) => setNev(e.target.value)} placeholder="Név" />
      <input value={leiras} onChange={(e) => setLeiras(e.target.value)} placeholder="Leírás" />
      <button onClick={mentes}>Mentés</button>
      <ul>
        {gyakorlatok.map(gyakorlat => (
          <li key={gyakorlat.id}>
  {gyakorlat.nev} - {gyakorlat.leiras}
  <button onClick={() => torol(gyakorlat.id)}>Törlés</button>
</li>
        ))}
      </ul>
    </div>
  );

}
export default App;
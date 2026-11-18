import { useState, useEffect } from 'react';

function App() {
  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [gyakorlatok, setGyakorlat] = useState([]);
  const [edzesek, setEdzes] = useState([]);
  const [datum, setDatum] = useState("");
  const [megnevezes, setMegnevezes] = useState("");

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
  useEffect(() => {
    fetch('http://localhost:8080/edzes')
      .then(response => response.json())
      .then(data => setEdzes(data));
  }, []);
  function mentesEdzes() {
    fetch('http://localhost:8080/edzes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ datum, megnevezes }),
    })
      .then(valasz => valasz.json())
      .then(uj => setEdzes([...edzesek, uj]));
  }
  function torolEdzes(id) {
    fetch('http://localhost:8080/edzes/' + id, {
      method: 'DELETE',
    }).then(() => setEdzes(edzesek.filter(e => e.id !== id)));
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
      <h1>Edzések</h1>
      <input type="date" value={datum} onChange={(e) => setDatum(e.target.value)} />
      <input value={megnevezes} onChange={(e) => setMegnevezes(e.target.value)} placeholder="Megnevezés" />
      <button onClick={mentesEdzes}>Mentés</button>
      <ul>
        {edzesek.map(edzes => (
          <li key={edzes.id}>
            {edzes.datum} - {edzes.megnevezes}
            <button onClick={() => torolEdzes(edzes.id)}>Törlés</button>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default App;
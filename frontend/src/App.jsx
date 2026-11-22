import { useState, useEffect } from 'react';

function App() {
  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [gyakorlatok, setGyakorlat] = useState([]);
  const [edzesek, setEdzes] = useState([]);
  const [datum, setDatum] = useState("");
  const [megnevezes, setMegnevezes] = useState("");
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/gyakorlat`)
      .then(response => response.json())
      .then(data => setGyakorlat(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  function torol(id) {
    fetch(`${API}/gyakorlat/${id}`, {
      method: 'DELETE',
    }).then(() => setGyakorlat(gyakorlatok.filter(g => g.id !== id)));
  }
  function mentes() {
    if (nev === "" || leiras === "") {
      alert("Töltse ki az összes mezőt!");
      return;
    }
    fetch(`${API}/gyakorlat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nev, leiras }),
    })
      .then(valasz => valasz.json())
      .then(uj => {
        setGyakorlat([...gyakorlatok, uj]);
        setNev("");
        setLeiras("");
      });
    }
    useEffect(() => {
      fetch(`${API}/edzes`)
        .then(response => response.json())
        .then(data => setEdzes(data));
    }, []);
    function mentesEdzes() {
      if (datum  === "" || megnevezes === "") {
        alert("Töltse ki az összes mezőt!");
        return;
      }
      fetch(`${API}/edzes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ datum, megnevezes }),
      })
        .then(valasz => valasz.json())
      .then(uj => {
        setEdzes([...edzesek, uj]);
        setDatum("");
        setMegnevezes("");
      });
    }
    function torolEdzes(id) {
      fetch(`${API}/edzes/${id}`, {
        method: 'DELETE',
      }).then(() => setEdzes(edzesek.filter(e => e.id !== id)));
    }
    return (
      <div className="container mt-4 text-white">
        <h1 className="text-center mb-4">Edzésnapló</h1>
        <h1 className="text-center mb-4">Gyakorlatok</h1>
        <div className="d-flex gap-2 mb-3">
          <input className="form-control" value={nev} onChange={(e) => setNev(e.target.value)} placeholder="Név" />
          <input className="form-control" value={leiras} onChange={(e) => setLeiras(e.target.value)} placeholder="Leírás" />
          <button className="btn btn-primary" onClick={mentes}>Mentés</button>
        </div>
        <ul className="list-group mb-5">
          {gyakorlatok.map(gyakorlat => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={gyakorlat.id}>
              {gyakorlat.nev} - {gyakorlat.leiras}
              <button className="btn btn-danger btn-sm" onClick={() => torol(gyakorlat.id)}>Törlés</button>
            </li>
          ))}
        </ul>
        <h1 className="text-center mb-4">Edzések</h1>
        <div className="d-flex gap-2 mb-3">
          <input type="date" className="form-control" value={datum} onChange={(e) => setDatum(e.target.value)} />
          <input className="form-control" value={megnevezes} onChange={(e) => setMegnevezes(e.target.value)} placeholder="Megnevezés" />
          <button className="btn btn-primary" onClick={mentesEdzes}>Mentés</button>
        </div>
        <ul className="list-group">
          {edzesek.map(edzes => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={edzes.id}>
              {edzes.datum} - {edzes.megnevezes}
              <button className="btn btn-danger btn-sm" onClick={() => torolEdzes(edzes.id)}>Törlés</button>
            </li>
          ))}
        </ul>
      </div>
    );

  }
  export default App;
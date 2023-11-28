import { useState } from "react";

const Home = () => {
  const [betrag, setBetrag] = useState(null);
  const [result, setResult] = useState(0);
  const betragNachEinzahlen = () => {
    setResult(result + betrag);
    setBetrag("");
  };
  const betragNachAuszahlen = () => {
    if (result >= betrag) {
      setResult(result - betrag);
      setBetrag("");
    } else {
      window.alert("Du kannst nicht mehr abbuchen");
    }
  };
  return (
    <body>
      <section id="title">
        <h1 className="header">Banana Bank</h1>
        <article className="konto">
          <h2>Mein Girokonto</h2>
          <h3 className="saldo">{result} </h3>
          <input
            type="number"
            placeholder="Betrag in €"
            onChange={(event) => setBetrag(Number(event.target.value))}
            className="geldbetrag"
            value={betrag}
          />
          <div>
            <button
              className="einzahlen"
              onClick={() => {
                betragNachEinzahlen();
                // setBetrag(null);
              }}
            >
              Einzahlen
            </button>
            <button className="auszahlen" onClick={betragNachAuszahlen}>
              Auszahlen
            </button>
          </div>
        </article>
      </section>
    </body>
  );
};

export default Home;

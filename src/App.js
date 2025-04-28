import React, { useState } from "react";

// Kiinteistöt-taulukko
const kiinteistot = [
  {
    id: 1,
    myyntihinta: "250 000€",
    kuvaus: "Moderni kaupunkikoti keskustassa",
    polku: "/kuvat/koti1.jpg"
  },
  {
    id: 2,
    myyntihinta: "320 000€",
    kuvaus: "Tilava omakotitalo järven rannalla",
    polku: "/kuvat/koti2.jpg"
  },
  {
    id: 3,
    myyntihinta: "180 000€",
    kuvaus: "Viihtyisä rivitaloasunto",
    polku: "/kuvat/koti3.jpg"
  },
  {
    id: 4,
    myyntihinta: "400 000€",
    kuvaus: "Upea huvila maaseudulla",
    polku: "/kuvat/koti4.jpg"
  },
  {
    id: 5,
    myyntihinta: "210 000€",
    kuvaus: "Kaksio hyvien kulkuyhteyksien varrella",
    polku: "/kuvat/koti5.jpg"
  },
  {
    id: 6,
    myyntihinta: "275 000€",
    kuvaus: "Tyylikäs loft-asunto vanhassa tehtaassa",
    polku: "/kuvat/koti6.jpg"
  }
];

function App() {
  // Otetaan satunnainen kohde aluksi
  const [kohde, uusiKohde] = useState(Math.floor(Math.random() * kiinteistot.length));

  // Funktio joka vaihtaa satunnaisen kohteen
  const vaihdaKohde = () => {
    const uusi = Math.floor(Math.random() * kiinteistot.length);
    uusiKohde(uusi);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Kiinteistöt</h1>

      <img
        src={kiinteistot[kohde].polku}
        alt={kiinteistot[kohde].kuvaus}
        style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "10px" }}
      />

      <h2>{kiinteistot[kohde].kuvaus}</h2>
      <p><strong>Myyntihinta:</strong> {kiinteistot[kohde].myyntihinta}</p>

      <button onClick={vaihdaKohde} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Näytä satunnainen kohde
      </button>
    </div>
  );
}

export default App;

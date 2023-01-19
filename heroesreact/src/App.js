import "./styles.css";
import List from "./List";
import SeriesList from "./SeriesList";
import { useState, useEffect } from "react";

export default function App() {
  const [heroes, setHeroes] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=fc8a583c663a38d67fb5bcef4a50674a&hash=35915bac577ae9c71f2ea0631f1d50de"
    )
      .then((response) => response.json())
      .then((data) => setHeroes(data.data.results));
  }, []);

  // deze useEffect zouden we ook in de list component kunnen doen!

  // je kan ook een check toevoegen voor je component, om die al dan niet in te laden bij het mounten van de applicatie.
  return (
    <div>
      <List heroes={heroes} series={series} setSeries={setSeries} />
    </div>
  );
}

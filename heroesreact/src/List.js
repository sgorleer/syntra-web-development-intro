import Hero from "./Hero";

const List = ({ heroes, series, setSeries }) => {
  return (
    <>
      <h1>Hero List</h1>
      <div className="heroes-container">
        <ul className="heroes-list">
          {heroes.map((hero) => (
            <Hero hero={hero} series={series} setSeries={setSeries} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;

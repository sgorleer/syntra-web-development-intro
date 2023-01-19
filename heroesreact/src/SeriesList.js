import Serie from "./Serie";

const SeriesList = ({ series }) => {
  return (
    <>
      <div className="series-container">
        <ul className="series-list">
          {series.map((serie) => (
            <Serie serie={serie} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SeriesList;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Serie from "./Serie.js";
import SeriesList from "./SeriesList.js";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Hero = ({ hero, series, setSeries }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const heroClicked = () => {
    setSeries(hero.series.items);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{hero.name}</Card.Title>
          <Button
            variant="dark"
            onClick={() => {
              heroClicked();
              handleShow();
            }}
            // dit hierboven is op deze manier omdat we eigenlijk een nieuwe functie definiëren (in-line) om die 2 functies samen uit te voeren.
          >
            Series
          </Button>
        </Card.Body>
      </Card>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{hero.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SeriesList series={series} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Hero;

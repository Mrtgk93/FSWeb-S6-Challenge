// Karakter bileşeniniz buraya gelecek
import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const stil = {
  width: "500px",
};

function Karakter(props) {
  const { data } = props;
  const Skarakter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Skarakter>
      <Accordion style={stil} open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <h3>{data.name}</h3>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul type="none">
              <li>{data.gender}</li>
              <li>{data.height}</li>
              <li>{data.mass}</li>
              <li>{data.birth_year}</li>
              <li>{data.eye_color}</li>
              <li>{data.hair_color}</li>
              <li>{data.skin_color}</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Skarakter>
  );
}
export default Karakter;

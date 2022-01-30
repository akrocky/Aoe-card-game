import React from "react";
import { Card } from "react-bootstrap";
import { useAllInfo } from "../../context/Context";
import classes from "./Details.module.css";

const Datais = () => {
  const { state } = useAllInfo();
  return (
    <Card className={classes.deatails}>
      <Card.Body>
        <Card.Title className={classes.title}>
          {state?.cardDeatails?.realName}
        </Card.Title>
        <Card.Subtitle className={classes.subtitle + " mb-2 text-muted"}>
          {state.cardDeatails?.playerName}
        </Card.Subtitle>
        <Card.Text className={classes.text}>
          {state.cardDeatails?.asset}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Datais;

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAllInfo } from "../../../context/Context";
import classes from "./Player.module.css";

const Player = ({ player: { id, playerName, realName, asset } }) => {
  const [btnText, setBtnText] = useState("See Deatails");
  const { state, dispatch } = useAllInfo();

  const hanldeDetails = () => {
    if (btnText === "See Deatails") {
      dispatch({
        type: "details",
        payload: {
          id,
          playerName,
          realName,
          asset,
        },
      });

      setBtnText("Hide Details");
    } else {
      dispatch({
        type: "removeDetails",
      });

      setBtnText("See Deatails");
    }
  };
  useEffect(() => {
    if (state?.cardDeatails.id != id) {
      setBtnText("See Deatails");
    }
  }, [state?.cardDeatails]);
  return (
    <Card className={classes.card}>
      <Card.Body>
        <Card.Title className={classes.textEllisis}>{realName}</Card.Title>
        <Card.Subtitle className={classes.textEllisis + "  mb-2 text-muted"}>
          {playerName}
        </Card.Subtitle>
        <Card.Text className={classes.textEllisis}>{asset}</Card.Text>
        <button onClick={hanldeDetails} className={classes.btn}>
          {btnText}
        </button>
      </Card.Body>
    </Card>
  );
};

export default Player;

import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Controls from "../../components/Controls/Controls";
import Details from "../../components/Details/Details#";
import Overview from "../../components/Overview/Overview";
import { useAllInfo } from "../../context/Context";
import classes from "./CardGame.module.css";

const CardGame = () => {
  const { state, dispatch } = useAllInfo();
  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/akrocky/player-info-json/main/Player.JSON"
      );
      const result = await res.json();
      dispatch({ type: "fetch", payload: result });
    }
    loadData();
  }, []);

  return (
    <div className={classes.cardGame}>
      {/* AOE Card Game title */}
      <h1 className={classes.cardGameTitle}>AOE Card Game</h1>
      {/* deatails & controls container */}
      <Container className="mt-5">
        <Row>
          {state?.cardDeatails?.realName && (
            <Col lg={8} className={classes.details}>
              <Details />
            </Col>
          )}
          <Col lg={4} className={classes.details}>
            <Controls />
          </Col>
        </Row>
      </Container>
      {/* player overview container */}
      <Container className="mt-5">
        <Overview />
      </Container>
    </div>
  );
};

export default CardGame;

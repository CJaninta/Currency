import React, { ReactElement, useState, useEffect } from "react";
import styles from "../styles/main.module.css";
import Paper from "@material-ui/core/Paper";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import { display_exchange } from "../types/currency_rate";

export default function Display_exchange({
  from,
  to,
}: {
  from: display_exchange;
  to: display_exchange;
}): ReactElement {
  return (
    <Paper
      className={styles.paper}
      elevation={24}
      style={{
        borderRadius: 30,
        backgroundColor:'rgba(255, 99, 71, 0.2)'
      }}
    >
      <div className={[styles.box,styles.box_right].join(' ')}>
        <div className={styles.output}>
          <img
            className={styles.dis_img}
            src={from.flag}
          ></img>
          <h1 className={styles.dis_text}>
            {from.amount} {from.country_code}
          </h1>
        </div>
        <SwapVertIcon
          style={{
            fontSize: "80px",
            color: "rgb(255, 222, 127)",
          }}
        />
        <div className={styles.output}>
          <img
            className={styles.dis_img}
            src={to.flag}
          ></img>
          <h1 className={styles.dis_text}>
            {to.amount} {to.country_code}
          </h1>
        </div>
      </div>
    </Paper>
  );
}

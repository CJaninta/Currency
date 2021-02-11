import React, { ReactElement, useState, useEffect } from "react";
import styles from "../styles/main.module.css";
import HandleExchange from "./handle_exchange";
import { Props } from "../types/currency_rate";
//import TextField from "@material-ui/core/TextField";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import UpdateIcon from "@material-ui/icons/Update";

export default function Main({ data, date }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <h1 className={styles.main_title}>
        <MonetizationOnIcon style={{ fontSize: "70px", marginRight: 15 }} />
        Currency Exchange Rate
      </h1>
      <HandleExchange data={data} date={date} />
      <div className={styles.footer}>
        <span className={styles.in_footer}>
          <UpdateIcon style={{ marginRight: 10 }} /> Last Updated :{" "}
        </span>
        {date}
      </div>
    </div>
  );
}

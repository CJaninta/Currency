import React, { ReactElement, useState, useEffect } from "react";
import styles from "../styles/main.module.css";
import HandleExchange from "./handle_exchange";
import { Props } from "../types/currency_rate";
//import TextField from "@material-ui/core/TextField";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

export default function Main({ data }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <h1 className={styles.main_title}>
        <MonetizationOnIcon style={{ fontSize: "70px", marginRight: 15 }} />
        Currency Exchange Rate
      </h1>
      <HandleExchange data={data} />
    </div>
  );
}

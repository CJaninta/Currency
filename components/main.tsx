import React, { ReactElement } from "react";
import styles from "../styles/main.module.css";
import { StyledTextField } from "./button";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import SwapVertIcon from "@material-ui/icons/SwapVert";

export default function Main(): ReactElement {
  return (
    <div className={styles.container}>
      <h1 className={styles.main_title}>Currency Exchange Rate</h1>
      <Grid>
        <Paper
          className={styles.paper}
          elevation={3}
          style={{
            borderRadius: 30,
            border: "5px inset rgb(255, 111, 108)",
          }}
        >
          <div className={[styles.box, styles.divide].join(" ")}>
            <h1>1 THB</h1>
            <div className={styles.text_box}>Convert from THB to USD</div>
            <h1>1 USD</h1>
          </div>
          <div className={styles.box}>
            <div className={styles.inner_right}>
              <StyledTextField
                type="number"
                label="Amount"
                variant="outlined"
                defaultValue="Success"
                id="input-amount-from"
              />
              <FormControl
                variant="outlined"
                style={{ width: 150, marginLeft: 20 }}
              >
                <InputLabel id="convert-from">From</InputLabel>
                <Select
                  labelId="convert-from"
                  id="convert-from"
                  /*value={age}
              onChange={handleChange}*/
                  label="From"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <SwapVertIcon style={{ fontSize: 50, margin: "2rem" }} />
            <div className={styles.inner_right}>
              <StyledTextField
                type="number"
                label="Amount"
                variant="outlined"
                defaultValue="Success"
                id="input-amount-to"
              />
              <FormControl
                variant="outlined"
                style={{ width: 150, marginLeft: 20 }}
              >
                <InputLabel id="convert-to">To</InputLabel>
                <Select
                  labelId="convert-to"
                  id="convert-to"
                  /*value={age}
              onChange={handleChange}*/
                  label="To"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

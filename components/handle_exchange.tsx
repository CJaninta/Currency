import React, { ReactElement, useState, useEffect } from "react";
import styles from "../styles/main.module.css";
import DisplayExchange from "./display_exchange";

import { StyledTextField } from "./styles";
import { display_exchange, Props, currency_rate } from "../types/currency_rate";

import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import SwapVertIcon from "@material-ui/icons/SwapVert";

export default function Box_exchange({ data }: Props): ReactElement {
  const [amount, setAmount] = useState<number | any>(0);
  const [exchange_from, setExchangeFrom] = useState<currency_rate | any>({});
  const [exchange_to, setExchangeTo] = useState<currency_rate | any>({});
  const [exchange_input, setExchangeInput] = useState<display_exchange | any>(
    {}
  );
  const [exchange_output, setExchangeOutput] = useState<display_exchange | any>(
    {}
  );

  useEffect(() => {
    set_default_input();
    set_default_output();
  }, []);

  const handleText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(event.target.value);
  };

  const set_default_input = (): void => {
    const [{ country_acronym, country_rate, country_flag }]: {
      country_acronym: string;
      country_rate: number;
      country_flag: string;
    }[] = data.filter((val) => val.country_acronym === "USD");
    //console.log(country_acronym,country_rate,country_flag)
    setAmount(country_rate.toFixed(2));
    setExchangeFrom({
      ...exchange_from,
      country_acronym: country_acronym,
      country_rate: country_rate,
      country_flag: country_flag,
    });
    setExchangeInput({
      ...exchange_input,
      country_code: country_acronym,
      amount: country_rate.toFixed(2),
      flag: country_flag,
    });
  };

  const set_default_output = (): void => {
    const [{ country_acronym, country_rate, country_flag }]: {
      country_acronym: string;
      country_rate: number;
      country_flag: string;
    }[] = data.filter((val) => val.country_acronym === "THB");
    //console.log(country_acronym,country_rate,country_flag)
    setExchangeTo({
      ...exchange_to,
      country_acronym: country_acronym,
      country_rate: country_rate,
      country_flag: country_flag,
    });
    setExchangeOutput({
      ...exchange_output,
      country_code: country_acronym,
      amount: country_rate.toFixed(2),
      flag: country_flag,
    });
  };

  const cal_exchange = (): void => {
    const cal =
      (exchange_to.country_rate / exchange_from.country_rate) * amount;
    //console.log(cal.toFixed(2));
    setExchangeInput({
      ...exchange_input,
      country_code: exchange_from.country_acronym,
      amount: amount,
      flag: exchange_from.country_flag,
    });
    setExchangeOutput({
      ...exchange_output,
      country_code: exchange_to.country_acronym,
      amount: cal.toFixed(2),
      flag: exchange_to.country_flag,
    });
  };

  const handleFrom = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [{ country_acronym, country_flag }]: {
      country_acronym: string;
      country_flag: string;
    }[] = data.filter(
      (val) => val.country_rate === parseFloat(event.target.value)
    );
    console.log(country_acronym);
    setExchangeFrom({
      ...exchange_from,
      country_acronym: country_acronym,
      country_rate: parseFloat(event.target.value),
      country_flag: country_flag,
    });
  };

  const handleTo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const [{ country_acronym, country_flag }]: {
      country_acronym: string;
      country_flag: string;
    }[] = data.filter(
      (val) => val.country_rate === parseFloat(event.target.value)
    );
    console.log(country_acronym);
    setExchangeTo({
      ...exchange_to,
      country_acronym: country_acronym,
      country_rate: parseFloat(event.target.value),
      country_flag: country_flag,
    });
  };

  return (
    <div className={styles.main_paper}>
      <Paper
        className={[styles.paper, styles.paper_left].join(" ")}
        elevation={24}
        style={{
          borderRadius: 30,
        }}
      >
        <div className={[styles.box, styles.box_left].join(" ")}>
          <StyledTextField
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleText}
          />
          <FormControl variant="outlined" style={{ marginTop: 20 }}>
            <InputLabel
              style={{ fontSize: 18, fontWeight: "bold" }}
              id="convert-from"
            >
              From
            </InputLabel>
            <Select
              className={styles.select}
              labelId="convert-from"
              defaultValue={exchange_input.country_rate}
              id="convert-from"
              value={exchange_from.country_acronym}
              onChange={handleFrom}
              label="From"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.map((val, index) => {
                return (
                  <MenuItem key={index} value={val.country_rate}>
                    <img
                      style={{ width: 20, height: 15, marginRight: 20 }}
                      src={val.country_flag}
                    ></img>
                    <span style={{ fontSize: 18, fontWeight: "bold" }}>
                      {val.country_acronym}
                    </span>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <SwapVertIcon
            style={{
              fontSize: "40px",
              color: "#8a2387",
            }}
          />
          <FormControl variant="outlined">
            <InputLabel
              style={{ fontSize: 18, fontWeight: "bold" }}
              id="convert-to"
            >
              To
            </InputLabel>
            <Select
              className={styles.select}
              defaultValue={exchange_output.country_acronym}
              labelId="convert-to"
              id="convert-to"
              value={exchange_to.country_acronym}
              onChange={handleTo}
              label="To"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.map((val) => {
                return (
                  <MenuItem key={val.country_acronym} value={val.country_rate}>
                    <img
                      style={{ width: 20, height: 15, marginRight: 20 }}
                      src={val.country_flag}
                    ></img>
                    <span style={{ fontSize: 18, fontWeight: "bold" }}>
                      {val.country_acronym}
                    </span>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            style={{
              background:
                "linear-gradient(to right, #8a2387, #e94057, #f27121)",
              marginTop: 20,
              fontSize: 18,
              fontWeight: "bold",
              borderRadius: 10,
            }}
            variant="contained"
            color="primary"
            onClick={cal_exchange}
          >
            Calculate
          </Button>
        </div>
      </Paper>
      <DisplayExchange from={exchange_input} to={exchange_output} />
    </div>
  );
}

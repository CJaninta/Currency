import Head from "next/head";
import Main from "../components/main";
import axios from "axios";
import { RootObject } from "../types/rate_api";
import { currency_rate, Props } from "../types/currency_rate";

export default function Home({ data }: Props) {
  return (
    <div>
      <Head>
        <title>Currency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://api.exchangeratesapi.io/latest");
  const data: RootObject = res.data;

  let rate: currency_rate[] = [];
  //console.log(currency_rate)
  for (let country_code in data.rates) {
    let flag = await axios.get(
      `https://restcountries.eu/rest/v2/currency/${country_code.toLocaleLowerCase()}`
    );

    rate = [
      ...rate,
      {
        country_acronym: country_code,
        country_rate: data.rates[country_code],
        country_flag:
          country_code.toLocaleLowerCase() === "usd"
            ? "https://flagcdn.com/w640/us.png"
            : flag.data[0].flag,
      },
    ];
  }
  return {
    props: {
      data: rate,
    },
  };
};

export interface currency_rate {
    country_acronym: string
    country_rate: number
    country_flag: string
}

export interface Props {
    data: currency_rate[];
}

export interface display_exchange {
    country_code: string;
    amount: number;
    flag: string;
}
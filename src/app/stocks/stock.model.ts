// export class Stock {
//   symbol: string;
//   longname: string;
//   series?: string;
//   dol?: Date;
//   paidUpValue?: number;
//   marketLot?: number;
//   ISIN?: string;
//   faceValue?: number;
//   cmp?: number;
//   dailyProfit?: boolean;
// }

export class Stock {
  exchange?: string;
  index?: string;
  isYahooFinance?: string;
  longname: string;
  quoteType?: string;
  score?: number;
  shortname?: string;
  symbol: string;
  typeDisp?: string;
  cmp?: number;
  dailyProfit?: boolean;
}

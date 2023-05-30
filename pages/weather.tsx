import React, { FC, useState, useEffect } from 'react'
type Weather = {
  publicTime:string;
  publicTimeFormatted:string;
  publishingOffice:string;
  title: string;
  link: string;
  description:Description;
  forecasts:Forecasts;
  location:Location;
  copyright:Copyright;
}
type Description = {
  publicTime:string;
  publicTimeFormatted:string;
  headlineText:string;
  bodyText:string;
  text:string;
}
type Forecasts = {
  date:string;
  dateLabel:string;
  telop:string;
  detail:string;
  temperature:string;
  chanceOfRain:ChanceOfRain;
  image:ForecastsImage;
}
type ForecastsDetail = {
  weather:string;
  wind:string;
  wave:string;
}
type Temperature = {
  celsius:string;
  fahrenheit:string;
}
type ChanceOfRain = {
  T00_06:string;
  T06_12:string;
  T12_18:string;
  T18_24:string;
}
type ForecastsImage = {
  title: string;
  url: string;
  width:number ;
  height:number ;
}
type Location = {
  area: string;
  prefecture: string;
  district:string;
  city:string;
}
type Copyright = {
  title: string;
  link: string;
  image:string;
  provider:string;
}
// サーバーサイドレンダリングSSR
// サーバー側で実行され、リクエスト時にデータをフェッチ
// export async function getServerSideProps(context) {
//   const res = await fetch('https://weather.tsukumijima.net/api/forecast?city=130010')
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

// 静的生成SSG
// サーバー側で実行され、ビルド時にデータをフェッチ
// export async function getStaticProps() {
//   const res = await fetch('https://weather.tsukumijima.net/api/forecast?city=130010')
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//     revalidate: 1, // Optional: Re-generate the page every 1 second
//   }
// }

const WeatherPage: FC = () => {
  const [weather, setWeather] = useState<Weather>();
  // クライアントサイドレンダリングCSR
  // ブラウザ側で実行され、実行するたびにデータをフェッチする。
  // ユーザー固有データ、リアルタイム性を求める場合に適している。
  useEffect(() => {
    async function fetchData() {
      const endpoint = `https://weather.tsukumijima.net/api/forecast?city=130010`;

      if (!endpoint) {
        throw new Error('WEATHER_API_ENDPOINT is not defined');
      }

      const res = await fetch(endpoint);
      const newData = await res.json();
      setWeather(newData);
    }

    fetchData();
  }, []);
};
export default WeatherPage;

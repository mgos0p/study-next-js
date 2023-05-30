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
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          {weather && weather.publicTimeFormatted}
        </h1>
        <div className="text-lg font-semibold text-slate-500">
          {weather && weather.title}
        </div>
      </div>
      <p className="text-sm text-slate-700 whitespace-pre whitespace-break-spaces">
        {weather && weather.description.bodyText}
      </p>
    </div>
  </div>
  );
};
export default WeatherPage;

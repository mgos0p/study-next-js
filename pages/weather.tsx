import React, { FC, useState } from 'react'
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

const WeatherPage: FC = () => {
  const [weather, setWeather] = useState<Weather>();
};
export default WeatherPage;

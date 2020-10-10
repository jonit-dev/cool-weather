export interface IWeatherData {
  city: string | null;
  condition: string | null;
  conditionDescription: string | null;
  conditionIcon: string | null;
  tempCelsius: number | null;
  forecastData: IWeatherData[];
}

export interface IWeatherForecastItem {
  city: string | null;
  date: Date;
  condition: string | null;
  conditionDescription: string | null;
  conditionIcon: string | null;
  tempCelsius: number | null;
}

export type WeatherCondition =
  | "Rain"
  | "Snow"
  | "Extreme"
  | "Thunderstorm"
  | "Drizzle";

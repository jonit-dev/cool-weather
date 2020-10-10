export interface IWeatherData {
  country: string | null;
  city: string | null;
  condition: string | null;
  conditionDescription: string | null;
  conditionIcon: string | null;
  tempCelsius: number | null;
  forecastData: IWeatherForecastItem[];
}

export interface IWeatherForecastItem {
  city: string | null;
  date: string;
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

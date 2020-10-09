export interface IWeatherData {
  city: string | null;
  condition: string | null;
  conditionIcon: string | null;
  tempCelsius: number | null;
}

export type WeatherCondition =
  | "Rain"
  | "Snow"
  | "Extreme"
  | "Thunderstorm"
  | "Drizzle";

import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

import { IWeatherForecastItem } from '../../../store/types/weather.types';

interface IProps {
  weatherData: IWeatherForecastItem[];
}

export const WeatherForecast: React.FC<IProps> = ({ weatherData }) => {
  return (
    <Container className="ion-padding">
      <h1>5-day Forecast</h1>

      <ResponsiveContainer>
        <AreaChart
          data={weatherData}
          margin={{
            top: 10,
            right: 40,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fill: "#ffff", fontSize: 13 }} />
          <YAxis tick={{ fill: "#ffff", fontSize: 13 }} />

          <Tooltip
            label="tempCelsius"
            contentStyle={{
              backgroundColor: "#5260ff",
              borderRadius: 5,
              borderColor: "#5260ff",
              color: "white",
            }}
            labelStyle={{
              color: "white",
              fontWeight: "bold",
            }}
            itemStyle={{
              color: "white",
            }}
            animationEasing="ease-in-out"
          />
          <Area
            type="monotone"
            dataKey="tempCelsius"
            stroke="#fdc000"
            fill="#fdc000"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  /*DESKTOP ONLY CODE*/
  @media screen and (min-width: 700px) {
    max-width: 700px;
    height: 250px;
  }
`;

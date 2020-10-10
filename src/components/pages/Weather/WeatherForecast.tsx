import React from 'react';
import styled from 'styled-components';

interface IProps {}

export const WeatherForecast: React.FC<IProps> = (props) => {
  return (
    <Container>
      <h1>Weather Forecast</h1>
    </Container>
  );
};

const Container = styled.div``;

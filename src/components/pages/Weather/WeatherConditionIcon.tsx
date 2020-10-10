import React from 'react';
import styled from 'styled-components';

interface IProps {
  conditionIcon: string;
}

export const WeatherConditionIcon: React.FC<IProps> = ({ conditionIcon }) => {
  return (
    <Container>
      <img
        alt="weather condition icon"
        src={`https://openweathermap.org/img/wn/${conditionIcon}@2x.png`}
      />
    </Container>
  );
};

const Container = styled.div`
  flex: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 75px;
  }
`;

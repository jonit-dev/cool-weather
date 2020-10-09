import React from 'react';
import styled from 'styled-components/macro';

interface IProps {}

export const PageBackground: React.FC<IProps> = (props) => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

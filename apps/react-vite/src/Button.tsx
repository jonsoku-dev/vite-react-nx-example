import styled from '@emotion/styled';
import React from 'react';

interface Props {
  /**
   * Color of Button
   */
  color?: string;
}

const Button: React.FC<Props> = (props) => {
  return <ButtonRoot>Button22555777</ButtonRoot>;
};

export default Button;

const ButtonRoot = styled.button`
  background-color: red;
  border: 1px solid blue;
`;

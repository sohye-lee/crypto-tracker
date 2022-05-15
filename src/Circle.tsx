import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface Player {
  name: string;
  age: number;
}

const sayHello = (player: Player) =>
  `Hello, ${player.name}! You are ${player.age} years old.`;

function Circle({ bgColor, borderColor, text = 'default' }: CircleProps) {
  const [value, setValue] = useState<number|string>(0);
  setValue(3);
  setValue("text");
  return (
    <Container bgColor={bgColor} borderColor={borderColor}>
      {text}
    </Container>
  );
}

export default Circle;

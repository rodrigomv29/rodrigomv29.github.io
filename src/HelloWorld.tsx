import * as React from 'react';

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default HelloWorld
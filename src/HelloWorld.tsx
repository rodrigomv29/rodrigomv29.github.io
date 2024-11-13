import * as React from 'react';

interface Props {
  age: string;
}

const HelloWorld: React.FC<Props> = ({ age }) => {
  return <h1>Hello, {age}!</h1>;

};

export default HelloWorld
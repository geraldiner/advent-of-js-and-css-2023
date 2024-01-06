import * as React from 'react';

function HelloWorld({ name }) {
  let displayText = 'Hello, World!';
  if (name) {
    displayText = `Hello, ${name}!`;
  }
  return <h1>{displayText}</h1>;
}

export default HelloWorld;

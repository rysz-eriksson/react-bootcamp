import React from 'react';

const createElemFuncComp = () => {
  return React.createElement(
    "p",
    null,
    "And finally - createElement method wrapped in function"
  )
}

export default createElemFuncComp;
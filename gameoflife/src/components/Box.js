import React from 'react';

const Box = (props) => {
  const selectBox = () => {
    props.selectBox(props.row, props.col);
  };

  return (
    <div id={props.id} onClick={selectBox} className={props.boxClass}></div>
  );
};

export default Box;
import React, { useState } from "react";

export default function Box(props) {

  return (
    <div className="box" onClick={() => props.onClick(props.index)} onKeyDown={() => {}} role="button">
      {props.boardState}
    </div>
  );
}


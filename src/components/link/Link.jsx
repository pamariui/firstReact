import React from "react";

const Link = (props) =>  {
    return (
      <a href={props.link} style={{
        color: props.color ? props.color : "white"
    }} className={props.className}> {props.text} </a>
    )
  }

export default Link;
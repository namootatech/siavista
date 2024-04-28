import React from 'react';

function ButtonLink(props) {
  const { url, text, backgroundColor, textColor } = props;
  const btnStyle = {
    backgroundColor: backgroundColor,
    color:textColor,
    fontWeight: 'bold'
  }
  return (
    <a style={btnStyle} href={url} className="btn text-uppercase">{text}</a>
  );
}

export default ButtonLink;

import React from 'react';

function ButtonLink(props) {
  const { url, text, backgroundColor, textColor, fullWidth, className } = props;
  const btnStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontWeight: 'bold',
    width: fullWidth ? '100%' : 'auto',
  };
  return (
    <a
      style={btnStyle}
      href={url}
      className={`${className} btn rounded-0 shadow-sm text-uppercase`}
    >
      {text}
    </a>
  );
}

export default ButtonLink;

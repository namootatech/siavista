import { repeat } from 'ramda';
import React from 'react';
const DotGrid = () => {
  const tdStyle = {
    width: '30px',
    textAlign: 'left',
    padding: '0',
  };
  return (
    <table>
      <tbody>
        <tr>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
        </tr>
        <tr>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
        </tr>
        <tr>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
        </tr>
        <tr>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
          <td style={tdStyle}>&bull;</td>
        </tr>
      </tbody>
    </table>
  );
};
const DottedBox = ({ grid }) => {
  const boxStyle = {
    color: '#f9921d',
    fontSize: '15px',
  };

  return (
    <div style={boxStyle}>
      {!grid && (
        <>
          <DotGrid />
        </>
      )}
      {grid && (
        <table>
          <tbody>
            {repeat(
              <tr>
                {repeat(
                  <td>
                    <DotGrid />
                  </td>,
                  grid[1]
                ).map((i) => i)}
              </tr>,
              grid[0]
            ).map((i) => i)}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DottedBox;

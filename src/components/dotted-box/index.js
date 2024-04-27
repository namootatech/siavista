import React from 'react';
const DottedBox = () => {
    const boxStyle = {
        color: '#f9921d',
        fontSize: '15px',
    };

    const tdStyle = {
        width: '30px',
        textAlign: 'left',
        padding: '0'
    };

    return (
        <div style={boxStyle}>
            <table>
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
                <tr>
                    <td style={tdStyle}>&bull;</td>
                    <td style={tdStyle}>&bull;</td>
                    <td style={tdStyle}>&bull;</td>
                    <td style={tdStyle}>&bull;</td>
                    <td style={tdStyle}>&bull;</td>
                </tr>
            </table>
        </div>
    );
};

export default DottedBox;

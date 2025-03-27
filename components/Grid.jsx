import React from "react";

export default function Grid({head, body, badgeColumn}) {
    return (
        <table className='min-w-full table-auto'>
          <thead>
            <tr>
                {head.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {body.map((row, index) => {
                return (
                    <tr key={index}>
                        {Object.keys(row).map((col, colIndex) => {
                            if (badgeColumn.hasOwnProperty(col)) {
                                const badgeData = badgeColumn[col][row[col]];
                                return (
                                    <td key={colIndex}>    
                                        <span className={badgeData.class}>
                                            {badgeData.label}
                                        </span>
                                    </td>
                                );
                            }

                            return <td>{row[col]}</td>;
                        })}
                    </tr>
                );
            })}     
          </tbody>
        </table>
    );
}
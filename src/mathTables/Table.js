import React, { useState } from "react";
import CustomHook from "./cusHook";
const Table = () => {

    // styling....
    const TableStyle = {
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px'
    }
    const btnStyle = {
        padding: '5px',
        border: '1px solid white',
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '12px',
        borderRadius: '5px',
        fontWeight: 'bold'
    }
    let TableNo = 10;

    function getTable(e) {
        TableNo = e.target.value;
    }
    function selectTable() {
        // console.log(TableNo);
    }

    const data = CustomHook();

    return (
        <div style={TableStyle}>
            {/* Get table number from input field */}
            <h2>Enter Table Number Which You Want to Generate Table</h2>
            <input
                type='number'
                onChange={getTable}
            />
            <br />
            <br />
            <button
                style={btnStyle}
                onClick={selectTable}
            >Click To Update Table
            </button>
            {/* table counter here... */}
            <h1>Table = {data.num}</h1>

            <button
                style={btnStyle}
                onClick={data.Increament}
            >NEXT
            </button>

        </div>
    )
}


export default Table;

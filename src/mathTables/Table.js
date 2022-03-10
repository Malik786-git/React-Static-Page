import React, { useState } from "react";

const Table = ()=>{
    
    // styling....
    const TableStyle = {
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px'
    }
    const btnStyle = {
        padding:'5px',
        border: '1px solid white',
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '12px',
        borderRadius: '5px',
        fontWeight: 'bold'
    }
     let TableNo = 0;
    function getTable(e) {
       TableNo = e.target.value;
    }
    function selectTable() {
          
    }



    const [num, Increament] = useState(0);

    const handleIncreament = () => { 
         Number(TableNo);
        return Increament(num + TableNo); 
        console.log(TableNo);
    } 

   
    return (
        <div style={TableStyle}>
        {/* Get table number from input field */}
            <h2>Enter Table Number Which You Want to Generate Table</h2>
            <input 
            type='number'
            onChange={getTable} />
            <br/>
            <br/>
            <button style={btnStyle} onClick={selectTable}>Click To Update Table</button> 
            {/* table counter here... */}
                            <h1>Table = {num}</h1>
                            <button style={btnStyle} onClick={handleIncreament} >NEXT</button>
        </div>
    )
}

export default Table;


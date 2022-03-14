import React, {useEffect,useState} from "react";

const Counter = (props)=>{
    const CounterStyle = {
        textAlign: 'center',
        backgroundColor: '#004789',
        color: 'white',
        padding: '20px'
    }
    const btnStyle = {
        padding:'5px',
        border: '2px solid white',
        backgroundColor: '#004789',
        color: 'white',
        fontSize: '18px',
        borderRadius: '5px'
    }
    let x = 0;
    console.log(props.headingText, props.increamentNumber);
    const [num, Increament] = useState(x);
    const handleIncreament = () => Increament(num + props.increamentNumber); 
    useEffect(()=>{
        // console.log('use effect call!', num);
    })
    return (
        <React.Fragment>
              <div style={CounterStyle} className="counter-container">
                            <h1>{props.headingText}: {num}</h1>
                            <button style={btnStyle} onClick={handleIncreament}>{props.buttonText}</button>
              </div>
        </React.Fragment>
    );
}


export default Counter;
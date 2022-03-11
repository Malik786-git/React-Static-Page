import {useState} from "react";

export default function CustomHook() {
    const [num, next ] = useState(0);

    const Increament = ()=>{
        
        // console.log(tableNo)
           next(num + 4)
    }
    return {
        num,
        Increament
    };
}
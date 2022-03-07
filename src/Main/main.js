import React from 'react';
import boyOne from './assets/img/one.jpg';
import boyTwo from './assets/img/two.jpg';
import Card from './card';
import './main.css';
const Main = ()=>{
    return (
     
        <div className='MainConatainer'>
              <Card 
              image={boyOne}
              developer="Blockchain Developer"
              about='Very Motivated and experienced employee, very peaceful deal with the clients.'
               />
              <Card 
              image={boyTwo}
              developer="Frontend Developer"
              about='Very Motivated and experienced employee, very peaceful deal with the clients.'
               />
                <Card 
              image={boyOne}
              developer="Metaverse Developer"
              about='Very Motivated and experienced employee, very peaceful deal with the clients.'
               />
              <Card 
              image={boyTwo}
              developer="Could Native Developer"
              about='Very Motivated and experienced employee, very peaceful deal with the clients.'
               />
        </div>
  
    );
}

export default Main;


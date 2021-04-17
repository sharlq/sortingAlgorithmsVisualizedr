import React from 'react'
import {useState,useEffect} from 'react'
import sort from "./sorting"
const Sort = () => {
const [array,setArray] = useState([])
const PRIMARY_COLOR = "rgb(0, 132, 255)";
const SECONDARY_COLOR ="rgb(221, 224, 0)";
const PIVOT_COLOR = "green";
const SORTING_SPEED = 5;
const NUMBER_OF_ARRAY_BARS = 50;
function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

const resetArray =()=> {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(randomIntFromInterval(5, 730));
    }
    setArray(arr);
  }
useEffect(()=>resetArray(),[])


const animate = ()=>{

let	animations = sort(array,0,array.length ,[])
let i = 0;
let pivotTemp ;
	const myloop= ()=>{
		
		const arrBar =document.getElementsByClassName("block")
		const isColor =i%4==1||i%4==2;
		const isSwitch=i%4==3;
		const isPivot =i%4===0;
		if(isPivot){
			
			
			// let pivotIdx = animations[i];
			// let pivot = arrBar[pivotIdx].style;
			// if(animations[i]>animations.length-1){pivotIdx=animations.length-1}
			// console.log(animations[i],i)
			// setTimeout(()=>{
			// console.log(pivotIdx)
			// pivot.backgroundColor = PIVOT_COLOR;  
			// pivotTemp = pivot;
			// },i*SORTING_SPEED)
			
			
		}else if(isColor){

			let [barOneIdx,barTwoIdx] = animations[i];
			if(barOneIdx>animations.length-1){barOneIdx=animations.length-1}
			const barOneStyle = arrBar[barOneIdx].style;
			if(barTwoIdx>animations.length-1){barTwoIdx=animations.length-1}
			const barTwoStyle = arrBar[barTwoIdx].style;
			const color =	i%4 === 2 ? PRIMARY_COLOR : SECONDARY_COLOR;
			setTimeout(()=>{
				barOneStyle.backgroundColor = color;
         		barTwoStyle.backgroundColor = color;
			},i*SORTING_SPEED) //note the - i - that means that i dont understand setTimeout
		
		}else if(isSwitch){

		
			
			// this function is not the right one for change
			let temp = animations[i];
			setTimeout(() => {
				const [barOneIdx, barTwoIdx] = temp; // the problem here was that when i put animation[i] its stuck on one value
				const barOneStyle = arrBar[barTwoIdx].style;
				const barTwoStyle = arrBar[barOneIdx].style;
				barOneStyle.height = `${array[barTwoIdx]}px`;
				barTwoStyle.height = `${array[barOneIdx]}px`;
				// pivotTemp.backgroundColor = PRIMARY_COLOR;	
			  }, i * SORTING_SPEED);}
			    
		i++
		if(i<animations.length-1){
		myloop()}
			
	}
myloop()
	}
 
    return (
        <div className="array">
            {array.map( 
                (value,index)=><div key={index} id={index} className="block" style={{height:`${value}px`}}></div>)
                
                }
                <button onClick={()=>animate()}>sort</button>
        </div>
    )
}

export default Sort

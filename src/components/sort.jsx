import React from 'react'
import {useState,useEffect} from 'react'
import sort from "./sorting" 

const Sort = () => {
const [array,setArray] = useState([8, 2, 5, 7, 4, 3, 12, 6, 19, 11, 10, 13, 9])
const PRIMARY_COLOR = "rgb(0, 132, 255)";
const SECONDARY_COLOR ="rgb(221, 224, 0)";
const PIVOT_COLOR = "green";
const SORTING_SPEED = 10;
const NUMBER_OF_ARRAY_BARS = 20;
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
let	animations = sort(array,0,array.length-1 ,[])
let i = 0;
let pivotTemp ;
	const myloop= ()=>{
		
		const arrBar =document.getElementsByClassName("block")
		const isColor =i%4==1||i%4==2;
		const isSwitch=i%4==3;
		const isPivot =i%4===0;
		if(isPivot){
			
				
			 let pivotIdx = animations[i];
			 console.log(pivotIdx)
			 let pivot = arrBar[pivotIdx].style;
			
			console.log(animations[i],i)
			 setTimeout(()=>{
			 console.log(pivotIdx)
		 		pivot.backgroundColor = PIVOT_COLOR;  
		 		pivotTemp = pivot;
			 },i*SORTING_SPEED)
			
			
		}else if(isColor){

			let [barOneIdx,barTwoIdx] = animations[i];
			const barOneStyle = arrBar[barOneIdx].style;
			const barTwoStyle = arrBar[barTwoIdx].style;
			const color =	i%4 === 2 ? PRIMARY_COLOR : SECONDARY_COLOR;
			setTimeout(()=>{
				barOneStyle.backgroundColor = color;
         		barTwoStyle.backgroundColor = color;
			},i*SORTING_SPEED) //note the - i - that means that i dont understand setTimeout
		
		}else if(isSwitch){

		
			
		
			let temp = animations[i];
			setTimeout(() => {
				const [barOneIdx, barTwoIdx] = temp; 
				const barOneStyle = arrBar[barTwoIdx].style;
				const barTwoStyle = arrBar[barOneIdx].style;
				barOneStyle.height = `${array[barTwoIdx]}px`;
				barTwoStyle.height = `${array[barOneIdx]}px`;
				pivotTemp.backgroundColor = PRIMARY_COLOR;	
			  }, i * SORTING_SPEED);}
			    
		i++
		if(i<animations.length-1){
		myloop()}
			
	}
myloop()
	}
 
    return (
        <div className="array">
			<div className="data">
            {array.map( 
                (value,index)=><div key={index} id={index} className="block" style={{height:`${value}px`}}></div>)  
                }
			</div>
			<div className="control">
                <button onClick={()=>animate()}>Quick sort</button>
				<button onClick={()=>resetArray()}>Generat new array</button>
			</div>
		</div>
    )
}

export default Sort

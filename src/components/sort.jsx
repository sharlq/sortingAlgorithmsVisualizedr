import React from 'react'
import {useState,useEffect} from 'react'
import sort from "./quick_sort" 
import  getMergeSortAnimations from "./merge_sort"
import getBubbleSortAnimations from "./bubble_sort"
import getInseartionSortAnimations from "./insertion_sort"
const Sort = () => {
const [array,setArray] = useState([])
const PRIMARY_COLOR = "rgb(0, 132, 255)";
const SECONDARY_COLOR ="rgb(221, 224, 0)";
const PIVOT_COLOR = "green";
const SORTING_SPEED = 10;
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

/*                          QUICK SORT                           */
const quickSort = ()=>{
let	animations = sort(array,0,array.length-1 ,[])
let i = 0;
let pivotTemp ;
	const myloop= ()=>{
		
		const arrBar =document.getElementsByClassName("block")
		const isColor =i%4===1||i%4===2;
		const isSwitch=i%4===3;
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
			},i*SORTING_SPEED) 
		
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
/*                        MERGE SORT                             */



	const mergeSort =()=> {
		const animations = getMergeSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
		  const arrayBars = document.getElementsByClassName('block');
		  const isColorChange = i % 3 !== 2;
		  if (isColorChange) {
			const [barOneIdx, barTwoIdx] = animations[i];
			const barOneStyle = arrayBars[barOneIdx].style;
			const barTwoStyle = arrayBars[barTwoIdx].style;
			const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			setTimeout(() => {
			  barOneStyle.backgroundColor = color;
			  barTwoStyle.backgroundColor = color;
			}, i * SORTING_SPEED);
		  } else {
			setTimeout(() => {
			  const [barOneIdx, newHeight] = animations[i];
			  const barOneStyle = arrayBars[barOneIdx].style;
			  barOneStyle.height = `${newHeight}px`;
			}, i * SORTING_SPEED);
		  }
		}
	  }

	/*                       BUBBLE SORT                              */
	
	const bubbleSort = () => {
		let animations = getBubbleSortAnimations(array)
		console.log(animations)
		const arrayBars = document.getElementsByClassName('block');
		for(let i = 0 ; i < animations.length ; i++){
		let [compare,move] = animations[i]
			let compareBarStyle = arrayBars[compare].style
		 	let moveBarStyle = arrayBars[move].style
			const isSwitch = i%2 ===1
			const color = i%2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			if(!isSwitch){
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color
				;},i*SORTING_SPEED)

			}else{
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color;
				moveBarStyle.height = `${array[move]}px`
				compareBarStyle.height = `${array[compare]}px`
				console.log(move)
			},i*SORTING_SPEED)
			}
		}



	}

	/*                 inseartions sort                     */

	
	const insertionSort = () => {
		let animations = getInseartionSortAnimations(array)
		const arrayBars = document.getElementsByClassName('block');
		for(let i = 0 ; i < animations.length ; i++){
		let [compare,move] = animations[i]
			let compareBarStyle = arrayBars[compare].style
		 	let moveBarStyle = arrayBars[move].style
			const isSwitch = i%2 ===1
			const color = i%2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			if(!isSwitch){
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color
				moveBarStyle.height = `${array[move]}px`
				;},i*SORTING_SPEED)

			}else{
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color;
				moveBarStyle.height = `${array[move]}px`
				compareBarStyle.height = `${array[compare]}px`
				},i*SORTING_SPEED)
			}
		}



	}

    return (
        <div className="array">
			<div className="data">
            {array.map( 
                (value,index)=><div key={index} id={index} className="block" style={{height:`${value}px`}}></div>)  
                }
			</div>
			<div className="control">
                <button onClick={()=>quickSort()}>Quick sort</button>
				<button onClick={()=>mergeSort()}>Merge sort</button>
				<button onClick={()=>bubbleSort()}>Bubble sort</button>
				<button onClick={()=>insertionSort()}>Insertion sort</button>
				<button onClick={()=>resetArray()}>Generat new array</button>
			</div>
		</div>
    )
}

export default Sort

import React from 'react'
import {useState,useEffect} from 'react'
import getQuickSortAnimation from "./quick_sort" 
import  getMergeSortAnimations from "./merge_sort"
import getBubbleSortAnimations from "./bubble_sort"
import getInseartionSortAnimations from "./insertion_sort"
import {Button} from '@material-ui/core';
import CustomizedSlider from "./control"
import responsive from "./responsive"

const Sort = () => {
const [array,setArray] = useState([])
const [animationSpeed,setAnimationSpeed] = useState(100)
const [numberOfArrayElements,setNumberOfArrayElements] = useState(20)
const PRIMARY_COLOR = "rgb(0, 132, 255)";
const SECONDARY_COLOR ="#FF0084";
const PIVOT_COLOR = "#00bd4c";
const SCREEN_WIDTH = window.innerWidth;
const [arrayViewRation,arrayMaxValue] = responsive(SCREEN_WIDTH)

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

const resetArray =()=> {
    const arr = [];
    for (let i = 0; i < numberOfArrayElements; i++) {
      arr.push(randomIntFromInterval(5, arrayMaxValue));
    }
    setArray(arr);
  }
useEffect(()=>resetArray(),[])

const handleArrayChange = (event,num) =>{
	setNumberOfArrayElements(num)
	resetArray()
}
const handleSpeed = (event,num) =>{
	setAnimationSpeed(num)
}


/*                          QUICK SORT                           */
const quickSort = ()=>{
let	animations = getQuickSortAnimation(array,0,array.length-1)
let pivotTemp ;
	for (let i = 0; i < animations.length; i++) {
		
		const arrBar =document.getElementsByClassName("block")
		const isColor =i%3===1;
		const isSwitch=i%3===2;
		const isPivot =i%3===0;
		const color =	i%3 === 2 ? PRIMARY_COLOR : SECONDARY_COLOR;
		if(isPivot){
			  let pivotIdx = animations[i];
			  let pivot = arrBar[pivotIdx].style;
			  setTimeout(()=>{
		 	 	pivot.backgroundColor = PIVOT_COLOR;  
		 	 	pivotTemp = pivot;
			  },i*(500/animationSpeed))
		}else if(isColor){
			let [barOneValue,barTowValue,barOneIdx,barTwoIdx] = animations[i];
			const barOneStyle = arrBar[barOneIdx].style;
			const barTwoStyle = arrBar[barTwoIdx].style;
			setTimeout(()=>{
				barOneStyle.backgroundColor = color;
         		barTwoStyle.backgroundColor = color;
			},i*(500/animationSpeed)) 
		
		}else if(isSwitch){
			
			let temp = animations[i];
			const [barOneValue,barTwoValue,barOneIdx, barTwoIdx] = temp;
			const barOneStyle = arrBar[barOneIdx].style;
			const barTwoStyle = arrBar[barTwoIdx].style; 
	
			setTimeout(() => {
				barOneStyle.backgroundColor = color;
         		barTwoStyle.backgroundColor = color;
				barOneStyle.height = `${barOneValue}px`;
				barTwoStyle.height = `${barTwoValue}px`;
				pivotTemp.backgroundColor = PRIMARY_COLOR;	
			  }, i * (500/animationSpeed));
			   
 
			
			  
	}
}}
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
			}, i * (500/animationSpeed));
		  } else {
			setTimeout(() => {
			  const [barOneIdx, newHeight] = animations[i];
			  const barOneStyle = arrayBars[barOneIdx].style;
			  barOneStyle.height = `${newHeight}px`;
			}, i * (500/animationSpeed));
		  }
		}
	  }

	/*                       BUBBLE SORT                              */
	
	const bubbleSort = () => {
		let animations = getBubbleSortAnimations(array)
		console.log(animations)
		const arrayBars = document.getElementsByClassName('block');
		for(let i = 0 ; i < animations.length ; i++){
		let [compareValue,moveValue,compare,move] = animations[i]
			let compareBarStyle = arrayBars[compare].style
		 	let moveBarStyle = arrayBars[move].style
			const isSwitch = i%2 ===1
			const color = i%2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			if(!isSwitch){
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color
				;},i*(500/animationSpeed))

			}else{
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color;
				moveBarStyle.height = `${moveValue}px`
				compareBarStyle.height = `${compareValue}px`
				console.log(move)
			},i*(500/animationSpeed))
			}
		}



	}

	/*                 inseartions sort                     */

	
	const insertionSort = () => {
		let animations = getInseartionSortAnimations(array)
		const arrayBars = document.getElementsByClassName('block');
		for(let i = 0 ; i < animations.length ; i++){
			let [compareValue,moveValue,compare,move] = animations[i]
			let compareBarStyle = arrayBars[compare].style
		 	let moveBarStyle = arrayBars[move].style
			const isSwitch = i%2 ===1
			const color = i%2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
			if(!isSwitch){
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color
				moveBarStyle.height = `${array[move]}px`
				;},i*(500/animationSpeed))

			}else{
				setTimeout(()=>{
				compareBarStyle.backgroundColor=color;
				moveBarStyle.backgroundColor=color;
				moveBarStyle.height = `${moveValue}px`
				compareBarStyle.height = `${compareValue}px`
				},i*(500/animationSpeed))
			}
		}



	}

    return (
        <div className="array">
			<div className="data">
            {array.map( 
                (value,index)=><div 
				key={index} id={index} 
				className="block" 
				style={{height:`${value}px`,
						width:`${(arrayViewRation*SCREEN_WIDTH)/numberOfArrayElements}px`,
						margin:`${numberOfArrayElements/((SCREEN_WIDTH/arrayViewRation)*20)}`}}>
		
						</div>)  
                }
			</div>
			<div className="sliders">
				<CustomizedSlider 
				handleArray={handleArrayChange} 
				handleSpeed={handleSpeed}
				arrayElements={numberOfArrayElements}
				animationSpeed={animationSpeed}/>
			</div>
			<div className="control">
                <Button variant="contained" className="btn" onClick={()=>quickSort()}>Quick sort</Button>
				<Button variant="contained" className="btn" onClick={()=>mergeSort()}>Merge sort</Button>
				<Button variant="contained" className="btn" onClick={()=>bubbleSort()}>Bubble sort</Button>
				<Button variant="contained" className="btn" onClick={()=>insertionSort()}>Insertion sort</Button>
				<Button variant="contained" className="btn-new" onClick={()=>resetArray()}>Generat new array</Button>
			</div>
		</div>
    )
}

export default Sort

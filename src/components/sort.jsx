import React from 'react'
import {useState} from 'react'
import sort from "./sorting"
const Sort = () => {
const [array,setArray] = useState([2,5,3,8,7,1,10,4,6,9])
const PRIMARY_COLOR = "rgb(0, 132, 255)";
const SECONDARY_COLOR ="rgb(221, 224, 0)";
const PIVOT_COLOR = "green";




 let m = [2,5,3,8,7,1,10,4,6,9];
const animate = ()=>{
let aouw = [...array]
let	animations = sort(aouw,0,array.length ,[])
let i = 0;
//console.log(animations)
	const myloop=()=>{
		const arrBar =document.getElementsByClassName("block")
		const isColor =i%4==1||i%4==2;
		const isSwitch=i%4==3;
		if(isColor){
			let [barOneIdx,barTwoIdx] = animations[i];
			if(barOneIdx>9){barOneIdx=9}
			const barOneStyle = arrBar[barOneIdx].style;
			if(barTwoIdx>9){barTwoIdx=9}
			const barTwoStyle = arrBar[barTwoIdx].style;
			const color =	i%4 === 2 ? PRIMARY_COLOR : SECONDARY_COLOR;
			 setTimeout(()=>{
				barOneStyle.backgroundColor = color;
         		barTwoStyle.backgroundColor = color;
			},i*500) //note the - i - that means that i dont understand setTimeout
		}else if(isSwitch){

		
			console.log("switch",animations[i],i,animations.length)
			let temp = animations[i];
			setTimeout(() => {
			
				
				
				const [barOneIdx, barTwoIdx] = temp; // the problem here was that when i put animation[i] its stuck on one value
				const barOneStyle = arrBar[barTwoIdx].style;
				barOneStyle.height = `${barTwoIdx*10}px`;
					console.log(barOneIdx,"fk")

		
				

			  }, i * 500);}//it look like it set the hight but it is not changing its the same
			  // wait it only set the last bar
		i++
		if(i<animations.length-3){
		myloop()}
			
	}
myloop()
	}
 // there is problem here3
 // untile now i have failes changing the positions of the divs them selfs63
    return (
        <div className="array">
            {array.map( 
                (i)=><div key={i} id={i} className="block" style={{height:`${i*10}px`}}></div>)
                
                }
                <button onClick={()=>animate()}>sort</button>
        </div>
    )
}

export default Sort

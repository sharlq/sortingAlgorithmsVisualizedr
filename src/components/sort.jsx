import React from 'react'
import {useState} from 'react'
import sort from "./sorting"
const Sort = () => {
const [array,setArray] = useState([2,5,3,8,7,1,10,4,6,9])
const PRIMARY_COLOR = "rgb(0, 132, 255)";
const SECONDARY_COLOR ="rgb(221, 224, 0)";
const PIVOT_COLOR = "green";




 
const animate = ()=>{
let aouw = [...array]
let	animations = sort(aouw,0,array.length ,[])
let i = 0;
//console.log(animations)
	const myloop=()=>{
		const arrBar =document.getElementsByClassName("block")
		const isColor =i%4==1||i%4==3;
		const isSwitch=i%4==3;
		if(isColor){
			let [barOneIdx,barTwoIdx] = animations[i];
			const barOneStyle = arrBar[barOneIdx].style;
			if(barTwoIdx>9){barTwoIdx=9}
			const barTwoStyle = arrBar[barTwoIdx].style;
			const color =	i%3 === 1 ? PRIMARY_COLOR : SECONDARY_COLOR;
			setTimeout(()=>{
				barOneStyle.backgroundColor = color;
         		barTwoStyle.backgroundColor = color;
			},5000)
		}else if(animations[i].length>1){
			console.log("switch")
			setTimeout(() => {
			const [barOneIdx, newHight] = animations[i];
			const barOneStyle = arrBar[barOneIdx].style;
			barOneStyle.height =`${newHight*10}px`},5000)
		}
		i++
		if(i<animations.length){
		myloop()}
			
	}
myloop()
	}
 // there is problem here3
 // untile now i have failes changing the positions of the divs them selfs63
    return (
        <div className="array">
            {array.map( 
                (i)=><div key={i} id={i} className="block" style={{height:`${i*10}px`}}>{i}</div>)
                
                }
                <button onClick={()=>animate()}>sort</button>
        </div>
    )
}

export default Sort

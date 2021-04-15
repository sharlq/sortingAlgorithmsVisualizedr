import React from 'react'
import {useState,useEffect} from 'react'
const Sort = () => {
const hi =[]
const [array,setArray] = useState([2,5,3,8,7,1,10,4,6,9])



////////////////////////////////////////////////////////
function  quickSortR(arr, left, right)
{// why the hell does it sort the array when called ? solved using spred operator
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  

	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)i++;
		while (parseInt(arr[j]) > pivot)j--;
		if (i <= j)
		{
			//console.log(arr[i],pivot,arr[j])
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			//console.log(arr[i],pivot,arr[j])

            setTimeout({},100)
			i++;
			j--;

		}
    
    
   
    
    //console.log(arr)
	if (left < j)
		quickSortR(arr, left, j);
	if (i < right)
		quickSortR(arr, i, right);
	return arr;
	}}
///////////////////////////////////////////


 let o = [2,5,3,8,7,1,10,4,6,9]
let so = quickSortR([...array],0,array.length-1)
let hm = [...array]// he re remder and then re create this and fuck it up wait no it has worked no its waiting refresh again
const animate = (arr)=>{
	
	let i = 0;
	const myloop=()=>{
		const arrbar =document.getElementsByClassName("block")
	
			setTimeout(()=>
			{
				
				hm[i]=so[i]
			 let ll = [...arrbar]
			 console.log(arrbar[0])
			 const tryt= arrbar[i].style
			 tryt.height=`${so[i]*10}px`
			 tryt.backgroundColor=`red`
			
			i++;
			if(i<10){
				myloop()
			}
		
			},300)
			
			console.log(arrbar[0],i)
	}
	
		myloop()
			
	
}
 // there is problem here
 
    return (
        <div className="array">
            {array.map( 
                (i)=><div id={i} className="block" style={{height:`${i*10}px`}}>{i}</div>)
                
                }
                <button onClick={()=>animate(so)}>sort</button>
        </div>
    )
}

export default Sort

import React from 'react'
import {useState} from 'react'
const Sort = () => {

const [array,setArray] = useState([2,5,3,8,7,1,10,4,6,9])
/////////////////////////////////////////////////////////
function  quickSortR(arr, left, right)
{
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

            
			i++;
			j--;

		}
	}
    setTimeout(1000)
    //console.log(arr)
	if (left < j)
		quickSortR(arr, left, j);
	if (i < right)
		quickSortR(arr, i, right);
	return arr;
}
/////////////////////////////////////////////////////////////
    let sorted = quickSortR(array,0,array.length-1)
 // there is problem here
    return (
        <div className="array">
            {sorted.map( 
                (i)=><div className="block">{i}</div>)
                
                }
        </div>
    )
}

export default Sort

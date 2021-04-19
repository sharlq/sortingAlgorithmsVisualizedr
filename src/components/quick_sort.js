

function  quickSort(arr, left, right)
{	let animation =[];
	function quickSortI(arr, left, right){
	let i = left;
	let j = right;
	let tmp;
	let pivotidx = (left + right) / 2; 
	let pivot = parseInt(arr[pivotidx.toFixed()]);
	let IS_SWITCHED = 0;
	while (i <= j)
	{
		animation.push(pivotidx.toFixed())
		while (parseInt(arr[i]) < pivot)i++;
		while (parseInt(arr[j]) > pivot)j--;
		if (i <= j )
		{	IS_SWITCHED = 1;
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			animation.push([arr[i],arr[j],i,j])
			animation.push([arr[i],arr[j],i,j])
			i++;
			j--;
		}

		if(IS_SWITCHED===0)
		{animation.push([arr[i],arr[j],i,j])
		animation.push([arr[i],arr[j],i,j])	}	
		IS_SWITCHED = 0;			
	if (left < j)
		{quickSortI(arr, left, j);}
	if (i < right)
		{quickSortI(arr, i, right);}
	}
	return animation;
    }
  animation =	quickSortI(arr, left, right)

return animation

}

	export default quickSort
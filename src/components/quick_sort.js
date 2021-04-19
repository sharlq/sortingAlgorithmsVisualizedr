
let animation =[]
function  quickSortR(arr, left, right)
{
	let i = left;
	let j = right;
	let tmp;
	let pivotidx = (left + right) / 2; 
	let pivot = parseInt(arr[pivotidx.toFixed()]);
	
	
	if(pivot){  
	animation.push(pivotidx.toFixed())}
	else{
		animation.push(i)
	}


	while (i <= j)
	{
		
		while (parseInt(arr[i]) < pivot)i++;
		while (parseInt(arr[j]) > pivot)j--;
		//if(j>arr.length-1){j=arr.length-1}
		
		// animation.push([arr[i],arr[j],i,j])
	//	if(i>arr.length-1||j>arr.length-1){console.log(animation.length)}
		if (i <= j )
		{
			
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;

		}

		animation.push([arr[i],arr[j],i,j])
		animation.push([arr[i],arr[j],i,j])
			
		

	if (left < j)
		{quickSortR(arr, left, j);}
	if (i < right)
		{quickSortR(arr, i, right);}


	console.log(arr)
	return animation;
    }}

	export default quickSortR
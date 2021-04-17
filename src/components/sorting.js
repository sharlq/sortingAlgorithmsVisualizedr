
let animation =[]
function  quickSortR(arr, left, right)
{
	let IS_SWITCHED = 0;
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);
	
	if(pivot){  
	animation.push(pivotidx)}
	else{
		animation.push(i)
	}


	while (i <= j)
	{
		
		while (parseInt(arr[i]) < pivot)i++;
		while (parseInt(arr[j]) > pivot)j--;
		if(j>arr.length-1){j=arr.length-1}
		animation.push([i,j])
		animation.push([i,j])
		if(i>arr.length-1||j>arr.length-1){console.log(animation.length)}
		if (i <= j )
		{
			
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			IS_SWITCHED = 1;
			animation.push([j,i])
			i++;
			j--;

		}
		
		if(!IS_SWITCHED){
		animation.push([i,j])}
		IS_SWITCHED = 0;

	if (left < j)
		quickSortR(arr, left, j);
	if (i < right)
		quickSortR(arr, i, right);

	console.log(arr)
	return animation;
    }}

	export default quickSortR
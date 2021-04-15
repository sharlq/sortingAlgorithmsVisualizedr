
let animation =[]
function  quickSortR(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);
	if(pivot){  
	animation.push(pivot)}
	else{
		animation.push(i)
	}


	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)i++;
		while (parseInt(arr[j]) > pivot)j--;
		animation.push([i,j])
		if (i <= j)
		{
			animation.push([j,i])
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;

		}else{
			animation.push([i,j])
		}
		
		animation.push([j,i])

	if (left < j)
		quickSortR(arr, left, j);
	if (i < right)
		quickSortR(arr, i, right);
	return animation;
    }}

	export default quickSortR
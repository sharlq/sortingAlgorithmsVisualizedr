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
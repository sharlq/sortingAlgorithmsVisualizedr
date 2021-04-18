let animations = [];
function insertionSort (array){
console.log(array)
 for(let i = 0 ; i <array.length ; i++){
     let temp = array.splice(i,1)
     array.unshift(...temp)
     
     for(let j = 0 ; j < i ;j++){
        if(array[j]>array[j+1]){
            let secondTemp = array[j+1]
            array[j+1]=array[j]
            array[j]= secondTemp
        }
        animations.push([j,j+1])
        animations.push([j,j+1])
     }
 }

 console.log(array)
return animations
}

export default insertionSort
 
 
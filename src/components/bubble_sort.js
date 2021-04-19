
function bubbleSort (array){
let animations =[]
for(let i = 0 ; i< array.length;i++){
    for(let j = 0 ; j<array.length;j++){
        if(array[j]>=array[j+1]){
            let tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
            animations.push([array[j],array[j+1],j,j+1])
            animations.push([array[j],array[j+1],j,j+1])
        }
    }
}
console.log(array)
return animations
}

export default bubbleSort
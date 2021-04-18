//let array = [5,6,78,9,1,32,445,14,78,6,2,1]
function bubbleSort (array){
let animations =[]
for(let i = 0 ; i< array.length;i++){
    for(let j = 0 ; j<array.length;j++){
        if(array[j]>=array[j+1]){
            let tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
            animations.push([j,j+1])
            animations.push([j,j+1])
        }
    }
}
console.log(array)
return animations
}

export default bubbleSort
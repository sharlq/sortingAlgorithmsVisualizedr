
let responsive = (windoWidth)=>{
    let sizeRatio = .55
    let arrayMaxValue = 650;
    if( 1360 > windoWidth && windoWidth >1000)
       sizeRatio = .45
  else if( 1000 >= windoWidth && windoWidth > 760)
         {sizeRatio = .3
         arrayMaxValue = 600}
  else if(  760 >= windoWidth) 
        {arrayMaxValue = 500
         sizeRatio = 0.3}

return [sizeRatio,arrayMaxValue]
}

export default responsive
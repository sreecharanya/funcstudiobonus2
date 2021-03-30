//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.


//Call your area function, then use a template literal to print, “The area is ____ cm^2.”
function areaOfRectangle(length,width){
  let area;
  if(!width){
    //console.log(length)
   area=length*length ;
   //console.log(area)
  }else{
   area=length*width
  }
   //console.log("Area before")
   return area;
}

let ar=areaOfRectangle(4)
console.log(`The area is ${ar} cm^2.`)
const removeFromArray = function(arr, ...toBeRemoved) {
  //let result=[];
  for (let i = 0; i < toBeRemoved.length; i++) {
    for (let j=0;j < arr.length; j++) {
      if (toBeRemoved[i] === arr[j]) delete arr[j];
    }
  }

  //let elsToRemove;
   /*for (let i = 0; i < toBeRemoved.length; i++) {
      arr.splice(toBeRemoved[i], 1);
      //i--; //infinite loop?
     //else arr.splice(toBeRemoved[i-1], 1);
     //elsToRemove = arr.filter((el, ind) => el === elsToRemove[ind]);
   }*/
   //let elRmvIndices = elsToRemove.map((el) => {arr.indexOf(el)});

   /*for (i = 0; i < elsTorRemove.length; i++){
     arr.splice(i,1);
   }*/
  
  //return result;
  return arr.filter((el)=>el);
}

// Do not edit below this line
module.exports = removeFromArray;

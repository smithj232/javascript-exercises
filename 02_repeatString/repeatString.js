
function repeatString(string,num){
  let add=''
  if (num<0){
    return("ERROR")
  }
while(num>0){
add=add + string;
num--
}
return(add)
  }

// Do not edit below this line
module.exports = repeatString;

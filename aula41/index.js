function max(x,y){
 //modo1
  //  if(x>y){
  //   return x;
  //  }else{
  //   return y;
  //  }
//-------------------
  //modo2;
  // if(x>y){
  //   return x;
  // }
  // return y;
//-------------------
  //modo3;
  // if(x>y)return x;
  // return y ;
//-------------------
  return x>y?x:y;
}

console.log(max(10,99))
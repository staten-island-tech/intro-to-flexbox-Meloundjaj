function middle (x,y,z) {
   const x = 10
   const y = 8
   const z = 5

   if(( x >=z && x <= y) || (x <= z && x >= y))
    console.log (x);
   if( (y >= z && y<= x) || (y <= z && y >= x))
    console.log (y);
else {
    console.log(z);
}



}
middle(x,y,z);
let a = "";
for ( let i = 0; i < 8; i++){
  for ( let j = 0; j < 8; j++){
    if((i + j) % 2 == 0){
      a += " ";
    }else
      a += "#"
    
  }
  a += "\n";
}
console.log(a);



for( let i = 1; i < 100 + 1; i ++){
  if ( i % 3 == 0 && i % 5 != 0){
    console.log((i) + " Fizz")
  }else if ( i % 3 != 0 && i % 5 ==0){
    console.log((i) + " Buzz")
  }else console.log((i) + " FizzBuzz")
}

function str(){
  let a = prompt("введите слова");
  a = a.toLowerCase().replace(/ /g,'');
  let b = a.split("");
  b.reverse();
  b = b.join("");
  if( a == b){
    console.log("Палиндром")
  }else console.log("Не палиндром")
}
str()

function fibonacci(sec){
let fn1=1; let fn2=0; let v=0; 
    for (let i=1; i<sec; i++){
        v=fn1+fn2;fn2=fn1;fn1=v;
    }
    console.log(v)
} 
const fs = require('fs')
  
fs.readFile('number.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    
    fibonacci(data);

    
})

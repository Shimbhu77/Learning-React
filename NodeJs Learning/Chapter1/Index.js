// import {sum,diff} from './Func.js';
const Func = require('./Func.js');

const fs = require('fs');

console.log(Func);

const t1 = performance.now();

console.log("Hello Shimbhu!");

console.log(Func.sum(7,4)+" "+Func.diff(8,2));

// const txt = fs.readFileSync('Sk.txt','utf-8');
 
 fs.readFile('Sk.txt','utf-8',(err,txt)=>{
    console.log(txt);
 })

const t2= performance.now();

// console.log(txt);
console.log(t2-t1);



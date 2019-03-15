/**
 * 剑指Offer3 数组去重
 * 不用书上那种限定条件的方法，而是一种比较通用的方法
 */

var arr = Array.from(new Array(1000000),()=>{
  return Math.round(800000*Math.random()); 
})

var valid = {};
var result = [];

var dateBegin = new Date();

arr.forEach(element => {
  if(!valid[element])
     result.push(arr);
     valid[element]=1;
});

var dateEnd = new Date();

console.log("time cost: "+(dateEnd.getTime()-dateBegin.getTime())+"ms");
console.log("unique elements: "+result.length);

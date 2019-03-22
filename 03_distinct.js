/**
 * 剑指Offer3 数组去重
 * 不用书上那种限定条件的方法，而是一种比较通用的方法
 * 只有像JS这样有动态对象特性才能用
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

//在我的机器，一百万条数据跑了169ms
console.log("time cost: "+(dateEnd.getTime()-dateBegin.getTime())+"ms");
console.log("unique elements: "+result.length);

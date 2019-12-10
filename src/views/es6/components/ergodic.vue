<template>
  <div>
    <div class="title">
      <span>遍历</span>
      <div class="animation">
        <div class="move"></div>
      </div>
    </div>
    <h4>for</h4>
    <pre>
      let arr =  ['a','b','c'];
      for(let i = 0; i < arr.length; i++){
        console.log(i,arr[i])  
      }
      // 0 a
      // 1 b
      // 2 c
    </pre>
    <el-divider></el-divider>
    <h4>for...in</h4>
    <pre>
      var es6 = {
        edition: 6,
        committee: "TC39",
        standard: "ECMA-262"
      };

      for (let e in es6) {
        console.log(e);
      }

      // edition
      // committee
      // standard
      
      ------------------------------------------------

      for...in循环遍历的是键名，for...in循环有几个缺点:

        1.数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
        2.for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
        3.某些情况下，for...in循环会以任意顺序遍历键名。
      
      总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。
    </pre>
    <el-divider></el-divider>
    <h4>for...of</h4>
    <pre>
      const arr = ['red', 'green', 'blue'];

      for(let v of arr) {
        console.log(v); // red green blue
      }

      const obj = {};
      obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

      for(let v of obj) {
        console.log(v); // red green blue
      }
      
      ------------------------------------------------

      一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。
      也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
      
      for...of循环可以使用的范围包括数组、Set 和 Map 结构、
      某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。

      for...of循环遍历的是键值，for...of循环相比上面几种做法，有一些显著的优点。

      1.有着同for...in一样的简洁语法，但是没有for...in那些缺点。
      2.不同用于forEach方法，它可以与break、continue和return配合使用。
      3.提供了遍历所有数据结构的统一操作接口。
    </pre>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  position: sticky;
  top: 0;
  padding: 10px;
  height: 16px;
  line-height: 16px;
  background: #597ee7;
  text-align: center;
  color: #fff;
  border-radius: 18px;
}
</style>
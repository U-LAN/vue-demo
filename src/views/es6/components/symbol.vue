<template>
  <div>
    <div class="title">
      <span>Symbol</span>
      <div class="animation">
        <div class="move"></div>
      </div>
    </div>
    <h4>Symbol类型的方法</h4>
    <pre>
      ①Symbol() ——
        创建一个新的Symbol,可以传入一个参数作为来更好的区分Symbol

      ②Symbol.for()　——　
        区别于 Symbol()。二者都可以创建一个新的Symbol值，但Symbol.for()会先搜索，
        搜索到就返回搜索到的Symbol，没搜索到就创建一个全局Symbol；而Symbol()直接是创建一个新的，不是在全局。

      ③Symbol.keyFor() ——
        返回一个已登记的Symbol类型的key，Synbol()创建的Symbol是没有登记的
    </pre>
    <el-divider></el-divider>
    <h4>Symbol用于</h4>
    <pre>
      ①作为属性名 ——
        var mySymbol = Symbol();
        var a = {
          [mySymbol] = 'hello';
        }

        特点：Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
             也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
             但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，
             可以获取指定对象的所有 Symbol 属性名

      ②当一个变量的值不重要，但是要保证不会和其他变量冲突时　——　
        const shapeType = {
          triangle: Symbol()
        };

        function getArea(shape, options) {
          var area = 0;
          switch (shape) {
            case shapeType.triangle:
              area = .5 * options.width * options.height;
              break;
          }
          return area;
        }

        getArea(shapeType.triangle, { width: 100, height: 100 });

      ③Symbol.keyFor() ——
        返回一个已登记的Symbol类型的key，Synbol()创建的Symbol是没有登记的
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
  background: #597ee7;
  text-align: center;
  color: #fff;
  border-radius:18px;
  
}
</style>
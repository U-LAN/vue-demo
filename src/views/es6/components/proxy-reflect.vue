<template>
  <div>
    <div class="title">
      <span>Proxy、Reflect</span>
      <div class="animation">
        <div class="move"></div>
      </div>
    </div>
    <h4>Proxy 概述</h4>
    <pre>
 
      Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，
      所以属于一种“元编程”（meta programming），即对编程语言进行编程。

      Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
      都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
      Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

      ---------------------------------------------------------

      var obj = new Proxy({}, {
        get: function (target, key, receiver) {
          console.log(`getting ${key}!`);
          return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
          console.log(`setting ${key}!`);
          return Reflect.set(target, key, value, receiver);
        }
      });

      ---------------------------------------------------------

      上面代码对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为。
      对设置了拦截行为的对象obj，去读写它的属性，就会得到下面的结果。

      ---------------------------------------------------------

      obj.count = 1
      //  setting count!
      ++obj.count
      //  getting count!
      //  setting count!
      //  2
    </pre>
    <el-divider></el-divider>
    <h4>Proxy 概述</h4>
    <pre>
 
      Reflect对象与Proxy对象一样，也是ES6为了操作对象而提供的新API。Reflect对象的设计目的有这样几个。

    （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
          现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。

    （2） 修改某些Object方法的返回结果，让其变得更合理。
          比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
          而Reflect.defineProperty(obj, name, desc)则会返回false。

    （3） 让Object操作都变成函数行为。某些Object操作是命令式，
          比如name in obj和delete obj[name]，
          而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
          
    （4）Reflect对象的方法与Proxy对象的方法一一对应，
          只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
          这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。
          也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
    </pre>
    <el-divider></el-divider>
    <h4>使用 Proxy 实现观察者模式</h4>
    <pre>
      观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。

      ---------------------------------------------------------

      const person = observable({
        name: '张三',
        age: 20
      });

      function print() {
        console.log(`${person.name}, ${person.age}`)
      }

      observe(print);
      person.name = '李四';
      // 输出
      // 李四, 20

      ---------------------------------------------------------

      上面代码中，数据对象person是观察目标，函数print是观察者。
      一旦数据对象发生变化，print就会自动执行。

      下面，使用 Proxy 写一个观察者模式的最简单实现，即实现observable和observe这两个函数。
      思路是observable函数返回一个原始对象的 Proxy 代理，拦截赋值操作，触发充当观察者的各个函数。

      ---------------------------------------------------------

      const queuedObservers = new Set();

      const observe = fn => queuedObservers.add(fn);
      const observable = obj => new Proxy(obj, {set});

      function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(observer => observer());
        return result;
      }

      ---------------------------------------------------------

      上面代码中，先定义了一个Set集合，所有观察者函数都放进这个集合。
      然后，observable函数返回原始对象的代理，拦截赋值操作。
      拦截函数set之中，会自动执行所有观察者。
    </pre>
  </div>
</template>
<script>
export default {
  mounted() {
    //--------------------------定义观察者--------------------------------
    //存放观察者函数
    const queuedObservers = new Set();
    //设置观察者
    const observe = fn => queuedObservers.add(fn);
    //返回一个原始对象的 Proxy 代理
    const observable = obj => new Proxy(obj, { set });

    function set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      queuedObservers.forEach(observer => observer());
      return result;
    }

    //--------------------------使用观察者--------------------------------
    const person = observable({
      name: "张三",
      age: 20
    });

    function printName() {
      console.log(`${person.name}`);
    }
    function printAge(params) {
      console.log(`${person.age}`);
    }

    observe(printName);
    observe(printAge);

    // person.name = "李四";

    function checkout(params) {
    
      if (arguments.length) {
        let type = Object.prototype.toString.call(params).slice(8, -1);
        switch (type) {
          case Number:
            type = isNaN(params)
              ? "NaN"
              : !isFinite(params)
              ? "Infinity"
              : type;
            break;
        }
      } else {
        return "请输入要验证的参数！";
      }
    }
  }
};
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
  z-index: 2;
}
</style>
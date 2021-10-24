//使用commonJS
const { add, mul } = require('./js/mathUtils')
console.log(add(20, 30));
console.log(mul(20, 30));

//使用es6 modules
import { name, age, height } from './js/info'
console.log(name);
console.log(age);
console.log(height);

//依赖css文件
require('./css/normal.css')

//使用Vue
import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    }
})
import sass from './index.scss'
import Vue from './public/vue.min.js'
import {randomNumber} from './public/public'

let vue = new Vue({
  el: '#main',
  data() {
    return {
      // 所有可现实的数字
      allNumber: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
      // 替补数字 每次填补的数字
      addNumber: [2, 4],
      // 生成的数字结构
      numberList: [],
      score: 0
    }
  },
  created() {
    this.setNumberList();
  },
  methods: {
    // 创建16个格子的数字，随机从数字数组中获取
    setNumberList() {
      let numberList = [];
      // 循环16次 为每个格子添加初始值
      for (let i = 1; i <= 16; i++) {
        //判断随机产生1—16的数字 若跟2取余为0  就传空 否则传入可显示数字的前四位随机
        let number = randomNumber(1, 16) % 2 == 0 ? [] : [this.allNumber[randomNumber(0, 3)]];
        numberList.push(number)
      }
      console.log(numberList);
      this.numberList = numberList;
    },
    mouseDown(e) {
      console.log(e)
    }
  }

})
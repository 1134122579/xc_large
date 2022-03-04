<template>
  <!-- <div
    class="tagBall"
    ref="tagBall"
    @mouseover.self.stop="mouseOver"
    @mouseleave.self.stop="mouseLeave"
  >
    <p v-for="(item, index) in 50" :key="index" class="tag">{{ item }}</p>
  </div> -->
  <div class="wzy">
    <tag-cloud
      class="tagcloud"
      :data="hotTag"
      :config="config"
      @clickTag="clickTagItem"
    ></tag-cloud>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      config: {
        radius: 400, //	滚动半径，Number，单位px
        maxFont: 58, //	最大字体大小
        color: null, //	字体颜色。为null时随机
        rotateAngleXbase: 1000, //	600	X方向旋转速度基数，数越小速度越快
        rotateAngleYbase: 1000, //	600	Y方向旋转速度基数，数越小速度越快
        hover: false, //是否开启悬浮联动
      },
      hotTag: [
        {
          id: "05023f8da31c4b4187cc6899e2a3aec2",
          name: "话更少，做更多，但更好",
        },
        { id: "0ef028e5278f4f5ca31f99f1bd22b1cc", name: "燃烧吧大脑" },
        {
          id: "1a32ef04d3c548eaa6777abb46da32f2",
          name: "话更少，做更多，但更好",
        },
        {
          id: "2c26488325bd493687d16315fe0e5fdd",
          name: "不做语言的巨人，行动的矮子",
        },
        { id: "3a786111828a4b9f89ae9da25753eedd", name: "人要脸树要皮" },
        { id: "4ed593eed91b4244969995237f5c96c5", name: "BURN" },
        {
          id: "615d2c178f1a47cb8d473823e74f5386",
          name: "当认为不行的时候，才是工作的开始",
        },
        { id: "76f652df03db43349272a9aff492b065", name: "BURN" },
        {
          id: "8ff29d0d35e548feb945063b34ed9c9b",
          name: "乐观构想，悲观计划，愉快执行",
        },
        { id: "a8ac2170008746fdadc05ea461bc5e37", name: "NO 不坐差不多先生" },
        {
          id: "05023f8da31c4b4187cc6899e2a3aec2",
          name: "牛逼的人生都是连滚带爬",
        },
        { id: "0ef028e5278f4f5ca31f99f1bd22b1cc", name: "OPEN" },
        {
          id: "1a32ef04d3c548eaa6777abb46da32f2",
          name: "话更少，做更多，但更好",
        },
        {
          id: "2c26488325bd493687d16315fe0e5fdd",
          name: "打工者的心态正在悄悄毁掉你",
        },
        {
          id: "3a786111828a4b9f89ae9da25753eedd",
          name: "不要以现在的能力，约束未来的想象",
        },
        { id: "4ed593eed91b4244969995237f5c96c5", name: "燃烧吧大脑" },
        {
          id: "615d2c178f1a47cb8d473823e74f5386",
          name: "话更少，做更多，但更好",
        },
        { id: "76f652df03db43349272a9aff492b065", name: "BURN" },
        { id: "8ff29d0d35e548feb945063b34ed9c9b", name: "燃烧吧大脑" },
        { id: "a8ac2170008746fdadc05ea461bc5e37", name: "燃烧吧大脑" },
      ],
      tagEle: "",
      paper: "",
      RADIUS: 150,
      fallLength: 500,
      tags: [],
      angleX: Math.PI / 500,
      angleY: Math.PI / 500,
      CX: "",
      CY: "",
      EX: "",
      EY: "",
      timing: null,
    };
  },
  props: {},
  computed: {
    maxum() {
      return this.wordList.sort()[0].value;
    },
  },
  watch: {},
  created() {},
  mounted() {
    // this.tagEle = this.$refs.tagBall.children;
    // this.paper = this.$refs.tagBall;
    // this.CX = this.paper.offsetWidth / 2;
    // this.CY = this.paper.offsetHeight / 2;
    // this.EX =
    //   this.paper.offsetLeft +
    //   document.body.scrollLeft +
    //   document.documentElement.scrollLeft;
    // this.EY =
    //   this.paper.offsetTop +
    //   document.body.scrollTop +
    //   document.documentElement.scrollTop;
    // this.innit();
    // this.animate();
  },
  methods: {
    clickTagItem(data) {
      console.log(data);
    },
    innit() {
      for (var i = 0; i < this.tagEle.length; i++) {
        var a, b;
        var k = (2 * (i + 1) - 1) / this.tagEle.length - 1;
        var a = Math.acos(k);
        var b = a * Math.sqrt(this.tagEle.length * Math.PI);
        var x = this.RADIUS * Math.sin(a) * Math.cos(b);
        var y = this.RADIUS * Math.sin(a) * Math.sin(b);
        var z = this.RADIUS * Math.cos(a);
        // var t = this.tag({ ele: this.tagEle[i], x, y, z });
        this.tagEle[i].style.color =
          "rgb(" +
          parseInt(Math.random() * 255) +
          "," +
          parseInt(Math.random() * 255) +
          "," +
          parseInt(Math.random() * 255) +
          ")";
        this.tags.push({ ele: this.tagEle[i], x, y, z });
      }
    },
    tag({ ele, x, y, z }) {
      var scale = this.fallLength / (this.fallLength - z);
      var alpha = (z + this.RADIUS) / (2 * this.RADIUS);
      ele.style.fontSize = 15 * scale + "px";
      ele.style.opacity = alpha + 0.5;
      ele.style.filter = "alpha(opacity = " + (alpha + 0.5) * 100 + ")";
      ele.style.zIndex = parseInt(scale * 100);
      ele.style.left = x + this.CX - ele.offsetWidth / 2 + "px";
      ele.style.top = y + this.CY - ele.offsetHeight / 2 + "px";
    },
    animate() {
      this.timing = setInterval(() => {
        this.rotateX();
        this.rotateY();
        this.tags.forEach((item) => {
          this.tag(item);
        });
      }, 20);
    },
    rotateX() {
      var cos = Math.cos(this.angleX);
      var sin = Math.sin(this.angleX);
      this.tags.forEach((item) => {
        var y1 = item.y * cos - item.z * sin;
        var z1 = item.z * cos + item.y * sin;
        item.y = y1;
        item.z = z1;
      });
    },
    rotateY() {
      var cos = Math.cos(this.angleY);
      var sin = Math.sin(this.angleY);
      this.tags.forEach((item) => {
        var x1 = item.x * cos - item.z * sin;
        var z1 = item.z * cos + item.x * sin;
        item.x = x1;
        item.z = z1;
      });
    },
    mouseOver(event) {
      var x = event.clientX - this.EX - this.CX;
      var y = event.clientY - this.EY - this.CY;
      console.log(x, y);
      this.angleY = x * 0.0001;
      this.angleX = y * 0.0001;
      if (!this.timing) this.animate();
    },
    mouseLeave(event) {
      var x = event.clientX - this.EX - this.CX;
      var y = event.clientY - this.EY - this.CY;
      this.angleY = x * 0.0001;
      this.angleX = y * 0.0001;
    },
    cheMouseOver() {
      clearInterval(this.timing);
      this.timing = null;
    },
  },
};
</script>
<style lang="less" scoped>
.wzy {
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  .tag-cloud {
    width: 100% !important;
    height: 100% !important;
    margin: 50px auto;
    position: relative;
    box-sizing: border-box;
  }
}

// .tagBall {
//   width: 100%;
//   height: 100%;
//   margin: 50px auto;
//   position: relative;
// }
// .tag {
//   display: block;
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   color: #000;
//   text-decoration: none;
//   font-size: 15px;
//   font-family: "微软雅黑";
//   font-weight: bold;
// }
</style>

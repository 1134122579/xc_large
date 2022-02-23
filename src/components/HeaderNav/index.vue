<template>
  <div class="HeaderNav">
    <!-- logo -->
    <div class="logo">
      <img class="logostyle" :src="logo" />
    </div>
    <!-- nav -->
    <ul class="nav">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="curindex == item.id && 'cursorstyle'"
      >
        <p @click="go(item)">{{ item.title }}</p>
        <ul
          class="childrenUl"
          v-show="item.children.length > 0 && item.children"
        >
          <li
            :class="curindex == childrenitem.id && 'cursorstyle'"
            v-for="(childrenitem, childrenindex) in item.children"
            :key="childrenindex"
          >
            <p @click="go(item, childrenitem)">{{ childrenitem.title }}</p>
          </li>
        </ul>
      </li>
      <div class="yzxq_logo"><img :src="yzxq_logo" alt="" /></div>
    </ul>
  </div>
</template>
<script>
import logo from "@/assets/logo2.png";
import yzxq_logo from "@/assets/icons/yzxqlogo.png";

export default {
  name: "HeaderNav",
  data() {
    return {
      logo,
      yzxq_logo,
      curindex: "",
      list: [
        {
          id: "1",
          title: "业务范围",
          children: [
            {
              id: "1-1",
              title: "新品牌",
              to: "/xpp",
            },
            {
              id: "1-2",
              title: "视频制作",
              to: "/Wwq",
            },
            {
              id: "1-3",
              title: "文化活动",
              to: "/Wwq",
            },
            {
              id: "1-4",
              title: "空间设计",
              to: "/Wwq",
            },
          ],
        },
        {
          id: "2",
          title: "企业文化",
          children: [],
        },
        {
          id: "3",
          title: "空间站",
          children: [],
        },
        {
          id: "4",
          title: "微文圈",
          children: [],
        },
        {
          id: "5",
          title: "关于我们",
          children: [
            {
              id: "5-1",
              title: "天橙图片",
              to: "/Wwq",
            },
            {
              id: "5-2",
              title: "天橙视频",
              to: "/Wwq",
            },
            {
              id: "5-3",
              title: "天橙文案",
              to: "/Wwq",
            },
            {
              id: "5-4",
              title: "联系我们",
              to: "/Wwq",
            },
          ],
        },
      ],
    };
  },
  methods: {
    go(item, childrenitem) {
      console.log(childrenitem);
      try {
        if (childrenitem) {
          let { to } = childrenitem;
          this.curindex = item.id;
          if (this.$route.path !== to) {
            this.$router.push({ path: to });
          }
        }
      } catch (err) {}
    },
  },
};
</script>
<style lang="less" scoped>
.HeaderNav {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 40px;
  padding-top: 40px;
  width: 100%;
  .logo {
    height: 60px;
    .logostyle {
      height: 100%;
    }
  }
  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    flex-shrink: 0;
    flex-wrap: nowrap;
    font-weight: 600;
    height: 40px;
    .yzxq_logo {
      height: 50px;
    }
    li {
      height: 40px;
      text-align: center;
      width: 120px;
      line-height: 40px;
      position: relative;
      box-sizing: border-box;
      border-radius: 5px;
      &:hover {
        box-shadow: 0 0 8px rgba(204, 190, 190, 0.767),
          0 0 8px rgba(204, 190, 190, 0.767), 0 0 8px rgba(204, 190, 190, 0),
          0 0 8px rgba(204, 190, 190, 0.767);
        .childrenUl {
          display: block;
          box-shadow: 3px 3px 8px rgba(204, 190, 190, 0.767);
        }
      }
      .childrenUl {
        background: #fff;
        display: none;
        top: 40px;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
        position: absolute;
        width: 120px;
        z-index: 99;

        li {
          width: 100%;
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .cursorstyle {
      box-shadow: 0 0 8px rgba(204, 190, 190, 0.767);
    }
  }
  img {
    height: 100%;
  }
}
</style>

<template>
  <div class="HeaderNav">
    <!-- logo -->
    <div class="logo">
      <img class="logostyle" @click="gohome" :src="logo" />
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
import logo from "@/assets/logo5.png";
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
              to: "/content/xpp",
            },
            {
              id: "1-2",
              title: "视频制作",
              to: "/content/tcVideo",
            },
            {
              id: "1-3",
              title: "文化活动",
              to: "/content/whhd",
            },
            // {
            //   id: "1-4",
            //   title: "空间设计",
            //   to: "/content/Wwq",
            // },
          ],
        },
        {
          id: "2",
          title: "企业文化",
          children: [
            {
              id: "5-1",
              title: "企业文化",
              to: "/content/wzy",
            },
            {
              id: "2-2",
              title: "最新资讯",
              to: "/content/information",
            },
          ],
        },
        {
          id: "3",
          title: "空间站",
          children: [
            {
              id: "3-1",
              title: "空间导览",
              to: "/navigation",
            },
          ],
        },
        {
          id: "4",
          title: "微文圈",
          children: [
            {
              id: "4-1",
              title: "微文圈",
              to: "/content/Wwq",
            },
          ],
        },
        {
          id: "5",
          title: "关于我们",
          children: [
            {
              id: "5-1",
              title: "我们做什么",
              to: "/content/about",
            },
            {
              id: "5-2",
              title: "联系我们",
              to: "/content/wzy",
            },
          ],
        },
      ],
    };
  },
  methods: {
    gohome() {
      const loading = this.$loading({
        lock: true,
        text: "进入中..",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$router.push({ path: "/" });
      loading.close();
    },
    go(item, childrenitem) {
      console.log(childrenitem);
      const loading = this.$loading({
        lock: true,
        text: "进入中..",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      try {
        this.curindex = item.id;
        if (childrenitem) {
          let { to } = childrenitem;
          if (this.$route.path !== to) {
            this.$router.push({ path: to });
          }
        }
      } catch (err) {}
      loading.close();
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
      cursor: pointer;
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
    cursor: pointer;

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
      font-size: 18px;
      &:hover {
        box-shadow: 0 0 8px rgba(204, 190, 190, 0.767);
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
          font-size: 16px;
          line-height: 40px;
          font-weight: normal;
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

<template>
  <div>
    <ul id="navList">
      <li>
        <a id="blog_nav_sitehome" class="menu" href="https://www.cnblogs.com/">博客园</a>
        <i></i>
      </li>
      <li>
        <a id="blog_nav_myhome" class="menu" href="https://www.cnblogs.com/RegicideGod/">首页</a>
        <i></i>
      </li>
      <li>
        <a class="menu" href="http://www.tennetcn.com">Tennetcn</a>
        <i></i>
      </li>
      <li>
        <a id="blog_nav_newpost" class="menu" href="https://i.cnblogs.com/EditPosts.aspx?opt=1">新随笔</a>
        <i></i>
      </li>
      <li>
        <a id="blog_nav_contact" class="menu" href="https://msg.cnblogs.com/send/RegicideGod">联系</a>
        <i></i>
      </li>
      <li>
        <a id="blog_nav_rss" class="menu" href="https://www.cnblogs.com/RegicideGod/rss/">订阅</a>
        <!--<partial name="./Shared/_XmlLink.cshtml" model="Model" /></li>-->
        <i></i>
      </li>
      <li>
        <a id="blog_nav_admin" class="menu" href="https://i.cnblogs.com/">管理</a>
        <i></i>
      </li>
    </ul>
    <p>原创链接： https://www.cnblogs.com/RegicideGod/p/12598278.html</p>
  </div>
</template>

<script>
export default {
  name: "tabanimation",
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
#navList{
    min-height: 83px;
    >li{
        position: relative;
    }
    li{
        float: left;
        a{
            display: block;
            width: 5em;
            height: 22px;
            float: left;
            text-align: center;
            padding-top: 8px;
            border-right: 1px solid #ccc;
        }
        a:link,a:visited{
            font-size: 17px;
            padding-top: 0;
            border-right: 0;
            color: #314659;
            display: block;
            font-weight: 300;
            width: auto;
            padding: 19px 16px;
            height: inherit;
            -webkit-transition: all .3s;
            transition: all .3s;
        }
        &:hover i{
            width: 100%;
            left: 0;
        }
        i{
            width: 0;
            height: 4px;
            background-color: #2D8CF0;
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            transition: 1s;
        }
    }
}
</style>
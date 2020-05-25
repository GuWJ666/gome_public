<template>
  <div class="home">
    <!-- 头部 -->
    <header>
      <nav class="clear">
        <!-- 左侧 -->
        <div class="left_nav">
          <ul class="clear">
            <li class="nav_cell">
              <div class="has_down" ref="hasDown">
                <a href="#">国美会员</a>
                <i></i>
              </div>
              <div class="drop_down member_model" ref="dropDown" v-show="modelShow">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588064848186&di=febdadad78544df62093533bbde98867&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd62a6059252dd42a1c362a29033b5bb5c9eab870.jpg"
                  alt
                />
              </div>
            </li>
            <li class="nav_cell clear">
              <!-- 登录 -->
              <div class="signIn">
                <a href="#">登录</a>
              </div>
              <!-- 注册 -->
              <div class="signUp">
                <a href="#">注册有礼</a>
                <i></i>
              </div>
            </li>
          </ul>
        </div>
        <!-- 右侧 -->
        <div class="right_nav">
          <ul>
            <li class="nav_cell order">
              <a href="#">我的订单</a>
            </li>
            <li class="nav_cell">
              <div class="has_down" ref="hasDown">
                <a href="#">我的国美</a>
                <i></i>
              </div>
              <div class="drop_down mygome_model" ref="dropDown" v-show="modelShow">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588064899324&di=d6e75979075c3c77a362694c7c8d77f0&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3984473917%2C238095211%26fm%3D214%26gp%3D0.jpg"
                  alt
                />
              </div>
            </li>
            <li class="nav_cell">
              <div class="has_down" ref="hasDown">
                <a href="#">企业采购</a>
                <i></i>
              </div>
              <div class="drop_down firm_model" ref="dropDown" v-show="modelShow">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588066052602&di=9675813fdba9c9c27c7de82cf3f10c20&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F16%2F18%2F300000932954129238184537620_950.jpg"
                  alt
                />
              </div>
            </li>
            <li class="nav_cell">
              <div class="has_down" ref="hasDown">
                <a href="#">服务中心</a>
                <i></i>
              </div>
              <div class="drop_down serve_model" ref="dropDown" v-show="modelShow">
                <img
                  src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3675415932,4054970339&fm=26&gp=0.jpg"
                  alt
                />
              </div>
            </li>
            <li class="nav_cell nav_site">
              <div class="has_down" ref="hasDown">
                <a href="#">网站导航</a>
                <i></i>
              </div>
              <div class="drop_down site_model" ref="dropDown" v-show="modelShow">
                <img src="http://img2.imgtn.bdimg.com/it/u=3880133774,711237976&fm=26&gp=0.jpg" alt />
              </div>
            </li>
            <li class="nav_cell">
              <div class="has_down" ref="hasDown">
                <a href="#">手机国美</a>
                <i></i>
              </div>
              <div class="drop_down phone_model" ref="dropDown" v-show="modelShow">
                <img src="http://img4.imgtn.bdimg.com/it/u=2727427996,736080300&fm=26&gp=0.jpg" alt />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- 搜索 -->
    <div class="search">
      <!-- 左侧 -->
      <div class="search_left">
        <img src="https://css.gomein.net.cn/gmpro/1.0.0/public/1.0.0/css/i/logo.png" alt />
        <img src="https://gfs12.gomein.net.cn/T1fXZmBX_T1RCvBVdK.gif" alt />
      </div>
      <!-- 中间 -->
      <div class="search_middle">
        <div class="clear">
          <div class="drop_box">
            <span>商品</span>
            <ul>
              <li>商品</li>
              <li>店铺</li>
              <li>话题</li>
              <li>圈子</li>
            </ul>
          </div>
          <div class="search_box">
            <input type="text" :placeholder="hotWord" />
          </div>
          <div class="btn_box">
            <button>搜索</button>
          </div>
        </div>
        <div class="hotSearch">
          <span v-for="(item,index) in hotSearch" :key="index" :class="index==0?'red':''">{{item}}</span>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="search_right">
        <span>我的购物车</span>
      </div>
    </div>
    <!-- 内容 -->
    <main>
      <!-- 导航 -->
      <nav>
        <div class="main_nav">
          <!-- 左侧 -->
          <div class="main_nav_left">
            <span>{{navTitle}}</span>
            <ul>
              <li v-for="(item,index) in classify" :key="index">
                <a href="#" v-for="(x,y) in item" :key="y">{{x}}</a>
              </li>
            </ul>
          </div>
          <!-- 中间 -->
          <div class="main_nav_mid" v-if="navList">
            <a href="#" v-for="(item,index) in navList" :key="index">{{item}}</a>
          </div>
          <!-- 右侧 -->
          <div class="main_nav_right" v-if="adList">
            <img src="https://gfs10.gomein.net.cn/T1OYA4B4J_1RCvBVdK.png" alt />
          </div>
        </div>
      </nav>
      <!-- 轮播图 -->
      <div class="main_carousel">
        <div class="carousel_box clear">
          <div class="carousel_wrap">
            <b-carousel
              id="carousel-fade"
              v-model="slide"
              style="text-shadow: 0px 0px 2px #000"
              fade
              controls
              indicators
              img-width="750"
              img-height="450"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide v-for="(item,index) in carousels" :key="index" :img-src="item.src"></b-carousel-slide>
            </b-carousel>
          </div>
          <div class="main_news"></div>
        </div>
      </div>
      <!-- 实验 -->
      <div class="test">
        <!-- <section>
          <div class="cell" v-for="(item,index) in levels" :key="index">{{item.floor}}</div>
        </section>
        <aside>
          <ul>
            <li class="floor_nav">楼层导肮</li>
            <li v-for="(item,index) in levels" :key="index">
              <a href="#">
                <span>{{item.floor}}</span>
                <p>{{item.name}}</p>
              </a>
            </li>
            <li class="up">
              <svg
                class="bi bi-chevron-up"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li class="down">
              <svg
                class="bi bi-chevron-down"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </aside>-->
      </div>
      <echart></echart>
      <vant></vant>
    </main>
  </div>
</template>

<script>
// import $ from "jquery";
import Swiper from "swiper";
import echart from "../components/myEcharts"
import vant from "../components/vant"
export default {
  components:{
    echart,
    vant
  },
  data() {
    return {
      value1: 0,
      modelShow: false,
      hotWord: "空调",
      hotSearch: [
        "空气净化器",
        "美的空调",
        "洗衣机799",
        "抢5G手机",
        "电脑专场",
        "电视直降",
        "制冷空调",
        "华为nova7"
      ],
      navTitle: "全部商品分类",
      navList: [
        "发现",
        "真划算",
        "超市",
        "电器城",
        "汽车",
        "家居家装",
        "智能",
        "管家"
      ],
      adList: [
        "https://gfs10.gomein.net.cn/T1OYA4B4J_1RCvBVdK.png",
        "https://gfs11.gomein.net.cn/T1KXhmB7LT1RCvBVdK.png",
        "https://gfs10.gomein.net.cn/T1waxmBTWT1RCvBVdK.png"
      ],
      carousels: [
        { index: 0, src: "https://gfs11.gomein.net.cn/T1dxh4BXAv1RCvBVdK.jpg" },
        { index: 1, src: "https://gfs13.gomein.net.cn/T1mBK4BmJ_1RCvBVdK.jpg" },
        { index: 2, src: "https://gfs10.gomein.net.cn/T1XYZ4Bsbv1RCvBVdK.jpg" },
        { index: 3, src: "https://gfs12.gomein.net.cn/T1sBV4B5x_1RCvBVdK.jpg" },
        { index: 4, src: "https://gfs11.gomein.net.cn/T1MyhmBgVT1RCvBVdK.jpg" },
        { index: 5, src: "https://gfs10.gomein.net.cn/T1LsV4ByV_1RCvBVdK.jpg" },
        { index: 6, src: "https://gfs12.gomein.net.cn/T1HxJ4B_xv1RCvBVdK.jpg" },
        { index: 7, src: "https://gfs10.gomein.net.cn/T1aYh4Bj_v1RCvBVdK.jpg" }
      ],
      classify: [
        ["手机", "充值"],
        ["相机", "智能数码"],
        ["电脑", "办公软件"],
        ["电视", "影音", "智能"],
        ["空调", "冰箱", "洗衣机"],
        ["厨房卫浴", "生活电器", "环境"],
        ["家具", "建材", "欧洲厨房"],
        ["家居家纺", "家居家装"],
        ["食品酒水"],
        ["母婴玩具"],
        ["美护个妆"],
        ["服饰鞋帽", "箱包奢品"],
        ["运动户外", "钟表首饰"],
        ["汽车整车", "汽车用品"],
        ["国美管家"]
      ],
      slide: 0, //轮播下标
      levels: [
        { floor: "1F", name: "手机通讯" },
        { floor: "2F", name: "电脑数码" },
        { floor: "3F", name: "家用电器" },
        { floor: "4F", name: "厨房卫浴" },
        { floor: "5F", name: "国美超市" },
        { floor: "6F", name: "家居家装" },
        { floor: "7F", name: "汽车用品" }
      ]
    };
  },
  created() {},
  mounted() {
    this.bgChange();
    this.styleC();
  },
  methods: {
    styleC() {
      $(".nav_cell").hover(
        function() {
          $(this)
            .find(".has_down")
            .css({
              "border-color": "#ccc",
              background: "#fff"
            });
          $(this)
            .find(".drop_down")
            .show();
        },
        function() {
          $(this)
            .find(".has_down")
            .css({
              "border-color": "#f8f8f8",
              background: "none"
            });
          $(this)
            .find(".drop_down")
            .hide();
        }
      );
    },
    onSlideStart(slide) {
      let color = "rgb(51, 91, 248)";
      switch (slide) {
        case 0:
          color = "rgb(51, 91, 248)";
          break;
        case 1:
          color = "rgb(142, 223, 208)";
          break;
        case 2:
          color = "rgb(186, 191, 187)";
          break;
        case 3:
          color = "rgb(254, 166, 154)";
          break;
        case 4:
          color = "rgb(134, 218, 202)";
          break;
        case 5:
          color = "rgb(255, 151, 165)";
          break;
        case 6:
          color = "rgb(168, 220, 135)";
          break;
        case 7:
          color = "rgb(254, 165, 151)";
          break;
      }
      $(".main_carousel").css("background", color);
      this.slide = slide;
    },
    onSlideEnd(slide) {},
    bgChange() {
      let color = "rgb(51, 91, 248)";
      $(".main_carousel").css("background", color);
    }
  }
};
</script>

<style scoped>
@import "../style/normalize.css";
@import "../../node_modules/swiper/css/swiper.css";
/* 头部 */
header {
  background: #f8f8f8;
  height: 30px;
  border-bottom: 1px solid #f3f3f3;
}
header > nav {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  line-height: 30px;
  position: relative;
}
.left_nav {
  float: left;
}
.right_nav {
  float: right;
}
.nav_cell {
  position: relative;
  float: left;
}
.order {
  margin-right: 10px;
}
.nav_site {
  position: static;
}
.has_down {
  border-left: 1px solid #f8f8f8;
  border-right: 1px solid #f8f8f8;
  padding: 0px 20px 0px 10px;
}
.drop_down {
  padding: 20px;
  background: #fff;
  position: absolute;
  top: 31px;
  z-index: 99;
  border: 1px solid #ccc;
  border-top: none;
}
.member_model,
.mygome_model,
.serve_model,
.site_model {
  left: 0;
}
.firm_model,
.phone_model {
  right: 0;
}
.drop_down > img {
  width: 200px;
}

.order_model > img {
  width: 150px;
}
.site_model > img {
  width: 1158px;
  height: 200px;
}
.phone_model > img {
  width: 150px;
}
.signIn,
.signUp {
  float: left;
}
.signIn {
  margin: 0 10px 0 12px;
}
/* 搜索 */
.search {
  width: 1200px;
  margin: 0 auto;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search_middle {
  width: 500px;
}
.search_box {
  float: left;
  border: 1px solid #dd00a7;
  border-left: none;
}
.search_middle input {
  width: 316px;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  color: #bbbbbb;
  border: none;
}
.search_right > span {
  font-size: 12px;
  color: #5e5e5e;
  padding: 5px 20px 0 45px;
}
.search_right:hover > span {
  color: #f5004b;
  text-decoration: under;
}
.drop_box {
  padding: 0 20px 0 10px;
  height: 32px;
  line-height: 32px;
  float: left;
  border: 1px solid #dd00a7;
  font-size: 14px;
  color: #a5a5a5;
  position: relative;
}
.drop_box > ul {
  width: 100%;
  position: absolute;
  left: -1px;
  top: 31px;
  z-index: 10;
  display: none;
  border: 1px solid #dd00a7;
  border-top: none;
  background: #fff;
}
.drop_box li {
  padding-left: 10px;
  height: 25px;
  line-height: 25px;
}
.drop_box:hover > ul {
  display: block;
}
.drop_box li:hover {
  background: #f8f8f8;
}
.btn_box {
  width: 90px;
  height: 32px;
  background: #dd00a7;
  text-align: center;
  line-height: 32px;
  float: left;
}
.btn_box > button {
  color: #fff;
  border: none;
  outline: none;
  background: none;
}
.hotSearch {
  margin: 6px 0 0;
  color: #a5a5a5;
  overflow: hidden;
  line-height: 14px;
  height: 14px;
  font-size: 12px;
  cursor: pointer;
}
.hotSearch > span {
  margin-right: 5px;
}
.red {
  color: red;
}
.hotSearch > span:hover {
  color: #f5004b;
}
/* 内容 */
main > nav {
  background: #f8f8f8;
}
.main_nav {
  width: 1200px;
  margin: 0 auto;
  height: 40px;
}
.main_nav > div {
  float: left;
  height: 100%;
  line-height: 40px;
  font-size: 15px;
  color: #000;
}
.main_nav > .main_nav_right {
  float: right;
}
.main_nav > .main_nav_left {
  font-weight: 700;
  color: #585858;
  width: 200px;
  padding-left: 15px;
  background: #f1f1f1;
  position: relative;
}
.main_nav_left > ul {
  width: 100%;
  position: absolute;
  left: 0;
  top: 40px;
  background: rgba(0, 0, 0, 0.5);
}
.main_nav_left li {
  height: 30px;
  line-height: 30px;
  padding-left: 15px;
  width: 100%;
}
.main_nav_left li > a {
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  margin-right: 5px;
}
.main_nav_mid > a {
  float: left;
  font-size: 15px;
  color: #000;
  padding: 0px 13px;
}
.main_nav_mid > a:hover {
  color: #f5004b;
}
.carousel_box {
  width: 1200px;
  margin: 0 auto;
}

.carousel_wrap {
  width: 750px;
  float: left;
  margin-left: 200px;
}

.main_news {
  width: 250px;
  height: 450px;
  opacity: 0.5;
  float: left;
  background: #fff;
}
.item {
  width: 1200px;
  height: 470px;
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 50px;
  text-align: center;
  line-height: 470px;
  border: 2px solid;
}
.menu-wrapper > ul {
  z-index: 960;
  position: fixed;
  left: 35.5px;
  top: calc(50% - 177px);
  display: block;
  border: 1px solid #e6e6e6;
  border-bottom: none;
}
.menu-wrapper li {
  width: 64px;
  text-align: center;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  /* line-height: 44px; */
}
.menu-wrapper .floor_nav {
  height: 31px;
  background: #f6f6f6;
  line-height: 31px;
  font-size: 13px;
  font-weight: 700;
}
.menu-wrapper .floor_nav > a {
  font-size: 12px;
  color: #e5e5e5;
}
.menu-wrapper .up,
.menu-wrapper .down {
  height: 30px;
}
</style>
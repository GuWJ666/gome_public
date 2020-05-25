<template>
  <div class="vant-container">
    <van-button type="primary" loading>主要按钮</van-button>
    <van-cell-group>
      <van-cell icon="location-o" title="单元格" value="内容" @click="showPopup" />
      <van-cell icon="chat-o" title="单元格" value="内容" label="描述信息" @click="showSlide" />
      <van-cell title="选择单个日期" :value="date" @click="show2 = true" />
    </van-cell-group>

    <van-popup
      v-model="show1"
      position="bottom"
      round
      closeable
      close-icon="close"
      :style="{height:'40%'}"
    >
      <van-image
        width="100"
        height="100"
        fit="none"
        round
        :lazy-load="true"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-popup>
    <van-calendar v-model="show2" @confirm="onConfirm" />
    <van-cell-group>
      <van-field v-model="username" error required label="用户名" placeholder="请输入用户名" />
      <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" />
    </van-cell-group>
    <transition name="van-slide-up">
      <div v-show="visible">Slide Up</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      visible: false,
      show2: false,
      date: "",
    };
  },
  methods: {
    showPopup() {
      this.show1 = true;
    },
    showSlide() {
      this.visible = true;
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show2 = false;
      this.date = this.formatDate(date);
    }
  }
};
</script>

<style scoped lang="less">
.vant-container {
  padding: 100px;
}
</style>
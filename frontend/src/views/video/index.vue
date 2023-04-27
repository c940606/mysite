<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
defineProps<{ msg: string }>();

const count = ref(0);

const options = reactive({
  width: "800px", //播放器高度
  height: "450px", //播放器高度
  color: "#409eff", //主题色
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
  title: "", //视频名称
  // src: `https://ukzy.ukubf4.com/share/b18knVxiQdDgrLfy`, //视频源
  src: `https://europe.olemovienews.com/ts2/20221221/sheCCqIa/mp4/sheCCqIa.mp4/index-v1-a1.m3u8`,
  // http://101.43.104.15/?explorer/share/file&hash=b3eeTDScmKavapm11S0YqQ2bQLJej6BFYrDOKEoZ8QIcxN_DELcW2gVFAjtokpV9rQ
  // src: "http://101.43.104.15/?explorer/share/file&hash=b3eeTDScmKavapm11S0YqQ2bQLJej6BFYrDOKEoZ8QIcxN_DELcW2gVFAjtokpV9rQ", //视频源

  type: "m3u8", //视频类型
  poster: "", //封面
});
const onPlay = (ev) => {
  console.log("播放");
};
const onPause = (ev) => {
  console.log(ev, "暂停");
};

const onTimeupdate = (ev) => {
  console.log(ev, "时间更新");
};
const onCanplay = (ev) => {
  console.log(ev, "可以播放");
};
</script>

<template>
  <div>
    <vue3VideoPlay
      v-bind="options"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay"
    />
  </div>
</template>

<style scoped></style>

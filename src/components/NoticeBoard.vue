<script setup lang="ts">
import { ref, computed } from 'vue';

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const greetings = ["Hi!",
  "你在看什么呢？",
  "看看其它地方吧！",
  "Saluton!",
  "こんにちは!",
  "Want to read my article?"
];
const greetingWordLinkMap = {
  "地方": "https://xlog.thricecola.com",
  "article": "https://xlog.thricecola.com"
};

// const likes = [
//   `目前正在喜欢的游戏：艾尔登法环、赛博朋克2077。`,
//   `目前正在喜欢的音乐人：Nyarons。`,
//   `目前正在喜欢的动漫：颠倒的帕提玛、末日三问、少女终末旅行等，还有好多，写不完。`
// ];
// const likeWordLinkMap = {
//   "艾尔登法环": "https://eldenring.bn-ent.net/sc/",
//   "赛博朋克2077": "https://www.cyberpunk.net/",
//   "死亡搁浅": "https://www.kojimaproductions.jp/",
//   "Nyarons": "https://music.163.com/#/artist?id=29998704",
//   "颠倒的帕提玛": "https://zh.moegirl.org.cn/%E9%A2%A0%E5%80%92%E7%9A%84%E5%B8%95%E7%89%B9%E7%8E%9B",
//   "末日三问": "https://zh.moegirl.org.cn/%E6%9C%AB%E6%97%A5%E6%97%B6%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F%E6%9C%89%E6%B2%A1%E6%9C%89%E7%A9%BA%EF%BC%9F%E5%8F%AF%E4%BB%A5%E6%9D%A5%E6%8B%AF%E6%95%91%E5%90%97%EF%BC%9F",
//   "少女终末旅行": "https://zh.moegirl.org.cn/%E5%B0%91%E5%A5%B3%E7%BB%88%E6%9C%AB%E6%97%85%E8%A1%8C"
// };

const greeting = ref('你好');
const isGreetingVisible = ref(true);

// 将文本中的关键词转换为链接
const greetingWithLinks = computed(() => {
  let text = greeting.value;

  for (const [word, link] of Object.entries(greetingWordLinkMap)) {
    const regex = new RegExp(word, 'g');
    text = text.replace(regex, `<a href="${link}" target="_blank">${word}</a>`);
  }

  return text;
});
const changeGreeting = async () => {
  let index = 1;

  while (true) {
    await sleep(3000);

    // 开始淡出
    isGreetingVisible.value = false;

    // 等待淡出动画完成
    await sleep(500);

    // 切换文字
    index += 1;
    if (index >= greetings.length) {
      index = 0;
    }
    greeting.value = greetings[index];

    // 开始淡入
    isGreetingVisible.value = true;
  }
};
changeGreeting()


// const like = ref(likes[0]);
// const isLikeVisible = ref(true);
// // 将文本中的关键词转换为链接
// const likeWithLinks = computed(() => {
//   let text = like.value;

//   for (const [word, link] of Object.entries(likeWordLinkMap)) {
//     const regex = new RegExp(word, 'g');
//     text = text.replace(regex, `<a href="${link}" target="_blank">${word}</a>`);
//   }

//   return text;
// });
// const changeLike = async () => {
//   let index = 0;

//   while (true) {
//     await sleep(4000);

//     // 开始淡出
//     isLikeVisible.value = false;

//     // 等待淡出动画完成
//     await sleep(500);

//     // 切换文字
//     index += 1;
//     if (index >= likes.length) {
//       index = 0;
//     }
//     like.value = likes[index];

//     // 开始淡入
//     isLikeVisible.value = true;
//   }
// };
// changeLike()


</script>

<template>

  <h1 class="trans notice-txt" :class="{ 'fade-out': !isGreetingVisible, 'fade-in': isGreetingVisible }"
    v-html="greetingWithLinks"></h1>

  <!-- <div class="txt">
    <p id="like" :class="{ 'fade-out': !isLikeVisible, 'fade-in': isLikeVisible }" v-html="likeWithLinks"></p>
  </div> -->
</template>

<style scoped>
.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

.trans {
  transition: opacity 0.5s ease-in-out;
}

/* @media (min-width: 768px) {
  h1{}
} */

@media (max-width: 1350px) {
  h1 {
    font-size: 20px;
    white-space: nowrap;
  }
}
</style>

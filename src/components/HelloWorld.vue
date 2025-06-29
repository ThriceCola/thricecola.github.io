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

const likes = [
  `目前正在喜欢的游戏：艾尔登法环、赛博朋克2077。`,
  `目前正在喜欢的音乐人：Nyarons。`,
  `目前正在喜欢的动漫：颠倒的帕提玛、末日三问、少女终末旅行等，还有好多，写不完。`
];
const greetingWordLinkMap = {
  "地方": "https://xlog.thricecola.com",
  "article": "https://xlog.thricecola.com"
};

const likeWordLinkMap = {
  "艾尔登法环": "https://eldenring.bn-ent.net/sc/",
  "赛博朋克2077": "https://www.cyberpunk.net/",
  "死亡搁浅": "https://www.kojimaproductions.jp/",
  "Nyarons": "https://music.163.com/#/artist?id=29998704",
  "颠倒的帕提玛": "https://zh.moegirl.org.cn/%E9%A2%A0%E5%80%92%E7%9A%84%E5%B8%95%E7%89%B9%E7%8E%9B",
  "末日三问": "https://zh.moegirl.org.cn/%E6%9C%AB%E6%97%A5%E6%97%B6%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F%E6%9C%89%E6%B2%A1%E6%9C%89%E7%A9%BA%EF%BC%9F%E5%8F%AF%E4%BB%A5%E6%9D%A5%E6%8B%AF%E6%95%91%E5%90%97%EF%BC%9F",
  "少女终末旅行": "https://zh.moegirl.org.cn/%E5%B0%91%E5%A5%B3%E7%BB%88%E6%9C%AB%E6%97%85%E8%A1%8C"
};

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


const like = ref(likes[0]);
const isLikeVisible = ref(true);
// 将文本中的关键词转换为链接
const likeWithLinks = computed(() => {
  let text = like.value;

  for (const [word, link] of Object.entries(likeWordLinkMap)) {
    const regex = new RegExp(word, 'g');
    text = text.replace(regex, `<a href="${link}" target="_blank">${word}</a>`);
  }

  return text;
});
const changeLike = async () => {
  let index = 0;

  while (true) {
    await sleep(4000);

    // 开始淡出
    isLikeVisible.value = false;

    // 等待淡出动画完成
    await sleep(500);

    // 切换文字
    index += 1;
    if (index >= likes.length) {
      index = 0;
    }
    like.value = likes[index];

    // 开始淡入
    isLikeVisible.value = true;
  }
};

changeGreeting()
changeLike()
</script>

<template>
  <div class="parent-element">
    <div class="title center-element left-align">
      <img src="@/assets/img/512.jpg" alt="头像" class="titleimg">
      <h2>ThriceCola</h2>
      <h1>三瓶可乐不过岗</h1>
      <p class="email">thricecola@hotmail.com</p>

    </div>
    <div class="container">
      <div class="content">
        <div class="fixed-top"></div>
        <div class="greeting-container">
          <p id="greeting" class="greetingTXT" :class="{ 'fade-out': !isGreetingVisible, 'fade-in': isGreetingVisible }"
            v-html="greetingWithLinks"></p>
        </div>
        <div class="txt">
          <p>会一点Rust，会一点node.js，总之就是会一点😣。会打游戏，会吃饭，会小学算术。你是怎么找到我的主页的呢，交个朋友吧。</p>

          <p>写文章的地方：<a href="https://xlog.thricecola.com" target="_blank">xLog</a></p>
          <p>或许<a href="https://xlog.thricecola.com" target="_blank">xLog</a>还没有什么文章，你可以看看我的<a
              href="https://www.coolapk.com/u/3227002" target="_blank">酷安</a>主页。</p>

          <p>更多链接？：<a href="https://github.com/thricecola" target="_blank">GitHub</a>、
            <a href="https://space.bilibili.com/182754936" target="_blank">BiliBili</a>、
            <a href="https://www.pixiv.net/users/41822781" target="_blank">Pixiv</a>
          </p>

          <p id="like" :class="{ 'fade-out': !isLikeVisible, 'fade-in': isLikeVisible }" v-html="likeWithLinks"></p>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .fixed-top {
    height: 30%;
    /* 设置固定的顶部高度 */
  }


  .greeting-container {
    text-align: center;
    padding: 20px;
  }

  #greeting {
    font-size: 24px;
    font-weight: bold;
    transition: opacity 0.5s ease-in-out;
  }

  .container {
    width: 100%;
    /* 设置容器宽度为整个页面宽度 */
    display: flex;
    justify-content: flex-end;
    /* 将内容右对齐 */
  }

  .content {
    position: relative;
    width: 60%;
    /* 设置内容宽度为容器的一半 */
  }

  .txt {
    text-align: justify;

    height: 350px;
    margin-left: 20%;
    margin-right: 20%;
    /* text-align: left; */
    word-wrap: break-word;


    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;

  }
}

@media (max-width: 768px) {
  .greeting-container {
    text-align: center;
    padding: 20px;
  }

  #greeting {
    font-size: 24px;
    font-weight: bold;
    transition: opacity 0.5s ease-in-out;
  }

  .txt {
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    word-wrap: break-word;


    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;

  }
}



.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

#like {
  transition: opacity 0.5s ease-in-out;
}

/* #like {
  animation: fadeInOut 5s infinite;
} */

@keyframes fadeInOut {

  0%,
  100% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }
}

p.email {
  color: #178760;
  margin: 0;
  text-indent: 0px;
}

p.greetingTXT {
  text-indent: 10px;
}

p {
  text-indent: 25px;
  margin: 5px;
}

a:link {
  color: #178760;
  text-decoration: none;
}

a:visited {
  color: #8aafa9;
  text-decoration: none;
}

a:hover {
  color: #9bdacf;
  text-decoration: none;
}

a:active {
  color: #8aafa9;
  text-decoration: none;
}

@media (min-width: 768px) {
  .parent-element {
    display: flex;
    height: 100vh;
  }

  .center-element {
    text-align: center;
    margin-bottom: 100px;
  }

  .titleimg {
    width: 50%;
    border-radius: 50%;
  }

  .title {
    position: fixed;
    top: 35%;
    left: 22.5%;
    width: 220px;
    margin-right: 150px;
  }

  .left-align {
    text-align: left;
  }





}

@media (max-width: 768px) {
  .title {
    text-align: center;
    margin-top: 35%;
  }

  .titleimg {
    width: 35%;
    border-radius: 50%;
  }

}

h1 {
  font-family: Arial, sans-serif;
  font-size: 30px;
  font-weight: normal;
  line-height: 1.2;
  margin: 0;
}

h2 {
  font-family: Arial, sans-serif;
  font-size: 25px;
  font-weight: normal;
  line-height: 1.2;
  margin: 0;
}

/* p {
        font-family: Arial, sans-serif;
        font-size: 20px;
        font-weight: normal;
        line-height: 1.5;
    } */
</style>

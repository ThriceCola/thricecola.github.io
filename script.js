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
    "地方": "https://xlog.threkork.com",
    "article": "https://xlog.threkork.com"
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
const greetingElement = document.getElementById("greeting");
const likeElement = document.getElementById("like");

let currentIndex = 0;
let currentIndex1 = 0;

function replaceWordsWithLinks(text, wordLinkMap) {
    const regex = new RegExp(Object.keys(wordLinkMap).join("|"), "g");
    return text.replace(regex, match => {
        if (wordLinkMap.hasOwnProperty(match)) {
            return `<a href="${wordLinkMap[match]}" target="_blank" >${match}</a>`;
        }
        return match;
    });
}

function rotateGreetings() {
    greetingElement.style.animation = "none"; // 关闭动画
    void greetingElement.offsetWidth; // 强制重新布局
    greetingElement.style.animation = null; // 重新启用动画

    const greetingText = greetings[currentIndex];
    const updatedgreeting = replaceWordsWithLinks(greetingText, greetingWordLinkMap);

    greetingElement.innerHTML = updatedgreeting;
    currentIndex = (currentIndex + 1) % greetings.length;
}
function rotateLikes() {
    likeElement.style.animation = "none"; // 关闭动画
    void likeElement.offsetWidth; // 强制重新布局
    likeElement.style.animation = null; // 重新启用动画

    const likeText = likes[currentIndex1];
    const updatedlike = replaceWordsWithLinks(likeText, likeWordLinkMap);

    likeElement.innerHTML = updatedlike;

    currentIndex1 = (currentIndex1 + 1) % likes.length;
}

greetingElement.addEventListener("animationiteration", rotateGreetings);
likeElement.addEventListener("animationiteration", rotateLikes);
// 初始调用一次以启动循环
rotateGreetings();
rotateLikes();

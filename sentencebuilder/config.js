// config.js — 把 HTML 中的設定抽成獨立檔案
// 全域定義以維持現有程式碼相容性（在 index.html.html 中以 <script src="config.js"></script> 載入）

const grammarRules = {
  I: { verb: "am going" },
  You: { verb: "are going" },
  He: { verb: "is going" },
  She: { verb: "is going" },
  We: { verb: "are going" },
  They: { verb: "are going" },
};

const levelConfig = {
  level1: {
    allowedPlaces: [
      "the bank",
      "the hospital",
      "the museum",
      "the post office",
    ],
    levelNumber: 1,
  },
  level2: {
    allowedPlaces: [
      "the bookstore",
      "the library",
      "the park",
      "the supermarket",
    ],
    levelNumber: 2,
  },
};

const listeningQuestions = [
  {
    id: 1,
    sentence: "He is going to the bank.",
    options: [
      "I am going to the bank.",
      "You are going to the bank.",
      "He is going to the bank.",
      "She is going to the bank.",
    ],
    correctIndex: 2,
  },
  {
    id: 2,
    sentence: "She is going to the hospital.",
    options: [
      "She is going to the hospital.",
      "She are going to the hospital.",
      "She is going to the museum.",
      "They are going to the hospital.",
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    sentence: "I am going to the museum.",
    options: [
      "I am going to the museum.",
      "I is going to the museum.",
      "You are going to the museum.",
      "He is going to the museum.",
    ],
    correctIndex: 0,
  },
  {
    id: 4,
    sentence: "You are going to the post office.",
    options: [
      "You are going to the post office.",
      "You is going to the post office.",
      "We are going to the post office.",
      "You are going to the bank.",
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    sentence: "We are going to the bookstore.",
    options: [
      "We are going to the bookstore.",
      "We is going to the bookstore.",
      "They are going to the bookstore.",
      "We are going to the library.",
    ],
    correctIndex: 0,
  },
  {
    id: 6,
    sentence: "They are going to the park.",
    options: [
      "They are going to the library.",
      "We are going to the park.",
      "They are going to the park.",
      "You are going to the park.",
    ],
    correctIndex: 2,
  },
  {
    id: 7,
    sentence: "You are going to the supermarket.",
    options: [
      "I am going to the supermarket.",
      "You are going to the supermarket.",
      "He is going to the supermarket.",
      "They are going to the supermarket.",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    sentence: "We are going to the park.",
    options: [
      "We are going to the park.",
      "We are going to the library.",
      "They are going to the park.",
      "We is going to the park.",
    ],
    correctIndex: 0,
  },
  {
    id: 9,
    sentence: "They are going to the supermarket.",
    options: [
      "They are going to the supermarket.",
      "They is going to the supermarket.",
      "You are going to the supermarket.",
      "We are going to the supermarket.",
    ],
    correctIndex: 0,
  },
  {
    id: 10,
    sentence: "He is going to the museum.",
    options: [
      "He are going to the museum.",
      "She is going to the museum.",
      "He is going to the museum.",
      "He is going to the bank.",
    ],
    correctIndex: 2,
  },
];

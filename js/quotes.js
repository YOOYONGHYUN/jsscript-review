const quotes = [
  {
    quote: "거 좀 힘들다고 울어 버릇하지마. 어차피 내일도 힘들어.",
    author: "스물",
  },
  {
    quote: "네가 원하는 것 무엇이든 말만 해, 내가 그것이 되어줄게 널 위해.",
    author: "Notebook",
  },
  {
    quote: "행복한지 따져보는 건 우울해지는 지름길이야.",
    author: "우리의 20세기",
  },
  {
    quote:
      "청춘이 영원할 것 같지? 학교에서 발 빼는 순간에 니 청춘이 니 뒤통수를 칠 거다",
    author: "족구왕",
  },
  {
    quote: "다이어트는 왜 안 하세요? 먹는 게 좋으니까! 뚱뚱한 게 죄냐?",
    author: "스쿨 오브 락",
  },
  {
    quote:
      "소중한 순간이 오면 따지지 말고 누릴 것. 우리에게 내일이 있으리란 보장은 없으니까",
    author: "창문 넘어 도망친 100세 노인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteNum = quotes[Math.floor(Math.random() * quotes.length)];

const chosenQuote = quoteNum.quote;
const chosenAuthor = quoteNum.author;

quote.innerText = chosenQuote;
author.innerText = chosenAuthor;

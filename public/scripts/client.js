// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  for (let index of tweets) {
    const render = createTweetElement(index);
    $(".tweet-box").append(render); // takes return value and appends it to the tweets container
  }
};

const createTweetElement = function (data) {
  let $tweet = $(`<article class="tweets">
  <div class="tweet-header">
       
   <span class="tweet-username"><img src="${data.user.avatars}">  <div>${data.user.name}</div></span>
   <span class="user- name">${data.user.handle}</span>
</div>
<p class="tweet-text">${data.content.text}</p>

<footer>
  <time>${data.created_at}</time>
    <article class="hover-icons">
    <i class="fa-thin fa-flag-checkered"></i>
    <i class="fa-sharp fa-solid fa-retweet"></i>
    <i class="fa-sharp fa-solid fa-heart-circle-plus"></i></article>
</footer>
</article>`);

return $tweet;
};

$(document).ready(function () {
  renderTweets(data);
});

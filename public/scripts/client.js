const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $(".tweet-box").empty()
  for (let index of tweets) {
    const render = createTweetElement(index);
    $(".tweet-box").prepend(render); // takes return value and appends it to the tweets container
  }
};

const createTweetElement = function (data) {
  let $tweet = $(`<article class="tweets">
  <div class="tweet-header">
       
   <span class="tweet-username"><img src="${data.user.avatars}">  <div>${
    data.user.name
  }</div></span>
   <span class="user- name">${data.user.handle}</span>
</div>
<p class="tweet-text">${data.content.text}</p>

<footer>
  <time>${timeago.format(data.created_at)}</time>
    <article class="hover-icons">
    <i class="fa-thin fa-flag-checkered"></i>
    <i class="fa-sharp fa-solid fa-retweet"></i>
    <i class="fa-sharp fa-solid fa-heart-circle-plus"></i></article>
</footer>
</article>`);

  return $tweet;
};

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" }).then((tweets) => {
    renderTweets(tweets);
  });
};

$(document).ready(function () {
  $("#request").submit(function (event) {
    event.preventDefault();
    console.log(event);

    $.ajax({
      url: "/tweets/",
      method: "post",
      data: $(this).serialize(),
    }).then(function (res) {
      loadTweets();
    });
  });
  loadTweets();
});

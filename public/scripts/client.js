const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $(".tweet-box").empty();
  for (let index of tweets) {
    const render = createTweetElement(index);
    $(".tweet-box").prepend(render); // takes return value and appends it to the tweets container
  }
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (data) {
  let $tweet = $(`<article class="tweets">
  <div class="tweet-header">
       
   <span class="tweet-username"><img src="${escape(
     data.user.avatars
   )}">  <div>${escape(data.user.name)}
  }</div></span>
   <span class="user- name">${escape(data.user.handle)}</span>
</div>
<p class="tweet-text">${escape(data.content.text)}</p>

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
  $("#error-empty-string").hide();
  $("#error-over-140-char").hide();
  $("#request").submit(function (event) {
    event.preventDefault();
    console.log(event);

    const charMax = 140;
    const inputChar = $(this).find("#tweet-text").val().length;

    if (!inputChar) {
      // return alert("Your Tweet is Empty");
      $("#error-empty-string").slideDown("slow");
      $("#error-over-140-char").hide();
      return;
    } else if (inputChar > charMax) {
      // return alert("Your Tweet Exceeds Max Allowed");
      $("#error-over-140-char").slideDown("slow");
      $("#error-empty-string").hide();
      return;
    } else {
      $("#error-empty-string").hide();
      $("#error-over-140-char").hide();
      $.ajax({
        url: "/tweets/",
        method: "post",
        data: $(this).serialize(),
      }).then(function (res) {
        loadTweets();
      });
    }
  });
  loadTweets();
});

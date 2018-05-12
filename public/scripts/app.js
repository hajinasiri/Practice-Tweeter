/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
function time(time){
  let now_time = new Date();
  let now = now_time.getTime(now_time);
  let secs = (now - parseInt(time)) / 1000;
  let minutes = Math.floor(secs / 60);
  let hours = Math.floor(secs / 3600);
  let days = Math.floor(secs / (3600 * 24));
  let month = Math.floor(secs / (3600 * 24 * 30));
  let years = Math.floor(secs / (3600 *24 *30 * 12));
  let data = "";
  if(years > 0){
    data += years + " years ago";
  }else if(month > 0){
    data += month + " month ago";
  }else if(days > 0){
    data += days + " days ago";
  }else if( hours > 0){
    data += hours + " hours ago";
  }else if(minutes > 0){
    data += minutes + " minutes ago";
  }else{
    data = "Just posted";
  }
  return data;
}

function renderTweets(tweets) {
  tweets.forEach(function(tweet){
    var $this_tweet = createTweetElement(tweet);
    $(document).ready(function () {
    $('.container').append($this_tweet);
  });

  })
}

function createTweetElement(data){
  var single_tweet = document.createElement("section");
  $(single_tweet).addClass("tweet-container");
  let html =
    "<article>" +
      "<header>" +
        "<img src=" + data.user.avatars.regular + ">" +
        "<h2>" + data.user.name + "</h2>" +
      "</header>" +
      "<main>" + data.content.text + "</main>" +
      "<footer>" + time(data.created_at) +
        "<div class='icons'>" +
          "<i class='fa fa-flag' aria-hidden='true'> </i>" +
          "<i class='fa fa-heart' aria-hidden='true'> </i>" +
          "<i class='fa fa-retweet' aria-hidden='true'> </i>" +
        "</div>" +
      "</footer>" +
    "<article>";
  single_tweet.innerHTML = html;
  return single_tweet;
};

renderTweets(data);
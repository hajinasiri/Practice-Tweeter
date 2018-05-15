/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 */
var data = [
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
    $('.old-tweets').prepend($this_tweet);
  });

  })
}
// To sanitize the user input
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  console.log(div.innerHTML);
  return div.innerHTML;
}

function createTweetElement(data){
  var single_tweet = document.createElement("section");
  $(single_tweet).addClass("tweet-container");
  let html =
    "<article>" +
      "<header>" +
        "<img src=" + data.user.avatars.regular + ">" +
        "<h2>" + data.user.name + "</h2>" +
        "<h4>" + data.user.handle + "</h4>" +
      "</header>" +
      "<main>" + escape(data.content.text); + "</main>" +
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

function length_check(text){
  if(text==""){
    alert("You should write something in tweet box");
  }else if(text.length > 140){
    alert("Your tweet can't be more than 140 characters");
  }else{
    return true;
  }
}

renderTweets(data);

function load_tweets(){
  $.getJSON( "/tweets", renderTweets);
}

$( document ).ready(function() {
  $('.new-tweet').slideToggle();
  $('.new-tweet .text').select();
  $(".container .new-tweet .form ").on('submit', function(event){
    let form = this;
    event.preventDefault();
    let text = $(this).find(".text").val();
    let validation = length_check(text);
    if(validation){
      $(this).children('.counter').text("140");
      $.ajax({
        url: '/tweets', //post request url
        method : 'post',
        data: $(this).serialize() //converting the form content to an object and sending it as a data
      }).done(function(){
        form.reset();
        load_tweets();
      });
    }

  });
});
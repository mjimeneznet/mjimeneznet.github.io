var app = new Vue({
    el: '#youtube',
    data: {
        videos: [],
        loading: true
    },
    created: function () {
  // GET request using fetch with error handling
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC_GbNenxiU4cn9gS0V17TjQ")
    .then((res) => res.json())
    .then((data) => {
        const res = data.items
	this.videos = res.filter(item => item.categories.length < 1)
	this.loading = false
    })
    .catch(error => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });
}
})

var app = new Vue({
    el: '#twitch',
    data: {
        videos: [],
        loading: true
    },
    created: function () {
  // GET request using fetch with error handling
  fetch("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ftwitchrss.appspot.com%2Fvod%2Fmjimeneznet")
    .then((res) => res.json())
    .then((data) => {
        const res = data.items
	this.vods= res.filter(item => item.categories.length > 0)
	this.loading = false
    })
    .catch(error => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });
}
})

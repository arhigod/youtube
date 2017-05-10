const Video = require('./video');
class Loader {
    constructor() {
        this.videoCount = 30;
        this.apiKey = 'AIzaSyBGHfTBX5QZMDjUoajJFd6hCRUKCPthHAg';
        this.nextPage = '';
        this.value = '';
        this.loading = false;
    }

    newSearch(value) {
        this.nextPage = '';
        this.value = value;
    }

    getVideos(fn) {
        if (this.nextPage != undefined) {
            let url = `https://www.googleapis.com/youtube/v3/search?pageToken=${this.nextPage}&part=snippet&maxResults=${this.videoCount}&q=${this.value}&key=${this.apiKey}`;
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.nextPage = response.nextPageToken;
                    this.loading = false;
                    return response.items;
                })
                .then(items => items.map(video => video.snippet.thumbnails && video.id.videoId ? new Video(video) : false))
                .then(videos => this.addStatisticAndPush(videos, fn)).catch(err => console.log(err));
        }
    }

    //		trgew

    addStatisticAndPush(videos, fn) {
        videos.forEach((video) => {
            if (video) {
                let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.videoId}&key=${this.apiKey}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => {
                        video.addStatistic(response)
                        fn(video);
                    }).catch(err => console.log(err));
            }
        });
    }
}

module.exports = Loader;

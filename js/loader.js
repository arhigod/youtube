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
                    return response.items;
                })
                .then(items => items.map(video => this.makeObject(video)))
                .then(videos => this.addStatistic(videos, fn)).catch(err => console.log(err));
        }
    }

    //		trgew

    makeObject(item) {
        if (item.snippet.thumbnails) {
            return {
                videoId: item.id.videoId,
                href: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.medium.url,
                channel: item.snippet.channelTitle,
                date: item.snippet.publishedAt.substr(0, 10),
                description: item.snippet.description
            };
        }
        return false;
    }

    addStatistic(videos, fn) {
        videos.forEach((item) => {
            if (item && item.videoId) {
                let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.videoId}&key=${this.apiKey}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => {
                        item.views = response.items[0].statistics.viewCount;
                        fn(item);
                    }).catch(err => console.log(err));
            }
        });
    }
}

module.exports = Loader;

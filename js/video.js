class Video {
    constructor(video) {
        this.videoId = video.id.videoId;
        this.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
        this.title = video.snippet.title;
        this.imgUrl = video.snippet.thumbnails.medium.url;
        this.channel = video.snippet.channelTitle;
        this.date = video.snippet.publishedAt.substr(0, 10);
        this.description = video.snippet.description;
    }

    addStatistic(statistic) {
        this.views = statistic.items[0].statistics.viewCount;
    }
}

module.exports = Video;

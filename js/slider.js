class Slider {
    constructor(loader, layout) {
        this.loader = loader;
        this.layout = layout;
        this.slides = [];
        this.buffer = [];
        this.videosCount = 4;
    }

    init() {
        this.eventListeners();
    }

    newSearch() {
        this.clearSlides();
        this.loader.newSearch(document.getElementById('search-input').value);
        let that = this;
        let fn = function(a) {
            return that.pushVideo(a);
        }
        this.loader.getVideos(fn);
    }

    clearSlides() {
        this.slides = [];
        this.buffer = [];
        this.layout.clear();
    }

    videosInSlide() {
        if (document.documentElement.clientWidth <= 647) return 1;
        if (document.documentElement.clientWidth <= 951) return 2;
        if (document.documentElement.clientWidth <= 1255) return 3;
        return 4;
    }

    pushVideo(video) {
        this.buffer.push(video);
        this.videosCount = this.videosInSlide();
        if (this.buffer.length === this.videosCount) {
            this.slides.push(this.buffer);
            this.layout.renderSlide(this.slides[this.slides.length - 1]);
            this.layout.renderPages(this.getActiveSlideNumber() || 1, this.slides.length);
            this.buffer = [];
        }
    }

    slideMove(newId) {
        newId = Math.min(Math.max(1, newId), this.slides.length);
        let oldId = this.getActiveSlideNumber();
        let slideLeft = (newId - 1) * document.documentElement.clientWidth;
        this.layout.renderPages(newId, this.slides.length);
        document.getElementById('slides').style.left = -slideLeft + 'px';
        this.loadVideos();
    }

    loadVideos() {
        if (this.getActiveSlideNumber() >= this.slides.length - 3 && !this.loader.loading) {
            this.loader.loading = true;
            let that = this;
            let fn = function(a) {
                return that.pushVideo(a);
            }
            this.loader.getVideos(fn);
        }
    }

    getActiveSlideNumber() {
        let pages = document.getElementById('pages').children;
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].classList.contains('active')) {
                return +pages[i].children[0].innerHTML;
            }
        }
    }

    ////////////////////////////////////

    eventListeners() {
        this.eventSearch();
        this.eventPages();
        this.eventSwipe();
        this.eventResize();
    }

    eventSearch() {
        document.getElementById('search-input').addEventListener('keyup', e => {
            if (e.keyCode === 13) this.newSearch();
        });
        document.getElementById('search-button').addEventListener('click', () => this.newSearch());
    }

    eventPages() {
        document.getElementById('pages').addEventListener('click', e => {
            if (e.target.tagName == 'A') {
                this.slideMove(parseInt(e.target.innerHTML));
            }
        });
    }

    eventSwipe() {
        this.eventMouseSwipe();
        this.eventTouchSwipe();
    }

    eventMouseSwipe() {
        document.getElementById('slides').addEventListener('mousedown', (e) => {
            document.getElementById('slides').style['transition-duration'] = '0s';
            this.mouseDown = true;
            this.startSwipe = e.pageX;
            this.startSwipeSlidesPos = parseInt(document.getElementById('slides').style.left);
        });
        document.getElementById('slides').addEventListener('mousemove', e => {
            if (this.mouseDown) {
                document.getElementById('slides').style.left = this.startSwipeSlidesPos - this.startSwipe + e.pageX + 'px';
            }
        });
        document.addEventListener('mouseup', (e) => {
            if (this.mouseDown) {
                document.getElementById('slides').style['transition-duration'] = '1s';
                this.mouseDown = false;
                if (this.startSwipe - e.pageX < -100) {
                    this.slideMove(this.getActiveSlideNumber() - 1);
                } else if (this.startSwipe - e.pageX > 100) {
                    this.slideMove(this.getActiveSlideNumber() + 1);
                } else {
                    this.slideMove(this.getActiveSlideNumber());
                }
            }
        });
    }

    eventTouchSwipe() {
        document.getElementById('slides').addEventListener('touchstart', (e) => {
            document.getElementById('slides').style['transition-duration'] = '0s';
            this.mouseDown = true;
            this.startSwipe = e.changedTouches[0].pageX;
            this.startSwipeSlidesPos = parseInt(document.getElementById('slides').style.left);
        });
        document.getElementById('slides').addEventListener('touchmove', e => {
            if (this.mouseDown) {
                document.getElementById('slides').style.left = this.startSwipeSlidesPos - this.startSwipe + e.changedTouches[0].pageX + 'px';
            }
        });
        document.addEventListener('touchend', (e) => {
            if (this.mouseDown) {
                document.getElementById('slides').style['transition-duration'] = '1s';
                this.mouseDown = false;
                if (this.startSwipe - e.changedTouches[0].pageX < -100) {
                    this.slideMove(this.getActiveSlideNumber() - 1);
                } else if (this.startSwipe - e.changedTouches[0].pageX > 100) {
                    this.slideMove(this.getActiveSlideNumber() + 1);
                } else {
                    this.slideMove(this.getActiveSlideNumber());
                }
            };
        });
    }

    eventResize() {
        window.addEventListener('resize', () => {
            let leftVideo = this.videosCount * (this.getActiveSlideNumber() - 1) + 1;
            let slides = this.slides;
            this.clearSlides();
            slides.forEach(slide => slide.forEach(video => this.pushVideo(video)));
            let newSlideId = Math.floor(leftVideo / this.videosInSlide() - 0.01);
            document.getElementById('slides').style.left = -newSlideId * document.documentElement.clientWidth + 'px';
            this.layout.renderPages(newSlideId + 1, this.slides.length);
        });
    }

}

module.exports = Slider;

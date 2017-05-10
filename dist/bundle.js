/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
    function Layout() {
        _classCallCheck(this, Layout);
    }

    _createClass(Layout, [{
        key: 'init',
        value: function init() {
            this.renderHeader();
            this.renderMain();
            this.renderFooter();
            this.renderIframe();
        }
    }, {
        key: 'renderIframe',
        value: function renderIframe() {
            var iframeBg = document.createElement('div');
            var iframe = document.createElement('iframe');

            document.body.appendChild(iframeBg);
            document.body.appendChild(iframe);

            iframeBg.setAttribute('id', 'iframeBg');
            iframeBg.classList.add('iframeBg');
            iframeBg.addEventListener('mousedown', function (e) {
                iframe.style.visibility = 'hidden';
                iframe.setAttribute('src', '');
                iframeBg.style.visibility = 'hidden';
            });

            iframe.setAttribute('id', 'iframe');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var header = document.createElement('header');
            var search = document.createElement('div');
            var input = document.createElement('input');
            var searchButton = document.createElement('button');
            var i = document.createElement('i');

            document.body.appendChild(header);
            header.appendChild(search);
            search.appendChild(input);
            search.appendChild(searchButton);
            searchButton.appendChild(i);

            search.classList.add('search');

            input.setAttribute('type', 'text');
            input.classList.add('search-input');
            input.setAttribute('id', 'search-input');
            input.setAttribute('autofocus', 'true');

            searchButton.setAttribute('type', 'submit');
            searchButton.classList.add('search-button');
            searchButton.setAttribute('id', 'search-button');

            i.classList.add('fa', 'fa-2x', 'fa-search');
        }
    }, {
        key: 'renderMain',
        value: function renderMain() {
            var main = document.createElement('main');
            var slides = document.createElement('div');

            document.body.appendChild(main);
            main.appendChild(slides);

            slides.classList.add('slides');
            slides.setAttribute('id', 'slides');
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var footer = document.createElement('footer');
            var pages = document.createElement('ul');

            document.body.appendChild(footer);
            footer.appendChild(pages);

            pages.classList.add('pages');
            pages.setAttribute('id', 'pages');
        }

        /////////////////////////////////////////////////////////////////

    }, {
        key: 'renderSlide',
        value: function renderSlide(slide) {
            var _this = this;

            var slides = document.getElementById('slides');
            var slideDiv = document.createElement('div');
            var videos = document.createElement('ul');

            slides.appendChild(slideDiv);
            slideDiv.appendChild(videos);

            slideDiv.classList.add('slide');
            slideDiv.style.left = (slides.children.length - 1) * document.documentElement.clientWidth + 'px';

            videos.classList.add('videos');
            slide.forEach(function (item) {
                _this.renderVideo(item, videos);
            });
        }
    }, {
        key: 'renderVideo',
        value: function renderVideo(video, videos) {
            var _this2 = this;

            var li = document.createElement('li');
            var channel = document.createElement('div');
            var viewsInfo = document.createElement('div');

            videos.appendChild(li);

            li.setAttribute('data-iframe', '' + video.iframe);
            li.addEventListener('mousedown', function (e) {
                if (document.getElementById('iframeBg').style.visibility !== 'visible') _this2.isClick = true;
            });
            li.addEventListener('mousemove', function (e) {
                _this2.isClick = false;
            });
            li.addEventListener('mouseup', function (e) {
                if (_this2.isClick) {
                    _this2.isClick = false;
                    document.getElementById('iframe').setAttribute('src', e.currentTarget.getAttribute('data-iframe'));
                    document.getElementById('iframe').style.visibility = 'visible';
                    document.getElementById('iframeBg').style.visibility = 'visible';
                }
            });

            this.renderTitle(li, video.title, video.href);
            this.renderImg(li, video.imgUrl);
            this.renderData(li, video.date, video.channel, video.views);
            this.renderDescription(li, video.description);
        }
    }, {
        key: 'renderTitle',
        value: function renderTitle(li, title, href) {
            var titleDiv = document.createElement('div');
            var a = document.createElement('a');
            var h3 = document.createElement('h3');

            li.appendChild(titleDiv);
            titleDiv.appendChild(a);
            a.appendChild(h3);

            titleDiv.classList.add('title-video');
            a.setAttribute('href', href);
            h3.innerHTML = title;
        }
    }, {
        key: 'renderImg',
        value: function renderImg(li, imgUrl) {
            var img = document.createElement('div');

            li.appendChild(img);

            img.classList.add('img');
            img.style.background = 'url(' + imgUrl + ') center no-repeat';
        }
    }, {
        key: 'renderData',
        value: function renderData(li, date, channel, views) {
            var info = document.createElement('div');
            var i = void 0;
            var p = void 0;
            var span = void 0;

            li.appendChild(info);
            info.classList.add('info');

            ////////////////
            p = document.createElement('p');
            span = document.createElement('span');

            info.appendChild(p);
            p.appendChild(span);

            p.classList.add('channel');
            span.classList.add('text');
            span.innerHTML = channel;

            ////////////////

            p = document.createElement('p');
            i = document.createElement('i');
            span = document.createElement('span');

            info.appendChild(p);
            p.appendChild(i);
            p.appendChild(span);

            i.classList.add('fa', 'fa-2x', 'fa-calendar');
            span.classList.add('text');
            span.innerHTML = date;

            ////////////////
            p = document.createElement('p');
            i = document.createElement('i');
            span = document.createElement('span');

            info.appendChild(p);
            p.appendChild(i);
            p.appendChild(span);

            i.classList.add('fa', 'fa-2x', 'fa-eye');
            span.classList.add('text');
            span.innerHTML = views;
        }
    }, {
        key: 'renderDescription',
        value: function renderDescription(li, description) {
            var info = document.createElement('div');
            var p = document.createElement('p');
            var span = document.createElement('span');

            li.appendChild(info);
            info.appendChild(p);
            p.appendChild(span);

            info.classList.add('info');
            p.style.height = '110px';
            p.classList.add('description');
            span.classList.add('text');
            span.style.height = 'inherit';
            span.innerHTML = description;
        }

        //////////////

    }, {
        key: 'renderPages',
        value: function renderPages(activ, count) {
            var pages = document.getElementById('pages');
            pages.innerHTML = '';
            var leftPage = document.documentElement.clientWidth < 461 ? Math.max(1, activ - 1) : Math.max(1, activ - 2);
            var rightPage = document.documentElement.clientWidth < 461 ? Math.min(Math.max(1, activ - 1) + 2, count) : Math.min(Math.max(1, activ - 2) + 4, count);
            for (var i = leftPage; i <= rightPage; i++) {
                var li = document.createElement('li');
                var a = document.createElement('a');

                pages.appendChild(li);
                li.appendChild(a);

                if (activ == i) li.classList.add('active');
                a.innerHTML = i;
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            document.getElementById('slides').innerHTML = '';
            document.getElementById('search-input').focus();
            document.getElementById('slides').style.left = '0px';
            document.getElementById('pages').innerHTML = '';
        }
    }]);

    return Layout;
}();

module.exports = Layout;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Video = __webpack_require__(4);

var Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);

        this.videoCount = 30;
        this.apiKey = 'AIzaSyBGHfTBX5QZMDjUoajJFd6hCRUKCPthHAg';
        this.nextPage = '';
        this.value = '';
        this.loading = false;
    }

    _createClass(Loader, [{
        key: 'newSearch',
        value: function newSearch(value) {
            this.nextPage = '';
            this.value = value;
        }
    }, {
        key: 'getVideos',
        value: function getVideos(fn) {
            var _this = this;

            if (this.nextPage != undefined) {
                var url = 'https://www.googleapis.com/youtube/v3/search?pageToken=' + this.nextPage + '&part=snippet&maxResults=' + this.videoCount + '&q=' + this.value + '&key=' + this.apiKey;
                fetch(url).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    console.log(response);
                    _this.nextPage = response.nextPageToken;
                    _this.loading = false;
                    return response.items;
                }).then(function (items) {
                    return items.map(function (video) {
                        return video.snippet.thumbnails && video.id.videoId ? new Video(video) : false;
                    });
                }).then(function (videos) {
                    return _this.addStatisticAndPush(videos, fn);
                }).catch(function (err) {
                    return console.log(err);
                });
            }
        }

        //		trgew

    }, {
        key: 'addStatisticAndPush',
        value: function addStatisticAndPush(videos, fn) {
            var _this2 = this;

            videos.forEach(function (video) {
                if (video) {
                    var url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + video.videoId + '&key=' + _this2.apiKey;
                    fetch(url).then(function (response) {
                        return response.json();
                    }).then(function (response) {
                        video.addStatistic(response);
                        fn(video);
                    }).catch(function (err) {
                        return console.log(err);
                    });
                }
            });
        }
    }]);

    return Loader;
}();

module.exports = Loader;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(loader, layout) {
        _classCallCheck(this, Slider);

        this.loader = loader;
        this.layout = layout;
        this.slides = [];
        this.buffer = [];
        this.videosCount = 4;
    }

    _createClass(Slider, [{
        key: 'init',
        value: function init() {
            this.eventListeners();
        }
    }, {
        key: 'newSearch',
        value: function newSearch() {
            if (!this.loader.loading) {
                this.loader.loading = true;
                this.clearSlides();
                this.loader.newSearch(document.getElementById('search-input').value);
                var that = this;
                var fn = function fn(a) {
                    return that.pushVideo(a);
                };
                this.loader.getVideos(fn);
            }
        }
    }, {
        key: 'clearSlides',
        value: function clearSlides() {
            this.slides = [];
            this.buffer = [];
            this.layout.clear();
        }
    }, {
        key: 'videosInSlide',
        value: function videosInSlide() {
            if (document.documentElement.clientWidth <= 647) return 1;
            return Math.ceil((document.documentElement.clientWidth - 647) / 304) + 1;
        }
    }, {
        key: 'pushVideo',
        value: function pushVideo(video) {
            this.buffer.push(video);
            this.videosCount = this.videosInSlide();
            if (this.buffer.length === this.videosCount) {
                this.slides.push(this.buffer);
                this.layout.renderSlide(this.slides[this.slides.length - 1]);
                this.layout.renderPages(this.getActiveSlideNumber() || 1, this.slides.length);
                this.buffer = [];
            }
        }
    }, {
        key: 'slideMove',
        value: function slideMove(newId) {
            newId = Math.min(Math.max(1, newId), this.slides.length);
            var oldId = this.getActiveSlideNumber();
            var slideLeft = (newId - 1) * document.documentElement.clientWidth;
            this.layout.renderPages(newId, this.slides.length);
            document.getElementById('slides').style.left = -slideLeft + 'px';
            this.loadVideos();
        }
    }, {
        key: 'loadVideos',
        value: function loadVideos() {
            if (this.getActiveSlideNumber() >= this.slides.length - 3 && !this.loader.loading) {
                this.loader.loading = true;
                var that = this;
                var fn = function fn(a) {
                    return that.pushVideo(a);
                };
                this.loader.getVideos(fn);
            }
        }
    }, {
        key: 'getActiveSlideNumber',
        value: function getActiveSlideNumber() {
            var pages = document.getElementById('pages').children;
            for (var i = 0; i < pages.length; i++) {
                if (pages[i].classList.contains('active')) {
                    return +pages[i].children[0].innerHTML;
                }
            }
        }

        ////////////////////////////////////

    }, {
        key: 'eventListeners',
        value: function eventListeners() {
            this.eventSearch();
            this.eventPages();
            this.eventSwipe();
            this.eventResize();
        }
    }, {
        key: 'eventSearch',
        value: function eventSearch() {
            var _this = this;

            document.getElementById('search-input').addEventListener('keyup', function (e) {
                if (e.keyCode === 13) _this.newSearch();
            });
            document.getElementById('search-button').addEventListener('click', function () {
                return _this.newSearch();
            });
        }
    }, {
        key: 'eventPages',
        value: function eventPages() {
            var _this2 = this;

            document.getElementById('pages').addEventListener('click', function (e) {
                if (e.target.tagName == 'A') {
                    _this2.slideMove(parseInt(e.target.innerHTML));
                }
            });
        }
    }, {
        key: 'eventSwipe',
        value: function eventSwipe() {
            this.eventMouseSwipe();
            this.eventTouchSwipe();
        }
    }, {
        key: 'eventMouseSwipe',
        value: function eventMouseSwipe() {
            var _this3 = this;

            document.getElementById('slides').addEventListener('mousedown', function (e) {
                document.getElementById('slides').style['transition-duration'] = '0s';
                _this3.mouseDown = true;
                _this3.startSwipe = e.pageX;
                _this3.startSwipeSlidesPos = parseInt(document.getElementById('slides').style.left);
            });
            document.getElementById('slides').addEventListener('mousemove', function (e) {
                if (_this3.mouseDown) {
                    document.getElementById('slides').style.left = _this3.startSwipeSlidesPos - _this3.startSwipe + e.pageX + 'px';
                }
            });
            document.addEventListener('mouseup', function (e) {
                if (_this3.mouseDown) {
                    document.getElementById('slides').style['transition-duration'] = '1s';
                    _this3.mouseDown = false;
                    if (_this3.startSwipe - e.pageX < -100) {
                        _this3.slideMove(_this3.getActiveSlideNumber() - 1);
                    } else if (_this3.startSwipe - e.pageX > 100) {
                        _this3.slideMove(_this3.getActiveSlideNumber() + 1);
                    } else {
                        _this3.slideMove(_this3.getActiveSlideNumber());
                    }
                }
            });
        }
    }, {
        key: 'eventTouchSwipe',
        value: function eventTouchSwipe() {
            var _this4 = this;

            document.getElementById('slides').addEventListener('touchstart', function (e) {
                document.getElementById('slides').style['transition-duration'] = '0s';
                _this4.mouseDown = true;
                _this4.startSwipe = e.changedTouches[0].pageX;
                _this4.startSwipeSlidesPos = parseInt(document.getElementById('slides').style.left);
            });
            document.getElementById('slides').addEventListener('touchmove', function (e) {
                if (_this4.mouseDown) {
                    document.getElementById('slides').style.left = _this4.startSwipeSlidesPos - _this4.startSwipe + e.changedTouches[0].pageX + 'px';
                }
            });
            document.addEventListener('touchend', function (e) {
                if (_this4.mouseDown) {
                    document.getElementById('slides').style['transition-duration'] = '1s';
                    _this4.mouseDown = false;
                    if (_this4.startSwipe - e.changedTouches[0].pageX < -100) {
                        _this4.slideMove(_this4.getActiveSlideNumber() - 1);
                    } else if (_this4.startSwipe - e.changedTouches[0].pageX > 100) {
                        _this4.slideMove(_this4.getActiveSlideNumber() + 1);
                    } else {
                        _this4.slideMove(_this4.getActiveSlideNumber());
                    }
                };
            });
        }
    }, {
        key: 'eventResize',
        value: function eventResize() {
            var _this5 = this;

            window.addEventListener('resize', function () {
                var leftVideo = _this5.videosCount * (_this5.getActiveSlideNumber() - 1) + 1 || 1;
                var slides = _this5.slides;
                slides.push(_this5.buffer);
                _this5.clearSlides();
                slides.forEach(function (slide) {
                    return slide.forEach(function (video) {
                        return _this5.pushVideo(video);
                    });
                });
                var newSlideId = Math.floor(leftVideo / _this5.videosInSlide() - 0.01);
                document.getElementById('slides').style.left = -newSlideId * document.documentElement.clientWidth + 'px';
                _this5.layout.renderPages(newSlideId + 1, _this5.slides.length);
            });
        }
    }]);

    return Slider;
}();

module.exports = Slider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Layout = __webpack_require__(0);
var Loader = __webpack_require__(1);
var Slider = __webpack_require__(2);

var layout = new Layout();
layout.init();

var loader = new Loader();

var slider = new Slider(loader, layout);
slider.init();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Video = function () {
    function Video(video) {
        _classCallCheck(this, Video);

        this.videoId = video.id.videoId;
        this.href = "https://www.youtube.com/watch?v=" + video.id.videoId;
        this.iframe = "https://www.youtube.com/embed/" + video.id.videoId;
        this.title = video.snippet.title;
        this.imgUrl = video.snippet.thumbnails.medium.url;
        this.channel = video.snippet.channelTitle;
        this.date = video.snippet.publishedAt.substr(0, 10);
        this.description = video.snippet.description;
    }

    _createClass(Video, [{
        key: "addStatistic",
        value: function addStatistic(statistic) {
            this.views = statistic.items[0].statistics.viewCount;
        }
    }]);

    return Video;
}();

module.exports = Video;

/***/ })
/******/ ]);
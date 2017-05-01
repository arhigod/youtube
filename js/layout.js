class Layout {
    constructor() {}

    init() {
        this.renderHeader();
        this.renderMain();
        this.renderFooter();
    }

    renderHeader() {
        let header = document.createElement('header');
        let search = document.createElement('div');
        let input = document.createElement('input');
        let searchButton = document.createElement('button');
        let i = document.createElement('i');

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

    renderMain() {
        let main = document.createElement('main');
        let slides = document.createElement('div');

        document.body.appendChild(main);
        main.appendChild(slides);

        slides.classList.add('slides');
        slides.setAttribute('id', 'slides');
    }

    renderFooter() {
        let footer = document.createElement('footer');
        let pages = document.createElement('ul');

        document.body.appendChild(footer);
        footer.appendChild(pages);

        pages.classList.add('pages');
        pages.setAttribute('id', 'pages');
    }

    /////////////////////////////////////////////////////////////////

    renderSlide(slide) {
    	let slides = document.getElementById('slides');
        let slide = document.createElement('div');
        let videos = document.createElement('ul');

        slides.appendChild(slide);
        slide.appendChild(videos);

        slide.classList.add('slide');
        slide.style.left = (slides.children.length-1) * document.documentElement.clientWidth + 'px';

        videos.classList.add('videos');
        slide.forEach(item => {
            this.renderVideo(item, videos);
        });
    }

    renderVideo(video, videos) {
        let li = document.createElement('li');
        let channel = document.createElement('div');
        let viewsInfo = document.createElement('div');

        videos.appendChild(li);

        this.renderTitle(li, video.title, video.hrefYouTube);
        this.renderImg(li, video.imgUrl);
        this.renderData(li, video.date, video.channel, video.views);
        this.renderDescription(li, video.description);
    }

    renderTitle(li, title, href) {
        let title = document.createElement('div');
        let a = document.createElement('a');
        let h3 = document.createElement('h3');

        li.appendChild(title);
        title.appendChild(a);
        a.appendChild(h3);

        title.classList.add('title-video');
        a.setAttribute('href', href);
        h3.innerHTML = title;
    }

    renderImg(li, imgUrl) {
        let img = document.createElement('div');

        li.appendChild(img);

        img.classList.add('img');
        img.style.background = `url(${imgUrl}) no-repeat`;
    }

    renderData(li, date, channel, views) {
        let info = document.createElement('div');
        let i;
        let p;
        let span;

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

    renderDescription(li, description) {
        let info = document.createElement('div');
        let p = document.createElement('p');
        let span = document.createElement('span');

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

    renderPages(activ, count) {
        let pages = document.getElementById('pages');
        pages.innerHTML = '';
        for (let i = Math.max(1, activ - 2); i <= Math.min(Math.max(1, activ - 2)+4, count); i++) {
            let li = document.createElement('li');
            let a = document.createElement('a');

            pages.appendChild(li);
            li.appendChild(a);

            if (activ==i) li.classList.add('active');
            a.innerHTML = i;
        }
    }

    clear() {
        document.getElementById('slides').innerHTML = '';
        document.getElementById('search-input').focus();
        document.getElementById('slides').style.left = '0px';
        document.getElementById('pages').innerHTML = '';
    }

}

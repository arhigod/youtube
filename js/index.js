const Layout = require('./layout');
const Loader = require('./loader');
const Slider = require('./slider');

let layout = new Layout();
layout.init();

let loader = new Loader();

let slider = new Slider(loader, layout);
slider.init();

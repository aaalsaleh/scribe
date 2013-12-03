require({
  baseUrl: '../../src',
  paths: {
    'event-emitter': '../../bower_components/eventEmitter/EventEmitter',
    'html-janitor': '../../bower_components/html-janitor/src/html-janitor'
  },
  shim: {
    'event-emitter': {
      exports: 'EventEmitter'
    }
  },
  packages: [
    {
      name: 'lodash',
      location: '../../bower_components/lodash-amd/modern'
    }
  ]
}, [
  'scribe',
  'plugins/toolbar',
  'plugins/smart-list',
  'plugins/curly-quotes'
], function (
  Scribe,
  toolbar,
  smartList,
  curlyQuotes
) {

  'use strict';

  var scribe = new Scribe(document.querySelector('.scribe'));

  scribe.on('content-changed', updateHTML);

  function updateHTML() {
    document.querySelector('.scribe-html').textContent = scribe.el.innerHTML;
  }

  scribe.use(toolbar(document.querySelector('.toolbar')));
  scribe.use(smartList());
  scribe.use(curlyQuotes());

  scribe.initialize();

});

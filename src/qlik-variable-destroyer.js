import initialProperties from './initial-properties.js';
import template from './template.html';
import definition from './definition.js';
import controller from './controller.js';
import paint from './paint.js';
import resize from './resize.js';
import localCSS from './style.scss';

export default window.define(['qlik'], function(qlik) {
  return {
    initialProperties: initialProperties,
    template: template,
    definition: definition,
    controller: controller(qlik),
    paint: paint,
    resize: resize
  }
})
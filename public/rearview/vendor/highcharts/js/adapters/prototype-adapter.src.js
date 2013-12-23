/**
 * @license Highcharts JS v2.3.3 (2012-10-04)
 * Prototype adapter
 *
 * @author Michael Nelson, Torstein Hønsi.
 *
 * Feel free to use and modify this script.
 * Highcharts license: www.highcharts.com/license.
 */

var HighchartsAdapter=function(){var t="undefined"!=typeof Effect;return{init:function(e){t&&(Effect.HighchartsTransition=Class.create(Effect.Base,{initialize:function(t,n,i,r){var h,a;this.element=t,this.key=n,h=t.attr?t.attr(n):$(t).getStyle(n),"d"===n&&(this.paths=e.init(t,t.d,i),this.toD=i,h=0,i=1),a=Object.extend(r||{},{from:h,to:i,attribute:n}),this.start(a)},setup:function(){HighchartsAdapter._extend(this.element),this.element._highchart_animation||(this.element._highchart_animation={}),this.element._highchart_animation[this.key]=this},update:function(t){var n,i=this.paths,r=this.element;i&&(t=e.step(i[0],i[1],t,this.toD)),r.attr?r.attr(this.options.attribute,t):(n={},n[this.options.attribute]=t,$(r).setStyle(n))},finish:function(){delete this.element._highchart_animation[this.key]}}))},adapterRun:function(t,e){return parseInt($(t).getStyle(e),10)},getScript:function(t,e){var n=$$("head")[0];n&&n.appendChild(new Element("script",{type:"text/javascript",src:t}).observe("load",e))},addNS:function(t){var e=/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,n=/^(?:click|mouse(?:down|up|over|move|out))$/;return e.test(t)||n.test(t)?t:"h:"+t},addEvent:function(t,e,n){t.addEventListener||t.attachEvent?Event.observe($(t),HighchartsAdapter.addNS(e),n):(HighchartsAdapter._extend(t),t._highcharts_observe(e,n))},animate:function(e,n,i){var r,h;if(i=i||{},i.delay=0,i.duration=(i.duration||500)/1e3,i.afterFinish=i.complete,t)for(r in n)h=new Effect.HighchartsTransition($(e),r,n[r],i);else{if(e.attr)for(r in n)e.attr(r,n[r]);i.complete&&i.complete()}e.attr||$(e).setStyle(n)},stop:function(t){var e;if(t._highcharts_extended&&t._highchart_animation)for(e in t._highchart_animation)t._highchart_animation[e].cancel()},each:function(t,e){$A(t).each(e)},inArray:function(t,e){return e.indexOf(t)},offset:function(t){return $(t).cumulativeOffset()},fireEvent:function(t,e,n,i){t.fire?t.fire(HighchartsAdapter.addNS(e),n):t._highcharts_extended&&(n=n||{},t._highcharts_fire(e,n)),n&&n.defaultPrevented&&(i=null),i&&i(n)},removeEvent:function(t,e,n){$(t).stopObserving&&(e&&(e=HighchartsAdapter.addNS(e)),$(t).stopObserving(e,n)),window===t?Event.stopObserving(t,e,n):(HighchartsAdapter._extend(t),t._highcharts_stop_observing(e,n))},washMouseEvent:function(t){return t},grep:function(t,e){return t.findAll(e)},map:function(t,e){return t.map(e)},merge:function(){function t(e,n){var i,r;for(r in n)i=n[r],e[r]=i&&"object"==typeof i&&i.constructor!==Array&&"number"!=typeof i.nodeType?t(e[r]||{},i):n[r];return e}function e(){var e,n=arguments,i={};for(e=0;e<n.length;e++)i=t(i,n[e]);return i}return e.apply(this,arguments)},_extend:function(t){t._highcharts_extended||Object.extend(t,{_highchart_events:{},_highchart_animation:null,_highcharts_extended:!0,_highcharts_observe:function(t,e){this._highchart_events[t]=[this._highchart_events[t],e].compact().flatten()},_highcharts_stop_observing:function(t,e){t?e?this._highchart_events[t]=[this._highchart_events[t]].compact().flatten().without(e):delete this._highchart_events[t]:this._highchart_events={}},_highcharts_fire:function(t,e){(this._highchart_events[t]||[]).each(function(t){e.stopped||(e.preventDefault=function(){e.defaultPrevented=!0},t.bind(this)(e)===!1&&e.preventDefault())}.bind(this))}})}}}();
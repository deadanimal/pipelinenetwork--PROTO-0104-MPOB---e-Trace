(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"VlD+":function(o,t,e){"use strict";var i=e("NSr3"),r=e("VIqg"),c=e("TYT/"),n=Object(r.a)().domain([100,3e3]).range(["#AAAAAA","#444444"]),s={Russia:{color:n(300)},Canada:{color:n(120)},China:{color:n(1300)},"United States":{color:n(2920)},Brazil:{color:n(550)},Australia:{color:n(760)},India:{color:n(200)},Argentina:{color:n(240)},Romania:{color:n(600)},Algeria:{color:n(540)}},a=function(){function o(){}return o.prototype.getCountries=function(){return s},o.\u0275prov=c.Mb({token:o,factory:o.\u0275fac=function(t){return new(t||o)}}),o}(),l=e("ghUt"),u=e("2uaZ");e.d(t,"a",(function(){return d}));var p=function(){return[0,0,0,0]},d=function(){function o(o){this.worldMap=i.world,this.countries=o.getCountries(),this.customizeTooltip=this.customizeTooltip.bind(this),this.customizeLayers=this.customizeLayers.bind(this),this.click=this.click.bind(this)}return o.prototype.customizeTooltip=function(o){return{text:o.attribute("name"),color:"#FFFFFF",fontColor:"#000"}},o.prototype.customizeLayers=function(o){var t=this;o.forEach((function(o){var e=t.countries[o.attribute("name")];o.applySettings(e?{color:e.color,hoveredColor:e.color,selectedColor:e.color}:{color:"#e4e4e4",hoveredColor:"#e4e4e4",selectedColor:"#e4e4e4"})}))},o.prototype.click=function(o){var t=o.target;t&&this.countries[t.attribute("name")]&&t.selected(!t.selected())},o.\u0275fac=function(t){return new(t||o)(c.Qb(a))},o.\u0275cmp=c.Kb({type:o,selectors:[["app-vector-map-component"]],features:[c.Bb([a])],decls:5,vars:7,consts:[["id","vector-map",3,"bounds","onClick"],[3,"enabled","customizeTooltip"],["color","#fff"],[3,"visible"],[3,"dataSource","customize"]],template:function(o,t){1&o&&(c.Wb(0,"dx-vector-map",0),c.ic("onClick",(function(o){return t.click(o)})),c.Wb(1,"dxo-tooltip",1),c.Rb(2,"dxo-font",2),c.Rb(3,"dxo-border",3),c.Vb(),c.Rb(4,"dxi-layer",4),c.Vb()),2&o&&(c.tc("bounds",c.wc(6,p)),c.Cb(1),c.tc("enabled",!0)("customizeTooltip",t.customizeTooltip),c.Cb(2),c.tc("visible",!1),c.Cb(1),c.tc("dataSource",t.worldMap)("customize",t.customizeLayers))},directives:[l.a,u.v,u.j,u.f,u.a],styles:["#vector-map{min-height:220px;width:100%;display:block}  #vector-map>svg>rect{display:none}"]}),o}()}}]);
(function(){var h,k=this;function n(a){return void 0!==a}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return"array"==q(a)}function aa(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function w(a){return a[ca]||(a[ca]=++da)}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return x.apply(null,arguments)}var ga=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&n(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}function z(a,b){function c(){}c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function A(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}z(A,Error);A.prototype.name="CustomError";function ha(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ia(a){if(!ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;"));return a}
var ka=/&/g,la=/</g,ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/;function ra(a,b){return a<b?-1:a>b?1:0};function sa(a,b){b.unshift(a);A.call(this,ha.apply(null,b));b.shift()}z(sa,A);sa.prototype.name="AssertionError";function B(a,b){throw new sa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var C=Array.prototype;function D(a,b,c){C.forEach.call(a,b,c)}function ta(a,b){var c=C.indexOf.call(a,b,void 0),d;(d=0<=c)&&C.splice.call(a,c,1);return d}function ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var E;a:{var va=k.navigator;if(va){var wa=va.userAgent;if(wa){E=wa;break a}}E=""}function F(a){return-1!=E.indexOf(a)};function xa(){return k.navigator||null}var ya=F("Opera")||F("OPR"),G=F("Trident")||F("MSIE"),H=F("Gecko")&&-1==E.toLowerCase().indexOf("webkit")&&!(F("Trident")||F("MSIE")),za=-1!=E.toLowerCase().indexOf("webkit");za&&F("Mobile");var Aa,Ba=xa();Aa=Ba&&Ba.platform||"";Aa.indexOf("Mac");Aa.indexOf("Win");Aa.indexOf("Linux");xa()&&(xa().appVersion||"").indexOf("X11");var I=E;I&&I.indexOf("Android");I&&I.indexOf("iPhone");I&&I.indexOf("iPad");
function Ca(){var a=k.document;return a?a.documentMode:void 0}var Da=function(){var a="",b;if(ya&&k.opera)return a=k.opera.version,"function"==q(a)?a():a;H?b=/rv\:([^\);]+)(\)|;)/:G?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:za&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(E))?a[1]:"");return G&&(b=Ca(),b>parseFloat(a))?String(b):a}(),Ea={};
function J(a){var b;if(!(b=Ea[a])){b=0;for(var c=String(Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",m=d[f]||"",qa=RegExp("(\\d*)(\\D*)","g"),Hb=RegExp("(\\d*)(\\D*)","g");do{var u=qa.exec(g)||["","",""],p=Hb.exec(m)||["","",""];if(0==u[0].length&&0==p[0].length)break;b=ra(0==u[1].length?0:parseInt(u[1],10),0==p[1].length?0:parseInt(p[1],10))||ra(0==u[2].length,0==p[2].length)||
ra(u[2],p[2])}while(0==b)}b=Ea[a]=0<=b}return b}var Fa=k.document,Ga=Fa&&G?Ca()||("CSS1Compat"==Fa.compatMode?parseInt(Da,10):5):void 0;var Ha=!G||G&&9<=Ga,Ia=G&&!J("9");!za||J("528");H&&J("1.9b")||G&&J("8")||ya&&J("9.5")||za&&J("528");H&&!J("8")||G&&J("9");function Ja(){0!=Ka&&w(this)}var Ka=0;function K(a,b){this.type=a;this.a=this.b=b}K.prototype.c=function(){};function La(a){La[" "](a);return a}La[" "]=function(){};function L(a,b){K.call(this,a?a.type:"");this.e=this.state=this.a=this.b=null;if(a){this.type=a.type;this.b=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&H)try{La(c.nodeName)}catch(d){}this.state=a.state;this.e=a;a.defaultPrevented&&this.c()}}z(L,K);L.prototype.c=function(){L.Z.c.call(this);var a=this.e;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ia)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var M="closure_listenable_"+(1E6*Math.random()|0),Ma=0;function Na(a,b,c,d,e){this.o=a;this.proxy=null;this.src=b;this.type=c;this.B=!!d;this.C=e;++Ma;this.s=this.A=!1}function Oa(a){a.s=!0;a.o=null;a.proxy=null;a.src=null;a.C=null};function Pa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ra(a){var b={},c;for(c in a)b[c]=a[c];return b}function Sa(a){var b={},c;for(c in a)b[a[c]]=c;return b}var Ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ta.length;f++)c=Ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function O(a){this.src=a;this.a={};this.b=0}O.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Va(a,b,d,e);-1<g?(b=a[g],c||(b.A=!1)):(b=new Na(b,this.src,f,!!d,e),b.A=c,a.push(b));return b};O.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Va(e,b,c,d);return-1<b?(Oa(e[b]),C.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
function Wa(a,b){var c=b.type;c in a.a&&ta(a.a[c],b)&&(Oa(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Va(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.s&&f.o==b&&f.B==!!c&&f.C==d)return e}return-1};var Xa="closure_lm_"+(1E6*Math.random()|0),Ya={},Za=0;function $a(a,b,c,d,e){if(s(b)){for(var f=0;f<b.length;f++)$a(a,b[f],c,d,e);return null}c=ab(c);return a&&a[M]?a.r.add(String(b),c,!1,d,e):bb(a,b,c,!1,d,e)}function bb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,m=cb(a);m||(a[Xa]=m=new O(a));c=m.add(b,c,d,e,f);if(c.proxy)return c;d=db();c.proxy=d;d.src=a;d.o=c;a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(eb(b.toString()),d);Za++;return c}
function db(){var a=fb,b=Ha?function(c){return a.call(b.src,b.o,c)}:function(c){c=a.call(b.src,b.o,c);if(!c)return c};return b}function gb(a,b,c,d,e){if(s(b))for(var f=0;f<b.length;f++)gb(a,b[f],c,d,e);else c=ab(c),a&&a[M]?a.r.add(String(b),c,!0,d,e):bb(a,b,c,!0,d,e)}function hb(a,b,c,d,e){if(s(b))for(var f=0;f<b.length;f++)hb(a,b[f],c,d,e);else(c=ab(c),a&&a[M])?a.r.remove(String(b),c,d,e):a&&(a=cb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Va(b,c,!!d,e)),(c=-1<a?b[a]:null)&&ib(c))}
function ib(a){if("number"!=typeof a&&a&&!a.s){var b=a.src;if(b&&b[M])Wa(b.r,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.B):b.detachEvent&&b.detachEvent(eb(c),d);Za--;(c=cb(b))?(Wa(c,a),0==c.b&&(c.src=null,b[Xa]=null)):Oa(a)}}}function eb(a){return a in Ya?Ya[a]:Ya[a]="on"+a}function jb(a,b,c,d){var e=1;if(a=cb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.B==c&&!f.s&&(e&=!1!==kb(f,d))}return Boolean(e)}
function kb(a,b){var c=a.o,d=a.C||a.src;a.A&&ib(a);return c.call(d,b)}
function fb(a,b){if(a.s)return!0;if(!Ha){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new L(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,m=e.length-1;0<=m;m--)c.a=e[m],d&=jb(e[m],f,!0,c);for(m=0;m<e.length;m++)c.a=e[m],d&=jb(e[m],f,!1,c)}return d}return kb(a,
new L(b,this))}function cb(a){a=a[Xa];return a instanceof O?a:null}var lb="__closure_events_fn_"+(1E9*Math.random()>>>0);function ab(a){return"function"==q(a)?a:a[lb]||(a[lb]=function(b){return a.handleEvent(b)})};function P(a){this.map=a;this.b=this.e=null;this.h=[];this.n={};this.c={};this.f=this.g=null;this.map.on("change:view",function(){this.v(this.map.getView())},this);this.v(this.map.getView());this.map.on("change:layergroup",function(){mb(this,this.map.getLayers())},this);mb(this,this.map.getLayers())}P.prototype.v=function(a){this.e=a;nb(this);this.m()};
function mb(a,b){null===a.b||D(a.h,a.b.unByKey);a.b=b;if(null===b)a.h=[];else{var c=x(function(){this.m()},a);a.h=[b.on("add",c),b.on("remove",c)]}nb(a);a.m()}P.prototype.m=function(){null!==this.e&&null!==this.b&&(this.g=Ra(this.c),this.f=Sa(this.n),this.i(!1),this.b.forEach(function(a){ob(this,a)},this),D(Qa(this.f),function(a){var b=this.n[a];n(b)&&(delete this.n[a],null===b||this.D(b))},this),this.f=null,Pa(this.g,function(a,b){D(a,this.map.unByKey);delete this.c[b]},this),this.g=null)};
function ob(a,b){if(null!==b){var c=w(b);if(b instanceof ol.layer.Group){var d=b.getLayers();n(d)&&d.forEach(function(a){ob(this,a)},a);if(!n(a.c[c])){var e=[];a.c[c]=e;var f,g=[],m=x(function(){f=b.getLayers();if(n(f)){var a=x(function(){this.m()},this);g=[f.on("add",a),f.on("remove",a)];e.push.apply(e,g)}},a);m();e.push(b.on("change:layers",function(){D(g,function(a){ta(e,a);f.unByKey(a)});m()}))}delete a.g[c]}else b instanceof ol.layer.Layer&&(d=a.n[c],n(d)||(d=a.l(b),a.n[c]=d),null!=d&&(a.j(d),
delete a.f[d]))}}function nb(a){a.i(!0);a.n={}};var pb,Q,qb,rb,sb,tb,ub,R,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db;function S(a,b){this.a=a;this.b=null;this.i=n(b)?b:null;this.f=!1;this.h=new Cesium.Event;this.c=document.createElement(Eb);this.c.width=1;this.c.height=1;this.a.on("change",function(){Fb(this)},this);Fb(this)}z(S,Cesium.ImageryProvider);
Object.defineProperties(S.prototype,{ready:{get:function(){return this.f}},rectangle:{get:function(){return this.j}},tileWidth:{get:function(){var a=this.a.getTileGrid();return null===a?256:a.getTileSize(0)}},tileHeight:{get:function(){return this.tileWidth}},maximumLevel:{get:function(){var a=this.a.getTileGrid();return null===a?18:a.getMaxZoom()}},minimumLevel:{get:function(){return 0}},tilingScheme:{get:function(){return this.e}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){return this.h}},
credit:{get:function(){return this.g}},proxy:{get:function(){}},hasAlphaChannel:{get:function(){return!0}}});function Fb(a){if(!a.f&&"ready"==a.a.getState()){var b=a.a.getProjection();a.b=null!=b?b:a.i;if(a.b==ol.proj.get("EPSG:4326"))a.e=new Cesium.GeographicTilingScheme;else if(a.b==ol.proj.get("EPSG:3857"))a.e=new Cesium.WebMercatorTilingScheme;else return;a.j=a.e.rectangle;b=Gb(a.a);a.g=null===b?void 0:b;a.f=!0}}
function Gb(a){var b="",c=a.getAttributions();null===c||D(c,function(a){b+=a.getHTML().replace(/<\/?[^>]+(>|$)/g,"")+" "});var d,e;0==b.length&&(a=a.getLogo(),n(a)&&(t(a)?d=a:(d=a.src,e=a.href)));return n(d)||0<b.length?new Cesium.Credit(b,d,e):null}S.prototype.getTileCredits=function(){};S.prototype.getTileCredits=S.prototype.getTileCredits;
S.prototype.requestImage=function(a,b,c){var d=this.a.getTileUrlFunction();if(null===d||null===this.b)return this.c;var e=this.e instanceof Cesium.GeographicTilingScheme?c+1:c;b=this.a.getTileGrid()instanceof ol.tilegrid.XYZ?b:b-(1<<c);a=d([e,a,-b-1],1,this.b);return n(a)?Cesium.ImageryProvider.loadImage(this,a):this.c};S.prototype.requestImage=S.prototype.requestImage;function T(a){Cesium.PrimitiveCollection.call(this);var b=new Cesium.BillboardCollection,c=new Cesium.PrimitiveCollection;this.a={projection:a,I:b,G:{},primitives:c};this.add(b)}z(T,Cesium.PrimitiveCollection);T.prototype.b=function(a,b,c){var d=b.getProjection();b=b.getResolution();if(!n(b)||!d)return null;a=a.getStyleFunction();a=pb(c,a,b);if(!a)return null;this.a.projection=d;return Q(c,a,this.a)};(function(){function a(a){a=a||"black";if(s(a))return new Cesium.Color(Cesium.Color.byteToFloat(a[0]),Cesium.Color.byteToFloat(a[1]),Cesium.Color.byteToFloat(a[2]),a[3]);if(t(a))return Cesium.Color.fromCssColorString(a);B("impossible")}function b(a,b,c){var d;c instanceof Cesium.PrimitiveCollection?d=c:(d=new Cesium.PrimitiveCollection,d.add(c));if(!b.getText())return d;b=b.getText();(a=wb(a,b))&&d.add(a);return d}function c(a,b,c){var u=e(c,!1),p=e(c,!0),g=new Cesium.PrimitiveCollection;c.getFill()&&
(a=f(a,u),g.add(a));c.getStroke()&&(c=d(c),a=f(b,p,c),g.add(a));return g}function d(a){if(-1==qb)throw Error("olcs.core.glAliasedLineWidthRange must be initialized using Cesium.Scene.maximumAliasedLineWidth");a=a.getStroke()?a.getStroke().getWidth():1;return Math.min(a,qb)}function e(b,c){var d=b.getFill()?b.getFill().getColor():null,e=b.getStroke()?b.getStroke().getColor():null,f="black";e&&c?f=e:d&&(f=d);return a(f)}function f(a,b,c){var d={flat:!0,renderState:{depthTest:{enabled:!0}}};n(c)&&(d.renderState||
(d.renderState={}),d.renderState.lineWidth=c);c=new Cesium.PerInstanceColorAppearance(d);a=new Cesium.GeometryInstance({geometry:a,attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(b)}});return new Cesium.Primitive({geometryInstances:a,appearance:c})}function g(a,b){var c=ol.proj.get("EPSG:4326"),d=ol.proj.get(b);d!==c&&(a=a.clone(),a.transform(d,c));return a}qb=-1;rb=function(a,b,c){n(c)&&(c=c.getHeight(b),b.height=n(c)?c:0);c=Cesium.Ellipsoid.WGS84;b=c.cartographicToCartesian(b);
var d=a.position,e=new Cesium.Cartesian3;c.geocentricSurfaceNormal(d,e);a.lookAt(d,b,e)};sb=function(a,b){if(null===a||null===b)return null;var c=ol.proj.transformExtent(a,b,"EPSG:4326");return Cesium.Rectangle.fromDegrees(c[0],c[1],c[2],c[3])};tb=function(a,b){if(!(a instanceof ol.layer.Tile))return null;var c=null,c=a.getSource();if(!(c instanceof ol.source.WMTS)&&c instanceof ol.source.TileImage){var d=c.getProjection();if(null===d)d=b;else if(d!==b)return null;var e=d===ol.proj.get("EPSG:3857"),
d=d===ol.proj.get("EPSG:4326");if(e||d)c=new S(c,b);else return null}else return null;e={};d=a.getExtent();null!=d&&null!==b&&(e.rectangle=sb(d,b));return new Cesium.ImageryLayer(c,e)};ub=function(a,b){var c=a.getOpacity();n(c)&&(b.alpha=c);c=a.getVisible();n(c)&&(b.show=c);c=a.getSaturation();n(c)&&(b.saturation=c);c=a.getContrast();n(c)&&(b.contrast=c);c=a.getBrightness();n(c)&&(b.brightness=Math.pow(1+parseFloat(c),2))};R=function(a){return 2<a.length?Cesium.Cartesian3.fromDegrees(a[0],a[1],a[2]):
Cesium.Cartesian3.fromDegrees(a[0],a[1])};vb=function(a){for(var b=R,c=[],d=0;d<a.length;++d)c.push(b(a[d]));return c};xb=function(a,d,e){a=g(a,d);d=a.getCenter();var f=3==d.length?d[2]:0,p=d.slice();p[0]+=a.getRadius();d=R(d);var p=R(p),r=Cesium.Cartesian3.distance(d,p),p=new Cesium.CircleGeometry({center:d,radius:r,height:f});d=new Cesium.CircleOutlineGeometry({center:d,radius:r,height:f});d=c(p,d,e);return b(a,e,d)};yb=function(a,c,d){a=g(a,c);var e=vb(a.getCoordinates());c=new Cesium.PolylineMaterialAppearance({material:zb(d,
!0)});e=new Cesium.PolylineGeometry({positions:e,vertexFormat:c.vertexFormat});c=new Cesium.Primitive({geometryInstances:new Cesium.GeometryInstance({geometry:e}),appearance:c});return b(a,d,c)};Ab=function(a,e,f){a=g(a,e);for(var u=a.getLinearRings(),p=e={},r=0;r<u.length;++r){var v=u[r].getCoordinates(),v=vb(v);0==r?e.positions=v:(e.holes={positions:v},e=e.holes)}u=new Cesium.PolygonGeometry({polygonHierarchy:p,U:!0});p=d(f);e=new Cesium.PolygonOutlineGeometry({polygonHierarchy:e,U:!0,width:p});
e=c(u,e,f);return b(a,f,e)};Bb=function(a,c,d,e,f,r){function v(){if(null!==l&&(l instanceof HTMLCanvasElement||l instanceof Image)){var b=a.getCoordinates(),b=R(b),b=e.add({image:l,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,position:b});b.olFeatureId=f;n(r)&&(r[f]=b)}}a=g(a,c);var l=d.getImage().getImage(1);l instanceof Image&&(""==l.src||0==l.naturalHeight||0==l.naturalWidth||!l.complete)?gb(l,"load",function(){v()}):v();return d.getText()?b(a,d,new Cesium.Primitive):null};Cb=function(a,b,c,d){function e(a,
d){var f=new Cesium.PrimitiveCollection;D(a,function(a){f.add(d(a,b,c))});return f}switch(a.getType()){case "MultiPoint":a=a.getPoints();var f=Bb,g=new Cesium.BillboardCollection;if(c.getText()){var l=new Cesium.PrimitiveCollection;D(a,function(a){(a=f(a,b,c,g,d))&&l.add(a)});return l}D(a,function(a){f(a,b,c,g,d)});return g;case "MultiLineString":return a=a.getLineStrings(),e(a,yb);case "MultiPolygon":return a=a.getPolygons(),e(a,Ab);default:B("Unhandled multi geometry type"+a.getType())}};wb=function(a,
b){var c=b.getText(),f=new Cesium.LabelCollection,g=ol.extent.getCenter(a.getExtent());if(a instanceof ol.geom.SimpleGeometry){var r=a.getFirstCoordinate();g[2]=3==r.length?r[2]:0}g=R(g);f.modelMatrix=Cesium.Transforms.eastNorthUpToFixedFrame(g);g={};g.text=c;c=b.getOffsetX();r=b.getOffsetY();0!=c&&0!=r&&(c=new Cesium.Cartesian2(c,r),g.pixelOffset=c);c=b.getFont();null!=c&&(g.font=c);c=void 0;b.getFill()&&(g.fillColor=e(b,!1),c=Cesium.LabelStyle.FILL);b.getStroke()&&(g.outlineWidth=d(b),g.outlineColor=
e(b,!0),c=Cesium.LabelStyle.OUTLINE);b.getFill()&&b.getStroke()&&(c=Cesium.LabelStyle.FILL_AND_OUTLINE);g.style=c;if(b.getTextAlign()){var v;switch(b.getTextAlign()){case "center":v=Cesium.HorizontalOrigin.CENTER;break;case "left":v=Cesium.HorizontalOrigin.LEFT;break;case "right":v=Cesium.HorizontalOrigin.RIGHT;break;default:B("unhandled text align "+b.getTextAlign())}g.horizontalOrigin=v}if(b.getTextBaseline()){var l;switch(b.getTextBaseline()){case "top":l=Cesium.VerticalOrigin.TOP;break;case "middle":l=
Cesium.VerticalOrigin.CENTER;break;case "bottom":l=Cesium.VerticalOrigin.BOTTOM;break;case "alphabetic":l=Cesium.VerticalOrigin.TOP;break;case "hanging":l=Cesium.VerticalOrigin.BOTTOM;break;default:B("unhandled baseline "+b.getTextBaseline())}g.verticalOrigin=l}f.add(g);return f};zb=function(b,c){var d=b.getFill(),e=b.getStroke();if(c&&!e||!c&&!d)return null;d=c?e.getColor():d.getColor();d=a(d);return c&&e.getLineDash()?Cesium.Material.fromType("Stripe",{horizontal:!1,repeat:500,evenColor:d,oddColor:new Cesium.Color(0,
0,0,0)}):Cesium.Material.fromType("Color",{color:d})};pb=function(a,b,c){var d=a.getStyleFunction(),e;n(d)&&(e=d.call(a,c));null==e&&null!=b&&(e=b(a,c));return n(e)?e[0]:null};Q=function(a,b,c,d){function e(b){b.olFeatureId=w(a);return b}d=d||a.getGeometry();var f=c.projection;switch(d.getType()){case "GeometryCollection":var g=new Cesium.PrimitiveCollection;D(d.getGeometries(),function(d){d&&(d=Q(a,b,c,d))&&g.add(d)});return e(g);case "Point":return(d=Bb(d,f,b,c.I,w(a),c.G))?e(d):null;case "Circle":return e(xb(d,
f,b));case "LineString":return e(yb(d,f,b));case "Polygon":return e(Ab(d,f,b));case "MultiPoint":case "MultiLineString":case "MultiPolygon":return e(Cb(d,f,b,w(a)));case "LinearRing":throw Error("LinearRing should only be part of polygon.");default:throw Error("Ol geom type not handled : "+d.getType());}};Db=function(a,b,c){var d=a.getSource().getFeatures(),e=b.getProjection();b=b.getResolution();if(!n(b)||!e)throw B("View not ready"),Error("View not ready");for(var e=new T(e),f=e.a,g=0;g<d.length;++g){var l=
d[g];if(null!=l){var N=a.getStyleFunction();if(N=pb(l,N,b))if(N=Q(l,N,f))c[w(l)]=N,e.add(N)}}return e}})();function U(a,b){this.d=a;this.h=a.canvas;this.b=a.camera;this.k=b;this.f=this.c=this.j=this.a=null;this.e=this.g=0;this.i=null;this.l=!1;this.k.on("change:view",function(){this.v(this.k.getView())},this);this.v(this.k.getView())}h=U.prototype;
h.v=function(a){null!==this.a&&(this.a.unByKey(this.j),this.j=null);this.a=a;null===a?this.f=this.c=null:(this.c=ol.proj.getTransform(a.getProjection(),"EPSG:4326"),this.f=ol.proj.getTransform("EPSG:4326",a.getProjection()),this.j=a.on("propertychange",this.M,this),Ib(this))};h.M=function(){this.l||Ib(this)};h.X=function(a){null===this.a||this.a.setRotation(a)};h.P=function(){if(null!==this.a){var a=this.a.getRotation();return n(a)?a:0}};h.Y=function(a){this.g=a;Jb(this)};h.L=function(){return this.g};
h.W=function(a){this.e=a;Jb(this);this.p()};h.K=function(){return this.e};h.S=function(a){null===this.a||this.a.setCenter(a)};h.getCenter=function(){return null===this.a?void 0:this.a.getCenter()};h.T=function(a){null!==this.c&&(a=this.c(a),a=new Cesium.Cartographic(a[0]*Math.PI/180,a[1]*Math.PI/180,this.J()),this.b.position=Cesium.Ellipsoid.WGS84.cartographicToCartesian(a),this.p())};
h.Q=function(){if(null!==this.f){var a=Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.b.position);return this.f([180*a.longitude/Math.PI,180*a.latitude/Math.PI])}};h.V=function(a){var b=Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.b.position);b.height=a;this.b.position=Cesium.Ellipsoid.WGS84.cartographicToCartesian(b);this.p()};h.J=function(){return Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.b.position).height};
h.R=function(a){null!==this.c&&(a=this.c(a),a=Cesium.Cartographic.fromDegrees(a[0],a[1]),rb(this.b,a,this.d.globe),this.p())};function Jb(a){if(null!==a.a&&null!==a.c){var b=a.a.getCenter();if(null!=b){b=a.c(b);b=new Cesium.Cartographic(b[0]*Math.PI/180,b[1]*Math.PI/180);if(a.d.globe){var c=a.d.globe.getHeight(b);b.height=n(c)?c:0}a.b.setPositionCartographic(b);b=a.a.getRotation();a.b.twistLeft(n(b)?b:0);a.g&&a.b.lookUp(a.g);a.b.moveBackward(a.e);Kb(a,!0)}}}
function Ib(a){if(null!==a.a&&null!==a.c){var b=a.a.getCenter();if(null!=b){var c=a.c(b),b=a.a.getResolution(),b=n(b)?b:0,c=c[1]*Math.PI/180,d=a.b.frustum.fovy,e=a.a.getProjection().getMetersPerUnit();a.e=b*a.h.height*e*Math.cos(Math.abs(c))/2/Math.tan(d/2);Jb(a)}}}
h.p=function(){if(null!==this.a&&null!==this.f){this.l=!0;var a=new Cesium.Cartesian2(this.h.width/2,this.h.height/2),b=a=this.d.globe.pick(this.b.getPickRay(a),this.d);if(!b){b=this.b.positionCartographic.clone();if(this.d.globe){var c=this.d.globe.getHeight(b);b.height=n(c)?c:0}b=Cesium.Ellipsoid.WGS84.cartographicToCartesian(b)}this.e=Cesium.Cartesian3.distance(b,this.b.position);b=Cesium.Ellipsoid.WGS84.cartesianToCartographic(b);this.a.setCenter(this.f([180*b.longitude/Math.PI,180*b.latitude/
Math.PI]));this.a.setResolution(Lb(this,this.e,b?b.latitude:0));if(a){var d=this.b.position,b=new Cesium.Cartesian3;this.d.globe.ellipsoid.geocentricSurfaceNormal(a,b);c=new Cesium.Cartesian3;Cesium.Cartesian3.subtract(d,a,c);Cesium.Cartesian3.normalize(c,c);d=new Cesium.Cartesian3(-a.y,a.x,0);d=Cesium.Cartesian3.angleBetween(this.b.right,d);a=Cesium.Cartesian3.cross(a,this.b.up,new Cesium.Cartesian3).z;this.a.setRotation(0>a?d:-d);a=Math.acos(Cesium.Cartesian3.dot(b,c));this.g=isNaN(a)?0:a}else this.a.setRotation(this.b.heading),
this.g=-this.b.tilt+Math.PI/2;this.l=!1}};function Kb(a,b){var c=a.b.viewMatrix;a.i&&a.i.equals(c)||(a.i=c.clone(),!0!==b&&a.p())}function Lb(a,b,c){var d=a.b.frustum.fovy,e=a.a.getProjection().getMetersPerUnit();return 2*b*Math.tan(d/2)/e/Math.cos(Math.abs(c))/a.h.height};function V(){Ja.call(this);this.r=new O(this);this.h=this}z(V,Ja);V.prototype[M]=!0;V.prototype.removeEventListener=function(a,b,c,d){hb(this,a,b,c,d)};function Mb(a,b){var c=a.h,d=b,e=d.type||d;if(t(d))d=new K(d,c);else if(d instanceof K)d.b=d.b||c;else{var f=d,d=new K(e,c);Ua(d,f)}c=d.a=c;Nb(c,e,!0,d);Nb(c,e,!1,d)}
function Nb(a,b,c,d){if(b=a.r.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.s&&g.B==c){var m=g.o,qa=g.C||g.src;g.A&&Wa(a.r,g);e=!1!==m.call(qa,d)&&e}}}};function W(a){a=n(a)?a:{};V.call(this);this.b=this.d=null;this.a=new Cesium.RectanglePrimitive({asynchronous:!1,rectangle:new Cesium.Rectangle,material:Cesium.Material.fromType(Cesium.Material.ColorType)});this.a.material.uniforms.color=new Cesium.Color(0,0,1,.5);this.c=n(a.O)?a.O:Cesium.KeyboardEventModifier.SHIFT;this.e=null}z(W,V);
W.prototype.i=function(a){var b=this.d.globe.ellipsoid;a=this.d.camera.getPickRay(a.position);a=this.d.globe.pick(a,this.d);n(a)&&(this.b.setInputAction(x(this.f,this),Cesium.ScreenSpaceEventType.MOUSE_MOVE),this.b.setInputAction(x(this.g,this),Cesium.ScreenSpaceEventType.LEFT_UP),n(this.c)&&(this.b.setInputAction(x(this.f,this),Cesium.ScreenSpaceEventType.MOUSE_MOVE,this.c),this.b.setInputAction(x(this.g,this),Cesium.ScreenSpaceEventType.LEFT_UP,this.c)),b=b.cartesianToCartographic(a),a=this.a.rectangle,
a.north=a.south=b.latitude,a.east=a.west=b.longitude,this.a.height=b.height,this.a.show=!0,Mb(this,{type:"boxstart",position:b}),this.d.primitives.contains(this.a)||this.d.primitives.add(this.a),this.d.screenSpaceCameraController.a=!1,this.e=b)};
W.prototype.f=function(a){var b=this.d.globe.ellipsoid;a=this.d.camera.getPickRay(a.endPosition);a=this.d.globe.pick(a,this.d);n(a)&&(b=b.cartesianToCartographic(a),this.a.height=Math.max(this.a.height,b.height),b.latitude<this.e.latitude?this.a.rectangle.south=b.latitude:this.a.rectangle.north=b.latitude,b.longitude<this.e.longitude?this.a.rectangle.west=b.longitude:this.a.rectangle.east=b.longitude)};
W.prototype.g=function(a){var b=this.d.globe.ellipsoid;a=this.d.camera.getPickRay(a.position);a=this.d.globe.pick(a,this.d);n(a)&&(b=b.cartesianToCartographic(a),this.a.show=!1,Mb(this,{type:"boxend",position:b}),this.b.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP),this.b.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE),n(this.c)&&(this.b.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP,this.c),this.b.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE,this.c)));this.d.screenSpaceCameraController.a=
!0};W.prototype.j=function(a){null===a?(this.d.primitives.contains(this.a)&&this.d.primitives.remove(this.a),null!==this.b&&(this.b.destroy(),this.b=null)):(this.b=new Cesium.ScreenSpaceEventHandler(a.canvas),this.b.setInputAction(x(this.i,this),Cesium.ScreenSpaceEventType.LEFT_DOWN,this.c));this.d=a};function Ob(a){var b;b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};function X(a,b,c){Ja.call(this);this.h=a;this.g=c;this.b=b||window;this.c=x(this.f,this)}z(X,Ja);X.prototype.a=null;X.prototype.e=!1;X.prototype.start=function(){Pb(this);this.e=!1;var a=Qb(this),b=Rb(this);a&&!b&&this.b.mozRequestAnimationFrame?(this.a=$a(this.b,"MozBeforePaint",this.c),this.b.mozRequestAnimationFrame(null),this.e=!0):this.a=a&&b?a.call(this.b,this.c):this.b.setTimeout(Ob(this.c),20)};
function Pb(a){if(null!=a.a){var b=Qb(a),c=Rb(a);b&&!c&&a.b.mozRequestAnimationFrame?ib(a.a):b&&c?c.call(a.b,a.a):a.b.clearTimeout(a.a)}a.a=null}X.prototype.f=function(){this.e&&this.a&&ib(this.a);this.a=null;this.h.call(this.g,ga())};function Qb(a){a=a.b;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function Rb(a){a=a.b;return a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};var Sb=!G||G&&9<=Ga;!H&&!G||G&&G&&9<=Ga||H&&J("1.9.1");G&&J("9");var Eb="CANVAS";function Tb(a){var b=document;return t(a)?b.getElementById(a):a}
function Ub(a){var b=a||document,c=null;if(b.querySelectorAll&&b.querySelector)c=b.querySelector(".ol-overlaycontainer");else{var d,b=document;a=a||b;if(a.querySelectorAll&&a.querySelector)a=a.querySelectorAll(".ol-overlaycontainer");else if(a.getElementsByClassName){var e=a.getElementsByClassName("ol-overlaycontainer");a=e}else{e=a.getElementsByTagName("*");d={};for(b=c=0;a=e[b];b++){var f=a.className,g;if(g="function"==typeof f.split)g=0<=C.indexOf.call(f.split(/\s+/),"ol-overlaycontainer",void 0);
g&&(d[c++]=a)}d.length=c;a=d}c=a[0]}return c||null}function Vb(a,b){Pa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Wb?a.setAttribute(Wb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Wb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Xb(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Sb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ia(g.name),'"');if(g.type){f.push(' type="',ia(g.type),'"');var m={};Ua(m,g);delete m.type;g=m}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:s(g)?f.className=g.join(" "):Vb(f,g));2<d.length&&Yb(e,f,d);return f}
function Yb(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];if(!aa(f)||ba(f)&&0<f.nodeType)d(f);else{var g;a:{if(f&&"number"==typeof f.length){if(ba(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==q(f)){g="function"==typeof f.item;break a}}g=!1}D(g?ua(f):f,d)}}}function Zb(a){if(void 0!=a.nextElementSibling)a=a.nextElementSibling;else for(a=a.nextSibling;a&&1!=a.nodeType;)a=a.nextSibling;return a};function Y(a,b){this.q=b.imageryLayers;this.u=new Cesium.ImageryLayerCollection;P.call(this,a)}z(Y,P);Y.prototype.j=function(a){this.q.add(a);this.u.add(a)};Y.prototype.D=function(a){a.destroy()};Y.prototype.i=function(a){for(var b=0;b<this.u.length;++b)this.q.remove(this.u.get(b),a);this.u.removeAll(!1)};
Y.prototype.l=function(a){if(!(a instanceof ol.layer.Tile))return null;var b=this.e.getProjection(),c=tb(a,b);null!==c&&(a.on("change:brightness change:contrast change:hue change:opacity change:saturation change:visible".split(" "),function(){null===c||ub(a,c)}),ub(a,c),a.on("change:extent",function(){this.q.remove(c,!0);this.u.remove(c,!1);delete this.n[w(a)];this.m()},this),a.on("change",function(){var a=this.q.indexOf(c);0<=a&&(this.q.remove(c,!1),this.q.add(c,a))},this));return c};function Z(a,b){this.a=new Cesium.PrimitiveCollection;b.primitives.add(this.a);this.a.destroyPrimitives=!1;qb=b.maximumAliasedLineWidth;P.call(this,a)}z(Z,P);Z.prototype.j=function(a){this.a.add(a)};Z.prototype.D=function(a){a.destroy()};Z.prototype.i=function(a){this.a.destroyPrimitives=a;this.a.removeAll();this.a.destroyPrimitives=!1};
Z.prototype.l=function(a){function b(a){var b=a.getGeometry();if(null!=b&&"Point"==b.getType()){var c=w(a);a=g.a;var b=a.I,d=a.G[c];delete a.G[c];null!=d&&b.remove(d)}a=f[c];delete f[c];null!=a&&g.remove(a)}function c(b){var c=g.b(a,d,b);c&&(f[w(b)]=c,g.add(c))}if(!(a instanceof ol.layer.Vector))return null;var d=this.e,e=a.getSource(),f={},g=Db(a,d,f);a.on("change:visible",function(){g.show=a.getVisible()});e.on("addfeature",function(a){c(a.feature)},this);e.on("removefeature",function(a){b(a.feature)},
this);e.on("changefeature",function(a){a=a.feature;b(a);c(a)},this);return g};function $(a,b){this.k=a;this.c=Xb("DIV",{style:"position:absolute;top:0;left:0;width:100%;height:100%;visibility:hidden;"});var c=Tb(b||null);if(c)c.appendChild(this.c);else{var d=this.k.getViewport();(d=Ub(d))&&d.parentNode&&d.parentNode.insertBefore(this.c,d)}this.f=null==c;this.a=Xb(Eb,{style:"position:absolute;top:0;left:0;width:100%;height:100%;"});this.a.oncontextmenu=function(){return!1};this.a.onselectstart=function(){return!1};this.c.appendChild(this.a);this.e=!1;this.H=[];this.b=null;this.d=
new Cesium.Scene({canvas:this.a,scene3DOnly:!0});c=this.d.screenSpaceCameraController;c.inertiaSpin=0;c.ineartiaTranslate=0;c.inertiaZoom=0;c.tiltEventTypes.push({eventType:Cesium.CameraEventType.LEFT_DRAG,modifier:Cesium.KeyboardEventModifier.SHIFT});c.tiltEventTypes.push({eventType:Cesium.CameraEventType.LEFT_DRAG,modifier:Cesium.KeyboardEventModifier.ALT});c.enableLook=!1;this.d.camera.constrainedAxis=Cesium.Cartesian3.UNIT_Z;this.t=new U(this.d,this.k);this.j=new Cesium.Globe(Cesium.Ellipsoid.WGS84);
this.d.globe=this.j;this.d.skyAtmosphere=new Cesium.SkyAtmosphere;this.l=new Y(this.k,this.d);this.l.m();this.N=new Z(this.k,this.d);this.N.m();this.f&&(c=Zb(this.a),null!=c&&(c.style.display="none"));Ib(this.t);this.F=new X(function(){this.d.initializeFrame();this.d.render();Kb(this.t);this.F.start()},void 0,this)}function $b(a){var b=a.a.clientWidth,c=a.a.clientHeight;if(a.a.width!==b||a.a.height!==c)a.a.width=b,a.a.height=c,a.d.camera.frustum.aspectRatio=b/c}$.prototype.g=function(){return this.t};
$.prototype.h=function(){return this.d};$.prototype.i=function(){return this.e};
$.prototype.D=function(a){this.e=!1!==a;this.c.style.visibility=this.e?"visible":"hidden";if(this.e){if(this.f){var b=this.k.getInteractions();b.forEach(function(a){this.H.push(a)},this);b.clear();a=this.k.getLayerGroup();a.getVisible()&&(this.b=a,this.b.setVisible(!1))}$b(this);Ib(this.t);this.F.start()}else this.f&&(b=this.k.getInteractions(),D(this.H,function(a){b.push(a)},this),this.H.length=0,null!==this.b&&(this.b.setVisible(!0),this.b=null)),this.t.p(),Pb(this.F)};y("olcs.AbstractSynchronizer",P);P.prototype.synchronize=P.prototype.m;y("olcs.Camera",U);U.prototype.setHeading=U.prototype.X;U.prototype.getHeading=U.prototype.P;U.prototype.setTilt=U.prototype.Y;U.prototype.getTilt=U.prototype.L;U.prototype.setDistance=U.prototype.W;U.prototype.getDistance=U.prototype.K;U.prototype.setCenter=U.prototype.S;U.prototype.getCenter=U.prototype.getCenter;U.prototype.setPosition=U.prototype.T;U.prototype.getPosition=U.prototype.Q;U.prototype.setAltitude=U.prototype.V;
U.prototype.getAltitude=U.prototype.J;U.prototype.lookAt=U.prototype.R;U.prototype.updateView=U.prototype.p;y("olcs.core.lookAt",rb);y("olcs.core.extentToRectangle",sb);y("olcs.core.tileLayerToImageryLayer",tb);y("olcs.core.updateCesiumLayerProperties",ub);y("olcs.core.ol4326CoordinateToCesiumCartesian",R);y("olcs.core.ol4326CoordinateArrayToCsCartesians",vb);y("olcs.core.olCircleGeometryToCesium",xb);y("olcs.core.olLineStringGeometryToCesium",yb);y("olcs.core.olPolygonGeometryToCesium",Ab);
y("olcs.core.olPointGeometryToCesium",Bb);y("olcs.core.olMultiGeometryToCesium",Cb);y("olcs.core.olGeometry4326TextPartToCesium",wb);y("olcs.core.olStyleToCesium",zb);y("olcs.core.computePlainStyle",pb);y("olcs.core.olFeatureToCesium",Q);y("olcs.core.olVectorLayerToCesium",Db);y("olcs.DragBox",W);W.prototype.setScene=W.prototype.j;y("olcs.OLCesium",$);$.prototype.getCamera=$.prototype.g;$.prototype.getCesiumScene=$.prototype.h;$.prototype.getEnabled=$.prototype.i;$.prototype.setEnabled=$.prototype.D;
y("olcs.VectorSynchronizer",Z);T.prototype.convert=T.prototype.b;})();
//# sourceMappingURL=ol3cesium.js.map

'use strict';var h=require("ms");Object.freeze({assumingES6:!0,productionMode:!0,linkerVersion:"1.3.0",fileLevelThis:this});var k=Math.imul,m=Math.clz32;function p(a){for(var b in a)return b}
function q(a){switch(typeof a){case "string":return"java.lang.String";case "number":return"number"===typeof a&&(a|0)===a&&1/a!==1/-0?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.M():a instanceof r?"java.lang.Long":a&&a.$classData?a.$classData.name:null.N()}}function t(){var a=new Date;return void 0===a?"undefined":a.toString()}
function u(a){switch(typeof a){case "string":for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+k(65535&(a.charCodeAt(d)|0),c)|0,c=k(31,c),d=-1+d|0;return b;case "number":return a=+a,v||(v=new w),b=v,c=a|0,c===a&&-Infinity!==1/a?a=c:(b.o[0]=a,a=new r(b.e[b.q]|0,b.e[b.p]|0),a=a.j^a.i),a;case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.d():x.prototype.d.call(a)}}var y=0,z=new WeakMap;
function A(a,b,c,d){var f=new B,e=p(a);f.n=c;f.name=b;f.isInterface=!1;f.isInstance=d||function(g){return!!(g&&g.$classData&&g.$classData.n[e])};return f}class B{constructor(){this.n=null;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}}
class x{d(){a:switch(typeof this){case "string":case "number":case "bigint":case "boolean":case "undefined":var a=u(this);break a;default:null===this?a=0:(a=z.get(this),void 0===a&&(y=a=y+1|0,z.set(this,a)))}return a}h(){var a=q(this),b=this.d();return a+"@"+(+(b>>>0)).toString(16)}["toString"](){return this.h()}}x.prototype.$classData=A({a:0},"java.lang.Object",{a:1},function(a){return null!==a});
class w extends x{constructor(){super();this.o=this.e=this.b=null;this.k=!1;this.q=this.p=0;v=this;this.b=new ArrayBuffer(8);this.e=new Int32Array(this.b,0,2);new Float32Array(this.b,0,2);this.o=new Float64Array(this.b,0,1);this.e[0]=16909060;this.p=(this.k=1===((new Int8Array(this.b,0,8))[0]|0))?0:1;this.q=this.k?1:0}}w.prototype.$classData=A({C:0},"java.lang.FloatingPointBits$",{C:1,a:1});var v;class C extends x{constructor(){super();this.r=null;D=this;this.r=new E(!1);new E(!0)}}
C.prototype.$classData=A({G:0},"java.lang.System$Streams$",{G:1,a:1});var D;function F(){D||(D=new C);return D}function G(a,b){H().setInterval((c=>()=>{c.innerHTML=t()})(b),1E3)}function I(a,b){H().setInterval((c=>()=>{c.innerHTML="\x3cp\x3eShared date "+t()+"\x3c/p\x3e"})(b),1E3)}function J(a,b){a=new K(0);H().setInterval(((c,d)=>()=>{c.g=1+c.g|0;d.innerHTML="Invisible tick: "+c.g})(a,b),1E3)}
function M(a,b){H().setTimeout((c=>()=>{c.innerHTML="I am loaded. Refresh the page to load me again."})(b),3E3)}class N extends x{}N.prototype.$classData=A({x:0},"mdocjs$",{x:1,a:1});var O;function P(){O||(O=new N);return O}function H(){Q||(Q=new R);var a=Q;0===(33554432&a.c)&&0===(33554432&a.c)&&(a.m=window,a.c|=33554432);return a.m}class R extends x{constructor(){super();this.m=null;this.c=0}}R.prototype.$classData=A({y:0},"org.scalajs.dom.package$",{y:1,a:1});var Q;class S extends x{}
class T extends x{constructor(a){super();this.t=a}h(){return"DynamicVariable("+this.t+")"}}T.prototype.$classData=A({I:0},"scala.util.DynamicVariable",{I:1,a:1});class U extends x{}
function V(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+m(1E9)|0)-(0!==b?m(b):32+m(a)|0)|0,d=c,f=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var e=a,g=b;for(a=b=0;0<=c&&0!==(-2097152&g);){var l=e,n=g,aa=f,L=d;if(n===L?(-2147483648^l)>=(-2147483648^aa):(-2147483648^n)>=(-2147483648^L))l=g,n=d,g=e-f|0,l=(-2147483648^g)>(-2147483648^e)?-1+(l-n|0)|0:l-n|0,e=g,g=l,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;l=d>>>1|0;f=f>>>1|0|d<<31;d=l}c=g;if(0===c?-1147483648<=(-2147483648^
e):-2147483648<=(-2147483648^c))c=4294967296*g+ +(e>>>0),e=c/1E9,f=e/4294967296|0,d=b,b=e=d+(e|0)|0,a=(-2147483648^e)<(-2147483648^d)?1+(a+f|0)|0:a+f|0,e=c%1E9|0;c=""+e;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}class W extends x{constructor(){super()}}W.prototype.$classData=A({A:0},"org.scalajs.linker.runtime.RuntimeLong$",{A:1,a:1,l:1});var X;class K extends x{constructor(a){super();this.g=a}h(){return""+this.g}}
K.prototype.$classData=A({J:0},"scala.runtime.IntRef",{J:1,a:1,l:1});class Y extends S{constructor(){super();this.s=null;Z=this;this.s=new T(F().r);F()}}Y.prototype.$classData=A({H:0},"scala.Console$",{H:1,R:1,a:1,S:1});var Z;class ba extends x{}class r extends U{constructor(a,b){super();this.j=a;this.i=b}d(){return this.j^this.i}h(){X||(X=new W);var a=this.j,b=this.i;return b===a>>31?""+a:0>b?"-"+V(-a|0,0!==a?~b:-b|0):V(a,b)}}
r.prototype.$classData=A({z:0},"org.scalajs.linker.runtime.RuntimeLong",{z:1,Q:1,a:1,l:1,P:1});class ca extends ba{constructor(){super()}}A({E:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{E:1,w:1,a:1,u:1,B:1,v:1});class da extends ca{constructor(){super()}}class E extends da{constructor(a){super();this.F=a;this.f=""}}E.prototype.$classData=A({D:0},"java.lang.JSConsoleBasedPrintStream",{D:1,L:1,K:1,w:1,a:1,u:1,B:1,v:1,O:1});
exports.mdoc_js_run7=function(a){P();var b=h(+(new Date).getTime());a.innerHTML="Hello from npm package 'ms': "+b};exports.mdoc_js_run4=function(a){J(P(),a)};exports.mdoc_js_run1=function(a){G(P(),a)};
exports.mdoc_js_run5=function(a){P();var b="Loading HTML: "+a.innerHTML;Z||(Z=new Y);a=Z.s.t;for(b+="\n";""!==b;){var c=b.indexOf("\n")|0;if(0>c)a.f=""+a.f+b,b="";else{var d=""+a.f+b.substring(0,c);"undefined"!==typeof console&&(a.F&&console.error?console.error(d):console.log(d));a.f="";b=b.substring(1+c|0)}}};exports.mdoc_js_run6=function(a){M(P(),a)};exports.mdoc_js_run3=function(a){I(P(),a)};

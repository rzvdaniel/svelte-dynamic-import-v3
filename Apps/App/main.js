var main=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function u(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}let l;function f(t){l=t}const d=[],i=Promise.resolve();let $=!1;const m=[],h=[],p=[];function y(t){h.push(t)}function g(){const t=new Set;do{for(;d.length;){const t=d.shift();f(t),b(t.$$)}for(;m.length;)m.shift()();for(;h.length;){const e=h.pop();t.has(e)||(e(),t.add(e))}}while(d.length);for(;p.length;)p.pop()();$=!1}function b(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(y))}function x(t,e){t.$$.dirty||(d.push(t),$||($=!0,i.then(g)),t.$$.dirty={}),t.$$.dirty[e]=!0}function _(c,a,u,s,d,i){const $=l;f(c);const m=a.props||{},h=c.$$={fragment:null,ctx:null,props:i,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var b;h.ctx=u?u(c,m,(t,e)=>{h.ctx&&d(h.ctx[t],h.ctx[t]=e)&&(h.bound[t]&&h.bound[t](e),p&&x(c,t))}):m,h.update(),p=!0,r(h.before_render),h.fragment=s(h.ctx),a.target&&(a.hydrate?h.fragment.l((b=a.target,Array.from(b.childNodes))):h.fragment.c(),a.intro&&c.$$.fragment.i&&c.$$.fragment.i(),function(t,n,c){const{fragment:a,on_mount:u,on_destroy:s,after_render:l}=t.$$;a.m(n,c),y(()=>{const n=u.map(e).filter(o);s?s.push(...n):r(n),t.$$.on_mount=[]}),l.forEach(y)}(c,a.target,a.anchor),g()),f($)}class v{$destroy(){var e,n;n=!0,(e=this).$$&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function w(e){var n,r,o,c;return{c(){n=u("h1"),r=s("Hello "),o=s(e.name),c=s("!"),n.className="svelte-bt9zrl"},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),a(n,r),a(n,o),a(n,c)},p(t,e){var n,r;t.name&&(n=o,r=""+(r=e.name),n.data!==r&&(n.data=r))},i:t,o:t,d(t){var e;t&&(e=n).parentNode.removeChild(e)}}}function E(t,e,n){let{name:r}=e;return t.$set=(t=>{"name"in t&&n("name",r=t.name)}),{name:r}}return new class extends v{constructor(t){var e;super(),document.getElementById("svelte-bt9zrl-style")||((e=u("style")).id="svelte-bt9zrl-style",e.textContent="h1.svelte-bt9zrl{color:red}",a(document.head,e)),_(this,t,E,w,c,["name"])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=main.js.map

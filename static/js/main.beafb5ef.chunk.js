(this["webpackJsonpreact-practice-2"]=this["webpackJsonpreact-practice-2"]||[]).push([[0],[,,function(e,c,n){e.exports={backdrop:"SuccessModal_backdrop__5emyp",modal:"SuccessModal_modal__2veLG",heading:"SuccessModal_heading__1ZIHk",header:"SuccessModal_header__25A2p",footer:"SuccessModal_footer__3zqlW",btn:"SuccessModal_btn__3f0Zz"}},,,,,function(e,c,n){e.exports={cards:"Cards_cards__2Y3H8",btn:"Cards_btn__3xAj1",show:"Cards_show__25FuD"}},function(e,c,n){e.exports={header:"Header_header__o0dWY"}},function(e,c,n){e.exports={footer:"Footer_footer__2Sjr6"}},function(e,c,n){e.exports={score:"Scoreboard_score__2Coqj"}},,function(e,c,n){e.exports={main:"MemoryGame_main__q5-hd"}},,,,,function(e,c,n){},,function(e,c,n){},function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),a=n(4),o=n.n(a),s=(n(17),n(8)),d=n.n(s),i=n(0),l=function(){return Object(i.jsx)("header",{className:"".concat(d.a.header),children:Object(i.jsx)("h2",{children:"Memory Card Game"})})},j=n(9),u=n.n(j),h=function(){return Object(i.jsx)("footer",{className:"".concat(u.a.footer),children:Object(i.jsx)("p",{children:"Created by Aleksandar Jauleski."})})},b=(n(19),n(3)),f=n(10),_=n.n(f),m=function(e){var c=e.score,n=e.highScore;return Object(i.jsxs)("div",{className:"".concat(_.a.score),children:[Object(i.jsxs)("p",{children:["Current Score: ",c]}),Object(i.jsxs)("p",{children:["High Score: ",n]})]})},p=n(2),x=n.n(p),O=function(e){var c=e.message,n=e.onClose;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)("button",{className:"".concat(x.a.backdrop),onClick:n}),Object(i.jsx)("div",{className:"".concat(x.a.container),children:Object(i.jsxs)("div",{className:"".concat(x.a.modal),children:[Object(i.jsx)("header",{className:"".concat(x.a.header),children:Object(i.jsx)("h2",{className:"".concat(x.a.heading),children:c})}),Object(i.jsx)("footer",{className:"".concat(x.a.footer),children:Object(i.jsx)("button",{className:"".concat(x.a.btn),onClick:n,children:"Thank you."})})]})})]})},k=n(11),S=n(7),g=n.n(S),w=function(e){var c=e.cards,n=e.onIncreaseScore,t=e.onResetScore,a=r.a.useState(c),o=Object(b.a)(a,2),s=o[0],d=o[1],l=function(e){var r,a=Object(k.a)(s);try{for(a.s();!(r=a.n()).done;){var o=r.value;o.word===e&&(!1===o.pressed?(o.pressed=!0,n()):(t(),d(c)))}}catch(i){a.e(i)}finally{a.f()}d((function(e){return function(e){for(var c=0;c<e.length;c++)e.splice(Math.floor(Math.random()*e.length),0,e.shift());return e}(e)}))};return Object(i.jsx)("section",{className:"".concat(g.a.cards),children:s.map((function(e,c){return Object(i.jsx)("button",{className:"".concat(g.a.btn),onClick:function(){l(e.word)},children:e.word},c)}))})},v=n(12),C=n.n(v),N=function(){var e=r.a.useState(0),c=Object(b.a)(e,2),n=c[0],a=c[1],s=r.a.useState(0),d=Object(b.a)(s,2),l=d[0],j=d[1];Object(t.useEffect)((function(){n>l&&j(n)}),[n,l]);var u=function(){a(0)};return Object(i.jsxs)(r.a.Fragment,{children:[12===n&&o.a.createPortal(Object(i.jsx)(O,{message:"You won! Good job.",onClose:function(){u()}}),document.getElementById("modal-root")),Object(i.jsxs)("main",{className:"".concat(C.a.main),children:[Object(i.jsx)(m,{score:n,highScore:l}),Object(i.jsx)(w,{cards:[{word:"Alek",pressed:!1},{word:"Alke",pressed:!1},{word:"Akel",pressed:!1},{word:"Kale",pressed:!1},{word:"Kela",pressed:!1},{word:"Klea",pressed:!1},{word:"Elak",pressed:!1},{word:"Elka",pressed:!1},{word:"Ekal",pressed:!1},{word:"Lake",pressed:!1},{word:"Leka",pressed:!1},{word:"Leak",pressed:!1}],onIncreaseScore:function(){a((function(e){return e+1}))},onResetScore:u})]})]})},M=function(){return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(N,{}),Object(i.jsx)(h,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(c){var n=c.getCLS,t=c.getFID,r=c.getFCP,a=c.getLCP,o=c.getTTFB;n(e),t(e),r(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),y()}],[[20,1,2]]]);
//# sourceMappingURL=main.beafb5ef.chunk.js.map
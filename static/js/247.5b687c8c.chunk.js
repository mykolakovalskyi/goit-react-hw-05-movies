"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{407:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s=n(243);function i(){return(i=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"510d6b02ed225a51e009d13f1b3c4d4c",n=new URLSearchParams({api_key:"510d6b02ed225a51e009d13f1b3c4d4c",language:"en-US"}),r={headers:{accept:"application/json"}},e.next=5,s.Z.get("https://api.themoviedb.org/".concat(t,"?").concat(n),r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.Z=function(e){return i.apply(this,arguments)}},247:function(e,t,n){n.r(t);var r=n(433),a=n(861),c=n(439),s=n(757),i=n.n(s),u=n(791),o=n(689),p=n(407),f=n(184);t.default=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],s=t[1],h=(0,o.UO)().movieId,d="3/movie/".concat(h,"/credits");return(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Z)(d).then((function(e){s((0,r.Z)(e.data.cast))})).catch((function(e){alert(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,f.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.profile_path,r=e.name,a=e.character,c="http://image.tmdb.org/t/p/w200/".concat(n);return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:c,alt:r}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{children:["Name: ",r]}),(0,f.jsxs)("p",{children:["Character: ",a]})]})]},t)}))})}}}]);
//# sourceMappingURL=247.5b687c8c.chunk.js.map
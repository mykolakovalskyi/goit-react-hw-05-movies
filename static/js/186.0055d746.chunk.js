"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{407:function(e,n,t){var r=t(861),a=t(757),c=t.n(a),u=t(243).Z.create({baseURL:"https://api.themoviedb.org",headers:{accept:"application/json"},params:{api_key:"510d6b02ed225a51e009d13f1b3c4d4c",language:"en-US"}});function s(){return(s=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.Z=function(e){return s.apply(this,arguments)}},186:function(e,n,t){t.r(n);var r=t(433),a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(791),o=t(689),p=t(407),f=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],u=n[1],h=(0,o.UO)().movieId,l="3/movie/".concat(h,"/reviews");return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Z)(l).then((function(e){u((0,r.Z)(e.data.results))})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,f.jsx)("ul",{children:0===t.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie."}):t.filter((function(e,n){return n<10})).map((function(e){var n=e.id,t=e.author_details,r=e.content,a=t.username;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:a}),(0,f.jsx)("p",{children:r})]},n)}))})}}}]);
//# sourceMappingURL=186.0055d746.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{407:function(e,t,a){var n=a(861),r=a(757),c=a.n(r),s=a(243);function i(){return(i=(0,n.Z)(c().mark((function e(t){var a,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"510d6b02ed225a51e009d13f1b3c4d4c",a=new URLSearchParams({api_key:"510d6b02ed225a51e009d13f1b3c4d4c",language:"en-US"}),n={headers:{accept:"application/json"}},e.next=5,s.Z.get("https://api.themoviedb.org/".concat(t,"?").concat(a),n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.Z=function(e){return i.apply(this,arguments)}},247:function(e,t,a){a.r(t);var n=a(433),r=a(439),c=a(791),s=a(689),i=a(407),u=a(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),a=t[0],o=t[1],p=(0,s.UO)().movieId,d="3/movie/".concat(p,"/credits");return(0,c.useEffect)((function(){(0,i.Z)(d).then((function(e){o((0,n.Z)(e.data.cast))})).catch((function(e){alert(e.message)}))}),[d]),(0,u.jsx)("ul",{children:a.map((function(e){var t=e.id,a=e.profile_path,n=e.name,r=e.character,c="http://image.tmdb.org/t/p/w200/".concat(a);return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:c,alt:n}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:["Name: ",n]}),(0,u.jsxs)("p",{children:["Character: ",r]})]})]},t)}))})}}}]);
//# sourceMappingURL=247.6fbb3d43.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1208],{29927:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/corporate-responsibility",function(){return s(59214)}])},36137:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var r=s(8014),n=s(62044),a=s(75657),i=s.n(a),l=s(75332);function c(){var e=(0,n.Z)("about-tab-nav").t,t=(0,l.useRouter)().pathname;return(0,r.jsx)("nav",{className:"bg-smoke",children:(0,r.jsxs)("ul",{className:"m-0 mx-auto flex max-w-md list-none justify-around",children:[(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(i(),{href:"/about",className:"text-2xl",children:(0,r.jsx)("a",{"aria-current":"/about"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("aboutTab")})})}),(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(i(),{href:"/history",children:(0,r.jsx)("a",{"aria-current":"/history"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("historyTab")})})}),(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(i(),{href:"/corporate-responsibility",children:(0,r.jsx)("a",{"aria-current":"/corporate-responsibility"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("corporateResponsibilityTab")})})}),(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(i(),{href:"/press",children:(0,r.jsx)("a",{"aria-current":"/press"===t?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:e("pressTab")})})})]})})}},61739:function(e,t,s){"use strict";s.d(t,{Af:function(){return m},F3:function(){return h},lj:function(){return x},oe:function(){return u},xG:function(){return p}});var r=s(43692),n=s(12042),a=s(99728),i=s(21157),l=s(61557),c=s(65954),o=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},d=function(e,t,s){return("en-US"===s?"".concat(e).concat(t):"".concat(e,"/").concat(s).concat(t)).replace(/\/+$/,"")},u=function(e,t,s,r){var n="https://www.proultimatewealth.com",a={title:s||"",description:r||""};return a.canonical=d(n,e,t),a.languageAlternates=[{href:d(n,e,"en-US"),hrefLang:"en"},{href:d(n,e,"zh-CN"),hrefLang:"zh-hans"},{href:d(n,e,"zh-TW"),hrefLang:"zh-hant"},{href:d(n,e,"en-US"),hrefLang:"x-default"}],a},h=function(e,t){if(e.length<=t)return[e];for(var s=[],r=0;r<e.length;)s.push(e.slice(r,r+t)),r+=t;return s},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,a.Z)((0,n.Z)({style:"currency"},s),{currency:t})).format(e)},x=function(e,t,s){return 1===e?t*(1+s):x(e-1,t,s)+t*Math.pow(1+s,e)},m=(function(){var e=(0,r.Z)((function(e,t){var s,r,n,a,i,d,u,h,p,x,m,f=arguments;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return s=f.length>2&&void 0!==f[2]&&f[2],r=[],n=function(s){var r={fields:["Slug","locale"],locale:"all",pagination:{page:s,pageSize:100}};return t&&(r.filters=t),(0,c.s1)(e,{params:r})},a=function(e){e.length&&e.forEach((function(e){var t=o(e.attributes.locale);r.push({params:s?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,n(1)];case 1:if(i=l.sent(),d=i.data,u=d.data,h=d.meta,a(u),!(h.pagination.pageCount>1))return[3,3];for(p=[],x=2;x<=h.pagination.pageCount;x+=1)m=n(x),p.push(m);return[4,Promise.all(p)];case 2:l.sent().forEach((function(e){var t=e.data.data;a(t)})),l.label=3;case 3:return[2,r]}}))}))}(),function(){var e=(0,r.Z)((function(e,t,s){var r,n,a,o,d,u,h,p,x,m,f,g,b,j,v,_,N,y,w;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return d=e.params.slug,u=e.locale,h=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),p={},x=[(0,c.s1)("/api/guides",{params:{locale:h,filters:{Slug:{$eq:d},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],s&&x.push((0,c.s1)("/api/videos",{params:{locale:h,filters:{Slug:{$eq:s}},populate:"Videos"}})),[4,Promise.all(x)];case 1:return m=i.Z.apply(void 0,[l.sent(),2]),f=m[0],g=m[1],b=f.data,(null===(j=b.data)||void 0===j?void 0:j.length)?(v=(0,i.Z)(j,1),_=v[0],p.title=_.attributes.Title,p.subTitle=_.attributes.Subtitle||"",p.slug=_.attributes.Slug,p.content=_.attributes.Content||"",p.sections=_.attributes.Section||null,p.seo={title:(null===(r=_.attributes)||void 0===r||null===(n=r.SEO)||void 0===n?void 0:n.Title)||null,description:(null===(a=_.attributes)||void 0===a||null===(o=a.SEO)||void 0===o?void 0:o.Description)||null},p.videos=[],s&&(N=g.data,(null===(y=N.data)||void 0===y?void 0:y.length)&&(w=(0,i.Z)(y,1),w[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};p.videos.push(t)})))),[2,p]):[2,!1]}}))}))}(),function(e,t){for(var s=null,r=0;r<e.length;r+=1){if(t.includes(e[r].value)){s=e[r];break}if(e[r].options&&(s=m(e[r].options,t)))break}return s})},59214:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return m},default:function(){return f}});var r=s(8014),n=s(62044),a=s(22319),i=s(61739),l=s(46834),c=s(80241),o=s.n(c);function d(){var e=(0,n.Z)("corporate-responsibility").t;return(0,r.jsxs)("div",{className:"my-8 overflow-hidden rounded border border-grayish-blue",children:[(0,r.jsx)("div",{className:'h-24 bg-[url("/images/img_palettes.jpg")] bg-cover md:h-64 lg:h-80'}),(0,r.jsxs)("div",{className:"mt-8 p-4",children:[(0,r.jsx)("h2",{className:"text-2xl text-ft-blue",children:e("hurricanIan")}),(0,r.jsx)("p",{className:"m-0 font-bold",children:e("hurricanIan_date")}),(0,r.jsxs)("div",{className:"flex flex-col gap-8 lg:flex-row",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{i18nKey:"hurricanIan_desc",ns:"corporate-responsibility",components:{p:(0,r.jsx)("p",{})}})}),(0,r.jsx)("div",{className:"w-full text-center",children:(0,r.jsx)(o(),{src:"/images/img_ian_relief.jpg",alt:"",height:230,width:300})})]})]})]})}function u(){var e=(0,n.Z)("corporate-responsibility").t;return(0,r.jsxs)("div",{className:"my-8 overflow-hidden rounded border border-grayish-blue",children:[(0,r.jsx)("div",{className:'h-24 bg-[url("/images/csr_lg_makingstrides.jpg")] bg-cover md:h-64 lg:h-80'}),(0,r.jsxs)("div",{className:"mt-8 p-4",children:[(0,r.jsx)("h2",{className:"text-2xl text-ft-blue",children:e("making_strides")}),(0,r.jsx)("p",{className:"m-0 font-bold",children:e("making_strides_subtitle")}),(0,r.jsxs)("div",{className:"flex flex-col gap-8 lg:flex-row",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{i18nKey:"making_strides_desc",ns:"corporate-responsibility",components:{p:(0,r.jsx)("p",{}),0:(0,r.jsx)("a",{href:"https://www.facebook.com/events/888177214601034/",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}})}),(0,r.jsx)("div",{className:"w-full text-center",children:(0,r.jsx)(o(),{src:"/images/logo_makingstrides.png",alt:"",height:115,width:300})})]})]})]})}function h(){var e=(0,n.Z)("corporate-responsibility").t;return(0,r.jsxs)("div",{className:"flex-1 overflow-hidden rounded border border-grayish-blue",children:[(0,r.jsx)("div",{className:'h-24 bg-[url("/images/csr_sm_japan.jpg")] bg-cover md:h-64 lg:h-80'}),(0,r.jsxs)("div",{className:"mt-8 p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-2xl text-ft-blue",children:e("japan_tsunami_relief")}),(0,r.jsx)("p",{className:"m-0 font-bold",children:e("japan_tsunami_relief_date")})]}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{src:"/images/logo_redcross.png",alt:"",height:43,width:132})})]}),(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{i18nKey:"japan_tsunami_relief_desc",ns:"corporate-responsibility",components:{p:(0,r.jsx)("p",{})}})})]})]})}function p(){var e=(0,n.Z)("corporate-responsibility").t;return(0,r.jsxs)("div",{className:"flex-1 overflow-hidden rounded border border-grayish-blue",children:[(0,r.jsx)("div",{className:'h-24 bg-[url("/images/csr_sm_relay.jpg")] bg-cover md:h-64 lg:h-80'}),(0,r.jsxs)("div",{className:"mt-8 p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-2xl text-ft-blue",children:e("right_on_track")}),(0,r.jsx)("p",{className:"m-0 font-bold",children:e("right_on_track_subtitle")})]}),(0,r.jsx)("div",{children:(0,r.jsx)(o(),{src:"/images/logo_acs.png",alt:"",height:43,width:132})})]}),(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{i18nKey:"right_on_track_desc",ns:"corporate-responsibility",components:{p:(0,r.jsx)("p",{})}})})]})]})}var x=s(36137),m=!0;function f(){var e=(0,n.Z)("corporate-responsibility"),t=e.t,s=e.lang,l=(0,i.oe)("/corporate-responsibility",s,t("seoTitle"),t("seoDescription")),c=l.title,o=l.description,m=l.canonical,f=l.languageAlternates;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{title:c,description:o,canonical:m,languageAlternates:f}),(0,r.jsx)(x.Z,{}),(0,r.jsx)("section",{"aria-labelledby":"community-title",children:(0,r.jsxs)("div",{className:"m-auto max-w-5xl px-8 py-20 lg:px-10 lg:py-20",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{id:"community-title",className:"mb-8 text-center",children:t("community")}),(0,r.jsx)("p",{children:t("community_1")}),(0,r.jsx)("p",{className:"font-bold",children:t("community_2")}),(0,r.jsx)("p",{children:t("community_3")})]}),(0,r.jsx)(d,{}),(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"flex flex-col gap-8 md:flex-row",children:[(0,r.jsx)(h,{}),(0,r.jsx)(p,{})]})]})})]})}}},function(e){e.O(0,[2319,9774,2888,179],(function(){return t=29927,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(globalThis.webpackChunkangular_module_federation=globalThis.webpackChunkangular_module_federation||[]).push([[419],{7419:(e,t,n)=>{"use strict";n.r(t);var o=n(3591),d=n(5284),i=n(7656),r=n(9729);const a=[{path:"newsfeed",loadChildren:()=>n.e(246).then(n.t.bind(n,9246,7)).then((e=>e.NewsfeedModule))},{path:"contacts-list",loadChildren:()=>n.e(996).then(n.t.bind(n,9996,7)).then((e=>e.ContactsListModule)),pathMatch:"full"},{path:"contacts-list/:id",loadChildren:()=>n.e(343).then(n.t.bind(n,6343,7)).then((e=>e.ContactsDetailsModule))},{path:"",redirectTo:"newsfeed",pathMatch:"full"}];class l{}l.ɵmod=o["ɵɵdefineNgModule"]({type:l}),l.ɵinj=o["ɵɵdefineInjector"]({factory:function(e){return new(e||l)},imports:[[r.RouterModule.forRoot(a,{useHash:!0})],r.RouterModule]}),("undefined"==typeof ngJitMode||ngJitMode)&&o["ɵɵsetNgModuleScope"](l,{imports:[r.RouterModule],exports:[r.RouterModule]});class c{}c.ɵfac=function(e){return new(e||c)},c.ɵcmp=o["ɵɵdefineComponent"]({type:c,selectors:[["app-root"]],decls:7,vars:0,consts:[[1,"sidebar"],["routerLink","newsfeed","routerLinkActive","active-link"],["routerLink","contacts-list","routerLinkActive","active-link"],[1,"main"]],template:function(e,t){1&e&&(o["ɵɵelementStart"](0,"div",0),o["ɵɵelementStart"](1,"a",1),o["ɵɵtext"](2,"Newsfeed"),o["ɵɵelementEnd"](),o["ɵɵelementStart"](3,"a",2),o["ɵɵtext"](4,"Contacts"),o["ɵɵelementEnd"](),o["ɵɵelementEnd"](),o["ɵɵelementStart"](5,"div",3),o["ɵɵelement"](6,"router-outlet"),o["ɵɵelementEnd"]())},directives:[r.RouterLinkWithHref,r.RouterLinkActive,r.RouterOutlet],styles:[".sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 260px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #2c3c4d;\n  overflow-x: hidden;\n  padding-top: 40px;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 1.5rem;\n  color: #ffffff;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #1c2a3d;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 260px;\n  padding: 0px 10px;\n}"]});class s{}s.ɵmod=o["ɵɵdefineNgModule"]({type:s,bootstrap:[c]}),s.ɵinj=o["ɵɵdefineInjector"]({factory:function(e){return new(e||s)},imports:[[d.b2,l,i.AvatarModule,i.ButtonModule]]}),("undefined"==typeof ngJitMode||ngJitMode)&&o["ɵɵsetNgModuleScope"](s,{declarations:[c],imports:[d.b2,l,i.AvatarModule,i.ButtonModule]}),(0,o.enableProdMode)(),d.q6().bootstrapModule(s).catch((e=>console.error(e)))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Sykc:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),r=t("pMnS"),u=t("Ip0R"),a=t("ZYCi"),i=t("d2hk"),c=t("wThA"),s=t("6blF"),p=t("t/Na"),b=t("ZYjt"),g=function(){function n(n,l){this.fetch=n,this.sanitizer=l,this.playerVideos=void 0}return n.prototype.resetPlayerVideos=function(){return this.playerVideos=void 0,!0},n.prototype.getPlayerVideos=function(n){var l=this;return new s.a(this.playerVideos?function(n){return n.next(l.playerVideos)}:function(t){l.Observer=t,l.fetchPlaylist(n)})},n.prototype.fetchPlaylist=function(n){var l=this;new Promise(function(t,e){var o,r;l.fetch.get("https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI&channelId=UCoh98rO2DkogICZKE-2fJ7g&maxResults=50&part=snippet").subscribe(function(a){r=a.nextPageToken||void 0,(o=a.items.find(function(l){return l.snippet.title==n}))?t(o):a.nextPageToken?u(l.fetch):e()});var u=function(l){l.get("https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI&channelId=UCoh98rO2DkogICZKE-2fJ7g&maxResults=50&part=snippet&pageToken="+r).subscribe(function(a){r=a.nextPageToken||void 0,(o=a.items.find(function(l){return l.snippet.title==n}))?t(o):a.nextPageToken?u(l):e()})}}).then(function(n){l.fetch.get("https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI&maxResults=50&part=snippet&playlistId="+n.id).subscribe(function(n){Array.from(n.items);for(var t=0,e=n.items;t<e.length;t++){var o=e[t];o.URL=l.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/"+o.snippet.resourceId.videoId)}l.playerVideos=n,l.Observer.next(n)})}).catch(function(n){l.Observer.next(["player videos not found"])})},n.ngInjectableDef=e.S({factory:function(){return new n(e.W(p.c),e.W(b.b))},token:n,providedIn:"root"}),n}(),d=t("mrSG"),f=t("ny24"),h=t("L6hV"),m=t("a1DB"),y=function(n){function l(l,t){var e=n.call(this)||this;return e.papa=l,e.fetch=t,e}return d.c(l,n),l.prototype.resetPlayerData=function(){return this.playerData=void 0,this.randomVideos=void 0,!0},l.prototype.getPlayerData=function(n){var l=this;return new s.a(this.playerData?function(t){return t.next(l.playerData.filter(function(l){return l.Name===n})[0])}:function(t){l.observer=t,l.fetchData(n)})},l.prototype.fetchData=function(n){var l=this;this.fetch.get("https://www.googleapis.com/drive/v3/files/15oeaaa7_u3_U-VZZ7kKeWGBpujTNxghE?alt=media&key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI",{responseType:"text"}).pipe(Object(f.a)(this.ngUnsubscribe)).subscribe(function(t){l.papa.parse(t,{header:!0,complete:function(t){l.playerData=t.data,l.observer.next(t.data.filter(function(l){return l.Name===n})[0])}})})},l.prototype.getRandomVideos=function(n){var l=this;return new s.a(this.randomVideos?function(n){return n.next(l.randomVideos)}:function(t){var e=l.randomNumbers(n);l.randomVideos=e,t.next(e)})},l.prototype.randomNumbers=function(n){var l=n.length,t=0,e=0;if(n.forEach(function(n){n.snippet.title.toLowerCase().includes("compilation")?t=n:n.snippet.title.toLowerCase().includes("top ten")&&(e=n)}),0==t&&0==e){for(;t==e;)t=n[Math.floor(Math.random()*l)];for(;e==t||0==e;)e=n[Math.floor(Math.random()*l)]}else 0==t&&0!=e?t=n[Math.floor(Math.random()*l)]:0!=t&&0==e&&(e=n[Math.floor(Math.random()*l)]);return[t,e]},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(m.a),e.W(p.c))},token:l,providedIn:"root"}),l}(h.a),v=function(){function n(n,l,t,e){this.videodata=n,this.titleService=l,this.route=t,this.playerdata=e,this.hamburgerActive=!1}return n.prototype.ngOnInit=function(){this.titleService.setTitle(this.route.snapshot.params.player.split(/(?=[A-Z])/).join(" ")+" | SUNDERLANDAFC.TV"),this.videodata.resetPlayerVideos(),this.playerdata.resetPlayerData(),document.querySelector("body").classList.remove("noScroll")},n.prototype.ngOnDestroy=function(){this.videodata.resetPlayerVideos(),this.playerdata.resetPlayerData()},n.prototype.toggleHamburger=function(){this.hamburgerActive=!this.hamburgerActive,this.hamburgerActive?document.querySelector("body").classList.add("noScroll"):document.querySelector("body").classList.remove("noScroll")},n.prototype.exitHamburgerOnLinkClick=function(){this.hamburgerActive=!1,document.querySelector("body").classList.remove("noScroll")},n}(),O=e.nb({encapsulation:0,styles:[["header[_ngcontent-%COMP%]{display:flex;align-items:center;height:100px;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff}header.hamburgerActive[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:calc(100vh - 100px)}header.triangleActive[_ngcontent-%COMP%]{background:#eb1428}header.triangleActive[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{color:#fff}header.triangleActive[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]{background-color:#00000050}header.triangleActive[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{background-color:#eb1428!important}header.triangleActive[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-weight:700;font-size:2em;margin:0 auto 0 10px;color:#000}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{color:#eb1428;content:\"SAFC\"}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]{position:relative;left:5px;top:-.9em;font-size:50%;font-weight:initial;background-color:#eb1428;color:#fff;border-radius:.25em;padding:.25em}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;height:0;overflow:hidden;flex-direction:column;justify-content:flex-start;position:absolute;top:100px;left:0;background:inherit;z-index:999}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;height:23px;font-size:20px;text-align:center;transition:color .1s;margin-top:40px}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#eb1428}.triangle[_ngcontent-%COMP%]{width:0;height:0;position:absolute;top:100px;left:0;transition:border-top .3s;border-right:0 solid transparent;z-index:-1}.triangle.active[_ngcontent-%COMP%]{border-left:100vw solid transparent;border-top:30vh solid #eb1428}.hamburger[_ngcontent-%COMP%]{height:100%;width:65px;padding:15px;cursor:pointer;transition-property:opacity,filter,-webkit-filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin-left:auto;overflow:visible}.hamburger[_ngcontent-%COMP%]:focus{outline:0}.hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]{top:2px}.hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before{top:10px;transition-property:transform,opacity;transition-timing-function:ease;transition-duration:.15s}.hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after{top:20px}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], .hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after, .hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before{background-color:#000}.hamburger-box[_ngcontent-%COMP%]{width:40px;height:24px;display:inline-block;position:relative}.hamburger-inner[_ngcontent-%COMP%]{display:block;top:50%;margin-top:-2px;width:35px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner[_ngcontent-%COMP%]::before{width:35px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease;content:'';display:block;top:-10px}.hamburger-inner[_ngcontent-%COMP%]::after{width:35px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease;content:'';display:block;bottom:-10px}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before{transform:rotate(-45deg) translate3d(-5.71429px,-6px,0);opacity:0}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after{transform:translate3d(0,-20px,0) rotate(-90deg)}@media only screen and (min-width:900px){.logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{content:\"SUNDERLANDAFC\"!important}nav[_ngcontent-%COMP%]{margin-left:auto!important;width:50%}nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{position:initial!important;height:auto!important;flex-direction:row!important;align-items:center!important;justify-content:space-around!important}nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:0!important}.hamburger[_ngcontent-%COMP%]{display:none}}@media only screen and (max-width:900px){safc-search[_ngcontent-%COMP%]{margin-top:20px}}"]],data:{}});function P(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,31,"header",[["class","header"]],null,null,null,null,null)),e.ob(1,278528,null,0,u.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.zb(2,{hamburgerActive:0}),(n()(),e.pb(3,0,null,null,8,"a",[["class","logo"],["routerLink","/"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.yb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.ob(4,671744,[[2,4]],0,a.o,[a.m,a.a,u.g],{routerLink:[0,"routerLink"]},null),e.ob(5,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,1,{links:1}),e.Bb(603979776,2,{linksWithHrefs:1}),(n()(),e.pb(8,0,null,null,0,"strong",[],null,null,null,null,null)),(n()(),e.Db(-1,null,[".TV"])),(n()(),e.pb(10,0,null,null,1,"sup",[["class","v2"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["v2"])),(n()(),e.pb(12,0,null,null,19,"nav",[],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,3,"button",[["aria-label","Open Navigation"],["class","hamburger"],["title","Open Navigation"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleHamburger()&&e),e},null,null)),e.ob(14,278528,null,0,u.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),e.pb(15,0,null,null,1,"span",[["class","hamburger-box"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,0,"span",[["class","hamburger-inner"]],null,null,null,null,null)),(n()(),e.pb(17,0,null,null,14,"div",[["class","links"]],null,null,null,null,null)),(n()(),e.pb(18,0,null,null,5,"a",[["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0,r=n.component;return"click"===l&&(o=!1!==e.yb(n,19).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),"click"===l&&(o=!1!==r.exitHamburgerOnLinkClick()&&o),o},null,null)),e.ob(19,671744,[[4,4]],0,a.o,[a.m,a.a,u.g],{routerLink:[0,"routerLink"]},null),e.ob(20,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,3,{links:1}),e.Bb(603979776,4,{linksWithHrefs:1}),(n()(),e.Db(-1,null,["Home"])),(n()(),e.pb(24,0,null,null,5,"a",[["routerLink","videos"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0,r=n.component;return"click"===l&&(o=!1!==e.yb(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),"click"===l&&(o=!1!==r.exitHamburgerOnLinkClick()&&o),o},null,null)),e.ob(25,671744,[[6,4]],0,a.o,[a.m,a.a,u.g],{routerLink:[0,"routerLink"]},null),e.ob(26,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,5,{links:1}),e.Bb(603979776,6,{linksWithHrefs:1}),(n()(),e.Db(-1,null,["Videos"])),(n()(),e.pb(30,0,null,null,1,"safc-search",[],null,null,null,i.b,i.a)),e.ob(31,49152,null,0,c.a,[a.m],null,null)],function(n,l){var t=l.component,e=n(l,2,0,t.hamburgerActive);n(l,1,0,"header",e),n(l,4,0,"/"),n(l,5,0,"active"),n(l,14,0,"hamburger",t.hamburgerActive?"active":""),n(l,19,0,"home"),n(l,20,0,"active"),n(l,25,0,"videos"),n(l,26,0,"active")},function(n,l){n(l,3,0,e.yb(l,4).target,e.yb(l,4).href),n(l,18,0,e.yb(l,19).target,e.yb(l,19).href),n(l,24,0,e.yb(l,25).target,e.yb(l,25).href)})}function k(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-nav",[],null,null,null,P,O)),e.ob(1,245760,null,0,v,[g,b.h,a.a,y],null,null)],function(n,l){n(l,1,0)},null)}var C=e.lb("app-nav",v,k,{},{},[]),x=function(n){function l(l,t,e,o){var r=n.call(this)||this;return r.playerdata=l,r.videodata=t,r.route=e,r.router=o,r}return d.c(l,n),l.prototype.ngOnInit=function(){var n=this;this.playerdata.getPlayerData(this.route.snapshot.params.player.split(/(?=[A-Z])/).join(" ")).pipe(Object(f.a)(this.ngUnsubscribe)).subscribe(function(l){l?(n.playerData=l,n.videodata.getPlayerVideos(n.playerData.Name).pipe(Object(f.a)(n.ngUnsubscribe)).subscribe(function(l){l.items?l.items.length>2?n.playerdata.getRandomVideos(l.items).pipe(Object(f.a)(n.ngUnsubscribe)).subscribe(function(l){return n.randomVideos=l}):n.randomVideos=l.items:(console.log("no player videos"),n.randomVideos="Player videos not found")})):n.router.navigate(["/404"])})},l}(h.a),M=e.nb({encapsulation:0,styles:[["@media only screen and (min-width:900px){.card.long[_ngcontent-%COMP%]{padding:0;flex-direction:row}.card.long[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex-direction:row;width:auto;justify-content:space-around}}"]],data:{}});function _(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"div",[["class","wrapper"],["style","justify-content: center;"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"img",[["alt","Loading ..."],["class","loader"],["src","../../../assets/loader.gif"]],null,null,null,null,null))],null,null)}function w(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,22,"div",[["class","card long"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,2,"picture",[],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,0,"source",[["type","image/webp"]],[[8,"srcset",4]],null,null,null,null)),(n()(),e.pb(3,0,null,null,0,"img",[["class","image left"]],[[8,"alt",0],[8,"src",4]],null,null,null,null)),(n()(),e.pb(4,0,null,null,18,"div",[["class","textWrapper"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,2,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(6,null,[""," "])),(n()(),e.pb(7,0,null,null,0,"span",[["class","flag-icon English"]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(n()(),e.Db(9,null,["",""])),(n()(),e.pb(10,0,null,null,1,"p",[["class","text"],["style","text-align: left"]],null,null,null,null,null)),(n()(),e.Db(11,null,["",""])),(n()(),e.pb(12,0,null,null,10,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Db(-1,null,["Games: "])),(n()(),e.pb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Db(16,null,["",""])),(n()(),e.pb(17,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Db(-1,null,["Goals: "])),(n()(),e.pb(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Db(20,null,["",""])),(n()(),e.pb(21,0,null,null,1,"a",[["class","label"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),e.Db(-1,null,["View All Statistics"]))],null,function(n,l){var t=l.component;n(l,2,0,e.rb(1,"../../../assets/playerprofiles/",t.playerData.ID,".webp")),n(l,3,0,e.rb(1,"",t.playerData.Name," profile"),e.rb(1,"../../../assets/playerprofiles/",t.playerData.ID,".png")),n(l,6,0,t.playerData.Name),n(l,9,0,t.playerData["Years "]),n(l,11,0,t.playerData.Overview),n(l,16,0,t.playerData.Appearances),n(l,20,0,t.playerData.Goals),n(l,21,0,e.rb(1,"http://www.thestatcat.co.uk/Player.aspx?PlayerID=",t.playerData.ID,""))})}function D(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(1,null,["Recommended videos of ",""]))],null,function(n,l){n(l,1,0,l.component.playerData.Name)})}function L(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"article",[["class","card video"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"]],[[8,"title",0],[8,"src",5]],null,null,null,null))],null,function(n,l){n(l,1,0,e.rb(1,"Random video of ",l.component.playerData.Name,""),l.context.$implicit.URL)})}function I(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,L)),e.ob(2,278528,null,0,u.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.randomVideos)},null)}function A(n){return e.Eb(0,[(n()(),e.gb(16777216,null,null,1,null,_)),e.ob(1,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,w)),e.ob(3,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,D)),e.ob(5,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,I)),e.ob(7,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.playerData||!t.randomVideos),n(l,3,0,t.playerData&&t.randomVideos),n(l,5,0,t.playerData&&t.randomVideos&&"Player videos not found"!=t.randomVideos),n(l,7,0,t.playerData&&t.randomVideos&&"Player videos not found"!=t.randomVideos)},null)}function V(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,A,M)),e.ob(1,245760,null,0,x,[y,g,a.a,a.m],null,null)],function(n,l){n(l,1,0)},null)}var j=e.lb("app-home",x,V,{},{},[]),S=function(n){function l(l,t,e){var o=n.call(this)||this;return o.playerdata=l,o.videodata=t,o.route=e,o}return d.c(l,n),l.prototype.ngOnInit=function(){var n=this;this.playerdata.getPlayerData(this.route.snapshot.params.player.split(/(?=[A-Z])/).join(" ")).pipe(Object(f.a)(this.ngUnsubscribe)).subscribe(function(l){n.playerData=l,n.videodata.getPlayerVideos(n.playerData.Name).pipe(Object(f.a)(n.ngUnsubscribe)).subscribe(function(l){n.playerVideos=l.items?l.items:"Player videos not found"})})},l}(h.a),N=e.nb({encapsulation:0,styles:[[".loader[_ngcontent-%COMP%]{margin:0 auto}.card.long[_ngcontent-%COMP%]{background:0 0;box-shadow:none;flex-direction:column}.card.long[_ngcontent-%COMP%]   p.email[_ngcontent-%COMP%]{width:100%;display:block;font-size:1.1em;padding:5px;line-height:1.2}.card.long[_ngcontent-%COMP%]   p.email[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#eb1428;text-decoration:none}"]],data:{}});function E(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"div",[["class","wrapper"],["style","justify-content: center;"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"img",[["alt","Loading ..."],["class","loader"],["src","../../../assets/loader.gif"]],null,null,null,null,null))],null,null)}function U(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"article",[["class","card video"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["title","Player Video"]],[[8,"src",5]],null,null,null,null))],null,function(n,l){n(l,1,0,l.context.$implicit.URL)})}function z(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","wrapper multiLine"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,U)),e.ob(2,278528,null,0,u.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.playerVideos)},null)}function K(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,9,"article",[["class","card long"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,8,"div",[["class","textWrapper"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,1,"h1",[["class","title accent"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["Sorry, no videos found"])),(n()(),e.pb(4,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["If you know of any videos featuring this player, email us or leave a comment on YouTube."])),(n()(),e.pb(6,0,null,null,3,"p",[["class","email"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,2,"a",[["href","mailto:hello@sunderlandafc.tv"],["target","_blank"]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"strong",[["class","accent"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["hello@sunderlandafc.tv"]))],null,null)}function R(n){return e.Eb(0,[(n()(),e.gb(16777216,null,null,1,null,E)),e.ob(1,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,z)),e.ob(3,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,K)),e.ob(5,16384,null,0,u.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.playerVideos),n(l,3,0,t.playerVideos&&"Player videos not found"!=t.playerVideos),n(l,5,0,"Player videos not found"==t.playerVideos)},null)}function T(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-videos",[],null,null,null,R,N)),e.ob(1,245760,null,0,S,[y,g,a.a],null,null)],function(n,l){n(l,1,0)},null)}var W=e.lb("app-videos",S,T,{},{},[]),B=t("gIcY"),Z=function(){return function(){}}(),F=t("UBNF");t.d(l,"PlayersModuleNgFactory",function(){return H});var H=e.mb(o,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[r.a,C,j,W]],[3,e.j],e.x]),e.xb(4608,u.l,u.k,[e.u,[2,u.s]]),e.xb(4608,B.m,B.m,[]),e.xb(1073742336,u.b,u.b,[]),e.xb(1073742336,a.p,a.p,[[2,a.v],[2,a.m]]),e.xb(1073742336,Z,Z,[]),e.xb(1073742336,B.k,B.k,[]),e.xb(1073742336,B.d,B.d,[]),e.xb(1073742336,F.a,F.a,[]),e.xb(1073742336,o,o,[]),e.xb(1024,a.k,function(){return[[{path:"",component:v,outlet:"nav"},{path:"",redirectTo:"home"},{path:"home",component:x},{path:"videos",component:S}]]},[])])})}}]);
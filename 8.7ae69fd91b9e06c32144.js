(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{TrTD:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),r=t("Ip0R"),a=t("ZYCi"),s=t("mrSG"),i=t("6blF"),c=t("ny24"),p=t("L6hV"),b=t("a1DB"),g=t("t/Na"),f=t("ZYjt"),h=function(n){function l(l,t,e){var u=n.call(this)||this;return u.papa=l,u.fetch=t,u.sanitizer=e,u}return s.c(l,n),l.prototype.resetData=function(){this.seasonPlayersData=null,this.seasonData=null},l.prototype.getAllSeasonData=function(n){var l=this;return new i.a(this.seasonData?function(n){return n.next(l.seasonData)}:function(t){l.seasonObserver=t,l.fetchAllSeasonData(n)})},l.prototype.fetchAllSeasonData=function(n){var l=this;this.fetch.get("https://www.googleapis.com/drive/v3/files/13zFcmgj-ZniGi56ryFnOHHLrihkHr0gZ?key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI&alt=media",{responseType:"text"}).pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(t){l.papa.parse(t,{header:!0,complete:function(t){t.data.pop();var e=t.data.filter(function(l){return l.Season===n})[0];l.seasonData=e,e?l.seasonObserver.next(e):l.seasonObserver.error(e)}})})},l.prototype.getAllPlayerData=function(){var n=this;return new i.a(this.playerData?function(l){return l.next(n.playerData)}:function(l){n.playerObserver=l,n.fetchPlayerData()})},l.prototype.fetchPlayerData=function(){var n=this;this.fetch.get("https://www.googleapis.com/drive/v3/files/15oeaaa7_u3_U-VZZ7kKeWGBpujTNxghE?alt=media&key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI",{responseType:"text"}).pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(l){n.papa.parse(l,{header:!0,complete:function(l){n.playerData=l.data,l.data.pop(),n.playerObserver.next(l.data)}})})},l.prototype.getSeasonPlayers=function(n){var l=this;return new i.a(this.seasonPlayersData?function(n){return n.next(l.seasonPlayersData)}:function(t){l.seasonPlayersObserver=t,l.fetchSeasonPlayers(n)})},l.prototype.fetchSeasonPlayers=function(n){function l(n,l,t){return(n-l)*(n-t)<=0}if("s"==n.charAt(4)){var t=[],e={from:Number(n.replace("s","")),to:Number(n.replace("s",""))+9};this.playerData.forEach(function(n){var u={from:n["Years "].split("-")[0],to:n["Years "].split("-")[1]};(l(e.from,u.from,u.to)||l(e.to,u.from,u.to))&&t.push(n)})}else if("-"==n.charAt(4)){t=[];var u={from:n.split("-")[0],to:n.split("-")[1]};this.playerData.forEach(function(n){var e={from:n["Years "].split("-")[0],to:n["Years "].split("-")[1]};l(u.from,e.from,e.to)&&l(u.to,e.from,e.to)&&t.push(n)})}Array.from(t),this.seasonPlayersObserver.next(t)},l.prototype.getTopSeasonPlayers=function(n){var l=this;return new i.a(this.seasonTopPlayersData?function(n){return n.next(l.seasonTopPlayersData)}:function(t){l.seasonTopPlayersObserver=t,l.fetchTopSeasonPlayers(n)})},l.prototype.fetchTopSeasonPlayers=function(n){var l=[];n.sort(function(n,l){return l.Goals-n.Goals});for(var t=0;t<3;t++)l.push(n.filter(function(l){return l.Goals===n[t].Goals})[0]);this.seasonTopPlayersObserver.next(l)},l.prototype.getSeasonVideos=function(n){var l=this;return new i.a(this.seasonVideosData?function(n){return n.next(l.seasonVideosData)}:function(t){l.seasonVideosObserver=t,l.fetchSeasonVideos(n)})},l.prototype.fetchSeasonVideos=function(n){var l=this;function t(n,l,t){return(n-l)*(n-t)<=0}var e={Pre:"PLiVty6-a8hTyIQnquz7JuJUbmptgl4k4X",195:"PLiVty6-a8hTxkwNk7KNVCCiy5Q8r8pnn6",196:"PLiVty6-a8hTxnKHpV0vERrl-TFI2JNI5e",197:"PLiVty6-a8hTzWHK1t0PZQ_nybFZuf4hpv",198:"PLiVty6-a8hTw5XVCGnZ4BoH1NE7swf_LB",199:"PLiVty6-a8hTw-YVfL4cX4-FwVnFL1gP8Q"},u="s"==n.charAt(4)?e.Pre:e[n.substr(0,3)];this.fetch.get("https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDBs9KZOutpxzd-_fNSUAl-nj0rW01XXJI&maxResults=50&part=snippet&playlistId="+u).pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(e){var o=[];if("PLiVty6-a8hTyIQnquz7JuJUbmptgl4k4X"==u){var r={from:Number(n.replace("s","")),to:Number(n.replace("s",""))+10};e.items.forEach(function(n){var e=n.snippet.title.split("-")[1].split(" ");t(e[e.length-1],r.from,r.to)&&t(e[e.length-1],r.from,r.to)&&(n.URL=l.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/"+n.snippet.resourceId.videoId),o.push(n))})}else e.items.forEach(function(t){var e=t.snippet.title.split("-")[1].split(" ");e[e.length-1]==n.split("-")[0]&&(t.URL=l.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/"+t.snippet.resourceId.videoId),o.push(t))});l.seasonVideosData=o,l.seasonVideosObserver.next(o)},function(n){return console.log("oops",n)})},l.prototype.getRandomVideos=function(n){var l=this;return new i.a(this.randomVideos?function(n){return n.next(l.randomVideos)}:function(t){var e=l.randomNumbers(n);l.randomVideos=e,t.next(e)})},l.prototype.randomNumbers=function(n){var l=n.length,t=0,e=0;if(0==t&&0==e){for(;t==e;)t=n[Math.floor(Math.random()*l)];for(;e==t||0==e;)e=n[Math.floor(Math.random()*l)]}else 0==t&&0!=e?t=n[Math.floor(Math.random()*l)]:0!=t&&0==e&&(e=n[Math.floor(Math.random()*l)]);return[t,e]},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(b.a),e.W(g.c),e.W(f.b))},token:l,providedIn:"root"}),l}(p.a),d=function(){function n(n,l,t,e){this.router=n,this.titleService=l,this.route=t,this.dataservice=e,this.hamburgerActive=!1}return n.prototype.ngOnInit=function(){var n=this;this.titleService.setTitle(this.route.snapshot.params.season+" | SUNDERLANDAFC.TV");var l=["1890s","1900s","1910s","1920s","1930s","1940s","1950-1951","1951-1952","1952-1953","1953-1954","1954-1955","1955-1956","1956-1957","1957-1958","1958-1959","1959-1960","1960-1961","1961-1962","1962-1963","1963-1964","1964-1965","1965-1966","1966-1967","1967-1968","1968-1969","1969-1970","1970-1971","1971-1972","1972-1973","1973-1974","1974-1975","1975-1976","1976-1977","1977-1978","1978-1979","1979-1980","1980-1981","1981-1982","1982-1983","1983-1984","1984-1985","1985-1986","1986-1987","1987-1988","1988-1989","1989-1990","1990-1991","1991-1992","1992-1993","1993-1994","1994-1995","1995-1996","1996-1997","1997-1998","1998-1999","1999-2000"].find(function(l){return l==n.router.url.split("/")[3]}),t=["Pre1950s","1950s","1960s","1970s","1980s","1990s"].find(function(l){return l==n.router.url.split("/")[2]}),e=(l||"").substring(0,3)==(t||"").replace(/\D/g,"").substring(0,3)||(l||"").substring(0,1)==(t||"").substring(3,4)&&(l||"").substring(3,5)==(t||"").substring(6,8);l&&t&&e||this.router.navigate(["/404"])},n.prototype.toggleHamburger=function(){this.hamburgerActive=!this.hamburgerActive,this.hamburgerActive?document.querySelector("body").classList.add("noScroll"):document.querySelector("body").classList.remove("noScroll")},n.prototype.exitHamburgerOnLinkClick=function(){this.hamburgerActive=!1,document.querySelector("body").classList.remove("noScroll")},n.prototype.ngOnDestroy=function(){this.dataservice.resetData()},n}(),m=e.nb({encapsulation:0,styles:[["header[_ngcontent-%COMP%]{display:flex;align-items:center;height:100px;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff}header.hamburgerActive[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:calc(100vh - 100px)}header.triangleActive[_ngcontent-%COMP%]{background:#eb1428}header.triangleActive[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{color:#fff}header.triangleActive[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]{background-color:#00000050}header.triangleActive[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{background-color:#eb1428!important}header.triangleActive[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-weight:700;font-size:2em;margin:0 auto 0 10px;color:#000}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{color:#eb1428;content:\"SAFC\"}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .v2[_ngcontent-%COMP%]{position:relative;left:5px;top:-.9em;font-size:50%;font-weight:initial;background-color:#eb1428;color:#fff;border-radius:.25em;padding:.25em}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;height:0;overflow:hidden;flex-direction:column;justify-content:flex-start;position:absolute;top:100px;left:0;background:inherit;z-index:999}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;height:23px;font-size:20px;text-align:center;transition:color .1s;margin-top:40px}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#eb1428}.triangle[_ngcontent-%COMP%]{width:0;height:0;position:absolute;top:100px;left:0;transition:border-top .3s;border-right:0 solid transparent;z-index:-1}.triangle.active[_ngcontent-%COMP%]{border-left:100vw solid transparent;border-top:30vh solid #eb1428}.hamburger[_ngcontent-%COMP%]{height:100%;width:65px;padding:15px;cursor:pointer;transition-property:opacity,filter,-webkit-filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin-left:auto;overflow:visible}.hamburger[_ngcontent-%COMP%]:focus{outline:0}.hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]{top:2px}.hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before{top:10px;transition-property:transform,opacity;transition-timing-function:ease;transition-duration:.15s}.hamburger[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after{top:20px}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], .hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after, .hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before{background-color:#000}.hamburger-box[_ngcontent-%COMP%]{width:40px;height:24px;display:inline-block;position:relative}.hamburger-inner[_ngcontent-%COMP%]{display:block;top:50%;margin-top:-2px;width:35px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner[_ngcontent-%COMP%]::before{width:35px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease;content:'';display:block;top:-10px}.hamburger-inner[_ngcontent-%COMP%]::after{width:35px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease;content:'';display:block;bottom:-10px}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before{transform:rotate(-45deg) translate3d(-5.71429px,-6px,0);opacity:0}.hamburger.active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after{transform:translate3d(0,-20px,0) rotate(-90deg)}@media only screen and (min-width:900px){.logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after{content:\"SUNDERLANDAFC\"!important}nav[_ngcontent-%COMP%]{margin-left:auto!important;width:50%}nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{position:initial!important;height:auto!important;flex-direction:row!important;align-items:center!important;justify-content:space-around!important}nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:0!important}.hamburger[_ngcontent-%COMP%]{display:none}}"]],data:{}});function y(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,35,"header",[["class","header"]],null,null,null,null,null)),e.ob(1,278528,null,0,r.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.zb(2,{hamburgerActive:0}),(n()(),e.pb(3,0,null,null,8,"a",[["class","logo"],["routerLink","/"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.yb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.ob(4,671744,[[2,4]],0,a.o,[a.m,a.a,r.g],{routerLink:[0,"routerLink"]},null),e.ob(5,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,1,{links:1}),e.Bb(603979776,2,{linksWithHrefs:1}),(n()(),e.pb(8,0,null,null,0,"strong",[],null,null,null,null,null)),(n()(),e.Db(-1,null,[".TV"])),(n()(),e.pb(10,0,null,null,1,"sup",[["class","v2"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["v2"])),(n()(),e.pb(12,0,null,null,23,"nav",[],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,3,"button",[["aria-label","Open Navigation"],["class","hamburger"],["title","Open Navigation"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleHamburger()&&e),e},null,null)),e.ob(14,278528,null,0,r.h,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),e.pb(15,0,null,null,1,"span",[["class","hamburger-box"]],null,null,null,null,null)),(n()(),e.pb(16,0,null,null,0,"span",[["class","hamburger-inner"]],null,null,null,null,null)),(n()(),e.pb(17,0,null,null,18,"div",[["class","links"]],null,null,null,null,null)),(n()(),e.pb(18,0,null,null,5,"a",[["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=!1!==e.yb(n,19).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),"click"===l&&(u=!1!==o.exitHamburgerOnLinkClick()&&u),u},null,null)),e.ob(19,671744,[[4,4]],0,a.o,[a.m,a.a,r.g],{routerLink:[0,"routerLink"]},null),e.ob(20,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,3,{links:1}),e.Bb(603979776,4,{linksWithHrefs:1}),(n()(),e.Db(-1,null,["Home"])),(n()(),e.pb(24,0,null,null,5,"a",[["routerLink","players"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=!1!==e.yb(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),"click"===l&&(u=!1!==o.exitHamburgerOnLinkClick()&&u),u},null,null)),e.ob(25,671744,[[6,4]],0,a.o,[a.m,a.a,r.g],{routerLink:[0,"routerLink"]},null),e.ob(26,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,5,{links:1}),e.Bb(603979776,6,{linksWithHrefs:1}),(n()(),e.Db(-1,null,["Players"])),(n()(),e.pb(30,0,null,null,5,"a",[["routerLink","videos"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=!1!==e.yb(n,31).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),"click"===l&&(u=!1!==o.exitHamburgerOnLinkClick()&&u),u},null,null)),e.ob(31,671744,[[8,4]],0,a.o,[a.m,a.a,r.g],{routerLink:[0,"routerLink"]},null),e.ob(32,1720320,null,2,a.n,[a.m,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Bb(603979776,7,{links:1}),e.Bb(603979776,8,{linksWithHrefs:1}),(n()(),e.Db(-1,null,["Videos"]))],function(n,l){var t=l.component,e=n(l,2,0,t.hamburgerActive);n(l,1,0,"header",e),n(l,4,0,"/"),n(l,5,0,"active"),n(l,14,0,"hamburger",t.hamburgerActive?"active":""),n(l,19,0,"home"),n(l,20,0,"active"),n(l,25,0,"players"),n(l,26,0,"active"),n(l,31,0,"videos"),n(l,32,0,"active")},function(n,l){n(l,3,0,e.yb(l,4).target,e.yb(l,4).href),n(l,18,0,e.yb(l,19).target,e.yb(l,19).href),n(l,24,0,e.yb(l,25).target,e.yb(l,25).href),n(l,30,0,e.yb(l,31).target,e.yb(l,31).href)})}function v(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-nav",[],null,null,null,y,m)),e.ob(1,245760,null,0,d,[a.m,f.h,a.a,h],null,null)],function(n,l){n(l,1,0)},null)}var O=e.lb("app-nav",d,v,{},{},[]),P=function(n){function l(l,t,e){var u=n.call(this)||this;return u.seasondata=l,u.router=t,u.activeroute=e,u}return s.c(l,n),l.prototype.ngOnInit=function(){var n=this;this.season=this.activeroute.snapshot.params.season,this.seasondata.getAllSeasonData(this.season).pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(l){"."==l["League Position"].substr(-1)&&(l["League Position"]=l["League Position"].slice(0,-1)),n.seasonData=l;var t,e,u=["1890s","1900s","1910s","1920s","1930s","1940s","1950-1951","1951-1952","1952-1953","1953-1954","1954-1955","1955-1956","1956-1957","1957-1958","1958-1959","1959-1960","1960-1961","1961-1962","1962-1963","1963-1964","1964-1965","1965-1966","1966-1967","1967-1968","1968-1969","1969-1970","1970-1971","1971-1972","1972-1973","1973-1974","1974-1975","1975-1976","1976-1977","1977-1978","1978-1979","1979-1980","1980-1981","1981-1982","1982-1983","1983-1984","1984-1985","1985-1986","1986-1987","1987-1988","1988-1989","1989-1990","1990-1991","1991-1992","1992-1993","1993-1994","1994-1995","1995-1996","1996-1997","1997-1998","1998-1999","1999-2000"],o=["Pre1950s","1950s","1960s","1970s","1980s","1990s"],r=u[u.indexOf(n.season)+1]||null,a=u[u.indexOf(n.season)-1]||null;o.forEach(function(n){((r||"").substring(0,3)==(n||"").replace(/\D/g,"").substring(0,3)||(r||"").substring(0,1)==(n||"").substring(3,4)&&(r||"").substring(3,5)==(n||"").substring(6,8))&&(t=n)}),o.forEach(function(n){((a||"").substring(0,3)==(n||"").replace(/\D/g,"").substring(0,3)||(a||"").substring(0,1)==(n||"").substring(3,4)&&(a||"").substring(3,5)==(n||"").substring(6,8))&&(e=n)}),n.nextSeason="/seasons/"+t+"/"+r,n.previousSeason="/seasons/"+e+"/"+a}),this.seasondata.getAllPlayerData().pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(l){return n.seasondata.getSeasonPlayers(n.activeroute.snapshot.params.season).pipe(Object(c.a)(n.ngUnsubscribe)).subscribe(function(l){l.length>2&&n.seasondata.getTopSeasonPlayers(l).pipe(Object(c.a)(n.ngUnsubscribe)).subscribe(function(l){return n.topPlayers=l})})}),this.seasondata.getSeasonVideos(this.season).pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(l){l.length<2?n.randomVideos=l:n.seasondata.getRandomVideos(l).pipe(Object(c.a)(n.ngUnsubscribe)).subscribe(function(l){return n.randomVideos=l})})},l}(p.a),k=e.nb({encapsulation:0,styles:[[".card.long[_ngcontent-%COMP%]   .image.left[_ngcontent-%COMP%]{height:200px;width:300px}.card.long[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:justify}@media only screen and (min-width:900px){.card.long[_ngcontent-%COMP%]{flex-direction:row}.card.long[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-right:10px}}.topScorer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#eb1428;transition:color .1s}"]],data:{}});function x(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"div",[["class","wrapper"],["style","justify-content: center;"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"img",[["alt","Loading ..."],["class","loader"],["src","../../../assets/loader.gif"]],null,null,null,null,null))],null,null)}function C(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,22,"article",[["class","card long"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,2,"picture",[],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,0,"source",[["type","image/webp"]],[[8,"srcset",4]],null,null,null,null)),(n()(),e.pb(3,0,null,null,0,"img",[["class","image left"],["style","width: auto; max-width: 300px;"]],[[8,"alt",0],[8,"src",4]],null,null,null,null)),(n()(),e.pb(4,0,null,null,18,"div",[["class","textWrapper"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,1,"h1",[["class","title accent"]],null,null,null,null,null)),(n()(),e.Db(6,null,["",""])),(n()(),e.pb(7,0,null,null,1,"h2",[["class","subtitle"]],null,null,null,null,null)),(n()(),e.Db(8,null,["Finished ",""])),(n()(),e.pb(9,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),e.Db(10,null,["",""])),(n()(),e.pb(11,0,null,null,11,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.pb(12,0,null,null,4,"p",[["class","topScorer"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["Top Scorer: "])),(n()(),e.pb(14,0,null,null,2,"a",[["target","_blank"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.yb(n,15).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.ob(15,671744,null,0,a.o,[a.m,a.a,r.g],{target:[0,"target"],routerLink:[1,"routerLink"]},null),(n()(),e.Db(16,null,["",""])),(n()(),e.pb(17,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Db(-1,null,["Highest Attendance: "])),(n()(),e.pb(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Db(20,null,["",""])),(n()(),e.pb(21,0,null,null,1,"a",[["class","label"],["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),e.Db(-1,null,["View All Statistics"]))],function(n,l){n(l,15,0,"_blank",e.rb(1,"/players/",l.component.seasonData["Top scorer"].replace(" ",""),""))},function(n,l){var t=l.component;n(l,2,0,e.rb(1,"../../../assets/Teamgroups/",t.season,".webp")),n(l,3,0,e.rb(1,"",t.season," profile image"),e.rb(1,"../../../assets/Teamgroups/",t.season,".png")),n(l,6,0,t.season),n(l,8,0,t.seasonData["League Position"]),n(l,10,0,t.seasonData.Description),n(l,14,0,e.yb(l,15).target,e.yb(l,15).href),n(l,16,0,t.seasonData["Top scorer"]),n(l,20,0,t.seasonData["Highest Attendance"]),n(l,21,0,e.rb(1,"http://www.thestatcat.co.uk/Season.aspx?SeasonID=",t.seasonData.ID,""))})}function M(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(1,null,["Stars of the ","!"]))],null,function(n,l){n(l,1,0,l.component.season)})}function _(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(1,null,["Stars of the "," season!"]))],null,function(n,l){n(l,1,0,l.component.season)})}function D(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,10,"a",[["class","card"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.yb(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.ob(1,671744,null,0,a.o,[a.m,a.a,r.g],{routerLink:[0,"routerLink"]},null),(n()(),e.pb(2,0,null,null,2,"picture",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,0,"source",[["type","image/webp"]],[[8,"srcset",4]],null,null,null,null)),(n()(),e.pb(4,0,null,null,0,"img",[["class","image left"]],[[8,"alt",0],[8,"src",4]],null,null,null,null)),(n()(),e.pb(5,0,null,null,3,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(6,null,["",""])),(n()(),e.pb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Db(8,null,["",""])),(n()(),e.pb(9,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e.Db(10,null,[""," games, "," goals"]))],function(n,l){var t=e.rb(1,"/players/",l.context.$implicit.Name.replace(" ",""),"");n(l,1,0,t)},function(n,l){n(l,0,0,e.yb(l,1).target,e.yb(l,1).href),n(l,3,0,e.rb(1,"../../../assets/playerprofiles/",l.context.$implicit.ID,".webp")),n(l,4,0,e.rb(1,"",l.context.$implicit.Name," profile"),e.rb(1,"../../../assets/playerprofiles/",l.context.$implicit.ID,".png"));var t=l.context.$implicit.Name.split(" ")[0];n(l,6,0,t);var u=l.context.$implicit.Name.split(" ")[1];n(l,8,0,u),n(l,10,0,l.context.$implicit.Appearances,l.context.$implicit.Goals)})}function w(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,D)),e.ob(2,278528,null,0,r.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.topPlayers)},null)}function L(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(1,null,["Recommended videos of the ","!"]))],null,function(n,l){n(l,1,0,l.component.season)})}function I(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(1,null,["Recommended videos of the "," season!"]))],null,function(n,l){n(l,1,0,l.component.season)})}function S(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"article",[["class","card video"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["title","Random season video"]],[[8,"src",5]],null,null,null,null))],null,function(n,l){n(l,1,0,l.context.$implicit.URL)})}function V(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,S)),e.ob(2,278528,null,0,r.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.randomVideos)},null)}function A(n){return e.Eb(0,[(n()(),e.gb(16777216,null,null,1,null,x)),e.ob(1,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,C)),e.ob(3,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,M)),e.ob(5,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,_)),e.ob(7,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,w)),e.ob(9,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,L)),e.ob(11,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,I)),e.ob(13,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,V)),e.ob(15,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.randomVideos&&!t.topPlayers&&!t.seasonData),n(l,3,0,t.seasonData&&t.randomVideos&&t.topPlayers),n(l,5,0,t.seasonData&&t.randomVideos&&t.topPlayers&&t.season.includes("s")),n(l,7,0,t.seasonData&&t.randomVideos&&t.topPlayers&&!t.season.includes("s")),n(l,9,0,t.seasonData&&t.randomVideos&&t.topPlayers),n(l,11,0,t.seasonData&&t.randomVideos&&t.topPlayers&&t.season.includes("s")&&0!=t.randomVideos.length),n(l,13,0,t.seasonData&&t.randomVideos&&t.topPlayers&&!t.season.includes("s")&&0!=t.randomVideos.length),n(l,15,0,t.seasonData&&t.randomVideos&&t.topPlayers&&0!=t.randomVideos.length)},null)}function j(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,A,k)),e.ob(1,245760,null,0,P,[h,a.m,a.a],null,null)],function(n,l){n(l,1,0)},null)}var E=e.lb("app-home",P,j,{},{},[]),T=function(n){function l(l,t){var e=n.call(this)||this;return e.seasondata=l,e.router=t,e}return s.c(l,n),l.prototype.ngOnInit=function(){var n=this;this.seasondata.getSeasonVideos(this.router.url.split("/")[3]).pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(l){n.seasonVideos=l,n.seasonVideosLength=l.length})},l}(p.a),N=e.nb({encapsulation:0,styles:[[".loader[_ngcontent-%COMP%]{margin:0 auto}.card.long[_ngcontent-%COMP%]{background:0 0;box-shadow:none;flex-direction:column}p.email[_ngcontent-%COMP%]{width:100%;display:block;font-size:1.1em;padding:5px;line-height:1.2}p.email[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#eb1428;text-decoration:none}"]],data:{}});function K(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"img",[["alt","Loading ..."],["class","loader"],["src","../../../assets/loader.gif"]],null,null,null,null,null))],null,null)}function U(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"article",[["class","card video"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["title","Season video"]],[[8,"src",5]],null,null,null,null))],null,function(n,l){n(l,1,0,l.context.$implicit.URL)})}function z(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","wrapper multiLine"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,U)),e.ob(2,278528,null,0,r.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.seasonVideos)},null)}function F(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,9,"article",[["class","card long"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,8,"div",[["class","textWrapper"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,1,"h1",[["class","title accent"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["Sorry, no videos found"])),(n()(),e.pb(4,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["If you know of any videos from this period, email us or leave a comment on YouTube."])),(n()(),e.pb(6,0,null,null,3,"p",[["class","email"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,2,"a",[["href","mailto:hello@sunderlandafc.tv"],["target","_blank"]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"strong",[["class","accent"]],null,null,null,null,null)),(n()(),e.Db(-1,null,["hello@sunderlandafc.tv"]))],null,null)}function H(n){return e.Eb(0,[(n()(),e.gb(16777216,null,null,1,null,K)),e.ob(1,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,z)),e.ob(3,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,F)),e.ob(5,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.seasonVideos),n(l,3,0,t.seasonVideos),n(l,5,0,0==t.seasonVideosLength)},null)}function $(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-videos",[],null,null,null,H,N)),e.ob(1,245760,null,0,T,[h,a.m],null,null)],function(n,l){n(l,1,0)},null)}var R=e.lb("app-videos",T,$,{},{},[]),W=function(n){function l(l,t){var e=n.call(this)||this;return e.seasondata=l,e.router=t,e}return s.c(l,n),l.prototype.ngOnInit=function(){var n=this;this.seasondata.getAllPlayerData().pipe(Object(c.a)(this.ngUnsubscribe)).subscribe(function(l){n.seasondata.getSeasonPlayers(n.router.url.split("/")[3]).pipe(Object(c.a)(n.ngUnsubscribe)).subscribe(function(l){return n.seasonPlayers=l})})},l}(p.a),B=e.nb({encapsulation:0,styles:[[".loader[_ngcontent-%COMP%]{margin:0 auto}.card[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width:900px){.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 5px)}}@media only screen and (min-width:900px) and (max-width:1510px){.image.left[_ngcontent-%COMP%]{float:left!important}}"]],data:{}});function Z(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"img",[["alt","Loading ..."],["class","loader"],["src","../../../assets/loader.gif"]],null,null,null,null,null))],null,null)}function G(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,10,"a",[["class","card"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.yb(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.ob(1,671744,null,0,a.o,[a.m,a.a,r.g],{routerLink:[0,"routerLink"]},null),(n()(),e.pb(2,0,null,null,2,"picture",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,0,"source",[["type","image/webp"]],[[8,"srcset",4]],null,null,null,null)),(n()(),e.pb(4,0,null,null,0,"img",[["class","image left"]],[[8,"alt",0],[8,"src",4]],null,null,null,null)),(n()(),e.pb(5,0,null,null,3,"h1",[["class","title"]],null,null,null,null,null)),(n()(),e.Db(6,null,["",""])),(n()(),e.pb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Db(8,null,["",""])),(n()(),e.pb(9,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e.Db(10,null,["",""]))],function(n,l){var t=e.rb(1,"/players/",l.context.$implicit.Name.replace(" ",""),"");n(l,1,0,t)},function(n,l){n(l,0,0,e.yb(l,1).target,e.yb(l,1).href),n(l,3,0,e.rb(1,"../../../assets/playerprofiles/",l.context.$implicit.ID,".webp")),n(l,4,0,e.rb(1,"",l.context.$implicit.Name," profile"),e.rb(1,"../../../assets/playerprofiles/",l.context.$implicit.ID,".png"));var t=l.context.$implicit.Name.split(" ")[0];n(l,6,0,t);var u=l.context.$implicit.Name.split(" ")[1];n(l,8,0,u),n(l,10,0,l.context.$implicit["Years "])})}function J(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,G)),e.ob(2,278528,null,0,r.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.seasonPlayers)},null)}function X(n){return e.Eb(0,[(n()(),e.gb(16777216,null,null,1,null,Z)),e.ob(1,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,J)),e.ob(3,16384,null,0,r.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.seasonPlayers),n(l,3,0,t.seasonPlayers)},null)}function Y(n){return e.Eb(0,[(n()(),e.pb(0,0,null,null,1,"app-players",[],null,null,null,X,B)),e.ob(1,245760,null,0,W,[h,a.m],null,null)],function(n,l){n(l,1,0)},null)}var q=e.lb("app-players",W,Y,{},{},[]),Q=function(){return function(){}}();t.d(l,"SeasonModuleNgFactory",function(){return nn});var nn=e.mb(u,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[o.a,O,E,R,q]],[3,e.j],e.x]),e.xb(4608,r.l,r.k,[e.u,[2,r.s]]),e.xb(1073742336,r.b,r.b,[]),e.xb(1073742336,a.p,a.p,[[2,a.v],[2,a.m]]),e.xb(1073742336,Q,Q,[]),e.xb(1073742336,u,u,[]),e.xb(1024,a.k,function(){return[[{path:"",redirectTo:"home",pathMatch:"prefix"},{path:"",component:d,outlet:"nav"},{path:"home",component:P},{path:"videos",component:T},{path:"players",component:W}]]},[])])})}}]);
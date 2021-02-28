(this["webpackJsonpquick-dashboard"]=this["webpackJsonpquick-dashboard"]||[]).push([[0],{117:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},139:function(e,n,a){"use strict";a.r(n);var d=a(115),t=a.n(d),s={get:function(e){return t.a.get(e).then((function(e){return e.data}))}};n.default=s},159:function(e,n){},166:function(e,n){},176:function(e,n,a){"use strict";a.r(n);var d,t,s,r,c,i,o,b,l,A,p,u,C,k,f,x,D,m,g,w,j,E,F,U,h,R,B,O,S,I,v,y,T,M,K,Q,H,N,P,G=a(9),z=a.n(G),W=a(71),Y=a.n(W),_=a(11),q=a(31),X=a(3),L=a.n(X),J=a(45),V=a(33),Z=a(139).default,$=function(e){return Z.get((n="/simple/price?ids=".concat(e,"&vs_currencies=usd"),"".concat("https://api.coingecko.com/api/v3").concat(n)));var n},ee=a(116),ne=a.n(ee),ae=a(74),de=a(22),te=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.decimalPlaces,d=n.prefix,t=void 0===d?"":d,s=n.suffix,r=void 0===s?"":s;void 0!==a&&null!==a||(a=Math.abs(e)>=1||0===e?2:6);var c=Math.pow(10,a),i=Math.round(e*c)/c;return"".concat(t).concat(i).concat(r?" ".concat(r):"")},se={number:te,usd:function(e,n){return"$".concat(te(e,n))},symbol:function(e,n,a){return te(e,Object(de.a)({suffix:n},a))},percentage:function(e,n){return"".concat(te(100*e,n),"%")},trimmedAddress:function(e){return"".concat(e.slice(0,6),"...").concat(e.slice(-4))}},re=a(117),ce=a(12),ie=ce.c.span(d||(d=Object(_.a)(["\n  margin-right: 10px;\n  font-size: 14px;\n  color: #748194;\n  font-weight: 500;\n"]))),oe=ce.c.span(t||(t=Object(_.a)(["\n  font-size: 14px;\n  color: #9da9bb;\n  font-weight: 600;\n"]))),be=a(6),le=ce.c.div(s||(s=Object(_.a)(["\n  display: inline-block;\n  background: var(--midnight);\n  padding: 15px;\n  border-radius: var(--border-radius);\n  margin-bottom: 30px;\n  margin-right: 15px;\n"]))),Ae=function(e){return Object(be.jsxs)(le,{children:[Object(be.jsx)(ie,{children:e.label}),Object(be.jsx)(oe,{children:e.value})]})},pe=a(88).UserContext,ue=a(9).useContext,Ce=function(){return ue(pe)},ke=function(e){console.log(e)},fe=function(e){var n=Object(q.b)().library,a=Ce().user,d=Object(G.useState)(),t=Object(V.a)(d,2),s=t[0],r=t[1];return Object(G.useEffect)((function(){if(a.account){var d=function(){var d=Object(J.a)(L.a.mark((function d(){var t,s;return L.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,t=new ae.a.Contract(e.token.address,re,n),d.next=4,t.balanceOf(a.account);case 4:s=d.sent,r(ne()(s._hex).times(Math.pow(10,-1*e.token.decimals)).toNumber()),d.next=11;break;case 8:d.prev=8,d.t0=d.catch(0),ke(d.t0);case 11:case"end":return d.stop()}}),d,null,[[0,8]])})));return function(){return d.apply(this,arguments)}}();d();var t=setInterval(d,2e4);return function(){clearInterval(t)}}}),[e.token,n,a.account]),s?Object(be.jsx)(Ae,{label:"".concat(e.token.symbol," balance"),value:"".concat(se.symbol(s,e.token.symbol)," (").concat(se.usd(s*e.price),")")}):null},xe=a(50),De=a(181),me=a(92),ge=a(125),we=(new De.b(me.a),new De.b(ge.a),ce.c.div(r||(r=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80px;\n"])))),je=ce.c.div(c||(c=Object(_.a)(["\n  width: 50px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]))),Ee=ce.c.div(i||(i=Object(_.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00f1ca;\n\n  &:nth-child(1) {\n    animation: bouncing 0.4s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95);\n  }\n  &:nth-child(2) {\n    animation: bouncing 0.4s 0.1s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;\n  }\n  &:nth-child(3) {\n    animation: bouncing 0.4s 0.2s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;\n  }\n\n  @keyframes bouncing {\n    0% {\n      transform: translate3d(0, 5px, 0) scale(1.2, 0.85);\n    }\n    100% {\n      transform: translate3d(0, -10px, 0) scale(0.9, 1.1);\n    }\n  }\n"]))),Fe=function(e){return Object(be.jsx)(we,{inline:e.inline,children:Object(be.jsxs)(je,{children:[Object(be.jsx)(Ee,{}),Object(be.jsx)(Ee,{}),Object(be.jsx)(Ee,{})]})})},Ue=Object(ce.b)(o||(o=Object(_.a)(["\n  padding: 6px;\n  font-size: 16px;\n"]))),he=Object(ce.b)(b||(b=Object(_.a)(["\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n  background-color: ",";\n  border-radius: 100%;\n  transition: all 0.3s ease-in-out;\n\ttransform: scale(1);\n  box-shadow: 0 1px 2px ",";\n  animation: ",";\n\n  @keyframes pulsate {\n    0% {\n      transform: scale(0.9);\n      box-shadow: 0 0 0 0 ","aa;\n    }\n    50% {\n      transform: scale(1);\n      box-shadow: 0 0 0 3px ","00;\n    }\n    100% {\n      transform: scale(0.9);\n      box-shadow: 0 0 0 0 ","00;\n    }\n  }\n"])),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.pulsate?"pulsate 2s infinite":"none"}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color})),Re=ce.c.div(l||(l=Object(_.a)(["\n  display: inline-block;\n  background: ",";\n  font-size: 14px;\n  padding: 5px;\n  border-radius: 4px;\n  color: white;\n\n  ","\n  ","\n"])),(function(e){return e.color?e.color:"var(--blue)"}),(function(e){return e.large&&Ue}),(function(e){return e.dot&&he})),Be=function(e){return Object(be.jsx)(Re,Object(de.a)(Object(de.a)({},e),{},{children:e.children}))},Oe=ce.c.div(A||(A=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--border-radius);\n  background: var(--midnight);\n  box-shadow: var(--box-shadow);\n  position: relative;\n  padding-bottom: 10px;\n"]))),Se=ce.c.div(p||(p=Object(_.a)(["\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),Ie=ce.c.div(u||(u=Object(_.a)(["\n  height: 50px;\n  background: var(--midnight-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n"]))),ve=ce.c.div(C||(C=Object(_.a)(["\n  padding: 15px;\n"]))),ye=ce.c.div(k||(k=Object(_.a)(["\n  font-size: 10px;\n  font-style: italic;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 10px;\n"]))),Te=ce.c.div(f||(f=Object(_.a)(["\n  width: calc((100% / 3) - 20px);\n  margin-bottom: 30px;\n"]))),Me=Object(ce.c)(Be)(x||(x=Object(_.a)(["\n  width: 6px;\n  height: 6px;\n  margin-right: 4px;\n"]))),Ke=function(e){var n=Object(q.b)().library,a=Ce().user,d=Object(G.useState)({loading:!0}),t=Object(V.a)(d,2),s=t[0],r=t[1];return Object(G.useEffect)((function(){if(a.account){var d=function(){var d=Object(J.a)(L.a.mark((function d(){var t,s,c,i,o,b,l,A;return L.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return t=new ae.a.Contract(e.stakingInfo.stakingRewardAddress,me.a,n),d.next=3,Promise.all([t.earned(a.account).then(xe.utils.formatEther),t.rewardRate().then(xe.utils.formatEther),t.totalSupply().then(xe.utils.formatEther),t.balanceOf(a.account).then(xe.utils.formatEther)]);case 3:s=d.sent,c=Object(V.a)(s,4),i=c[0],o=c[1],b=c[2],l=c[3],r({unclaimedRewards:i,rewardRatePerDay:60*o*60*24*(A=l/b),supplyPercent:A,balance:l,loading:!1,lastUpdated:new Date});case 12:case"end":return d.stop()}}),d)})));return function(){return d.apply(this,arguments)}}();d();var t=setInterval(d,2e4);return function(){clearInterval(t)}}}),[a.account,n,e.stakingInfo]),!!(null===s||void 0===s?void 0:s.balance)&&"0.0"!==s.balance?Object(be.jsx)(Te,{children:Object(be.jsxs)(Oe,{children:[Object(be.jsx)(Ie,{children:e.stakingInfo.name||"".concat(e.stakingInfo.tokens[0]," - ").concat(e.stakingInfo.tokens[1])}),s.loading?Object(be.jsx)(Fe,{}):Object(be.jsxs)(ve,{children:[Object(be.jsxs)(Se,{children:[Object(be.jsx)(ie,{children:"Unclaimed Rewards"}),Object(be.jsxs)(oe,{children:[se.symbol(s.unclaimedRewards,"QUICK")," (",se.usd(s.unclaimedRewards*e.quickPrice),")"]})]}),Object(be.jsxs)(Se,{children:[Object(be.jsx)(ie,{children:"Reward Rate"}),Object(be.jsxs)(oe,{children:[se.symbol(s.rewardRatePerDay,"QUICK",{decimalPlaces:4})," / day (",se.usd(s.rewardRatePerDay*e.quickPrice),")"]})]}),Object(be.jsxs)(Se,{children:[Object(be.jsx)(ie,{children:"Supply Percent"}),Object(be.jsx)(oe,{children:se.percentage(s.supplyPercent,{decimalPlaces:2})})]})]}),s.lastUpdated&&Object(be.jsxs)(ye,{children:[Object(be.jsx)(Me,{dot:!0,color:"var(--green)",pulsate:!0})," Last Updated: ",s.lastUpdated.toLocaleString()]})]})}):null},Qe=137,He={QUICK:{address:"0x831753DD7087CaC61aB5644b308642cc1c33Dc13",decimals:18,symbol:"QUICK",name:"QuickSwap"},USDC:{address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",decimals:6,symbol:"USDC",name:"USDC"}},Ne=[{tokens:["QUICK","MAAVE"],stakingRewardAddress:"0xD8e091bbbF9F74487D4A0eE483F65b363a4bbbc9",ended:!0,name:"",lp:""},{tokens:["QUICK","GHST"],stakingRewardAddress:"0x440E9C828ECbf6B99C51EAb217c5D6e8c8715610",ended:!0,name:"StkQUICK-GHST",lp:"0xA02d547512Bb90002807499F05495Fe9C4C3943f"},{tokens:["USDC","MAUSDC"],stakingRewardAddress:"0x269f1972C0fB8aCCd3Cd835115153a1EB09a6FC3",ended:!0,name:"",lp:""},{tokens:["USDC","QUICK"],stakingRewardAddress:"0x3d0AA307E6Dcf0c19C6df9616318AE52fdE1408A",ended:!0,name:"",lp:""},{tokens:["QUICK","MAUSDC"],stakingRewardAddress:"0xAA1Ce6Bf8016ddFEdCF521beA5724Fc5e19902a5",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0xC52614C03508d4A787Ac8E746607595Acd3614Bb",ended:!0,name:"",lp:""},{tokens:["ETH","MATIC"],stakingRewardAddress:"0x9FAFF83312fcE0079fc76A87a049078606148b02",ended:!0,name:"",lp:""},{tokens:["QUICK","MATIC"],stakingRewardAddress:"0xC0fa29d6D6F60d56eb08FD5Cb4E9b7a9E1D3d2F4",ended:!0,name:"",lp:""},{tokens:["USDC","MATIC"],stakingRewardAddress:"0x5c6A1676585D029a72063fA2C47a741BC8eB336F",ended:!0,name:"",lp:""},{tokens:["WBTC","ETHER"],stakingRewardAddress:"0x3e1F5C03fd60B9472CFc463ED8F13674F8ea3C01",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0x8135937A57034A8a814625b2FEb35447D23E4C9E",ended:!0,name:"",lp:""},{tokens:["ETH","SX"],stakingRewardAddress:"0x804B18A358e193Fe816949E42ed26f2ed408aAD9",ended:!0,name:"",lp:""},{tokens:["GHST","USDC"],stakingRewardAddress:"0x4371b24Bff5F753f971a93b0Ef84c2B4d85A9a95",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MALINK"],stakingRewardAddress:"0x3c987E7C57A178674F45c92efbD7F99bDE1CF84A",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MAUNI"],stakingRewardAddress:"0x5A3714c41c6B09b52c532A52fB6432089089eBc7",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MAYFI"],stakingRewardAddress:"0xbc6A1b6d4e04aD4A8bdb8Cc7c7aB9C4513190B64",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MAWETH"],stakingRewardAddress:"0xdC68FFe4251548af0DDb79E211af8976F8b6b381",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MAUSDT"],stakingRewardAddress:"0x1b9794926759DCE8487A9614bB15Dc1767b9854d",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MATUSD"],stakingRewardAddress:"0x014FF8cb58AeA532bB2Db28D49f2704A691621e5",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MADAI"],stakingRewardAddress:"0x061aD501BFCd276fb0dCe1bb4aB93629581F342e",ended:!0,name:"",lp:""},{tokens:["MAUSDC","MAAVE"],stakingRewardAddress:"0x99b870c615Fb6a5b0fc2514deef6eF2a1d55a015",ended:!0,name:"",lp:""},{tokens:["QUICK","SX"],stakingRewardAddress:"0x897edc5758E41C1c6470614b2764e21c88897eAA",ended:!0,name:"",lp:""},{tokens:["QUICK","EASY"],stakingRewardAddress:"0xbdbC9fA5c2f58fF5B108E7312b06eE7EC19c660D",ended:!0,name:"",lp:""},{tokens:["QUICK","GHST"],stakingRewardAddress:"0x120cCE80Ca4D7CBC2c7A912321Ea1a4c32952938",ended:!0,name:"StkQUICK-GHST",lp:"0xA02d547512Bb90002807499F05495Fe9C4C3943f"},{tokens:["QUICK","UNI"],stakingRewardAddress:"0xF44eA460Da8938227508075f7b3611A809E53042",ended:!0,name:"",lp:""},{tokens:["USDC","QUICK"],stakingRewardAddress:"0x5F3dc91D19661940C705B9aC4D1A8C456DC3a56E",ended:!0,name:"",lp:""},{tokens:["USDC","GHST"],stakingRewardAddress:"0x776976a62604643fd660bCB23c055d66d86DEc79",ended:!0,name:"",lp:""},{tokens:["QUICK","MAUSDC"],stakingRewardAddress:"0x1538FEc5f4F3F5717929CF6E07168f831690348F",ended:!0,name:"",lp:""},{tokens:["MATIC","ETHER"],stakingRewardAddress:"0xe341C094D391C40c9e1b0dfD3A0Ecf78D414c38e",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x99dFae5242b0f1883041356C00262579D07cC06a",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0x848E683EeDbaB60Da6a28763318404cc8E625DDB",ended:!0,name:"",lp:""},{tokens:["DAI","USDC"],stakingRewardAddress:"0x4a0f78b3e398181871b8BA050c286aFEf6C06837",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0x513826BbF9ddcDE925322f7dFCb01A687E393F54",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0x516C8CB28d9490Cb3Ca3432828D6495dC61e3D2A",ended:!0,name:"",lp:""},{tokens:["QUICK","GHST"],stakingRewardAddress:"0x7B471EA4Ee31F316B2426fe5559808c32619aCDa",ended:!0,name:"StkQUICK-GHST",lp:"0xA02d547512Bb90002807499F05495Fe9C4C3943f"},{tokens:["QUICK","UNI"],stakingRewardAddress:"0x275d0038398Bf5D45F6E5fdC2435E6e85eA914DB",ended:!0,name:"",lp:""},{tokens:["USDC","QUICK"],stakingRewardAddress:"0xDCdFF945Aa9BB7841F56e9b430a859407Ecb87bF",ended:!0,name:"",lp:""},{tokens:["USDC","GHST"],stakingRewardAddress:"0xC1BB398b6a937889988FD51956385D29D682F85c",ended:!0,name:"",lp:""},{tokens:["QUICK","MAUSDC"],stakingRewardAddress:"0x8626Eab301D85D4aF717918b100C2132c870883A",ended:!0,name:"",lp:""},{tokens:["MATIC","ETHER"],stakingRewardAddress:"0xFEb99caeb4d137AaFdE495df139bcCDF1D2655A4",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x2E5CE665bE8641b38E4113Fec44C85EAf4669265",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0x9B4f4A03166bc58Bc8efAd75a35BBfe5C43635DB",ended:!0,name:"",lp:""},{tokens:["DAI","USDC"],stakingRewardAddress:"0x1c6B863A5953fb4fA062cA000606605bC0cc5Cf3",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0xEAb6b892e106142B1e28eaeb3Cd51580d2607cE0",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0xbaf89F2ea0C003cD4aC29Fe93317053C1be6b1c6",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x1e224b8643b68a4d6b869e9596d979A708B26aB7",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0xa78F3cDc2D2aE9d518c2fe60007811e437DEc9CD",ended:!0,name:"",lp:""},{tokens:["MATIC","QUICK"],stakingRewardAddress:"0x2435361A37AF5a57cB14ba8379b7Cd9dcF9d83aC",ended:!0,name:"",lp:""},{tokens:["QUICK","GHST"],stakingRewardAddress:"0xf9d375F824D108E91c9B3c0F3c47DB2Db0A7c050",ended:!0,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0xAfa27B566D4b077835458Eae0Ee8D1D2DD1d638E",ended:!0,name:"",lp:""},{tokens:["USDC","GHST"],stakingRewardAddress:"0x16300c8811C7870260e44dC7ecBCaF854A9aCaED",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0xB35Ce61B63994256d263aebDDD1c3eE8447Cab38",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x71a7D3a5e09C21d18FfdF57a7Ad5499B21e587f4",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0xbC2710eD5fac42e7b97fc2D3dB37176989c81ddD",ended:!0,name:"",lp:""},{tokens:["OM","USDC"],stakingRewardAddress:"0x663ea801BC5Dfe2430d59Da8c817EfE669D4801A",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0xeAb039d3E2489766a7df9E2A11Cab8Db9db0fA7F",ended:!0,name:"",lp:""},{tokens:["USDT","USDC"],stakingRewardAddress:"0x9b19421DE59E8ca04CB194667A3352e143F09f2c",ended:!0,name:"",lp:""},{tokens:["USDC","DAI"],stakingRewardAddress:"0x7a503862489bA1aD2C519E8A875ec56dBAe0e8F1",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0xD9298cBea9d1C2f134c1a70D25071DD143E00F3C",ended:!0,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0x9A3EC4Ba0f979A889575754D8A1237804670a18d",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x1975075a30Ef629A5BD480D8098EC2544010f8B9",ended:!0,name:"",lp:""},{tokens:["UNI","USDC"],stakingRewardAddress:"0xa135E326a3C8bc76DECa64e6ff05c98bA1F7600e",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x3B46d756c9963555454B70B4F04141605D0d2001",ended:!0,name:"",lp:""},{tokens:["USDT","USDC"],stakingRewardAddress:"0x4c7026015f187F263b5FfAd194935372FbA07ba3",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0xc959b7ED5cfDdF7787793ee2D73f3b6576B5eb0c",ended:!0,name:"",lp:""},{tokens:["USDC","DAI"],stakingRewardAddress:"0x8d4Ce6785a7c4D063d7E6Fe9a2Ca375263D7b7eF",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0xAEc809557Cf6cb2409F402933582aB7E99533086",ended:!0,name:"",lp:""},{tokens:["MATIC","ETHER"],stakingRewardAddress:"0x65D3373e2Bd823B7ddA5794b32Fb5b41D97da8D0",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0x554AF11c6C9B16132C0A524495080814FE04b478",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0x451bd5921e381BFd56D5786C51F46fD49F1eB574",ended:!0,name:"",lp:""},{tokens:["UNI","USDC"],stakingRewardAddress:"0xDdF1Fb44d0e8db1139138bd8c4f82FF474361744",ended:!0,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0x6d8B49a865258CC53DbbAB698c362FcAd6B3FEFA",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x6cbdcfD243FDFd740d173B321420579026Be9742",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0xF20a06123a465440263F20Aeef04930eCee8b520",ended:!0,name:"",lp:""},{tokens:["MATIC","ETHER"],stakingRewardAddress:"0x5776d886459d7f202545d50377673077F27419b5",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x58D1FD497B2FcfA64C862986bCf45d6A7Cfaa6F3",ended:!0,name:"",lp:""},{tokens:["USDT","USDC"],stakingRewardAddress:"0x58196ED395e8EA60DF69e87655385AAB5B123AAB",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0x304ec0c4C85E08308Bc52362801c8AAE5cbb0Abf",ended:!0,name:"",lp:""},{tokens:["USDC","DAI"],stakingRewardAddress:"0x843Db20345080d718e660bB99613f50D60092a65",ended:!0,name:"",lp:""},{tokens:["USDC","OM"],stakingRewardAddress:"0x6eaaF92aaA842e88a9F6A9345aA8c3e7B1D0B52e",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0xF3331039E0090616D440798EcFcCF83552aDbc7A",ended:!0,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0xF8930990505F0d2404f61778D6eC49f95A87dd6f",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x51C8ed98427ED9984836bC4a5371DA24573333c1",ended:!0,name:"",lp:""},{tokens:["UNI","USDC"],stakingRewardAddress:"0xB72Ed7502150B922667Fd512b82Dc2a62999ab93",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x8B0c71AF620850D32546ba5862995Be07633D9E2",ended:!0,name:"",lp:""},{tokens:["USDT","USDC"],stakingRewardAddress:"0x7EF2510AAf83E286886b8A1D4BE0b88099308CF0",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0xf3bc3ECb14831F36B8dfE67abC51eB23B31839D1",ended:!0,name:"",lp:""},{tokens:["USDC","DAI"],stakingRewardAddress:"0xA937169A29b9858fFD98521CEA3023D2e565A987",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0x0D1c1cb65893219aD54D3Fe95C9c06f306D2341d",ended:!0,name:"",lp:""},{tokens:["MATIC","ETHER"],stakingRewardAddress:"0x78B2455b4cAa92c4a3678D7bFE1BfD18bA3D647c",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0xDD86a8516188010A1301Ac79CE8A1D04fEC602a3",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0x92eB672C46ba00CE303878B56A5a6288058954bb",ended:!0,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0x1F92A2bd44C52cc94Aa111Ba7557c0FA10bBF428",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0xa4D93BbE0E0C75F94859e1bD0bB2AF7226Af1aF4",ended:!0,name:"",lp:""},{tokens:["UNI","USDC"],stakingRewardAddress:"0x3EA879F7fa2285Fde5676E464483dBcC502961eA",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0x1b295617072f5065b5112e3aE39420933c985dDF",ended:!0,name:"",lp:""},{tokens:["USDT","USDC"],stakingRewardAddress:"0xFc62e4c7f6FeE3d2D70221A1BdB9335aDbf4700e",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0x124837e8585b7f2CdF9D0eA643F428696bB4491C",ended:!0,name:"",lp:""},{tokens:["USDC","DAI"],stakingRewardAddress:"0x398822B15d412344387B8CCF82453A25187203f3",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0xb879f4663C0df1a0e735ccA7F723b44a7c0D54e3",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0x1bdAf7D03e83580ccAc8c0403212e78FFf69c538",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0xFF448d419D52B56aF7c7D78cB504C5da76Ba2D29",ended:!0,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0xb99d3f2e5eDA2081fB2A70038589566D33c149c3",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x05748fD0d03780637A85dF5B2293ce857C1Fa309",ended:!0,name:"",lp:""},{tokens:["UNI","USDC"],stakingRewardAddress:"0x8dbf46c0f6Db05383Dc870036ad0F7619F7BDc3a",ended:!0,name:"",lp:""},{tokens:["WBTC","USDC"],stakingRewardAddress:"0xf0f22765B9ea540929c7eC9BBCF7077C9f8E3117",ended:!0,name:"",lp:""},{tokens:["USDT","USDC"],stakingRewardAddress:"0x73c601264d64d0DCbCa47ddef2dFC97E363E88a4",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0x46385DF67DF1A058d0C07420e4B7D9c3a40eACE8",ended:!0,name:"",lp:""},{tokens:["IGG","USDC"],stakingRewardAddress:"0x6d48CeD6521B55F64Bdb5FbFe27e0A19Fb46F1C8",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0x9Ad3a1B339A796A5D373f4ec7BD8eC865f1ea5aC",ended:!0,name:"",lp:""},{tokens:["MATIC","USDC"],stakingRewardAddress:"0x5d445F4EDdCaee519F51Bb9AB7fEE0A74c8F37C1",ended:!0,name:"",lp:""},{tokens:["QUICK","DAI"],stakingRewardAddress:"0xcd7A989C8a21871ff9Da645F74916e23b7b83601",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x7341554a23A89a97186f339597AE365bBB0c4a26",ended:!0,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0x7d59413E87dA59552a662103782CcA860Dc3d3c4",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0xf91056D1A58a38A783a4F6122A1F995EEE4f60B3",ended:!0,name:"",lp:""},{tokens:["ETH","DAI"],stakingRewardAddress:"0x88d4D1a7A0E917DB41De09A1AcA437726c1C418a",ended:!0,name:"",lp:""},{tokens:["EASY","UNI"],stakingRewardAddress:"0xfbEed0206635479BD2Ac204F793BF10E7EEad9df",ended:!0,name:"",lp:""},{tokens:["ETH","USDC"],stakingRewardAddress:"0x0cc1c20c8A5640aeFdD41b2aa3E8Dc2c2EdcDDbD",ended:!0,name:"",lp:""},{tokens:["EASY","USDC"],stakingRewardAddress:"0xE769875f9F0e38b15c9f409F08B583f00d2B14d3",ended:!0,name:"",lp:""},{tokens:["eUSDC","UNI"],stakingRewardAddress:"0x1D43445c82795E4Cc8eF7C3cd735a10C112332A7",ended:!0,name:"",lp:""},{tokens:["eUSDT","UNI"],stakingRewardAddress:"0xD929bbbd983b334D9D638DeC49DF454c3Ee720d9",ended:!0,name:"",lp:""},{tokens:["eDAI","UNI"],stakingRewardAddress:"0xFA190551895cc065EE48E2E36c7cd0F2ae01AED2",ended:!0,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0x457d88690e0B543445e69c03b5a760b38Ce07078",ended:!0,name:"",lp:""},{tokens:["USDC","MAUSDC"],stakingRewardAddress:"0xFB5ddc9a2B675E3C13272f1B2Db0ED68340A6141",ended:!1,name:"",lp:""},{tokens:["QUICK","GHST"],stakingRewardAddress:"0xc7A34b9fB20A195e8F077CF2D4830682FBbc58dA",ended:!1,name:"StkGHST-QUICK",lp:"0xA02d547512Bb90002807499F05495Fe9C4C3943f"},{tokens:["QUICK","MAAVE"],stakingRewardAddress:"0x627671bF401A990577063784055c0E758b62Ecc6",ended:!1,name:"",lp:""},{tokens:["ETH","SWAP"],stakingRewardAddress:"0x7F1d94D95fAD3200F238256dE8cE4C559a421437",ended:!1,name:"",lp:""},{tokens:["QUICK","SWAP"],stakingRewardAddress:"0x39D158D8cf47Ed30c3fB8EA64C4CbC0A1155D931",ended:!1,name:"",lp:""},{tokens:["QUICK","USDC"],stakingRewardAddress:"0xd6875b41EE725E8803407793501c70153eF6Fc23",ended:!1,name:"",lp:""},{tokens:["GHST","USDC"],stakingRewardAddress:"0x59A03B35a1379F498c32018b286250066348061F",ended:!1,name:"stkGHST-USDC",lp:"0x04439eC4ba8b09acfae0E9b5D75A82cC63b19f09"},{tokens:["MATIC","ETHER"],stakingRewardAddress:"0xAE2D461aD54e1C98d1495B7424Fc0Cf495276f11",ended:!1,name:"",lp:""},{tokens:["QUICK","ETHER"],stakingRewardAddress:"0xcdB04b9F0a134505c3FbE89A310C5C43165885e5",ended:!1,name:"",lp:""},{tokens:["QUICK","MATIC"],stakingRewardAddress:"0xA36B18065D77B6F282F9A7dBC999Af23eE80FDf5",ended:!1,name:"",lp:""},{tokens:["WBTC","ETHER"],stakingRewardAddress:"0x088e190FcF2320B63944967854D066856EdAa435",ended:!1,name:"",lp:""},{tokens:["USDC","ETHER"],stakingRewardAddress:"0xc7Dc6829E32a511d6be2F93243121932F78719ff",ended:!1,name:"",lp:""},{tokens:["USDC","MATIC"],stakingRewardAddress:"0x3d63feCf1045f3E5bd4517e520F66CD6E9378850",ended:!1,name:"",lp:""},{tokens:["ETH","SX"],stakingRewardAddress:"0x8Fb8f95628b85E35F2E4B5249F887D074086154C",ended:!1,name:"",lp:""},{tokens:["QUICK","UNI"],stakingRewardAddress:"0xc6fd2B6b27e726A0555574419d1beAa37D75738a",ended:!1,name:"",lp:""},{tokens:["QUICK","MAUSDC"],stakingRewardAddress:"0xe8595596a85249dd2DEFd925e911d0C227fcc1c5",ended:!1,name:"",lp:""},{tokens:["QUICK","EASY"],stakingRewardAddress:"0xD8942d42ADf8011C9CC0938729Bd3432cd2a0543",ended:!1,name:"",lp:""},{tokens:["QUICK","SX"],stakingRewardAddress:"0x4E011A95374377842651fFf882c53fA195759dde",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MALINK"],stakingRewardAddress:"0xB94747D2a1506c370B4D67F2d52a8439df72d8dD",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MAUNI"],stakingRewardAddress:"0x0858f451cBb7F3c5ea2FBa3dC4287578Ad496633",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MAYFI"],stakingRewardAddress:"0x61Dc7A5Ed893304b6A12D022C042Cc99cb4d74a0",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MAWETH"],stakingRewardAddress:"0xCD032679f9eaFa8e4f068280932B4C9a7f021029",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MAUSDT"],stakingRewardAddress:"0xC18Fd4298F1A5abBFF1CD777c590db1776986023",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MATUSD"],stakingRewardAddress:"0x36d078bfa649cBBd1d0F4cfc5F3d70401d849a71",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MADAI"],stakingRewardAddress:"0x0eC57767a4dE065bb50429702671942f51A8ab37",ended:!1,name:"",lp:""},{tokens:["MAUSDC","MAAVE"],stakingRewardAddress:"0xf8B210c70b108104aAF9C301367cD575D69E1f6e",ended:!1,name:"",lp:""},{tokens:["QUICK","GAME"],stakingRewardAddress:"0x1090dA8B2EA11DB28cB39B9ebFf9711d285F897A",ended:!1,name:"",lp:""},{tokens:["ETH","GAME"],stakingRewardAddress:"0x527C91ad95430a2064637EF6413e9520784568a9",ended:!1,name:"",lp:""},{tokens:["ETH","HEX"],stakingRewardAddress:"0x20D06b4E5516111C08a023Aa3cAC8A12e220f51d",ended:!1,name:"",lp:""},{tokens:["QUICK","HEX"],stakingRewardAddress:"0x1161d9270c60e3A158727C59F4A92C067d664C22",ended:!1,name:"",lp:""},{tokens:["ETH","DB"],stakingRewardAddress:"0x6240b9142Ac1087F5f0244413747E1C1cc79a03b",ended:!1,name:"",lp:""},{tokens:["MATIC","DB"],stakingRewardAddress:"0xA498c012fa5fc5DBEaf4F26bdA42227c22527945",ended:!1,name:"",lp:""},{tokens:["QUICK","MRBAL"],stakingRewardAddress:"0xCD732D7c41753503B7d0311173cf90878bfF8806",ended:!1,name:"",lp:""},{tokens:["QUICK","ZUT"],stakingRewardAddress:"0x3A06DDc718ED7Cd15C1653187A4aB181Ec25E23C",ended:!1,name:"",lp:""},{tokens:["DAI","SX"],stakingRewardAddress:"0xca5Da81e08E573D5D92aCDe4Ac9Cc6534c3fAe09",ended:!1,name:"",lp:""}].filter((function(e){return!e.ended})),Pe=ce.c.div(D||(D=Object(_.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),Ge=function(e){var n=Object(G.useState)(),a=Object(V.a)(n,2),d=a[0],t=a[1];return Object(G.useEffect)((function(){var e=function(){var e=Object(J.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("quick").then((function(e){return e.quick.usd}));case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var n=setInterval(e,2e4);return function(){clearInterval(n)}}),[]),Object(be.jsxs)("div",{children:[Object(be.jsx)(Ae,{label:"QUICK Price",value:d?se.usd(d):Object(be.jsx)(Fe,{})}),Object.values(He).map((function(e){return Object(be.jsx)(fe,{token:e,price:"QUICK"===e.symbol&&d},e.symbol)})),Object(be.jsx)(Pe,{children:Ne.map((function(e){return Object(be.jsx)(Ke,{stakingInfo:e,quickPrice:d},e.stakingRewardAddress)}))})]})},ze=Object(ce.b)(m||(m=Object(_.a)(["\n  width: 100%;\n"]))),We=ce.c.button(g||(g=Object(_.a)(["\n  border: none;\n  padding: 10px 15px;\n  border-radius: 4px;\n  color: white;\n  background: var(--blue);\n  cursor: pointer;\n  outline: none;\n  user-select: none;\n\n  :hover {\n    background: var(--dark-blue);\n  }\n\n  ","\n"])),(function(e){return e.block&&ze})),Ye=function(e){return Object(be.jsx)(We,Object(de.a)(Object(de.a)({},e),{},{children:e.children}))},_e=ce.c.div(w||(w=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  display: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: ",";\n  background: rgba(0, 0, 0, 0.5);\n  user-select: none;\n"])),(function(e){return e.open?"block":"none"}),(function(e){var n;return null!==(n=e.zIndex)&&void 0!==n?n:10})),qe=ce.c.div(j||(j=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: text;\n"]))),Xe=ce.c.div(E||(E=Object(_.a)(["\n  min-width: 300px;\n"]))),Le=ce.c.div(F||(F=Object(_.a)(["\n  background: var(--midnight-2);\n  padding: 15px 20px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Je=ce.c.div(U||(U=Object(_.a)(["\n  background: var(--midnight);\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 15px 20px;\n"]))),Ve=ce.c.div(h||(h=Object(_.a)(["\n\n"]))),Ze=ce.c.span(R||(R=Object(_.a)(["\n  margin-left: 15px;\n  cursor: pointer;\n  user-select: none;\n"]))),$e=document.getElementById("modal-root"),en=function(e){var n=e.open,a=function(e){e.stopPropagation()};return Object(W.createPortal)(Object(be.jsx)(_e,{open:n,onClick:function(n){a(n),e.onClose()},zIndex:e.zIndex,children:Object(be.jsx)(qe,{children:Object(be.jsxs)(Xe,{onClick:a,children:[Object(be.jsxs)(Le,{children:[Object(be.jsx)(Ve,{children:e.title}),Object(be.jsx)(Ze,{onClick:e.onClose,children:"\u2716"})]}),Object(be.jsx)(Je,{children:e.children})]})})}),$e)},nn=a(59),an=a(126),dn=a(128),tn="metamask",sn="network",rn=new an.a({supportedChainIds:[Qe]}),cn=new dn.a({urls:Object(nn.a)({},Qe,"https://rpc-mainnet.maticvigil.com/v1/c4007bbae89d953a8cf35384155737552b0e2798"),defaultChainId:Qe}),on=(B={},Object(nn.a)(B,tn,rn),Object(nn.a)(B,sn,cn),B),bn=function(e){var n=Object(q.b)(),a=Ce().setUser,d=function(){var a=Object(J.a)(L.a.mark((function a(){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.activate(rn,ke);case 2:e.close();case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(G.useEffect)((function(){n.connector===rn&&a((function(e){return Object(de.a)(Object(de.a)({},e),{},{account:n.account,connector:tn})}))}),[n.active,n.connector,a,n.account]),window.web3||window.ethereum?Object(be.jsx)(Ye,{block:!0,onClick:d,children:"Metamask"}):Object(be.jsx)("a",{href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",target:"_blank",rel:"noopener noreferrer",children:Object(be.jsx)(Ye,{block:!0,children:"Install Metamask"})})},ln=ce.c.input(O||(O=Object(_.a)(["\n  width: 100%;\n  border-radius: 6px;\n  outline: none;\n  border: none;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 15px;\n  color: white;\n  margin-bottom: 10px;\n"]))),An=function(e){return Object(be.jsx)(ln,Object(de.a)({},e))},pn="custom-address-last",un=Object(ce.c)(An)(S||(S=Object(_.a)(["\n  min-width: 330px;\n"]))),Cn=Object(ce.c)(Ye)(I||(I=Object(_.a)(["\n  margin-left: auto;\n  display: block;\n"]))),kn=function(e){var n=window.localStorage.getItem(pn),a=Object(G.useState)(null!==n&&void 0!==n?n:""),d=Object(V.a)(a,2),t=d[0],s=d[1];return Object(be.jsxs)(en,Object(de.a)(Object(de.a)({title:"Enter your address",zIndex:12},e),{},{children:[Object(be.jsx)(un,{value:t,onChange:function(e){return s(e.target.value)},block:!0}),Object(be.jsx)(Cn,{onClick:function(){window.localStorage.setItem(pn,t),e.onOk(t),e.onClose()},children:"Ok"})]}))},fn=function(e){var n=Object(q.b)(),a=Ce().setUser,d=Object(G.useState)(!1),t=Object(V.a)(d,2),s=t[0],r=t[1],c=function(){var d=Object(J.a)(L.a.mark((function d(t){return L.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.activate(cn,ke);case 2:a((function(e){return Object(de.a)(Object(de.a)({},e),{},{account:t,provider:"network"})})),e.close();case 4:case"end":return d.stop()}}),d)})));return function(e){return d.apply(this,arguments)}}();return Object(be.jsxs)(be.Fragment,{children:[Object(be.jsx)(Ye,{block:!0,onClick:function(){return r(!0)},children:"Custom Address"}),Object(be.jsx)(kn,{open:s,onClose:function(){return r(!1)},onOk:c})]})},xn=ce.c.div(v||(v=Object(_.a)(["\n\n"]))),Dn=ce.c.div(y||(y=Object(_.a)(["\n  margin-bottom: 15px;\n\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),mn=function(e){return Object(be.jsx)(en,Object(de.a)(Object(de.a)({title:"Select your wallet"},e),{},{children:Object(be.jsxs)(xn,{children:[Object(be.jsx)(Dn,{children:Object(be.jsx)(bn,{close:e.onClose})}),Object(be.jsx)(Dn,{children:Object(be.jsx)(fn,{close:e.onClose})})]})}))},gn=function(e){var n=Object(q.b)(),a=Ce().setUser,d=Object(G.useState)(!1),t=Object(V.a)(d,2),s=t[0],r=t[1];return Object(be.jsxs)(be.Fragment,{children:[n.active?Object(be.jsx)(Ye,{onClick:function(){a((function(e){return Object(de.a)(Object(de.a)({},e),{},{account:null,provider:null})})),n.deactivate()},children:"Disconnect"}):Object(be.jsx)(Ye,{onClick:function(){return r(!0)},children:"Connect Wallet"}),Object(be.jsx)(mn,{open:s,onClose:function(){return r(!1)}})]})},wn=ce.c.div(T||(T=Object(_.a)(["\n  position: fixed;\n  top: 0;\n  height: var(--navbar-height);\n  background: var(--midnight);\n  width: 100%;\n  box-shadow: var(--box-shadow);\n  z-index: 1;\n"]))),jn=ce.c.div(M||(M=Object(_.a)(["\n  max-width: 1400px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  padding: 25px 15px;\n"]))),En=ce.c.div(K||(K=Object(_.a)(["\n  margin-right: auto;\n  font-size: 18px;\n"]))),Fn=ce.c.div(Q||(Q=Object(_.a)(["\n  margin-left: 20px;\n"]))),Un=function(){var e=Ce().user;return Object(be.jsx)(wn,{children:Object(be.jsxs)(jn,{children:[Object(be.jsx)(En,{children:"QUICKSWAP"}),e.account&&Object(be.jsx)(Fn,{children:Object(be.jsx)(Be,{children:se.trimmedAddress(e.account)})}),Object(be.jsx)(Fn,{children:Object(be.jsx)(gn,{})})]})})},hn=ce.c.div(H||(H=Object(_.a)(["\n\n"]))),Rn=ce.c.div(N||(N=Object(_.a)(["\n  max-width: 1400px;\n  margin: 0 auto;\n  margin-top: var(--navbar-height);\n  padding: 25px 15px;\n"]))),Bn=function(){var e=Object(q.b)(),n=e.active,a=e.activate,d=e.chainId,t=Ce().user;return Object(G.useEffect)((function(){if(t&&t.connector&&t.account&&!n){var e=on[t.connector];a(e,ke)}}),[n,a,t]),Object(be.jsxs)(hn,{children:[Object(be.jsx)(Un,{}),Object(be.jsx)(Rn,{children:n&&d===Qe&&Object(be.jsx)(Ge,{})})]})},On=Object(ce.a)(P||(P=Object(_.a)(["\n  :root {\n    --blue: #4467a0;\n    --dark-blue: #36507b;\n    --midnight: #262c3c;\n    --midnight-2: #1c212d;\n    --midnight-3: #11141b;\n    --green: #27ae60;\n    --red: #e74c3c;\n\n    --navbar-height: 70px;\n    --border-radius: 8px;\n    --box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  body {\n    margin: 0px;\n    background: var(--midnight-3);\n    color: #9da9bb;\n  }\n  * {\n    font-family: Inter, sans-serif;\n    box-sizing: border-box;\n  }\n"]))),Sn=a(91),In=function(e){var n=new Sn.a(window.ethereum);return n.pollingInterval=15e3,n},vn=a(88),yn=["invalid ENS name"],Tn=[-32603];(function(){"onunhandledrejection"in window&&(window.onunhandledrejection=function(e){var n,a;yn.includes(null===e||void 0===e||null===(n=e.reason)||void 0===n?void 0:n.reason)||Tn.includes(null===e||void 0===e||null===(a=e.reason)||void 0===a?void 0:a.code)||console.log("Unhandled Error",e)})})(),Y.a.render(Object(be.jsxs)(z.a.StrictMode,{children:[Object(be.jsx)(On,{}),Object(be.jsx)(q.a,{getLibrary:In,children:Object(be.jsx)(vn.UserContextProvider,{children:Object(be.jsx)(Bn,{})})})]}),document.getElementById("root"))},88:function(e,n,a){"use strict";a.r(n),a.d(n,"UserContext",(function(){return l})),a.d(n,"UserContextProvider",(function(){return A}));var d=a(33),t=a(6),s=a(9),r=s.createContext,c=s.useState,i=s.useEffect,o={account:null},b="user-context",l=r(),A=function(e){var n=e.children,a=window.localStorage.getItem(b),s=a?JSON.parse(a):o,r=c(s),A=Object(d.a)(r,2),p=A[0],u=A[1];return i((function(){window.localStorage.setItem(b,JSON.stringify(p))}),[p]),Object(t.jsx)(l.Provider,{value:{user:p,setUser:u},children:n})}}},[[176,1,2]]]);
//# sourceMappingURL=main.90c9a638.chunk.js.map
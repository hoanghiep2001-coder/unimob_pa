window.__require=function t(e,o,n){function r(i,s){if(!o[i]){if(!e[i]){var l=i.split("/");if(l=l[l.length-1],!e[l]){var u="function"==typeof __require&&__require;if(!s&&u)return u(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+i+"'")}i=l}var a=o[i]={exports:{}};e[i][0].call(a.exports,function(t){return r(e[i][1][t]||t)},a,a.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({CONST:[function(t,e,o){"use strict";var n;cc._RF.push(e,"cd276X+nNREUZW0hRWy3YyQ","CONST"),Object.defineProperty(o,"__esModule",{value:!0}),o.CONST=void 0,function(t){t.clickBtnSound="clickBtnSound",t.slideSound="slideSound",t.wrongSound="wrongSound"}(n||(n={}));var r=function(){function t(){}return t.SoundTrack=n,t}();o.CONST=r,cc._RF.pop()},{}],GameController:[function(t,e,o){"use strict";cc._RF.push(e,"2d124xuSdhE14l12JC74F1X","GameController");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.GameController=void 0;var i=t("./SoundController"),s=cc._decorator,l=s.ccclass,u=(s.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){window.gameReady&&window.gameReady()},e.prototype.installHandle=function(){if(i.SoundController.Instance(i.SoundController).stopAllSound(),window.gameEnd&&window.gameEnd(),"undefined"==typeof playableSDK){if("undefined"!=typeof ExitApi)return cc.log("Call exit api"),void ExitApi.exit();if("undefined"!=typeof dapi)return cc.log("Call dapi"),void dapi.openStoreUrl();if("undefined"!=typeof mraid)return cc.sys.os==cc.sys.OS_ANDROID||cc.sys.os==cc.sys.ANDROID?void mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish"):cc.sys.os==cc.sys.OS_IOS||cc.sys.os==cc.sys.IPHONE||cc.sys.os==cc.sys.IPAD?void mraid.open("https://itunes.apple.com/us/com.fishio.hungryfish?mt=8"):void mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");"undefined"==typeof window?window.install&&window.install():window.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish","_blank")}else window.playableSDK.openAppStore()},c([l],e)}(cc.Component));o.GameController=u,cc._RF.pop()},{"./SoundController":"SoundController"}],GameInfo:[function(t,e,o){"use strict";cc._RF.push(e,"abf73C+BiNLdYbNmrxRlUZ2","GameInfo"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){}return t.isCanTouch=!0,t.isShowInstallPopup=!1,t}();o.default=n,cc._RF.pop()},{}],PuzzleConstants:[function(t,e,o){"use strict";cc._RF.push(e,"2c66eJoGyRAfb/WI4ANGYPy","PuzzleConstants"),Object.defineProperty(o,"__esModule",{value:!0}),o.STATE=void 0,function(t){t[t.NONE=0]="NONE",t[t.READY=1]="READY",t[t.START=2]="START",t[t.OVER=3]="OVER"}(o.STATE||(o.STATE={})),cc._RF.pop()},{}],PuzzlePiece:[function(t,e,o){"use strict";cc._RF.push(e,"e2602nrFPpMH5B2rclAcEKW","PuzzlePiece");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.Piece=void 0;var i=cc._decorator,s=i.ccclass,l=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.texture=null,e}return r(e,t),Object.defineProperty(e.prototype,"isRight",{get:function(){return this.curCol===this.oriCol&&this.curRow===this.oriRow},enumerable:!1,configurable:!0}),e.prototype.init=function(t,e,o,n){this.oriCol=t,this.oriRow=e,this.curCol=t,this.curRow=e;var r=this.node.addComponent(cc.Sprite),c=cc.rect(0,0,this.texture.width,this.texture.height),i=c.width/o,s=c.height/o,l=t*i,u=(o-e-1)*s,a=cc.rect(l,u,i,s);r.spriteFrame=new cc.SpriteFrame(this.texture,a),this.node.width=n,this.node.height=n,this.isBlank=this.oriCol===o-1&&0===this.oriRow,this.isBlank&&(this.node.active=!1)},c([l({type:cc.Texture2D})],e.prototype,"texture",void 0),c([s],e)}(cc.Component);o.Piece=u,cc._RF.pop()},{}],PuzzleScene:[function(t,e,o){"use strict";cc._RF.push(e,"c735b1laCtHdIdMu2J7NWsl","PuzzleScene");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.PuzzleScene=void 0;var i=t("./Const/CONST"),s=t("./Const/GameInfo"),l=t("./Controller/GameController"),u=t("./Controller/SoundController"),a=t("./PuzzleConstants"),p=t("./PuzzlueBoard"),h=cc._decorator,d=h.ccclass,f=h.property,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.GameController=null,e.btnHint=null,e.board=null,e.winPanel=null,e.level=3,e.state=a.STATE.NONE,e}return r(e,t),e.prototype.start=function(){this.addListeners(),this.board.init(this),this.startGame()},e.prototype.startGame=function(){this.state=a.STATE.START,this.board.reset(this.level)},e.prototype.overGame=function(){var t=this;this.winPanel.active=!0,this.state=a.STATE.OVER,this.btnHint.children.forEach(function(t){t.color=cc.color(255,184,0,255)}),cc.tween(this.winPanel).to(.5,{opacity:255},{easing:cc.easing.smooth}).call(function(){var e=t.btnHint.getComponentInChildren(cc.Label);e.string="DOWNLOAD",e.node.color=cc.color(255,255,255,255),e.node.scale=.8,t.btnHint.on(cc.Node.EventType.TOUCH_START,t.GameController.installHandle,t)}).start(),cc.tween(this.btnHint).repeatForever(cc.tween(this.btnHint).to(.5,{scale:1},{easing:cc.easing.smooth}).to(.5,{scale:1.06},{easing:cc.easing.elasticOut})).start()},e.prototype.onBoardTouch=function(t,e){(this.state=a.STATE.START)&&(this.board.movePiece(t,e)?(u.SoundController.Instance(u.SoundController).playSound(i.CONST.SoundTrack.slideSound),this.board.judgeWin()&&this.overGame()):(cc.log("wrong"),u.SoundController.Instance(u.SoundController).playSound(i.CONST.SoundTrack.wrongSound)))},e.prototype.onBtnLevelEasy=function(){this.level=3,this.startGame()},e.prototype.onBtnLevelNormal=function(){this.level=5,this.startGame()},e.prototype.onBtnLevelHard=function(){this.level=10,this.startGame()},e.prototype.onBtnRestart=function(){this.startGame()},e.prototype.addListeners=function(){this.btnHint.on(cc.Node.EventType.TOUCH_START,this.activeHint,this)},e.prototype.activeHint=function(){console.log("Check"),s.default.isCanTouch&&(s.default.isCanTouch=!1,this.winPanel.getComponent(cc.Animation).play(),this.scheduleOnce(function(){return s.default.isCanTouch=!0},1.1),u.SoundController.Instance(u.SoundController).playSound(i.CONST.SoundTrack.clickBtnSound))},e.prototype.removeListeners=function(){},c([f(l.GameController)],e.prototype,"GameController",void 0),c([f(cc.Node)],e.prototype,"btnHint",void 0),c([f(p.PuzzleBoard)],e.prototype,"board",void 0),c([f(cc.Node)],e.prototype,"winPanel",void 0),c([d],e)}(cc.Component);o.PuzzleScene=y,cc._RF.pop()},{"./Const/CONST":"CONST","./Const/GameInfo":"GameInfo","./Controller/GameController":"GameController","./Controller/SoundController":"SoundController","./PuzzleConstants":"PuzzleConstants","./PuzzlueBoard":"PuzzlueBoard"}],PuzzlueBoard:[function(t,e,o){"use strict";cc._RF.push(e,"5bb55t2HhJOT5e97sLmAVu/","PuzzlueBoard");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.PuzzleBoard=void 0;var i=t("./PuzzlePiece"),s=cc._decorator,l=s.ccclass,u=s.property,a=(s.executeInEditMode,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.piecePrefab=null,e.colNum=5,e.colSpace=5,e.colWidth=0,e.blankPiece=null,e.puzzleScene=null,e}return r(e,t),e.prototype.init=function(t){this.puzzleScene=t,this.addListeners()},e.prototype.reset=function(t){this.colNum=t,this.colWidth=(this.node.width-this.colSpace*(this.colNum+1))/this.colNum,this.node.removeAllChildren(),this.pieceMap=[];for(var e=0;e<this.colNum;e++){this.pieceMap[e]=[];for(var o=0;o<this.colNum;o++){var n=cc.instantiate(this.piecePrefab);this.node.addChild(n),n.x=e*(this.colWidth+this.colSpace)+this.colSpace,n.y=o*(this.colWidth+this.colSpace)+this.colSpace,this.pieceMap[e][o]=n.getComponent(i.Piece),this.pieceMap[e][o].init(e,o,this.colNum,this.colWidth),this.pieceMap[e][o].isBlank&&(this.blankPiece=this.pieceMap[e][o])}}this.shuffle()},e.prototype.shuffle=function(){for(var t=0;t<1e3;t++){var e=this.getNearPieces(this.blankPiece),o=Math.floor(Math.random()*e.length);this.exchangeTwoPiece(this.blankPiece,e[o])}},e.prototype.onBoadTouch=function(t){var e=t.getLocation(),o=this.node.convertToNodeSpaceAR(e),n=Math.floor((o.x-this.colSpace)/(this.colWidth+this.colSpace)),r=Math.floor((o.y-this.colSpace)/(this.colWidth+this.colSpace));this.puzzleScene.onBoardTouch(n,r)},e.prototype.movePiece=function(t,e){for(var o=this.pieceMap[t][e],n=0,r=this.getNearPieces(o);n<r.length;n++){var c=r[n];if(c.isBlank)return this.exchangeTwoPiece(o,c),!0}return!1},e.prototype.judgeWin=function(){for(var t=0;t<this.colNum;t++)for(var e=0;e<this.colNum;e++)if(!this.pieceMap[t][e].isRight)return!1;return this.blankPiece.node.active=!0,!0},e.prototype.getNearPieces=function(t){var e=[];return t.curCol>0&&e.push(this.pieceMap[t.curCol-1][t.curRow]),t.curCol<this.colNum-1&&e.push(this.pieceMap[t.curCol+1][t.curRow]),t.curRow>0&&e.push(this.pieceMap[t.curCol][t.curRow-1]),t.curRow<this.colNum-1&&e.push(this.pieceMap[t.curCol][t.curRow+1]),e},e.prototype.exchangeTwoPiece=function(t,e){var o,n,r;this.pieceMap[e.curCol][e.curRow]=t,this.pieceMap[t.curCol][t.curRow]=e,o=[e.curCol,t.curCol],t.curCol=o[0],e.curCol=o[1],n=[e.curRow,t.curRow],t.curRow=n[0],e.curRow=n[1],r=[e.node.position,t.node.position],t.node.position=r[0],e.node.position=r[1]},e.prototype.addListeners=function(){this.node.on(cc.Node.EventType.TOUCH_END,this.onBoadTouch,this)},e.prototype.removeListeners=function(){},c([u(cc.Prefab)],e.prototype,"piecePrefab",void 0),c([u(cc.Integer)],e.prototype,"colNum",void 0),c([u(cc.Integer)],e.prototype,"colSpace",void 0),c([l],e)}(cc.Component));o.PuzzleBoard=a,cc._RF.pop()},{"./PuzzlePiece":"PuzzlePiece"}],Singleton:[function(t,e,o){"use strict";cc._RF.push(e,"02ccctU4YJL1LAPuMMZ5mb/","Singleton");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,l=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.Instance=function(t){return null==this._instance&&(this._instance=new t),this._instance},e._instance=null,c([s],e)}(cc.Component));o.default=l,cc._RF.pop()},{}],SoundController:[function(t,e,o){"use strict";cc._RF.push(e,"944bdLyhmRGYrH5HQ8h55ze","SoundController");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.SoundController=void 0;var i=t("../Plugin/Singleton"),s=cc._decorator,l=s.ccclass,u=(s.property,function(t){function e(){var e=t.call(this)||this;return e.sounds=[],o._instance=e,e}var o;return r(e,t),o=e,e.prototype.onLoad=function(){},e.prototype.start=function(){this.sounds=this.node.getComponentsInChildren(cc.AudioSource)},e.prototype.playSound=function(t){this.sounds.find(function(e){return e.node.name===t}).play()},e.prototype.stopSound=function(t){this.sounds.find(function(e){return e.node.name===t}).stop()},e.prototype.stopAllSound=function(){this.sounds.forEach(function(t){return t.stop()})},o=c([l],e)}(i.default));o.SoundController=u,cc._RF.pop()},{"../Plugin/Singleton":"Singleton"}]},{},["CONST","GameInfo","GameController","SoundController","Singleton","PuzzleConstants","PuzzlePiece","PuzzleScene","PuzzlueBoard"]);
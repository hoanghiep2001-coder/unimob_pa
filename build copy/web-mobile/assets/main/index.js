window.__require=function e(t,i,c){function o(s,a){if(!i[s]){if(!t[s]){var r=s.split("/");if(r=r[r.length-1],!t[r]){var d="function"==typeof __require&&__require;if(!a&&d)return d(r,!0);if(n)return n(r,!0);throw new Error("Cannot find module '"+s+"'")}s=r}var h=i[s]={exports:{}};t[s][0].call(h.exports,function(e){return o(t[s][1][e]||e)},h,h.exports,e,t,i,c)}return i[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<c.length;s++)o(c[s]);return o}({BgScale:[function(e,t){"use strict";cc._RF.push(t,"31277H8UKdLAYeOFy3wbfqt","BgScale"),cc.Class({extends:cc.Component,properties:{},start:function(){},update:function(){this.setFitSize()},setFitSize:function(){var e=this.node.width,t=cc.winSize.width,i=cc.winSize.height;t!=e&&(this.node.width=t,this.node.height=i),t<i&&(this.node.width=t+100)}}),cc._RF.pop()},{}],GameController:[function(e,t){"use strict";cc._RF.push(t,"7978aMDhV5NjI90I4SBsbi4","GameController"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){window.gameReady&&window.gameReady()},onFinish:function(){window.gameEnd&&window.gameEnd()},installHandle:function(){if(this.onFinish(),"undefined"==typeof playableSDK)if("undefined"==typeof ExitApi){if("undefined"==typeof dapi)return"undefined"!=typeof mraid?cc.sys.os==cc.sys.OS_ANDROID||cc.sys.os==cc.sys.ANDROID?void mraid.open("https://play.google.com/store/apps/details?id=com.animedoll.avatarmaker"):cc.sys.os==cc.sys.OS_IOS||cc.sys.os==cc.sys.IPHONE||cc.sys.os==cc.sys.IPAD?void mraid.open("https://itunes.apple.com/us/app/id1662447489?mt=8"):void mraid.open("https://play.google.com/store/apps/details?id=com.animedoll.avatarmaker"):void(window.install&&window.install());dapi.openStoreUrl()}else ExitApi.exit();else window.playableSDK.openAppStore()}}),cc._RF.pop()},{}],gamePlay:[function(e,t){"use strict";cc._RF.push(t,"e504dIrhHNHKI8zOPblZdkO","gamePlay"),cc.Class({extends:cc.Component,properties:{background:cc.Node,character:cc.Node,bgAudio:cc.AudioClip,acne1:cc.Node,acne2:cc.Node,acne3:cc.Node,circle:cc.Node,circle2:cc.Node,tweezers:cc.Node,tweezers2:cc.Node,tweezers3:cc.Node,hand:cc.Node,hand2:cc.Node,startPos:null,emptyNode:cc.Node,word:cc.Node},onLoad:function(){var e=this;this.tweezers.on("touchmove",function(t){e.startPos=t.touch.getLocation(),e.tweezers.setPosition(e.startPos.x-cc.winSize.width/2-5,e.startPos.y-cc.winSize.height/2)}),this.node.on("touchend",function(){e.emptyNode.getBoundingBox().intersects(e.tweezers.getBoundingBox())&&(e.tweezers.active=!1,e.tweezers2.active=!0,e.acne1.active=!1,e.acne2.active=!0,e.acne3.active=!0,e.hand.active=!1,e.circle.active=!1,e.scheduleOnce(function(){e.tweezers3.active=!0,e.hand2.active=!0,e.circle2.active=!0},1.4))}),this.tweezers3.on("touchmove",function(){cc.audioEngine.stopAll(),e.getComponent("GameController").installHandle()}),cc.winSize.width>cc.winSize.height&&(this.tweezers.y=-120,this.tweezers.x=120,this.word.x=-120,this.word.y=179)},start:function(){this.playAudio(this.bgAudio)},playAudio:function(e){switch(e){case this.bgAudio:this.playBg=cc.audioEngine.play(this.bgAudio,!0,1)}},update:function(){this.handleFixSizeOfCharacterWhenRotate()},handleFixSizeOfCharacterWhenRotate:function(){cc.winSize.width>cc.winSize.height?(this.character.scaleX=.4,this.character.scaleY=.4,this.character.x=0,this.character.y=-80,this.emptyNode.x=48,this.emptyNode.y=-124):(this.character.scaleX=.32,this.character.scaleY=.32,this.character.position.x=0,this.character.position.y=-49)}}),cc._RF.pop()},{}]},{},["BgScale","GameController","gamePlay"]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{634:function(e,s,n){"use strict";n.r(s);var a=n(16),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"搭建好博客就可以开始安装有趣的插件了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建好博客就可以开始安装有趣的插件了"}},[e._v("#")]),e._v(" 搭建好博客就可以开始安装有趣的插件了！！！")]),e._v(" "),n("h2",{attrs:{id:"添加点击星星特效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加点击星星特效"}},[e._v("#")]),e._v(" 添加点击星星特效")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-cursor-effects",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件github链接"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("1.在根目录进入命令行，使用命令进行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("yarn add vuepress-plugin-cursor-effects -D\n# or use npm\nnpm i vuepress-plugin-cursor-effects -D\n")])])]),n("p",[e._v("2.在config.js中进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: ['cursor-effects'],\n}\n")])])]),n("p",[e._v("3.可通过选项进行光标特效的配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: [\n    [\n        'cursor-effects',\n        {\n            size: 2, // size of the particle, default: 2\n            shape: ['star' | 'circle'], // shape of the particle, default: 'star'\n            zIndex: 999999999, // z-index property of the canvas, default: 999999999\n        },\n    ],\n],\n}\n")])])]),n("h2",{attrs:{id:"动态标题特效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态标题特效"}},[e._v("#")]),e._v(" 动态标题特效")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-dynamic-title",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件github链接"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("1.在根目录进入命令行，使用命令进行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("yarn add vuepress-plugin-dynamic-title -D\n# or use npm\nnpm i vuepress-plugin-dynamic-title -D\n")])])]),n("p",[e._v("2.在config.js中进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: ['dynamic-title'],\n}\n")])])]),n("p",[e._v("3.可通过选项进行配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: [\n    [\n        'dynamic-title',\n        {\n            showIcon: '/favicon.ico',\n            showText: '(/≧▽≦/)咦！又好了！',\n            hideIcon: '/failure.ico',\n            hideText: '(●—●)喔哟，崩溃啦！',\n            recoverTime: 2000,\n        },\n    ],\n],\n}\n")])])]),n("p",[e._v("注意：多个插件时使用[]进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("plugins:[\n    ['cursor-effects'],\n    ['dynamic-title',{\n    showIcon: '/favicon.ico',\n    showText: '(/≧▽≦/)啦啦啦！',\n    hideIcon: '/failure.ico',\n    hideText: '(●—●)喔哟！',\n    recoverTime: 2000,\n    }]\n]\n")])])]),n("h2",{attrs:{id:"在您的-vuepress-中添加美丽的丝带"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在您的-vuepress-中添加美丽的丝带"}},[e._v("#")]),e._v(" 在您的 Vuepress 中添加美丽的丝带！")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-ribbon",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件github链接"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("1.在根目录进入命令行，使用命令进行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("yarn add vuepress-plugin-ribbon -D\n# or use npm\nnpm i vuepress-plugin-ribbon -D\n")])])]),n("p",[e._v("2.在config.js中进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: ['ribbon'],\n}\n")])])]),n("p",[e._v("3.可通过选项进行配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: [\n    [\n        'ribbon',\n        {\n            size: 90, // width of the ribbon, default: 90\n            opacity: 0.8, // opacity of the ribbon, default: 0.3\n            zIndex: -1, // z-index property of the background, default: -1\n        },\n    ],\n],\n}\n")])])]),n("h2",{attrs:{id:"看板娘动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#看板娘动画"}},[e._v("#")]),e._v(" 看板娘动画")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件github链接"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("1.在根目录进入命令行，使用命令进行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("npm install -D vuepress-plugin-helper-live2d\n")])])]),n("p",[e._v("2.在config.js中进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\n    plugins: ['vuepress-plugin-helper-live2d'],\n    }\n")])])]),n("p",[e._v("3.选择人物")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("model:'haru2'\n")])])]),n("p",[e._v("更多人物id可在github上进行查看")]),e._v(" "),n("h2",{attrs:{id:"代码行优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码行优化"}},[e._v("#")]),e._v(" 代码行优化")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-plugin-extract-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件github链接"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("1.在根目录进入命令行，使用命令进行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("npm install -D @vuepress-reco/vuepress-plugin-extract-code\n")])])]),n("p",[e._v("2.在config.js中进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: [\n    '@vuepress-reco/extract-code'\n]\n}\n")])])]),n("h2",{attrs:{id:"音乐播放插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#音乐播放插件"}},[e._v("#")]),e._v(" 音乐播放插件")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-plugin-bgm-player",target:"_blank",rel:"noopener noreferrer"}},[e._v("插件github链接"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("1.在根目录进入命令行，使用命令进行安装")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("npm install -D @vuepress-reco/vuepress-plugin-bgm-player\n")])])]),n("p",[e._v("2.在config.js中进行调用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("module.exports = {\nplugins: [\n    '@vuepress-reco/vuepress-plugin-bgm-player'\n]\n}\n")])])]),n("p",[e._v("3.配置音乐选项")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("[\n    '@vuepress-reco/vuepress-plugin-bgm-player',\n    {\n    audios:[\n        {\n        name: '消愁',\n        artist: '毛不易',\n        url: '/bgm/1.mp3',\n        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a89059d0b18ba80121ae0c2e1754.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634826461&t=7c088b94222f333a387ba12479dcf2d4'\n        }\n    ]\n    }\n]")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);
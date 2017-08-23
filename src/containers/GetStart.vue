<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <sideBar slot="sideBar" :user="user" :visibility="true"></sideBar>
        <Panel slot="content">
            <div class="header getstartHeader" slot="header">
                <router-link :to="`/`">主页</router-link> / Vue.js参考资料
            </div>
            <div class="inner getstartInner" slot="container">
                <dl v-for="content of contents">
                    <dt>{{content.title}}</dt>
                    <dd v-for="link of content.links">
                        <span> ● </span>
                        <a :href="link.link">{{link.text}}</a>
                    </dd>
                </dl>
            </div>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import sideBar from '../components/sideBar/sideBar.vue';

import { ww, wh, bus } from '../until/until';

export default {
    components: {
        Mains,
        Panel,
        sideBar
    },
    data() {
        return {
            nh: '',
            ww,
            wh,
            contents: [
                {
                    title: '文档&社区',
                    links: [
                        {
                            text: 'Vue.js官方网站（中文）',
                            link: 'https://cn.vuejs.org/'
                        }, {
                            text: 'Vue论坛',
                            link: 'https://forum.vuejs.org/'
                        }, {
                            text: 'vue-router',
                            link: 'http://vuejs.github.io/vue-router/zh-cn/index.html'
                        }, {
                            text: '组件库',
                            link: 'https://github.com/vuejs/vue/wiki/User-Contributed-Components-&-Tools'
                        }
                    ]
                }, {
                    title: '文章',
                    links: [
                        {
                            text: '《Vue.js：轻量高效的前端组件化方案》',
                            link: 'http://www.csdn.net/article/1970-01-01/2825439'
                        }, {
                            text: '《Vue.js 和 Webpack》(一)(二)(三)',
                            link: ''
                        }, {
                            text: '《尤小右采访》作者的采访有一些设计理念',
                            link: 'http://teahour.fm/2015/08/16/vuejs-creator-evan-you.html'
                        }, {
                            text: '腾讯全端 AlloyTeam 团队《mvvm学习&vue实践小结》',
                            link: 'http://www.alloyteam.com/2015/06/mvvm-xue-xi-vue-shi-jian-xiao-jie/'
                        }, {
                            text: 'Vue + webpack 项目实践',
                            link: 'http://jiongks.name/blog/just-vue/'
                        }, {
                            text: 'Vue.js 源码学习笔记',
                            link: 'http://jiongks.name/blog/vue-code-review/'
                        }, {
                            text: 'Vue教程',
                            link: 'https://github.com/vingojw/vue1_demo/blob/master/Vue%E6%95%99%E7%A8%8B.md'
                        }
                    ]
                }, {
                    title: '项目',
                    links: [
                        {
                            text: '《青城主题》',
                            link: 'https://github.com/zerqu/qingcheng'
                        }, {
                            text: '《Cnodejs.org社区webapp》',
                            link: 'https://github.com/shinygang/Vue-cnodejs'
                        }, {
                            text: '《vingojw/vue-vueRouter-webpack》',
                            link: 'https://github.com/vingojw'
                        }, {
                            text: 'Bootstrap components built with Vue.js',
                            link: 'https://github.com/viko16/vue-ghpages-blog'
                        }, {
                            text: 'A blog based on Github pages by vue.js + webpack',
                            link: 'https://github.com/viko16/vue-ghpages-blog'
                        }, {
                            text: 'HackerNews clone with Vue.js',
                            link: 'https://github.com/vuejs/vue-hackernews'
                        }, {
                            text: '官方示例',
                            link: 'https://cn.vuejs.org/v2/examples/'
                        }, {
                            text: '用Vue实现的拖拽效果',
                            link: 'http://jsfiddle.net/lain8dono/mrnyf79e/'
                        }, {
                            text: 'Chat by Vue + Webpack',
                            link: 'https://github.com/Coffcer/vue-chat'
                        }, {
                            text: 'vue-mui',
                            link: 'https://github.com/mennghao/vue-mui'
                        }, {
                            text: 'laracasts',
                            link: 'https://github.com/laracasts'
                        }, {
                            text: 'Laravel-and-Vue',
                            link: 'https://github.com/laracasts/Laravel-and-Vue'
                        }, {
                            text: 'Vue.js + Redux',
                            link: 'https://github.com/yang-wei/vue-redux'
                        }, {
                            text: 'Vue.js + Webpack example',
                            link: 'https://github.com/vuejs/vue-webpack-example'
                        }, {
                            text: '基于Vue、Bootstrap的一套MVVM组件，简单、易用、功能强大',
                            link: 'https://github.com/bravf/VueUI'
                        }, {
                            text: '一个php的cms，前端用vuejs',
                            link: 'http://pagekit.com/'
                        }
                    ]
                }, {
                    title: '视频',
                    links: [
                        {
                            text: '尤小右分享vuejs 数据驱动的组件化前端开发',
                            link: 'http://www.imooc.com/video/6346'
                        }, {
                            text: 'laracasts.com Vuejs1.0教程',
                            link: 'https://laracasts.com/series/learning-vue-step-by-step'
                        }
                    ]
                }, {
                    title: '技术交流',
                    links: [
                        {
                            text: 'Vue的聊天室',
                            link: 'https://gitter.im/vuejs/vue'
                        }, {
                            text: 'Vuejs官方推特',
                            link: 'https://twitter.com/vuejs'
                        }
                    ]
                }
            ]
        };
    },
    create() {
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    computed: mapState({
        user: state => state.loginDetail
    })
};
</script>

<style lang="less">
.getstartHeader{
    color: #777;
    font-size: 14px;
    a{
        color: #fe76d1;
        text-decoration: none;
    }
}
.getstartInner{
    dl{
        padding: 0 10px;
        color: #333;
        dt{
            font-size: 20px;
            border-bottom: 1px solid #eee;
            margin: 1.15em 0 0.4em;
            font-weight: bold;
        }
        dd{
            margin: 0;
            line-height: 2em;
            font-size: 14px;
            span{
                padding: 0 5px;
            }
            a{
                color: #777;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
@media (min-width: 980px) {
    .getstartInner{
        dl{
            dt{
                font-size: 26px;
            }
        }
    }
}
</style>

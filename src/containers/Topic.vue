<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <userSideBar slot="sideBar"></userSideBar>
        <Panel slot="content">
            <div class="header topicHeader" slot="header" style="background: #fff">
                <div class="title">
                    <span v-if="top">置顶</span>
                    <span v-else-if="good">精华</span>
                    {{title}}
                </div>
                <button>加入收藏</button>
                <div class="changes">
                    <span>● 发布于 {{createTime}}</span>
                    <span>● 作者 <router-link :to="{ name: '', params: {} }">{{author}}</router-link></span>
                    <span>● {{visitCount}} 次浏览</span>
                    <span>● 来自 {{tab}}</span>
                </div>
            </div>
            <div class="inner topicContent" slot="container" v-html="content"></div>
        </Panel>
        <Panel slot="content">
            <div class="header" slot="header">
                <span>{{replyCount}} 回复</span>
            </div>
            <div class="cell replyCell" slot="container" v-for="(reply, i) of replies" :id="reply.id">
                <router-link class="userAvatar" :to="{ name: '', params: {} }">
                    <img :src="reply.author.avatar_url" :alt="reply.author.loginname">
                </router-link>
                <div class="reply">
                    <div class="userInfo">
                        <router-link :to="{ name: '', params: {} }">{{reply.author.loginname}}</router-link>
                        <span>{{i}}楼●{{createAt(reply.create_at)}}</span>
                        <div class="userUp">
                            <button><i>&#xe902;</i><span v-if="reply.ups.length !== 0">{{reply.ups.length}}</span></button>
                            <button><i>&#xe967;</i></button>
                        </div>
                    </div>
                    <div class="replyContent" v-html="reply.content">
                    </div>
                </div>
            </div>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import userSideBar from '../components/userSideBar/userSideBar.vue';

import { ww, wh, time, bus } from '../until/until';

const tabs = {
    all: '全部',
    good: '精华',
    weex: 'weex',
    share: '分享',
    ask: '问答',
    job: '工作'
};

export default {
    data() {
        return {
            nh: '',
            ww,
            wh
        };
    },
    components: {
        Mains,
        Panel,
        userSideBar
    },
    methods: {
        createAt(t) {
            return time(t);
        }
    },
    computed: mapState({
        title: state => state.topic.title,
        top: state => state.topic.top,
        good: state => state.topic.good,
        createTime: state => time(state.topic.create_at),
        author: state => state.topic.author.loginname,
        visitCount: state => state.topic.visit_count,
        tab: state => tabs[state.topic.tab],
        content: state => state.topic.content,
        replyCount: state => state.topic.reply_count,
        replies: state => state.topic.replies
    }),
    created() {
        this.$store.dispatch('axiosTopic', this.$route.params.id);
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    watch: {
        $route(e) {
            this.$store.dispatch('axiosTopic', e.params.id);
        }
    }
};
</script>

<style lang="less">
.panel{
    .topicHeader{
        position: relative;
        border-bottom: 1px solid #eee;
        .title{
            line-height: 1.6em;
            font-size: 18px;
            span{
                background: #ff69d9;
                font-size: 12px;
                padding: 2px 4px;
                border-radius: 3px;
                color: #fff;
                vertical-align: top;
            }
        }
        .changes{
            margin-top: 10px;
            span{
                display: block;
                color: #888;
                a{
                    color: #888;
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                        color: #ff60d9;
                    }
                }
            }
        }
        button{
            background: #ff69d9;
            color: #fff;
            border: none;
            padding: 5px 14px;
            border-radius: 3px;
            outline: none;
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }
    div.topicContent{
        padding: 10px 20px;
        h1, h2, h3, h4, h5, h6{
            margin: 30px 0 15px;
            border-bottom: 1px solid #eee;
        }
        a{
            color: #777;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
        p{
            line-height: 1.7em;
        }
        li{
            line-height: 2em;
            font-size: 14px;
        }
        img{
            height: auto;
            max-width: 100%;
        }
        pre{
            font-size: 14px;
            border-radius: 0;
            padding: 0 15px;
            border: 0;
            margin: 20px -10px;
            border-width: 1px 0;
            background: #f7f7f7;
            line-height: 1.7em;
            overflow: auto;
        }
        blockquote{
            padding: 0 0 0 15px;
            margin: 0 0 20px;
            border-left: 5px solid #eee;
        }
    }
    div.replyCell{
        padding: 10px;
        font-size: 14px;
        border-top: 1px solid #f0f0f0;
        background: #fff;
        position: relative;
        zoom: 1;
        &::after{
            content: '';
            clear: both;
            display: table;
            visibility: hidden;
        }
        .userAvatar{
            text-decoration: none;
            float: left;
            img{
                width: 30px;
                height: 30px;
                border-radius: 3px;
            }
        }
        .reply{
            padding-left: 40px;
            box-sizing: border-box;
            .userInfo{
                a{
                    font-size: 12px;
                    color: #666;
                    text-decoration: none;
                    &:hover{
                        color: #ff7ec8;
                    }
                }
                span{
                    font-size: 11px;
                }
                .userUp{
                    float: right;
                    button{
                        border: none;
                        background: none;
                        outline: none;
                        cursor: pointer;
                        padding: 0 2px;

                        span{
                            margin-left: 3px;
                        }
                        i{
                            color: #666;
                        }
                        &:hover{
                            i{
                                color: #ff7ec8;
                            }
                        }
                    }
                }
            }
            .replyContent{
                padding: 1px 0;
                p{
                    font-size: 15px;
                    line-height: 1.7em;
                    overflow: auto;
                    white-space: pre-wrap;
                    white-space: -moz-pre-wrap;
                    white-space: -o-pre-wrap;
                    word-wrap: break-word;
                    color: #333;
                }
            }
        }
    }
}

@media (min-width:768px) {
    .panel{
        .topicHeader{
            .title{
                font-size: 22px;
            }
            .changes{
                span{
                    display: inline-block;
                }
            }
        }
    }
}
</style>

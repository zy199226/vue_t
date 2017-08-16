<template lang="html">
    <Mains>
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
            <div class="">
                
            </div>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';
import userSideBar from '../components/userSideBar/userSideBar.vue';

import { time } from '../until/until';

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
        };
    },
    components: {
        Mains,
        Panel,
        userSideBar
    },
    mounted() {
        // console.log(this);
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
        replyCount: state => state.topic.reply_count
    }),
    created() {
        this.$store.dispatch('axiosTopic', this.$route.params.id);
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
    div.inner{
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
        }
        blockquote{
            padding: 0 0 0 15px;
            margin: 0 0 20px;
            border-left: 5px solid #eee;
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

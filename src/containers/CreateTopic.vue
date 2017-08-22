<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <div slot="sideBar" id="sideBar">
            <Panel>
                <div class="header sideHeader" slot="header">
                    <span>Markdown 语法参考</span>
                </div>
                <div class="inner sideInner" slot="container">
                    <ul>
                        <li>### 单行的标题</li>
                        <li>**粗体**</li>
                        <li>`console.log('行内代码')`</li>
                        <li>```js\n code \n``` 标记代码块</li>
                        <li>[内容](链接)</li>
                        <li>![文字说明](图片链接)</li>
                    </ul>
                    <a href="http://www.ituring.com.cn/article/775" target="_blank">Markdown 文档</a>
                </div>
            </Panel>
            <Panel>
                <div class="header" slot="header">
                    <span>话题发布指南</span>
                </div>
                <div class="inner sideInner" slot="container">
                    <ul>
                        <li>尽量把话题要点浓缩到标题里</li>
                        <li>代码含义和报错可在 <a href="https://segmentfault.com/t/node.js" target="_blank">SegmentFault</a> 提问</li>
                        <li>给话题选择合适的标签能增加浏览</li>
                    </ul>
                </div>
            </Panel>
        </div>
        <Panel slot="content">
            <div class="header sideHeader" slot="header">
                <router-link :to="'/'">主页</router-link> / 发布话题
            </div>
            <div class="inner innerEditor" slot="container">
                <div class="selectTab">
                    <span>选择版块：</span>
                    <select name="selectTab" v-model="tab">
                        <option value="weex">weex</option>
                        <option value="share">分享</option>
                        <option value="ask">问答</option>
                        <option value="job">工作</option>
                    </select>
                </div>
                <input type="text" name="title" placeholder="标题字数10字以上" v-model="title">
                <textarea name="content" rows="12" placeholder="文章支持 Markdown 语法，请注意标记代码" v-model="content"></textarea>
                <button @click="submit">提交</button>
            </div>
        </Panel>
    </Mains>
</template>

<script>
import { mapState } from 'vuex';
import Mains from '../components/main/main.vue';
import Panel from '../components/panel/panel.vue';

import { ww, wh, bus } from '../until/until';

export default {
    components: {
        Mains,
        Panel
    },
    data() {
        return {
            nh: '',
            ww,
            wh,
            tab: 'share',
            title: '',
            content: ''
        };
    },
    created() {
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    },
    methods: {
        submit() {
            if (this.title.length <= 10) {
                alert('标题小于10字！！！');
            } else {
                this.$store.dispatch('axiosNewTopic', { tab: this.tab, title: this.title, content: this.content });
            }
        }
    },
    computed: mapState({
        token: state => state.login.success
    })
};
</script>

<style lang="less">
.sideHeader{
    font-size: 14px;
    color: #777;
    a{
        text-decoration: none;
        color: #e861c6;
        &:hover{
            text-decoration: underline;
        }
    }
}
.sideInner{
    ul{
        list-style: none;
        margin: 4px 0;
        padding: 0;
        color: #444;
        font-size: 13px;
        li{
            line-height: 2em;
            display: list-item;
        }
    }
    a{
        color: #777;
        text-decoration: none;
        font-size: 13px;
        &:hover{
            text-decoration: underline;
        }
    }
}
.innerEditor{
    font-size: 14px;
    .selectTab{
        line-height: 2em;
        select{
            width: 220px;
            background-color: #fff;
            border-radius: 3px;
            border: 1px solid #ccc;
            line-height: 2.1em;
            height: 2.1em;
        }
    }
    input{
        width: 100%;
        line-height: 2.1em;
        height: 2.1em;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-sizing: border-box;
        padding: 0 10px;
        margin: 10px 0;
    }
    textarea{
        padding: 5px 10px;
        box-sizing: border-box;
        width: 100%;
        line-height: 2.1em;
        border: 1px solid #ccc;
        border-radius: 3px;
        resize: none;
    }
    button{
        padding: 5px 14px;
        background: #ff69d9;
        color: #fff;
        border-radius: 3px;
        border: none;
        margin-top: 10px;
    }
}

</style>

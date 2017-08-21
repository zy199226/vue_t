<template lang="html">
    <Mains :style="ww < 980 ? `height: ${wh - nh}px;overflow: auto` : ''">
        <div slot="sideBar" id="sideBar">
            <Panel>
                <div class="header" slot="header">
                    <span>Markdown 语法参考</span>
                </div>
                <div class="inner" slot="container">
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
                <div class="inner" slot="container">
                    <ul>
                        <li>尽量把话题要点浓缩到标题里</li>
                        <li>代码含义和报错可在 <a href="https://segmentfault.com/t/node.js" target="_blank">SegmentFault</a> 提问</li>
                        <li>给话题选择合适的标签能增加浏览</li>
                    </ul>
                </div>
            </Panel>
        </div>
        <Panel slot="content">
            <div class="header" slot="header">
                <router-link :to="'/'">主页</router-link> / 发布话题
            </div>
            <div class="inner" slot="container">
                
            </div>
        </Panel>
    </Mains>
</template>

<script>
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
            wh
        };
    },
    created() {
        bus.$on('navbarHeight', (nh, ww, wh) => {
            this.nh = nh;
            this.ww = ww;
            this.wh = wh;
        });
    }
};
</script>

<style lang="less">
</style>

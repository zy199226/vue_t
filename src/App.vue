<template lang="html">
	<div id="example">
		<h1 @mouseover="MOUSEOVER" @mouseleave="ml" v-if="seen">{{msg}}</h1>
		<p>{{reversedMsg}}</p>
		<ul>
			<li v-for="n in 5">{{n}}</li>
			<li :title="message">{{msg}}</li>
			<li v-for="todo in todos">{{todo.text}}</li>
			<li>{{seen ? 'opq' : 'efg'}}</li>
		</ul>
		<p @click="log">{{abc}}</p>
		<input v-model="abc">
		<div v-html="def"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			msg: 'Hello World!',
			message: '页面加载于：' + new Date(),
			seen: true,
			todos: [
				{text: '学习javascript'},
				{text: '学习vue'},
				{text: '学习整个项目'}
			],
			abc: 'abc',
			def: '<p>this is a p!</p>'
		}
	},
	methods: {
		click: function () {
			console.log(123);
		},
		log: function () {
			console.log(456);
		},
		MOUSEOVER: function () {
			// this.seen = !this.seen;
		},
		ml: function () {
			console.log(1);
		}
	},
	computed: {
		reversedMsg: function () {
			return this.msg.split('').reverse().join('');
		}
	}
}
</script>

<style lang="less">
#example{
	font-size: 1.5em;
	color: #abcdef;
	font-weight: 400;
	ul{
		li{
			color: pink;
			font-size: 14px;
		}
	}
}
</style>

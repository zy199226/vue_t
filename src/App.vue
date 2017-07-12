<template lang="html">
	<div id="example">
		<h1 v-if="seen">{{msg}}</h1>
		<ul>
			<li v-for="n in 5">{{n}}</li>
			<li :title="message">{{msg}}</li>
			<li v-for="todo in todos">{{todo.text}}</li>
		</ul>
		<p>{{abc}}</p>
		<input v-model="abc">
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

		}
	}
	// methods () {
	// 	click: function () {
	// 		console.log(123);
	// 	}
	// }
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

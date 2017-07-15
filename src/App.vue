<template lang="html">
	<div id="example">
		<h1 @mouseover="MOUSEOVER" @mouseleave="ml" v-if="seen">{{msg}}</h1>
		<p v-show="seen">{{reversedMsg}}</p>
		<ul class="abc" :class="{active: seen}">
			<li v-for="n in 5">{{n}}</li>
			<li :title="message">{{msg}}</li>
			<li v-for="todo in todos">{{todo.text}}</li>
			<li>{{seen ? 'opq' : 'efg'}}</li>
			<li v-if="seen">ok</li>
			<li v-else>else</li>
		</ul>
		<p @click="log">{{abc}}</p>
		<input v-model="abc" :style="styleObject">
		<div v-html="def" :style="{color:activeColor}"></div>
		<div v-if="Math.random()>0.5">
			now you see me
		</div>
		<div v-else>
			now you don't
		</div>
		<ul>
			<li v-for="n in evenNumbers">{{n}}</li>
		</ul>
		<button @click="count += 1">增加 1</button>
		<p>{{count}}</p>
		<button @click="greet">点击</button>
		<input @keyup.enter="greet">
		<input type="checkbox" id="haha" value="haha" v-model="checked">
		<label for="checkbox">{{checked}}</label>
		<br>
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		<br>
		<span>Checked names: {{ checkedNames }}</span>
		<select>
			<option disabled value="">请选择</option>
			<option>a</option>
			<option>b</option>
			<option>c</option>
		</select>
		<br>
		<input type="checkbox" v-model="toggle" :true-value="a" :false-value="b">
		<label for="">{{toggle}}</label>
		<input v-model.lazy="aa">
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
			abc: 'efg',
			def: '<p>this is a p!</p>',
			activeColor: 'red',
			styleObject: {
				border: '1px solid red',
				color: 'pink'
			},
			numbers: [1, 2, 3, 4, 5],
			count: 0,
			checked: true,
			checkedNames: [],
			toggle: '',
			a: 'a',
			b: 'b',
			aa: 'aa'
		}
	},
	watch: {
		abc: function (n) {
			console.log(n);
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
		},
		// getAnswer: _.debounce(
		// 	function () {
		// 		console.log(123456789);
		// 	}, 500
		// ),
		greet: function (event) {
			
			console.log(this);
		},
	},
	computed: {
		reversedMsg: function () {
			return this.msg.split('').reverse().join('');
		},
		evenNumbers: function () {
			return this.numbers.filter((n) => {
				return n % 2 === 0;
			});
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

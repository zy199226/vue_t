<template lang="html">
	<div id="example">
		<h1>{{msg}}</h1>
		<ul>
			<li v-for="n in 5">{{n}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			msg: 'Hello World!'
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
			color: #999;
			font-size: 14px;
		}
	}
}
</style>

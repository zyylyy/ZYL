<template>
	<div class="orderBox">
		<table class="orderTable">
		    <tr>
				<th>商品信息</th>
				<th>数量</th>
				<th>实付金额</th>
				<th>订单状态</th>
				<th>操作</th>
			</tr>
			<tr v-for="n in 5">
				<td></td>
				<td>3</td>
				<td>
					<p><em>799.00</em></p>
					<p>（含运费：6.00）</p>
				</td>
				<td>
					<p>待付款</p>
					<a href="">查看订单</a>
				</td>
				<td>
					<a class="orderTable__button">付款</a>
					<a href="">取消订单</a>
				</td>
			</tr>
		</table>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .orderTable{
    	width: 100%;
    	border-spacing: 0;
    	//table-layout: fixed;
    	tr{
    		&:first-child{
    			background-color: gray;
    		}
    		&:last-child{
    			td{
    				border-bottom: 0;
    			}
    		}
    	}
    	td,th{
    		vertical-align: middle;
    		padding: 10px;
    		text-align: center;
    		border-bottom: 1px dashed #ccc;
    	}
    	th{
    		border-bottom: 0;
    	}
    }
</style> 
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
<template>
      <div class="center">
            <div class="el-row">
                <div class="el-col el-col-24">
                    <div class="comp">
                        <div class="tmpl routeanimate">
                            <div class="section">
                                <div class="location">
                                    <span>当前位置：</span>
                                    <a href="/index.html">首页</a> &gt;
                                    <a href="#/site/member/center" class="">会员中心</a>&gt;
                                    <a href="#/site/member/orderlist" class="">我的订单</a>
                                </div>
                            </div>
                            <div class="section clearfix">
                                <div class="left-260">
                                    <div class="bg-wrap">
                                        <div class="avatar-box">
                                            <a href="/user/center/avatar.html" class="img-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </a>
                                            <h3>

                                                ivanyb

                                            </h3>
                                            <p>
                                                <b>注册会员</b>
                                            </p>
                                        </div>
                                        <div class="center-nav">
                                            <ul>
                                                <li>
                                                    <h2>
                                                        <i class="iconfont icon-order"></i>
                                                        <span>订单管理</span>
                                                    </h2>
                                                    <div class="list">
                                                        <p>
                                                            <a href="#/site/member/orderlist" class="">
                                                                <i class="iconfont icon-arrow-right"></i>交易订单</a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2>
                                                        <i class="iconfont icon-user"></i>
                                                        <span>账户管理</span>
                                                    </h2>
                                                    <div class="list">
                                                        <p>
                                                            <a href="#/site/member/center" class="">
                                                                <i class="iconfont icon-arrow-right"></i>账户资料</a>
                                                        </p>
                                                        <p>
                                                            <a href="#/site/member/center" class="">
                                                                <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>头像设置</a>
                                                        </p>
                                                        <p>
                                                            <a href="#/site/member/center" class="">
                                                                <i class="iconfont icon-arrow-right"></i>修改密码</a>
                                                        </p>
                                                        <p>
                                                            <a href="javascript:void(0)">
                                                                <i class="iconfont icon-arrow-right"></i>退出登录</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-auto">
                                    <div class="bg-wrap" style="min-height: 765px;">
                                        <div class="sub-tit">
                                            <a href="javascript:void(0)" class="add">
                                                <i class="iconfont icon-reply"></i>返回</a>
                                            <ul>
                                                <li class="selected">
                                                    <a href="javascript:;">查看订单</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="order-progress">
                                            <ul>
                                                <li class="first active">
                                                    <div class="progress">下单</div>
                                                    <div class="info">{{orderInfo.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</div>
                                                </li>
                                                <li :class="orderInfo.status >= 2?'active':'' ">
                                                    <div class="progress">已付款</div>
                                                    <div class="info">{{orderInfo.payment_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</div>
                                                </li>
                                                <li :class="orderInfo.status >= 3?'active':'' ">
                                                    <div class="progress">已经发货</div>
                                                    <div class="info">{{orderInfo.express_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</div>
                                                </li>
                                                <li :class="['last',orderInfo.status >= 4 ?'active':'']">
                                                    <div class="progress">已完成</div>
                                                    <div class="info">{{orderInfo.complete_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="form-box accept-box form-box1">
                                            <dl class="head form-group">
                                                <dd>
                                                    订单号：{{orderInfo.order_no}}

                                                    <router-link v-if="orderInfo.status===1" :to="'/pay?orderid='+orderInfo.id" class="btn-pay">去付款</router-link>
                                                    <!---->
                                                </dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>订单状态：</dt>
                                                <dd>
                                                    {{orderInfo.statusName}}
                                                </dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>快递方式：</dt>
                                                <dd>
                                                    {{orderInfo.expressTitle}}
                                                </dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>支付方式：</dt>
                                                <dd>{{orderInfo.paymentTitle}}</dd>
                                            </dl>
                                        </div>
                                        <div class="table-wrap">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="5" class="ftable">
                                                <tbody>
                                                    <tr>
                                                        <th align="left">商品信息</th>
                                                        <th width="60%">名称</th>
                                                        <th width="10%">单价
                                                        </th>
                                                        <th width="10%">数量</th>
                                                        <th width="10%">金额</th>
                                                    </tr>
                                                    <tr v-for="item in goodsList" :key="item.id">
                                                        <td width="60">
                                                            <img style="width:50px;height:50px" :src="item.imgurl">
                                                        </td>
                                                        <td align="left">
                                                            <router-link target="_blank" :to="'/goodsinfo/'+item.id">{{item.goods_title}}</router-link>
                                                        </td>
                                                        <td align="center">
                                                            <s>￥{{item.goods_price}}</s>
                                                            <p>￥{{item.real_price}}</p>
                                                        </td>
                                                        <td align="center">{{item.quantity}}</td>
                                                        <td align="center">￥{{item.quantity * item.real_price}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="7" align="right">
                                                            <p>商品金额：
                                                                <b class="red">￥{{totalPrice}}</b>&nbsp;&nbsp;+&nbsp;&nbsp;运费：
                                                                <b class="red">￥{{orderInfo.express_fee}}</b>
                                                            </p>
                                                            <p style="font-size: 22px;">应付总金额：
                                                                <b class="red">￥{{totalAmount}}</b>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="form-box accept-box">
                                            <dl class="head form-group">
                                                <dd>收货信息</dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>顾客姓名：</dt>
                                                <dd>{{orderInfo.accept_name}}</dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>送货地址：</dt>
                                                <dd>{{orderInfo.area}} {{orderInfo.address}}</dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>联系电话：</dt>
                                                <dd>{{orderInfo.mobile}} </dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>电子邮箱：</dt>
                                                <dd>{{orderInfo.email}} </dd>
                                            </dl>
                                            <dl class="form-group">
                                                <dt>备注留言：</dt>
                                                <dd>{{orderInfo.message}} </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default{
        data(){
            return {
                orderInfo:{}, //订单信息
                goodsList:[], //商品列表
                totalPrice:0, //商品的价格
                totalAmount:0 //商品的总价格【包含运费】
            }
        },
        created(){
            this.getOrderInfoData()
        },
        methods:{
            getOrderInfoData(){
                const url = `site/validate/order/getorderdetial/${this.$route.query.orderid}`

                this.$axios.get(url).then(response=>{
                    this.orderInfo = response.data.message.orderinfo

                    response.data.message.goodslist.forEach(item=>{
                        this.totalPrice += item.real_price * item.quantity
                    })

                    this.totalAmount = this.totalPrice + this.orderInfo.express_fee

                    this.goodsList = response.data.message.goodslist
                })
            }
        }
    }
</script>

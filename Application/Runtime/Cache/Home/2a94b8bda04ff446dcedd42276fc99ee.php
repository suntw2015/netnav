<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta charset="UTF-8">
	<title>
		菠菜网---www.ubetwin.cn
	</title>
	<meta name="keywords" content="菠菜网" />
	<meta name="description" content="本站是提供给各体育爱好者及时体育信息的网站" />
	<meta name="robots" content="all" />
	<meta name="author" content="http://www.ubetwin.cn" />
	<link href="/Public/css/index.css" rel="stylesheet" type="text/css"/>
	<link href="/Public/css/test.css" rel="stylesheet" type="text/css"/>
	<base target="_blank" />
	<script>
		var webdir = "/";
	</script>
	<script type="text/javascript" src="/Public/js/jquery.min.js">
	</script>
</head>

<body>
<div id="mainbg">
</div>
<div id="wrapper">
	<div class="header">
		<div class="hd">
			<!--logo-->
			<div class="logo">
				<a title="返回主页" href="/" target="_blank">
				</a>
			</div>
			<div class="dayNav">
				<!-- 天气 -->
				<iframe allowtransparency="true" frameborder="0" width="565" height="98"
				        scrolling="no" src="http://tianqi.2345.com/plugin/widget/index.htm?s=2&z=1&t=1&v=0&d=3&bd=0&k=&f=ffffff&q=1&e=1&a=1&c=54511&w=565&h=98&align=left">
				</iframe>
			</div>
			<!-- 预留广告位 -->
			<div class="topad">
				<img src="/Public/pic/topad.png" width="180" height="68" />
			</div>
		</div>
		<!--搜索代码-->
		<script>
			var PAGE_START_TIME = (new Date).getTime(),
					WEBINDEXCK = "360WEBINDEXCK",
					DEBUG = 0;
			var THEME_CONF = {
						TAGKEYS: ["zuire", "zuixin", "star", "katongdongman"],
						RECENT: [],
						DEFAULT: {
							key: "default",
							snapshot: "213fce68"
						},
						DSTVER: "407"
					},
					API_VERSION = {
						"hotword": "1.0",
						"channeltop": "1.3",
						"channelOrder": "8",
						"channelView": "2.5",
						"guessdata": "5",
						"theme": "1.0",
						"locallist": "1.1",
						"localdata": "1.4",
						"activityView": "1.0",
						"dropdownhotsale": "1.0",
						"tonglandata": "1.1"
					},
					API_SNAPSHOTNUM = {
						"hotword": "6b1e06c4555281c7877f11f8b1fa2823",
						"channeltop": "cfffa4a59b6f7bfced9f56c992a07a2a",
						"dropdownhotsale": "427fc2f18cfb5d161e5420fa50669091",
						"tonglandata": "227ec849f11207d9d95bcb7a07a662be",
						"channelOrder": "bfd68f8f2f1e8f2488a4f53c049a5f8c"
					};
			var HAO_CONFIG = {
				version: 2.0,
				feedsConfig: {
					"hotword": {
						host: 'http://hao.h.qhimg.com/api.php',
						api: 'hotword',
						v: API_VERSION.hotword || "1.0",
						r: API_SNAPSHOTNUM.hotword || "",
						quietUpdateTime: 1800000,
						expires: 7200000
					},
					"channeltop": {
						host: 'http://hao.h.qhimg.com/api.php',
						api: 'channeltop',
						v: API_VERSION.channeltop || "1.0",
						r: API_SNAPSHOTNUM.channeltop || "",
						threshold: 300000,
						expires: 1800000
					},
					"dropdownhotsale": {
						host: 'http://hao.h.qhimg.com/api.php',
						api: 'dropdownhotsale',
						v: API_VERSION.dropdownhotsale || "1.0",
						r: API_SNAPSHOTNUM.dropdownhotsale || "",
						threshold: 300000,
						expires: 1800000
					},
					"tonglandata": {
						host: 'http://hao.h.qhimg.com/api.php',
						api: 'tonglandata',
						v: API_VERSION.tonglandata || "1.0",
						r: API_SNAPSHOTNUM.tonglandata || "",
						threshold: 300000,
						expires: 1800000
					}
				},
				themeConfig: {
					host: 'http://theme.h.qhimg.com/',
					cdn_host: 'http://cdn.theme.h.qhimg.com/',
					api: 'theme',
					v: API_VERSION.theme,
					threshold: 86400000
				},
				channelOrder: {
					host: 'http://tuijian.h.qhimg.com/index.php',
					api: 'channelOrder',
					v: API_VERSION.channelOrder || "",
					r: API_SNAPSHOTNUM.channelOrder || "entsportstech",
					expires: 3600000
				},
				pushServer: {
					host: 'http://tui.h.qhimg.com/msg/v1/all/{0}/{1}'
				},
				userChannel: {
					api: 'userChannel',
					v: "1",
					r: "apollo"
				},
				channelView: {
					host: 'http://hao.h.qhimg.com/channelview.php',
					d_host: 'http://d.hao.h.qhimg.com/channelview.php',
					v: API_VERSION.channelView
				},
				iguess: {
					host: 'http://guess.h.qhimg.com/index.php',
					v: API_VERSION.guessdata
				},
				mysite: {
					host: "http://hao.h.qhimg.com/sitelist.php",
					api: 'mysite',
					v: '1.0',
					r: '1'
				},
				mysiteTweet: {
					host: 'http://navsite.tf.360.cn/siteRec',
					api: 'tweetsite',
					v: '1.0',
					r: 'tweet123'
				},
				weather: {
					host: 'http://weather.hao.360.cn/',
					cnd_host: 'http://cdn.weather.hao.360.cn/',
					weather: {
						path: 'sed_api_weather_info.php',
						api: 'weather',
						v: '2',
						r: 'so',
						quietUpdateTime: 7200000,
						expires: 14400000
					},
					area: {
						path: 'sed_api_area_query.php',
						api: 'area',
						v: '1.1',
						r: 'www'
					}
				},
				pm25: {
					host: 'http://cdn.weather.hao.360.cn/sed_api_weather_info.php',
					api: 'pm25',
					v: '1',
					r: 'pm25_1',
					quietUpdateTime: 7200000,
					expires: 14400000
				},
				widget: {
					host: 'http://hao.h.qhimg.com/widget.php',
					threshold: 50000,
					v: 1
				},
				search: {
					api: 'search',
					v: '1',
					r: 'aaa'
				},
				loulouView: {
					host: 'http://hao.h.qhimg.com/loulouview.php',
					v: '1'
				},
				loulouAD: {
					host: 'http://guess.h.qhimg.com/index.php',
					v: '1'
				}
			};
		</script>
		<script type="text/javascript" src="/Public/js/so01.js">
		</script>
		<style type="text/css">
			fieldset, img {border: none}.g-toggle {overflow: hidden;position: absolute;cursor:
					pointer;background-image: url(public/pic/soico.png);background-repeat:
					no-repeat;}#search{position:relative;height:90px;clear:both}#search .search-hd{z-index:2;position:relative;padding:20px
			0 0 0;margin-left:143px;width:550px;height:24px}#search .tab li{float:left;position:relative;margin-right:6px;
				                                                width:40px;height:25px;line-height:25px;font-size:14px;text-align:center;cursor:pointer;border-radius:3px;background-color:#e8e8e8;}#search
				                                                                                                                                                                                    .tab li.hover a{color: #069;}#search .tab li.on{height: 29px;cursor: default;background-image:
					url(public/pic/nobg.png);background-repeat: no-repeat;color:
					#FFF;background-color: transparent;}#search .tab li.on a{text-decoration:none;cursor:default;color:#FFF;cursor:
					pointer;}#search .tab li.on a.link:hover{cursor: pointer;}.ie6 #search
					                                                          .tab li .radius1,.ie7 #search .tab li .radius1,.ie8 #search .tab li .radius1{display:none}.ie6
					                                                                                                                                                    #search .tab li.on .radius1,.ie7 #search .tab li.on .radius1,.ie8 #search
			.tab li.on .radius1{display:block}#search .search-bd{z-index:1;position:relative;height:40px}#search
			                                                                                             .form-group{position:relative;margin-top:5px;height:42px}#search .form-group
			                                                                                                                                                      legend{display:none}#search .widget-group{display:none;position:relative;height:42px;
				                                                                                                                                                                          margin-top:10px; font-size:12px}.search-bg{position:absolute;top:0;left:0;display:block;width:1000px;height:88px}#search
				                                                                                                                                                                                                                                                                                           .form-group .shadowtop{z-index:1;overflow:hidden;position:absolute;top:0;left:1px;width:99.8%;height:0;border-top:1px
			solid #dedede;border-bottom:1px solid #f4f4f4}#search .form-group .shadowleft{overflow:hidden;position:absolute;top:0;left:0;width:0;height:39px;border-left:1px
			solid #dedede;border-right:1px solid #f4f4f4}#search-input{display:inline;float:left;margin-left:8px;position:relative;width:504px;height:35px;border-width:1px;border-style:solid;border-color:#09C;background:#fff;-moz-box-shadow:inset
			1px 1px 1px #dedede;-webkit-box-shadow:inset 1px 1px 1px #dedede;box-shadow:inset
			1px 1px 1px #dedede}#search-input input{margin-top:6px;padding:0 6px;width:458px;height:22px;line-height:22px;font-size:16px;border:0;background:none;outline:0;-webkit-appearance:none}.ie6
			                                                                                                                                                                                        #search-input input{margin-top:8px}#search-btn{overflow: hidden;float:
					left;width: 100px;height: 37px;line-height:37px;font-size: 14px;border:
					0;cursor: pointer;background-color: #09C;color: #FFF;background-image:
					url(public/pic/so.png);background-repeat: no-repeat;text-indent:
					20px;font-weight: bold;}#search-btn.mousedown{background-position:0 -82px}#search-engine{position:relative;top:4px;float:left;margin:0
			5px 1px 30px;width:100px;height:30px;}#search-engine #eng-logo{overflow:hidden;position:absolute;top:-5px;left:-4px;width:95px;height:35px;text-indent:-1000px;outline:0;background-repeat:no-repeat}#search-engine
			                                                                                                                                                                                                     .eng-list{display:none;position:absolute;top:33px;left:0;width:97px;border:1px
			solid #d2d2d2;border-bottom:none;background:#fff; z-index:9999;}#search-engine
			                                                                .eng-list a{display:block;overflow:hidden;width:97px;height:35px;text-indent:-1000px;border-bottom:1px
			solid #cecece;background-repeat:no-repeat}#search-engine .eng-list a:hover{background-color:#f6f6f6}#search-engine
			                                                                                                    .g-toggle{top:6px;right:-7px;width:13px;height:19px;background-position:0
			-22px}#search-engine.open .g-toggle{background-position:0 -43px}#search-engine.open
			                                                                .eng-list{display:block}#search-engine.single .eng-list{display:none}#search-engine.single
			                                                                                                                                     .g-toggle{display:none}#search-engine #eng-logo,#search-engine .eng-list
			a{background-image:url(public/pic/urllogo.png)}.ie6 #search-engine
			                                                            #eng-logo,.ie6 #search-engine .eng-list a{background-image:url(public/pic/urllogo.png)}#daily-hotword{z-index:1;overflow:hidden;position:absolute;top:12px;right:0;width:130px;height:20px}#search-hotword.attention{background-position:4px
			-373px}#search-hotword.open{background-position:11px -40px}#search-hotword{top:6px;right:2px;width:30px;height:26px;background-position:11px
			-19px}.somulti{background-position:5px -510px}#eng-logo.so360{background-position:1px
			-657px}#eng-logo.qihoo{background-position:-2px -116px}#eng-logo.sonews{background-position:-2px
			-839px}.so360{background-position:4px -658px}.bing{background-position:4px
			-560px}.google{background-position:4px -160px}.youdao{background-position:5px
			-33px}.baidu{background-position:4px 1px}.sonews{background-position:-1px
			-842px}.souku{background-position:3px -308px}.sogou{background-position:-1px
			-753px}.weibo{background-position:4px -463px}.gaode{background-position:0
			-612px}.qihoo{background-position:-2px -118px}.taobao{background-position:0
			-75px}.buy360{background-position:2px -264px}.amazon{background-position:0
			-211px}.vancl{background-position:4px -356px}.dangdang{background-position:11px
			-800px}.yihaodian{background-position:4px -708px}#search .tabs li{line-height:22px
				                                                 \9}.ie6 #search .form-group .g-input-text input .ie7 #search .form-group
				                                                    .g-input-text input{margin-top:3px}.ie6 #search .search-bg,.ie7 #search
			.search-bg,.ie8 #search .search-bg{display:block}#search-frame{height:110px}.search-bg{height:108px}.theme-search-bg{background-color:
					#fff; -moz-box-shadow: 0px 3px 4px #ddd; -webkit-box-shadow: 0px 3px 4px
			#ddd; box-shadow: 0px 3px 4px #ddd; /* For IE 8 */ -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4,
			Direction=180, Color='#dddddd')"; /* For IE 5.5 - 7 */ filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4,
			                                                                                                    Direction=180, Color='#dddddd');filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity:
						0.5;opacity: 0.5;}.theme-search-tab a{color:#323232}.theme-search-tab .hover
						                                                    a{color:#fff}.theme-search-tab .hover{background:#91CE79;}.ie6 .theme-search-tab
						                                                                                                              .hover,.ie7 .theme-search-tab .hover,.ie8 .theme-search-tab .hover{background-color:#91CE79}.theme-search-tab
						                                                                                                                                                                                                          .on a{color:#fff}.theme-search-tab .on{background:#3EAF0E}.ie6 .theme-search-tab
						                                                                                                                                                                                                                                                                    .on,.ie7 .theme-search-tab .on,.ie8 .theme-search-tab .on{background-color:#3EAF0E}.theme-search-tab
						                                                                                                                                                                                                                                                                                                                                                       .radius1{background-color:#fff}
		</style>
		<div id="doc-main">
			<div id="search-frame">
				<div id="search">
					<div class="search-hd">
						<ul class="tab gclearfix theme-search-tab">
							<li data-cate="webpage" class="on">
								<a href="" onClick="return false;">
									网页
								</a>
							</li>
							<li data-cate="news">
								<a href="http://sh.qihoo.com/" class="link">
									新闻
								</a>
							</li>
							<li data-cate="video">
								<a href="http://video.haosou.com/" class="link">
									视频
								</a>
							</li>
							<li data-cate="image">
								<a href="http://image.haosou.com/?&src=hao_360so_tu" class="link">
									图片
								</a>
							</li>
							<li data-cate="music">
								<a href="http://music.haosou.com/" class="link">
									音乐
								</a>
							</li>
							<li data-cate="map">
								<a href="http://map.haosou.com/?ie=utf-8&src=hao_360so_d&t=map&k=" class="link">
									地图
								</a>
							</li>
							<li data-cate="wenda">
								<a href="http://wenda.haosou.com/" class="link">
									问答
								</a>
							</li>
							<li data-cate="shopping">
								<a href="http://gouwu.360.cn/" class="link">
									购物
								</a>
							</li>
							<li data-widget="flytrip">
								<a href="http://go.360.cn/flight?src=homesearch" class="link">
									机票
								</a>
							</li>
							<li data-widget="car">
								<a href="http://car.bitauto.com/?WT.mc_id=360ss" class="link">
									汽车
								</a>
							</li>
						</ul>
					</div>
					<div class="search-bd">
						<div class="form-group">
							<form id="search-form" target="_blank" action="http://www.baidu.com/s">
								<div class="others-params webpage-somulti types-webpage" style="display:none">
									<input type="hidden" name="ie" value="utf-8">
									<input type="hidden" name="src" value="hao_search">
									<input type="hidden" name="shb" value="1">
								</div>
								<fieldset>
									<legend>
										百度搜索
									</legend>
									<div id="search-engine">
										<div class="eng-list">
											<a class="baidu" title="百度搜索" data-site="somulti" data-cate="webpage">
												baidu
											</a>
											<a class="so360" title="好搜，不做坏事" data-site="so360" data-cate="webpage">
												so360
											</a>
											<a class="bing" title="必应" data-site="bing" data-cate="webpage">
												bing
											</a>
											<a class="google" title="谷歌" data-site="google" data-cate="webpage">
												google
											</a>
											<a class="youdao" title="有道" data-site="youdao" data-cate="webpage">
												youdao
											</a>
											<a class="baidu" title="百度" data-site="baidu" data-cate="webpage">
												baidu
											</a>
										</div>
										<a id="eng-logo" class="baidu" title="综合搜索" hidefocus="true" href="http://www.haosou.com/?src=zh">
										</a>
										<div class="g-toggle">
										</div>
									</div>
									<div id="search-input">
										<input type="text" name="q" autocomplete="off" id="search-kw" qsuginited="1">
									</div>
									<button id="search-btn" type="submit">
										好搜一下
									</button>
								</fieldset>
							</form>
						</div>
						<script type="text/javascript">
							var SRC_HAO_SEARCH = "hao_search";
							if (hao360.channel != "") {
								SRC_HAO_SEARCH += "_" + hao360.channel;
								setTimeout(function() {
											document.getElementById("search-form")["src"].value = SRC_HAO_SEARCH;
										},
										0);
							}
							var HAO_DATA = {
								searchTabData: {
									defaultByCate: {
										news: "baidu",
										webpage: "baidu",
										weibo: "weibo",
										music: "baidu",
										video: "baidu",
										image: "baidu",
										wenda: "baidu",
										map: "baidu",
										shopping: "taobao"
									},
									searchEngConf: {
										"webpage": {
											baidu: ["http://www.baidu.com/s", "wd", "\u767e\u5ea6", "http://www.baidu.com/", "ie:GB2312"],
											somulti: ["http://www.haosou.com/s", "q", "\u7efc\u5408\u641c\u7d22", "http://www.haosou.com/?src=zh", "ie:utf-8;src:" + SRC_HAO_SEARCH + ";shb:1", "好搜一下"],
											youdao: ["http://www.youdao.com/search", "q", "\u6709\u9053", "http://www.youdao.com/?keyfrom=360dh_01", "keyfrom:360dh_01;ue:GB2312;vendor:360dh_01"],
											google: ["http://www.google.com.hk/search", "q", "\u8c37\u6b4c", "http://www.google.com.hk/webhp?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8;newwindow:1"]
										},
										"music": {
											baidu: ["http://mp3.baidu.com/m", "word", "\u767e\u5ea6", "http://mp3.baidu.com/", "f:ms;ct:134217728;ie:utf-8"],
											so360: ["http://s.music.haosou.com/s", "q", "好搜音乐", "http://music.haosou.com/", "ie:utf-8;src:hao_360so", "好搜音乐"],
											sogou: ["http://mp3.sogou.com/music", "query", "\u641c\u72d7", "http://mp3.sogou.com/", "ie:GB2312"]
										},
										"video": {
											baidu: ["http://video.baidu.com/v", "word", "\u767e\u5ea6", "http://video.baidu.com/", "ie:utf-8"],
											google: ["http://www.google.com.hk/search", "q", "\u8c37\u6b4c", "http://www.google.com.hk/search", "tbo:p;tbm:vid;source:vgc;tbs:vid;client:aff-360daohang;hl:zh-CN;ie:utf-8"]
										},
										"image": {
											baidu: ["http://image.baidu.com/i", "word", "\u767e\u5ea6", "http://image.baidu.com/", "ie:utf-8;tn:baiduimage"],
											so360: ["http://image.haosou.com/i", "q", "好搜图片", "http://image.haosou.com/?src=hao_360so", "ie:utf-8;src:hao_360so", "好搜图片"],
											youdao: ["http://image.youdao.com/search?keyfrom=360dh_01", "q", "\u6709\u9053", "http://image.youdao.com/search", "keyfrom:360dh_01;ue:GB2312"],
											google: ["http://images.google.com.hk/images", "q", "\u8c37\u6b4c", "http://images.google.com.hk/imghp?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8"]
										},
										"weibo": {
											weibo: ["http://s.weibo.com/weibo/", "", "微博", "http://s.weibo.com/", "ie:utf-8;refer:360"]
										},
										"news": {
											baidu: ["http://news.baidu.com/ns", "word", "\u767e\u5ea6", "http://news.baidu.com/", "ie:GB2312"],
											sonews: ["http://news.haosou.com/ns", "q", "360新闻搜索", "http://news.haosou.com/", "ie:utf-8;tn:news;src:" + SRC_HAO_SEARCH, "360新闻"],
											youdao: ["http://news.youdao.com/search?keyfrom=360dh_01", "q", "\u6709\u9053", "http://news.youdao.com/search", "ue:GB2312;keyfrom:360dh_01"],
											google: ["http://news.google.com.hk/news/search", "q", "\u8c37\u6b4c", "http://news.google.com.hk/?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8"]
										},
										"map": {
											baidu: ["http://map.baidu.com/m", "word", "\u767e\u5ea6", "http://map.baidu.com/", "ie:utf-8"],
											so360: ["http://map.haosou.com/", "", "好搜地图", "http://map.haosou.com/?src=hao_tablogo", "ie:utf-8;src:hao_360so;t:map", "好搜地图"],
											gaode: ["http://www.amap.com", "k", "高德", "http://www.amap.com", "t:map"]
										},
										"wenda": {
											baidu: ["http://zhidao.baidu.com/q", "word", "\u767e\u5ea6", "http://zhidao.baidu.com", "ct:17;pt:360se_ik;tn:ikaslist;ie:GB2312;"]
										},
										"shopping": {
											taobao: ["http://s8.taobao.com/search", "q", "\u6dd8\u5b9d", "http://www.taobao.com/?pid=mm_15144495_2216478_8873469", "unid:;pid:mm_15144495_2216478_8873469;search_type:auction;commend:all;at_topsearch:1;user_action:initiative;spercent:0;f:D9_5_1;ie:utf-8"],
											buy360: ['http://open.union.360.cn/go', 'k', "京东", "http://open.union.360.cn/go?bid=2000801&qihoo_id=36100&fname=hao_search_logo", "bid:2000801;qihoo_id:36100;flag:hao_cps;fname:hao_search"],
											amazon: ["http://open.union.360.cn/go", "k", "\u4E9A\u9A6C\u900A", "http://open.union.360.cn/go?bid=2000292&qihoo_id=36100&fname=hao_search_logo", "bid:2000292;qihoo_id:36100;flag:hao_cps;fname:hao_search"],
											dangdang: ["http://open.union.360.cn/go", "k", "当当", "http://open.union.360.cn/go?bid=2000319&qihoo_id=36100&fname=hao_search_logo", "bid:2000319;qihoo_id:36100;flag:hao_cps;fname:hao_search"],
											yihaodian: ["http://open.union.360.cn/go", "", "一号店", "http://open.union.360.cn/go?bid=2000519&qihoo_id=36100&fname=hao_search_logo", "bid:2000519;qihoo_id:36100;flag:hao_cps;fname:hao_search"]
										}
									}
								}
							};
						</script>
						<div id="widget-flytrip" class="widget-group">
						</div>
						<div id="widget-car" class="widget-group">
						</div>
					</div>
					<div class="search-bg theme-search-bg">
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="/Public/js/so02.js">
		</script>
		<script type="text/javascript" src="/Public/js/so03.js">
		</script>
		<script type="text/javascript" src="/Public/js/so04.js">
		</script>
		<script type="text/javascript" src="/Public/js/so05.js">
		</script>
		<!--搜索代码结束-->
	</div>
	<!--搜索下方导航-->
	<ul class="block navbar w-wbg fz0">
		<li class="block h-fil fl item">
			<a href="http://news.sina.com.cn/hotnews/" pbtitle="新闻头条" class="iblock h-fil">
                        <span class="nav nav-news icon">
                        </span>
                        <span class="iblock h-fil tit">
                            新闻头条
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://www.6k.com/list/dianshiju/" pbtitle="电视剧" class="iblock h-fil">
                        <span class="nav nav-tv icon">
                        </span>
                        <span class="iblock h-fil tit">
                            电视剧
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://www.dytt8.net/" pbtitle="热播电影" class="iblock h-fil">
                        <span class="nav nav-movie icon">
                        </span>
                        <span class="iblock h-fil tit">
                            电影天堂
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://cp.sogou.com/zixun/#fr=Cm42015" pbtitle="彩票大全" class="iblock h-fil">
                        <span class="nav nav-lottery icon">
                        </span>
                        <span class="iblock h-fil tit">
                            彩票大全
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://mai.sogou.com/shangjia.html?fr=dhqqtjl" pbtitle="网上购物"
			   class="iblock h-fil">
                        <span class="nav nav-basket icon">
                        </span>
                        <span class="iblock h-fil tit">
                            网上购物
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://waimai.baidu.com/waimai?qt=find" pbtitle="百度外卖" class="iblock h-fil">
                        <span class="nav nav-novel icon">
                        </span>
                        <span class="iblock h-fil tit">
                            百度外卖
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://hao.qq.com/youxi/" pbtitle="游戏" class="iblock h-fil">
                        <span class="nav nav-game icon">
                        </span>
                        <span class="iblock h-fil tit">
                            游戏
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://bj.meituan.com/?utm_campaign=baidu&utm_medium=organic&utm_source=baidu&utm_content=homepage&utm_term=" pbtitle="今日团购" class="iblock h-fil">
                        <span class="nav nav-groupon icon">
                        </span>
                        <span class="iblock h-fil tit">
                            今日团购
                        </span>
			</a>
		</li>
		<li class="line fl">
		</li>
		<li class="block h-fil fl item">
			<a href="http://www.ctrip.com/?utm_source=baidu&utm_medium=cpc&utm_campaign=baidu81&campaign=CHNbaidu81&adid=index&gclid=&isctrip=T" pbtitle="特价旅游" class="iblock h-fil">
                        <span class="nav nav-travel icon">
                        </span>
                        <span class="iblock h-fil tit">
                            特价旅游
                        </span>
			</a>
		</li>
	</ul>
	<!-- 搜索下方导航结束-->

	<div class="mainbd">
		<div class="lfbd">
			<!--国内名站-->
			<div class="famousSite re fz0">
				<div class="famoussitelist">
					<ul>
						<li>
							<a href="http://www.zhibo8.cc">
								直 播 吧
							</a>
						</li>
						<li>
							<a href="http://www.win007.com/">
								球 探 网
							</a>
						</li>
						<li>
							<a href="http://www.hupu.com/">
								虎 扑 网
							</a>
						</li>
						<li>
							<a href="http://www.PK2015.net">
								亚 盘 网
							</a>
						</li>
						<li>
							<a href="http://www.310win.com/">
								彩 客 网
							</a>
						</li>
						<li>
							<a href="http://www.zhcw.com/">
								中 彩 网
							</a>
						</li>
						<li>
							<a href="http://zx.500.com/zhuanti/n_yingchao2013-2014/">
								英 超 专 题
							</a>
						</li>
						<li>
							<a href="http://zx.500.com/zhuanti/n_xijia2013/">
								西 甲 专 题
							</a>
						</li>
						<li>
							<a href="http://zx.500.com/zhuanti/n_dejia2013/">
								德 甲 专 题
							</a>
						</li>
						<li>
							<a href="http://zx.500.com/zhuanti/n_2013Italy/">
								意 甲 专 题
							</a>
						</li>
						<li>
							<a href="http://www.pconline.com.cn/">
								法 甲 专 题
							</a>
						</li>
						<li>
							<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E8%B6%B3%E5%BD%A9&fr=search">
								足 彩 吧
							</a>
						</li>
						<li>
							<a href="http://www.nowscore.com/">
								捷 报 比 分 网
							</a>
						</li>
						<li>
							<a href="http://www.baxi.tv/">
								巴 西 足 球 网
							</a>
						</li>
						<li>
							<a href="http://www.zgzcw.com/">
								中 国 足 彩 网
							</a>
						</li>
						<li>
							<a href="http://www.diyicai.com/" ><!--</a>class="top_l_3"-->
								第 一 彩 票 网
							</a>
						</li>
						<li>
							<a href="http://www.jc258.cn/">
								竞 彩 网
							</a>
						</li>
						<li>
							<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%AF%AE%E5%BD%A9">
								篮 彩 吧
							</a>
						</li>
					</ul>
					<div class="famousline">
					</div>
					<ul>
						<li>
							<a href="http://www.500.com/">
								500 彩 票
							</a>
						</li>
						<li>
							<a href="https://caipiao.taobao.com/">
								淘 宝 彩 票
							</a>
						</li>
						<li>
							<a href="http://caipiao.163.com/">
								网 易 彩 票
							</a>
						</li>
						<li>
							<a href="http://www.lecai.com/">
								百 度 彩 票
							</a>
						</li>
						<li>
							<a href="http://sports.qq.com/lottery/">
								腾 讯 彩 票
							</a>
						</li>
						<li>
							<a href="http://www.lb528.com/?f=balance">
								乐 博 彩 票
							</a>
						</li>
						<li>
							<a href="http://www.tiantian.tv/">
								天 天 直 播
							</a>
						</li>
						<li>
							<a href="http://v.qq.com/live/sport/list.html" class="top_l_2">
								腾 讯 直 播
							</a>
						</li>
						<li>
							<a href="http://match.sports.sina.com.cn/index.html">
								新 浪 直 播
							</a>
						</li>
						<li>
							<a href="http://sports.pptv.com/">
								PPTV 直 播
							</a>
						</li>
						<li>
							<a href="http://live.letv.com/">
								乐 视 直 播
							</a>
						</li>
						<li>
							<a href="http://www.fengyunlive.com/">
								风 云 直 播
							</a>
						</li>
						<li>
							<a href="http://www.hupu.com/">
								虎 扑 体 育
							</a>
						</li>
						<li>
							<a href="http://sports.163.com/">
								网 易 体 育
							</a>
						</li>
						<li>
							<a href="http://sports.sina.com.cn/">
								新 浪 体 育
							</a>
						</li>
						<li>
							<a href="http://sports.qq.com/">
								腾 讯 体 育
							</a>
						</li>
						<li>
							<a href="http://sports.sohu.com/">
								搜 狐 体 育
							</a>
						</li>
						<li>
							<a href="http://espn.go.com/">
								ESPN 体 育
							</a>
						</li>
						<li>
							<a href="https://www.alipay.com/">
								支 付 宝
							</a>
						</li>
						<li>
							<a href="http://www.icbc.com.cn/icbc/">
								工 商 银 行
							</a>
						</li>
						<li>
							<a href="http://www.abchina.com/cn/">
								农 业 银 行
							</a>
						</li>
						<li>
							<a href="http://www.ccb.com/cn/home/index.html">
								建 设 银 行
							</a>
						</li>
						<li>
							<a href="http://www.bankcomm.com/BankCommSite/default.shtml">
								交 通 银 行
							</a>
						</li>
						<li>
							<a href="http://www.boc.cn/">
								中 国 银 行
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!--国内名站结束-->
			<!--栏目列表-->
			<div class="cateSite fz0">
				<div class="w-fil famous famous-0">
					<a href="http://www.qidian.com/Default.aspx" class="catesite">
						小说
					</a>
					<a href="http://www.kugou.com/" class="catesite">
						酷狗
					</a>
					<a href="http://www.youku.com/" class="catesite">
						优酷
					</a>
					<a href="http://hao.qq.com/youxi/" class="catesite">
						游戏
					</a>
					<a href="http://www.taobao.com/" class="catesite">
						淘宝
					</a>
					<a href="http://www.dy6d.com/dianshiju/" class="catesite">
						电视剧
					</a>
					<a href="http://v.hao.qq.com/dianying/" class="catesite">
						电影
					</a>
					<a href="http://v.hao.qq.com/zongyi/" class="catesite">
						综艺
					</a>
					<a href="http://hao.qq.com/qita/liaotian.html" class="catesite">
						QQ
					</a>
					<a href="http://haha.sogou.com/" class="catesite">
						笑话
					</a>
					<a href="http://hao.qq.com/yule/xingzuo.html" class="catesite">
						星座
					</a>
					<a href="http://www.dy6d.com/katong/" class="catesite">
						动漫
					</a>
					<a href="http://hao.qq.com/qita/manhua.html" class="catesite">
						漫画
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://live3.win007.com/" class="title">
							比分
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://live3.win007.com/" class="catesite">
							球 探 比 分
						</a>
						<a href="http://score.nowscore.com/" class="catesite">
							捷 报 比 分
						</a>
						<a href="http://live.ssbifen.com/" class="catesite">
							时 时 比 分
						</a>
						<a href="http://www.188bifen.com/" class="catesite">
							188 比 分
						</a>
						<a href="http://bf.80710.com/" class="catesite">
							第 一 比 分
						</a>
						<a href="http://www.114bf.com/zq310v.htm" class="catesite">
							大 赢 家
						</a>
						<a href="http://live.gooooal.com/live.html" class="catesite">
							雪 缘 园
						</a>
					</div>
					<!--a href="/daohang/shipin/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://221.5.71.90:90/scoreOdds.aspx" class="title">
							盘口
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://221.5.71.90:90/scoreOdds.aspx" class="catesite">
							球 探 指 数
						</a>
						<a href="http://odds.zgzcw.com/" class="catesite">
							足 彩 指 数
						</a>
						<a href="http://odds.sports.sina.com.cn/liveodds/" class="catesite">
							新 浪 欧 指
						</a>
						<a href="http://vip.win007.com/asianodds.aspx" class="catesite">
							彩 客 指 数
						</a>
						<a href="http://odds.cpdyj.com/euro/all" class="catesite">
							大 赢 家
						</a>

						<a href="http://odds.500.com/yazhi_jczq.shtml?0_ala_baidu_001947" class="catesite">
							500 指 数
						</a>
						<!--a href="http://op.win007.com/index_vip.aspx" class="catesite">
							百家欧指
						</a-->
						<a href="http://1x2.7m.hk/default_big.shtml" class="catesite">
							7M 欧指
						</a>
					</div>
					<!--a href="/daohang/yingshi/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://vip.bet007.com/runningball.aspx" class="title">
							滚球
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://99814.com/free.html">即 时 滚 球</a>
						<a href="http://www.macauslot.com/slot/html/fixture/birodds.htm">澳 门 滚 球</a>
						<a href="http://vip.bet007.com/runningball.aspx">滚 球 比 较</a>
						<a href="http://odds.boti.cn/odds.html?type=sb#gunqiu">博 体 滚 球</a>
						<a href="http://live.sportscn.com/zdzhishu.html">华 体 滚 球</a>
						<a href="http://33.310v.com/newo/zdbc.html">球 网 滚球</a>
						<a href="http://tieba.baidu.com/f?kw=%B9%F6%C7%F2&fr=ala0&tpl=5">滚球吧</a>
					</div>
					<!--a href="/daohang/youxi/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://forum.win007.com/forum.php" class="title">
							论坛
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://forum.win007.com/forum.php" class="catesite">
							球 探 论 坛
						</a>
						<a href="http://bbs.310win.com/" class="catesite">
							彩 客 论 坛
						</a>
						<a href="http://bbs.17mcp.com/" class="catesite">
							体 彩 论 坛
						</a>
						<a href="http://bbs.zgzcw.com/" class="catesite">
							足球论坛
						</a>
						<a href="http://bbs.zqnow.com/" class="catesite">
							球 皇 论 坛
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E8%B6%B3%E5%BD%A9&fr=search" class="catesite">
							足 彩 吧
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%AF%AE%E5%BD%A9" class="catesite">
							篮 彩 吧
						</a>
					</div>
					<!--a href="/daohang/xinwen/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://guess.bet007.com/" class="title">
							擂台
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://guess.bet007.com/" class="catesite">
							球 探 擂 台
						</a>
						<a href="http://game.310win.com/" class="catesite">
							彩 客 擂 台
						</a>
						<a href="http://bbs.boti.cn/plugin.php?id=bet:bet" class="catesite">
							博 体 擂 台
						</a>
						<a href="http://www.pk2015.net/index.asp" class="catesite">
							亚 盘 王
						</a>
						<a href="http://www.win008.com/indexlt.asp" class="catesite">
							赢球擂台
						</a>
						<a href="http://leitai.aibo173.com/" class="catesite">
							爱博擂台
						</a>
						<a href="http://www.zhcw.com/ssq/ssqleitaisai/" class="catesite">
							中彩擂台
						</a>
					</div>
					<!--a href="/daohang/xiaoshuo/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://zx.500.com/zhuanti/n_sszt/index.shtml" class="title">
							推介
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.kugou.com/" class="catesite">
							酷狗音乐
						</a>
						<a href="http://www.1ting.com/" class="catesite">
							一听音乐
						</a>
						<a href="http://www.9ku.com/" class="catesite">
							九酷音乐
						</a>
						<a href="http://www.xiami.com/" class="catesite">
							虾米音乐
						</a>
						<a href="http://www.8ttt.com/" class="catesite">
							闪灵音乐网
						</a>
						<a href="http://www.yy8844.cn/" class="catesite">
							音乐巴士
						</a>
						<a href="http://www.qiyi.com/yinyue/" class="catesite">
							爱奇艺音乐
						</a>
					</div>
					<!--a href="/daohang/yinle/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="w-fil famous famous-1">
					<a href="http://news.sina.com.cn/hotnews/" class="catesite">
						新闻
					</a>
					<a href="http://tianqi.sogou.com/" class="catesite">
						天气
					</a>
					<a href="http://war.163.com/" class="catesite">
						军事
					</a>
					<a href="http://www.hupu.com/" class="catesite">
						体育
					</a>
					<a href="http://www.hupu.com/" class="catesite">
						足球
					</a>
					<a href="http://www.hupu.com/" class="catesite">
						NBA
					</a>
					<a href="http://www.zhibo8.cc/" class="catesite">
						直播
					</a>
					<a href="http://finance.sina.com.cn/" class="catesite">
						财经
					</a>
					<a href="http://wy.hao123.com/" class="catesite">
						网游
					</a>
					<a href="https://www.jd.com/" class="catesite">
						京东
					</a>
					<a href="http://123.sogou.com/xyx/" class="catesite">
						小游戏
					</a>
					<a href="http://123.sogou.com/xyx/cate.php?cid=7" class="catesite">
						棋牌
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://tieba.baidu.com/" class="title">
							贴吧
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://tieba.baidu.com/f?kw=%D6%D0%B3%AC&fr=ala0&tpl=5" class="catesite">
							中  超  吧
						</a>
						<a href="http://tieba.baidu.com/f?kw=%D3%A2%B3%AC&fr=ala0&tpl=5" class="catesite">
							英  超  吧
						</a>
						<a href="http://tieba.baidu.com/f?kw=%CE%F7%BC%D7&fr=ala0&tpl=5" class="catesite">
							西  甲  吧
						</a>
						<a href="http://tieba.baidu.com/f?kw=%B5%C2%BC%D7&fr=ala0&tpl=5" class="catesite">
							德  甲  吧
						</a>
						<a href="http://tieba.baidu.com/f?kw=%D2%E2%BC%D7&fr=ala0&tpl=5" class="catesite">
							意  甲  吧
						</a>
						<a href="http://tieba.baidu.com/f?kw=%B7%A8%BC%D7&fr=ala0&tpl=5" class="catesite">
							法  甲  吧
						</a>
						<a href="http://tieba.baidu.com/f?kw=nba&fr=ala0&tpl=5" class="catesite">
							NBA 吧
						</a>
					</div>
					<!--a href="/daohang/junshi/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://tieba.baidu.com/" class="title">
							球队
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%9A%87%E5%AE%B6%E9%A9%AC%E5%BE%B7%E9%87%8C" class="catesite">
							皇家马德里
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%9A%87%E5%AE%B6%E9%A9%AC%E5%BE%B7%E9%87%8C" class="catesite">
							巴塞罗那
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%9B%BC%E8%81%94" class="catesite">
							曼彻斯特联
						</a>
						<a href="http://tieba.baidu.com/f?kw=%C2%FC%B3%C7&fr=ala0&tpl=5" class="catesite">
							曼彻斯特城
						</a>
						<a href="http://tieba.baidu.com/f?kw=%B0%A2%C9%AD%C4%C9&fr=ala0&tpl=5" class="catesite">
							阿 森 纳
						</a>
						<a href="http://tieba.baidu.com/f?kw=%C7%D0%B6%FB%CE%F7&fr=ala0&tpl=5" class="catesite">
							切 尔 西
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%88%A9%E7%89%A9%E6%B5%A6" class="catesite">
							利 物 浦
						</a>
					</div>
					<!--a href="/daohang/tiyu/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://tieba.baidu.com/" class="title">
							球队
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://tieba.baidu.com/f?kw=%C2%ED%B5%C2%C0%EF%BE%BA%BC%BC&fr=ala0&tpl=5" class="catesite">
							马德里竞技
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%8B%9C%E4%BB%81%E6%85%95%E5%B0%BC%E9%BB%91&fr=search" class="catesite">
							拜仁慕尼黑
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%A4%9A%E7%89%B9%E8%92%99%E5%BE%B7" class="catesite">
							多特蒙德
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B0%A4%E6%96%87%E5%9B%BE%E6%96%AF&fr=search" class="catesite">
							尤文图斯
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%9B%BD%E9%99%85%E7%B1%B3%E5%85%B0&fr=search" class="catesite">
							国际米兰
						</a>
						<a href="http://tieba.baidu.com/f?kw=ac%C3%D7%C0%BC&fr=ala0&tpl=5" class="catesite">
							AC 米兰
						</a>
						<a href="http://tieba.baidu.com/f?kw=%C2%DE%C2%ED&fr=ala0&tpl=5" class="catesite">
							罗 马
						</a>
					</div>
					<!--a href="/daohang/shequ/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://tieba.baidu.com/" class="title">
							球队
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E5%B0%94%E6%9B%BC" class="catesite">
							巴黎圣日尔曼
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B9%BF%E5%B7%9Efc" class="catesite">
							广州恒大
						</a>
						<a href="http://tieba.baidu.com/f?kw=%C9%CF%BA%A3%C9%CF%B8%DB&fr=ala0&tpl=5" class="catesite">
							上海上港
						</a>
						<a href="http://tieba.baidu.com/f?kw=%E5%B1%B1%E4%B8%9C%E9%B2%81%E8%83%BD" class="catesite">
							山东鲁能
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89&fr=search" class="catesite">
							北京国安
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B1&fr=search" class="catesite">
							上海申花
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%B1%9F%E8%8B%8F%E8%88%9C%E5%A4%A9&fr=search" class="catesite">
							江苏苏宁
						</a>
					</div>
					<!--a href="/daohang/jiaoyou/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://tieba.baidu.com/" class="title">
							球队
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E9%A9%AC%E5%88%BA&fr=search" class="catesite">
							圣安东尼奥马刺
						</a>
						<a href="http://tieba.baidu.com/f?kw=%D3%C2%CA%BF&fr=ala0&tpl=5" class="catesite">
							金 州 勇 士
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%B9%96%E4%BA%BA&fr=search" class="catesite">
							洛杉矶湖人
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%81%AB%E7%AE%AD&fr=search" class="catesite">
							休斯顿火箭
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B0%8F%E7%89%9B&fr=search" class="catesite">
							达拉斯小牛
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E9%9B%B7%E9%9C%86&fr=search" class="catesite">
							雷  霆
						</a>
						<!--a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%BF%AB%E8%88%B9&fr=search" class="catesite">
							洛杉矶快船
						</a-->
					</div>
					<!--a href="/daohang/yeyou/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://tieba.baidu.com/" class="title">
							球队
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E9%AA%91%E5%A3%AB&fr=search" class="catesite">
							克利夫兰骑士
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%83%AD%E7%81%AB&fr=search" class="catesite">
							迈阿密热火
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E7%8C%9B%E9%BE%99&fr=search" class="catesite">
							多伦多猛龙
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%87%AF%E5%B0%94%E7%89%B9%E4%BA%BA&fr=search" class="catesite">
							波士顿凯尔特人
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B0%BC%E5%85%8B%E6%96%AF&fr=search" class="catesite">
							纽约尼克斯
						</a>
						<a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%AD%A5%E8%A1%8C%E8%80%85&fr=search" class="catesite">
							步 行 者
						</a>
						<!--a href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%A5%87%E6%89%8D&fr=search" class="catesite">
							华盛顿奇才
						</a-->
					</div>
					<!--a href="/daohang/wangyou/" class="more" data-record="false">
						更多&raquo;
					</a-->
				</div>
				<div class="w-fil famous famous-2">
					<a href="http://bj.meituan.com/?utm_campaign=baidu&utm_medium=organic&utm_source=baidu&utm_content=homepage&utm_term=" class="catesite">
						团购
					</a>
					<a href="http://www.hao123.com/mail" class="catesite">
						邮箱
					</a>
					<a href="http://www.hao123.com/zhaopin" class="catesite">
						招聘
					</a>
					<a href="/daohang/shequ/" class="catesite">
						社区
					</a>
					<a href="http://www.hao123.com/shequ" class="catesite">
						交友
					</a>
					<a href="http://lady.hao123.com/?tn=kuzhan1" class="catesite">
						女性
					</a>
					<a href="http://hao.qq.com/shwz/shishang.html" class="catesite">
						时尚
					</a>
					<a href="/daohang/yule/" class="catesite">
						休闲
					</a>
					<a href="http://life.hao123.com/health" class="catesite">
						健康
					</a>
					<a href="http://hao.qq.com/shwz/liangxing.html" class="catesite">
						两性
					</a>
					<a href="/daohang/ertong/" class="catesite">
						儿童
					</a>
					<a href="/daohang/muying/" class="catesite">
						母婴
					</a>
					<a href="/daohang/caipu/" class="catesite">
						美食
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="/daohang/qiche/" class="title">
							汽车
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.autohome.com.cn/" class="catesite">
							汽车之家
						</a>
						<a href="http://www.bitauto.com/" class="catesite">
							易车网
						</a>
						<a href="http://www.autofan.com.cn/" class="catesite">
							汽车之友
						</a>
						<a href="http://www.sciauto.com/" class="catesite">
							楚君汽车网
						</a>
						<a href="http://www.syhuiding.net/" class="catesite">
							汇鼎租车
						</a>
						<a href="http://bbs.fblife.com/" class="catesite">
							越野ｅ族
						</a>
						<a href="http://auto.sina.com.cn/" class="catesite">
							新浪汽车
						</a>
					</div>
					<a href="/daohang/qiche/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="/daohang/tuangou/" class="title">
							团购
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.nuomi.com/" class="catesite">
							糯米网
						</a>
						<a href="http://www.meituan.com/" class="catesite">
							美团
						</a>
						<a href="http://www.lashou.com/" class="catesite">
							拉手网
						</a>
						<a href="http://t.dianping.com/" class="catesite">
							大众点评团
						</a>
						<a href="http://www.jumei.com/" class="catesite">
							聚美优品
						</a>
						<a href="http://www.tuan800.com/" class="catesite">
							团800
						</a>
						<a href="http://ju.taobao.com/" class="catesite">
							聚划算
						</a>
					</div>
					<a href="/daohang/tuangou/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="/daohang/nvxing/" class="title">
							女性
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.rayli.com.cn/" class="catesite">
							瑞丽网
						</a>
						<a href="http://www.pclady.com.cn/" class="catesite">
							太平洋女性
						</a>
						<a href="http://www.taosesc.com/" class="catesite">
							淘色商城
						</a>
						<a href="http://www.meilishuo.com/" class="catesite">
							美丽说
						</a>
						<a href="http://www.lclsny.com/" class="catesite">
							减肥之路
						</a>
						<a href="http://www.yoka.com/" class="catesite">
							YOKa时尚网
						</a>
						<a href="http://eladies.sina.com.cn/" class="catesite">
							新浪女性
						</a>
					</div>
					<a href="/daohang/nvxing/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="/daohang/caijing/" class="title">
							财经
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.eastmoney.com" class="catesite">
							东方财富网
						</a>
						<a href="http://finance.sina.com.cn" class="catesite">
							新浪财经
						</a>
						<a href="http://www.hexun.com" class="catesite">
							和讯财经
						</a>
						<a href="http://money.163.com" class="catesite">
							网易财经
						</a>
						<a href="http://www.cs.com.cn" class="catesite">
							中国证券报
						</a>
						<a href="http://www.jrj.com.cn/" class="catesite">
							金融界
						</a>
						<a href="http://www.p5w.net/" class="catesite">
							全景网
						</a>
					</div>
					<a href="/daohang/caijing/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="/daohang/gouwu/" class="title">
							购物
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://ai.taobao.com/" class="catesite">
							淘宝特卖
						</a>
						<a href="http://www.jd.com" class="catesite">
							京东商城
						</a>
						<a href="http://www.dangdang.com" class="catesite">
							当当网
						</a>
						<a href="http://www.yhd.com/" class="catesite">
							1号店超市
						</a>
						<a href="http://www.amazon.cn/" class="catesite">
							亚马逊
						</a>
						<a href="http://www.tmall.com/" class="catesite">
							天猫商家
						</a>
						<a href="http://www.suning.com/" class="catesite">
							苏宁易购
						</a>
					</div>
					<a href="/daohang/gouwu/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://www.ctrip.com/" class="title">
							旅游
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.ctrip.com/" class="catesite">
							携程旅行网
						</a>
						<a href="http://www.mangocity.com/" class="catesite">
							芒果网
						</a>
						<a href="http://www.elong.com/" class="catesite">
							艺龙旅行网
						</a>
						<a href="http://www.mafengwo.cn/" class="catesite">
							蚂蜂窝
						</a>
						<a href="http://www.cnta.com/" class="catesite">
							国家旅游局
						</a>
						<a href="http://www.qunar.com/" class="catesite">
							去哪儿
						</a>
						<a href="http://www.tuniu.com/" class="catesite">
							途牛旅游网
						</a>
					</div>
					<a href="/daohang/lvyou/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="w-fil famous famous-3">
					<a href="http://www.ctrip.com/" class="catesite">
						旅游
					</a>
					<a href="/daohang/yinhang/" class="catesite">
						银行
					</a>
					<a href="/daohang/shenghuo/" class="catesite">
						生活
					</a>
					<a href="/daohang/qiche/" class="catesite">
						汽车
					</a>
					<a href="/daohang/edu/" class="catesite">
						大学
					</a>
					<a href="/daohang/diannao/" class="catesite">
						电脑
					</a>
					<a href="/daohang/zhuomian/" class="catesite">
						桌面
					</a>
					<a href="/daohang/youxiang/" class="catesite">
						邮箱
					</a>
					<a href="/daohang/jshadu/" class="catesite">
						杀毒
					</a>
					<a href="/daohang/shequ/" class="catesite">
						社区
					</a>
					<a href="/daohang/ruanjian/" class="catesite">
						软件
					</a>
					<a href="/daohang/shouji/" class="catesite">
						手机
					</a>
					<a href="/daohang/difang/" class="catesite">
						地方
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="www.hao123.com/mail" class="title">
							邮箱
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://mail.163.com/" class="catesite">
							163邮箱
						</a>
						<a href="http://mail.10086.cn/" class="catesite">
							139手机邮
						</a>
						<a href="http://mail.sohu.com/" class="catesite">
							搜狐邮箱
						</a>
						<a href="http://mail.qq.com/" class="catesite">
							QQ邮箱
						</a>
						<a href="http://mail.189.cn/" class="catesite">
							189邮箱
						</a>
						<a href="http://www.126.com/" class="catesite">
							126邮箱
						</a>
						<a href="https://mail.google.com" class="catesite">
							Gmail
						</a>
					</div>
					<a href="/daohang/youxiang/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://www.123.sogou.com/shwz/chaxun.html" class="title">
							生活
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.58.com/" class="catesite">
							58同城
						</a>
						<a href="http://www.ganji.com/" class="catesite">
							赶集网
						</a>
						<a href="http://www.baixing.com/" class="catesite">
							百姓网
						</a>
						<a href="http://www.dianping.com/" class="catesite">
							大众点评
						</a>
						<a href="http://www.meishichina.com/" class="catesite">
							美食天下
						</a>
						<a href="http://www.39.net/" class="catesite">
							39健康
						</a>
						<a href="http://www.liebiao.com/" class="catesite">
							列表网
						</a>
					</div>
					<a href="/daohang/shenghuo" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://hao.qq.com/shwz/yinhang.html" class="title">
							银行
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://icbc.com.cn/" class="catesite">
							工商银行
						</a>
						<a href="http://www.ccb.com/" class="catesite">
							建设银行
						</a>
						<a href="http://www.abchina.com/" class="catesite">
							农业银行
						</a>
						<a href="http://www.bankcomm.com/" class="catesite">
							交通银行
						</a>
						<a href="http://www.cmbchina.com/" class="catesite">
							招商银行
						</a>
						<a href="http://www.psbc.com/" class="catesite">
							邮政储蓄
						</a>
						<a href="http://www.alipay.com/" class="catesite">
							支付宝
						</a>
					</div>
					<a href="/daohang/yinhang/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://www.51job.com/" class="title">
							招聘
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.51job.com/" class="catesite">
							前程无忧
						</a>
						<a href="http://www.zhaopin.com/" class="catesite">
							智联招聘
						</a>
						<a href="http://www.58.com/?path=job.shtml" class="catesite">
							58同城招聘
						</a>
						<a href="http://www.jobcn.com/" class="catesite">
							卓博人才网
						</a>
						<a href="http://www.cjol.com/" class="catesite">
							中国人才热线…
						</a>
						<a href="http://www.chinahr.com/" class="catesite">
							中华英才网
						</a>
						<a href="http://www.liepin.com/" class="catesite">
							猎聘网
						</a>
					</div>
					<a href="/daohang/zhaopin/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://hao.qq.com/shwz/diannao.html" class="title">
							电脑
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.pconline.com.cn" class="catesite">
							太平洋电脑网…
						</a>
						<a href="http://www.zol.com.cn" class="catesite">
							中关村在线
						</a>
						<a href="http://www.pchome.net" class="catesite">
							电脑之家
						</a>
						<a href="http://tech.163.com" class="catesite">
							网易科技
						</a>
						<a href="http://it.sohu.com" class="catesite">
							搜狐IT
						</a>
						<a href="http://tech.qq.com" class="catesite">
							腾讯科技
						</a>
						<a href="http://tech.sina.com.cn" class="catesite">
							新浪科技
						</a>
					</div>
					<a href="/daohang/diannao/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://www.91hehe.com/" class="title">
							笑话
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.91hehe.com/" class="catesite">
							九妖呵呵
						</a>
						<a href="http://www.qiushibaike.com/" class="catesite">
							糗事百科
						</a>
						<a href="http://www.haha168.com/" class="catesite">
							八目妖
						</a>
						<a href="http://www.xelove.com/" class="catesite">
							邪恶漫画
						</a>
						<a href="http://www.mahua.com/" class="catesite">
							快乐麻花
						</a>
						<a href="http://www.5ady.com/top/xijudianyingpaixingbang/" class="catesite">
							喜剧榜
						</a>
						<a href="http://joke.qq.com/" class="catesite">
							腾讯笑话
						</a>
					</div>
					<a href="/daohang/gaoxiao/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://hao.qq.com/qita/ruanjian.html" class="title">
							软件
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.skycn.com" class="catesite">
							天空软件站
						</a>
						<a href="http://www.onlinedown.net" class="catesite">
							华军软件园
						</a>
						<a href="http://baoku.360.cn/" class="catesite">
							360宝库
						</a>
						<a href="http://dl.pconline.com.cn" class="catesite">
							太平洋下载
						</a>
						<a href="http://www.crsky.com" class="catesite">
							非凡软件
						</a>
						<a href="http://www.qudong.com" class="catesite">
							驱动中国
						</a>
						<a href="http://www.xdowns.com/" class="catesite">
							绿软联盟
						</a>
					</div>
					<a href="/daohang/ruanjian/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://www.douban.com/" class="title">
							清新
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.douban.com/" class="catesite">
							豆瓣
						</a>
						<a href="http://www.u148.net/" class="catesite">
							有意思吧
						</a>
						<a href="http://www.520969.com/" class="catesite">
							女神图
						</a>
						<a href="http://www.271dy.com/" class="catesite">
							爱亲昵
						</a>
						<a href="http://www.6h.com/" class="catesite">
							乐火排行榜
						</a>
						<a href="http://www.52souluo.com/" class="catesite">
							我爱搜罗
						</a>
						<a href="http://www.diandian.com/" class="catesite">
							点点网
						</a>
					</div>
					<a href="/daohang/kuzhan/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
				<div class="box">
					<div class="catename">
                                <span class="fl line line-1">
                                </span>
						<a href="http://toutiao.sogou.com/jiankang/?fr=qqkz" class="title">
							健康
						</a>
                                <span class="fl line line-2">
                                </span>
					</div>
					<div class="catelist">
						<a href="http://www.39.net/" class="catesite">
							39健康网
						</a>
						<a href="http://www.91.cn/" class="catesite">
							就医网
						</a>
						<a href="http://www.dxy.com/" class="catesite">
							丁香医生
						</a>
						<a href="http://www.xywy.com/" class="catesite">
							寻医问药网
						</a>
						<a href="http://www.familydoctor.com.cn/" class="catesite">
							医生在线
						</a>
						<a href="http://www.haodf.com/" class="catesite">
							好大夫在线
						</a>
						<a href="http://www.120ask.com/" class="catesite">
							有问必答
						</a>
					</div>
					<a href="/daohang/jiankang/" class="more" data-record="false">
						更多&raquo;
					</a>
				</div>
			</div>
			<!--栏目列表结束-->


		</div>
		<!--右侧模板-->
		<!--实用工具-->
		<div class="rhbd">
			<!--实用工具结束-->

			<div class="news">
				<!--NBA-->

				<div class="rhdb" style=" text-align:center;">
					<h3>
						***************************
					</h3>
					<h3>
						NBA
					</h3>
					<h3>
						***************************
					</h3>
				</div>
				<div class="rhdb">
					<div class="hd">
						<?php if(is_array($matchlist)): foreach($matchlist as $key=>$match): ?><div class="match">
								<span class="time"><?php echo ($match['time']); ?></span>
								<div class="team">
									<img src="<?php echo ($match['visit_team_img']); ?>"/><?php echo mb_strlen($match['visit_team']) > 3 ? mb_substr($match['visit_team'],0,2).".." : $match['visit_team'];?>
								</div>
								<span class="score"><?php echo ($match['visit_score']); ?>-<?php echo ($match['home_score']); ?></span>
								<div class="team teamright">
									<img src="<?php echo ($match['home_team_img']); ?>"/><?php echo mb_strlen($match['home_team']) > 3 ? mb_substr($match['home_team'],0,2).".." : $match['home_team'];?>
								</div>
							</div><?php endforeach; endif; ?>
					</div>

				</div>


				<!--NBA-->
			</div>


			<div class="caipiao">
				<div class="rhdb">
					<div class="container">
						<!-- 开奖公告 -->
						<iframe src="http://888.sports.qq.com/v1.0/external/cpqq_award.html" frameborder="0" width="240" height="400" scrolling="no"></iframe>
						<!-- 开奖公告 -->
					</div>
				</div>
			</div>
		</div>

		<div class="advert">
			<iframe src="http://www.zhibo8.cc/proxy.html?id=302052" width="750" height="90"
			        scrolling="no" frameborder="0" style="display:block;margin:0">
			</iframe>
		</div>

		<!-----------------------next one--------------------------------
			 <div class="rhdb">
			   <ul class="IndexList ">
				   <div class="IndexTit2">
					   <h3>
						   友情链接
					   </h3>
				   </div>
				   <li class="w84">
				   </li>
			   </ul>
		   </div>
		   <!--wrapper-->
		<!--底部工具区-->
		<div class="mainft bottom_tools tc">
			<div class="ontencent">
				<a href="" target="_blank">
					申请收录·广告投放
				</a>
                <span>
                    |
                </span>
								<span class="fonts_ch">
								    本站仅供体育爱好者使用！不得违法使用！
								</span>
                <span>
                    |
                </span>
				电脑管家安全认证
                <span class="icon aqicon">
                </span>
			</div>
            <span class="fonts_en">
                Copyright &copy; 2016 ZHENGZH . All Rights Reserved.
            </span>
            <span class="fonts_ch">
                版权所有　网站统计.
            </span>
		</div>
		<script src="/Public/js/main.minV5.js">
		</script>
</body>
		<script>
			var s = <?php echo ($matchlists); ?>;
			console.log(<?php echo ($matchlists); ?>);
		</script>
</html>
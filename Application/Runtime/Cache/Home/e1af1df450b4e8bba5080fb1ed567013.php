<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>
        菠菜网---www.ubetwin.cn
    </title>
    <meta name="keywords" content="菠菜网" />
    <meta name="description" content="本站是提供给各体育爱好者及时体育信息的网站" />
    <meta name="robots" content="all" />
    <meta name="author" content="http://www.ubetwin.cn" />
    <link href="/css/index.css" rel="stylesheet" type="text/css"/>
    <link href="/css/test.css" rel="stylesheet" type="text/css"/>
    <base target="_blank" />
    <script>
        var webdir = "/";
    </script>
    <script type="text/javascript" src="/js/jquery.min.js">
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
                <img src="/pic/topad.png" width="180" height="68" />
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
        <script type="text/javascript" src="/js/so01.js">
        </script>

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
                                    视频
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
                                            <a class="so360" title="好搜" data-site="so360" data-cate="webpage">
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
                                            baidu: ["http://www.baidu.com/s", "wd", "u767eu5ea6", "http://www.baidu.com/", "ie:GB2312"],
                                            somulti: ["http://www.haosou.com/s", "q", "u7efcu5408u641cu7d22", "http://www.haosou.com/?src=zh", "ie:utf-8;src:" + SRC_HAO_SEARCH + ";shb:1", "好搜一下"],
                                            youdao: ["http://www.youdao.com/search", "q", "u6709u9053", "http://www.youdao.com/?keyfrom=360dh_01", "keyfrom:360dh_01;ue:GB2312;vendor:360dh_01"],
                                            google: ["http://www.google.com.hk/search", "q", "u8c37u6b4c", "http://www.google.com.hk/webhp?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8;newwindow:1"]
                                        },
                                        "music": {
                                            baidu: ["http://mp3.baidu.com/m", "word", "u767eu5ea6", "http://mp3.baidu.com/", "f:ms;ct:134217728;ie:utf-8"],
                                            so360: ["http://s.music.haosou.com/s", "q", "好搜音乐", "http://music.haosou.com/", "ie:utf-8;src:hao_360so", "好搜音乐"],
                                            sogou: ["http://mp3.sogou.com/music", "query", "u641cu72d7", "http://mp3.sogou.com/", "ie:GB2312"]
                                        },
                                        "video": {
                                            baidu: ["http://video.baidu.com/v", "word", "u767eu5ea6", "http://video.baidu.com/", "ie:utf-8"],
                                            google: ["http://www.google.com.hk/search", "q", "u8c37u6b4c", "http://www.google.com.hk/search", "tbo:p;tbm:vid;source:vgc;tbs:vid;client:aff-360daohang;hl:zh-CN;ie:utf-8"]
                                        },
                                        "image": {
                                            baidu: ["http://image.baidu.com/i", "word", "u767eu5ea6", "http://image.baidu.com/", "ie:utf-8;tn:baiduimage"],
                                            so360: ["http://image.haosou.com/i", "q", "好搜图片", "http://image.haosou.com/?src=hao_360so", "ie:utf-8;src:hao_360so", "好搜图片"],
                                            youdao: ["http://image.youdao.com/search?keyfrom=360dh_01", "q", "u6709u9053", "http://image.youdao.com/search", "keyfrom:360dh_01;ue:GB2312"],
                                            google: ["http://images.google.com.hk/images", "q", "u8c37u6b4c", "http://images.google.com.hk/imghp?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8"]
                                        },
                                        "weibo": {
                                            weibo: ["http://s.weibo.com/weibo/", "", "微博", "http://s.weibo.com/", "ie:utf-8;refer:360"]
                                        },
                                        "news": {
                                            baidu: ["http://news.baidu.com/ns", "word", "u767eu5ea6", "http://news.baidu.com/", "ie:GB2312"],
                                            sonews: ["http://news.haosou.com/ns", "q", "360新闻搜索", "http://news.haosou.com/", "ie:utf-8;tn:news;src:" + SRC_HAO_SEARCH, "360新闻"],
                                            youdao: ["http://news.youdao.com/search?keyfrom=360dh_01", "q", "u6709u9053", "http://news.youdao.com/search", "ue:GB2312;keyfrom:360dh_01"],
                                            google: ["http://news.google.com.hk/news/search", "q", "u8c37u6b4c", "http://news.google.com.hk/?client=aff-360daohang", "client:aff-360daohang;hl:zh-CN;ie:utf-8"]
                                        },
                                        "map": {
                                            baidu: ["http://map.baidu.com/m", "word", "u767eu5ea6", "http://map.baidu.com/", "ie:utf-8"],
                                            so360: ["http://map.haosou.com/", "", "好搜地图", "http://map.haosou.com/?src=hao_tablogo", "ie:utf-8;src:hao_360so;t:map", "好搜地图"],
                                            gaode: ["http://www.amap.com", "k", "高得", "http://www.amap.com", "t:map"]
                                        },
                                        "wenda": {
                                            baidu: ["http://zhidao.baidu.com/q", "word", "u767eu5ea6", "http://zhidao.baidu.com", "ct:17;pt:360se_ik;tn:ikaslist;ie:GB2312;"]
                                        },
                                        "shopping": {
                                            taobao: ["http://s8.taobao.com/search", "q", "u6dd8u5b9d", "http://www.taobao.com/?pid=mm_15144495_2216478_8873469", "unid:;pid:mm_15144495_2216478_8873469;search_type:auction;commend:all;at_topsearch:1;user_action:initiative;spercent:0;f:D9_5_1;ie:utf-8"],
                                            buy360: ['http://open.union.360.cn/go', 'k', "京东", "http://open.union.360.cn/go?bid=2000801&qihoo_id=36100&fname=hao_search_logo", "bid:2000801;qihoo_id:36100;flag:hao_cps;fname:hao_search"],
                                            amazon: ["http://open.union.360.cn/go", "k", "u4E9Au9A6Cu900A", "http://open.union.360.cn/go?bid=2000292&qihoo_id=36100&fname=hao_search_logo", "bid:2000292;qihoo_id:36100;flag:hao_cps;fname:hao_search"],
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
        <script type="text/javascript" src="/js/so02.js">
        </script>
        <script type="text/javascript" src="/js/so03.js">
        </script>
        <script type="text/javascript" src="/js/so04.js">
        </script>
        <script type="text/javascript" src="/js/so05.js">
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
            <a href="http://www.6k.com/list/dianshiju/" pbtitle="新闻头条" class="iblock h-fil">
					<span class="nav nav-tv icon">
					</span>
					<span class="iblock h-fil tit">
					新闻头条
					</span>
            </a>
        </li>
        <li class="line fl">
        </li>
        <li class="block h-fil fl item">
            <a href="http://www.dytt8.net/" pbtitle="新闻头条" class="iblock h-fil">
					<span class="nav nav-movie icon">
					</span>
					<span class="iblock h-fil tit">
					新闻头条
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
            <a href="http://mai.sogou.com/shangjia.html?fr=dhqqtjl" pbtitle="网上购物" class="iblock h-fil">
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
                        <?php if(is_array($sites["first_nav"])): foreach($sites["first_nav"] as $key=>$site): ?><li>
                                <a href="<?php echo ($site["url"]); ?>">
                                    <?php echo ($site["name"]); ?>
                                </a>
                            </li><?php endforeach; endif; ?>
                    </ul>
                    <div class="famousline">
                    </div>
                    <ul>
                        <?php if(is_array($sites["second_nav"])): foreach($sites["second_nav"] as $key=>$site): ?><li>
                                <a href="<?php echo ($site["url"]); ?>">
                                    <?php echo ($site["name"]); ?>
                                </a>
                            </li><?php endforeach; endif; ?>
                    </ul>
                </div>
            </div>
            <!--国内名站结束-->

            <!--栏目列表-->
            <?php if(is_array($sites)): foreach($sites as $key=>$site): ?><div class="cateSite fz0">
                    <div class="w-fil famous famous-0">
                        <?php if(is_array($site["title"])): foreach($site["title"] as $key=>$site_title): ?><a href="<?php echo ($site_title["url"]); ?>" class="catesite">
                                <?php echo ($site_title["name"]); ?>
                            </a><?php endforeach; endif; ?>
                    </div>
                    <div class="box">
                        <?php if(!empty($$site["content_first"])): ?><div class="catename">
                                <span class="fl line line-1">
                                </span>
                                <a href="<?php echo ($site["content_first[0]"]["url"]); ?>" class="title">
                                    <?php echo ($site["content_first[0]"]["name"]); ?>
                                </a>
                                <span class="fl line line-2">
                                </span>
                            </div><?php endif; ?>

                        <div class="catelist">
                            <?php if(is_array($site["content"])): foreach($site["content"] as $key=>$site_content): ?><a href="<?php echo ($site_content["title"]); ?>" class="catesite">
                                    <?php echo ($site_content["name"]); ?>
                                </a><?php endforeach; endif; ?>
                        </div>
                    </div>
                </div><?php endforeach; endif; ?>
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
                        <!-- 开奖公告结束 -->
                    </div>
                </div>
            </div>
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
        <!--footer-->
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
					Copyright © 2016 ZHENGZH . All Rights Reserved.
				</span>
				<span class="fonts_ch">
					版权所有 网站统计.
				</span>
        </div>
        <script src="/js/main.minV5.js">
        </script>
</body>
<script>
    var s = <?php echo ($matchlists); ?>;
    console.log(<?php echo ($matchlists); ?>);
</script>
</html>
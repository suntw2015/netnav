<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
    <head>
        <title>菠菜网---www.ubetwin.cn</title>
        <meta name="keywords" content="菠菜网">
        <meta name="description" content="本站是提供给各体育爱好者及时体育信息的网站">
        <meta name="robots" content="all" />
        <meta name="author" content="http://www.ubetwin.cn" />
        <link href="/css/index.css" rel="stylesheet" type="text/css"/>
        <link href="/css/main.css" rel="stylesheet" type="text/css"/>
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    </head>

    <body>
        <div id="mainbg">
        </div>

        <div class="main">
            <div class="container">
                <div class="head">
                    <div class="logo">
                        <a title="返回主页" href="/" target="_blank"></a>
                    </div>
                    <div class="weather">
                        <!-- 天气 -->
                        <iframe allowtransparency="true" frameborder="0" width="565" height="98"
                                scrolling="no" src="http://tianqi.2345.com/plugin/widget/index.htm?s=2&z=1&t=1&v=0&d=3&bd=0&k=&f=ffffff&q=1&e=1&a=1&c=54511&w=565&h=98&align=left">
                        </iframe>
                    </div>

                    <!-- 预留广告位 -->
                    <div class="adv">
                        <img src="/pic/topad.png" width="180" height="68" />
                    </div>
                </div>

                <!-- 搜索 -->
                <div class="search-box">
                    <div class="search-head">
                        <ul class="nav nav-pills">
                            <li role="presentation" class="active">
                                <a href="javascript:void(0);">
                                    网页
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://sh.qihoo.com/">
                                    新闻
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://video.haosou.com/">
                                    视频
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://image.haosou.com/?&src=hao_360so_tu" >
                                    图片
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://music.haosou.com/" >
                                    音乐
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://map.haosou.com/?ie=utf-8&src=hao_360so_d&t=map&k=" >
                                    地图
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://wenda.haosou.com/" >
                                    问答
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://gouwu.360.cn/" >
                                    购物
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://go.360.cn/flight?src=homesearch" >
                                    机票
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="http://car.bitauto.com/?WT.mc_id=360ss" >
                                    汽车
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-content">
                        <div class="search-select">
                            <p>select</p>
                        </div>
                        <div class="search-input">
                            <input type="text" class="form-control search" />
                        </div>
                        <div class="search-button">
                            <button type="button" class="btn btn-default">Google</button>
                        </div>
                    </div>
                </div>

                <!-- 搜索下方导航 -->
                <div class="main-navbar">
                    <ul class="">
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-news"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="新闻头条" class="">新闻头条</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-tv"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="电视剧" class="">电视剧</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-movie"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="电影天堂" class="">电影天堂</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-lottery"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="彩票大全" class="">彩票大全</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-shop"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="网上购物" class="">网上购物</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-novel"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="百度外卖" class="">百度外卖</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-game"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="游戏" class="">游戏</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-group"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="今日团购" class="">今日团购</a>
                        </li>
                        <li class="item">
                            <span class="main-navbar-icon main-navbar-icon-travel"></span>
                            <a href="http://news.sina.com.cn/hotnews/" pbtitle="特价旅游" class="">特价旅游</a>
                        </li>
                    </ul>
                </div>

                <!-- 下方主要导航 -->
                <div class="main-body">
                    <div class="main-left col-xs-9 no-padding-left">
                        <div class="title-nav">
                            <div class="title-nav-first">
                                <?php if(is_array($headsites["first_nav"])): foreach($headsites["first_nav"] as $key=>$site): ?><div class="col-xs-2 site-block">
                                        <a href="<?php echo ($site["url"]); ?>"><?php echo ($site["name"]); ?></a>
                                    </div><?php endforeach; endif; ?>
                            </div>
                            <div class="line"></div>
                            <div class="title-nav-second">
                                <?php if(is_array($headsites["second_nav"])): foreach($headsites["second_nav"] as $key=>$site): ?><div class="col-xs-2 site-block">
                                        <a href="<?php echo ($site["url"]); ?>"><?php echo ($site["name"]); ?></a>
                                    </div><?php endforeach; endif; ?>
                            </div>
                        </div>
                        <div class="detail-nav">
                            <?php if(is_array($sites)): foreach($sites as $key=>$site): ?><div class="detail-box">
                                    <div class="detail-box-title">
                                        <?php if(is_array($site["title"])): foreach($site["title"] as $key=>$title): ?><div class="detail-box-title-abox">
                                                <a href="<?php echo ($title["url"]); ?>"><?php echo ($title["name"]); ?></a>
                                            </div><?php endforeach; endif; ?>
                                    </div>
                                    <div class="detail-box-body">
                                        <?php if(is_array($site["content"])): foreach($site["content"] as $key=>$content): ?><div class="detail-box-line">
                                                <div class="detail-box-body-first">
                                                    <a href="<?php echo ($content["first"]["url"]); ?>">|<?php echo ($content["first"]["name"]); ?>|</a>
                                                </div>
                                                <?php if(is_array($content["list"])): foreach($content["list"] as $key=>$detail): ?><div class="detail-box-body-item">
                                                        <a href="<?php echo ($detail["url"]); ?>"><?php echo ($detail["name"]); ?></a>
                                                    </div><?php endforeach; endif; ?>
                                            </div><?php endforeach; endif; ?>
                                    </div>
                                </div><?php endforeach; endif; ?>
                        </div>
                    </div>
                    <div class="main-right col-xs-3">
                        <div class="nba">
                            <?php if(is_array($matchlist)): foreach($matchlist as $key=>$match): ?><div class="match">
                                    <div class="row">
                                        <div class="col-xs-2">
                                            <?php echo ($match["time"]); ?>
                                        </div>
                                        <div class="col-xs-10">
                                            <?php echo ($match["home_team"]["profile"]["name"]); ?> <?php echo ($match["score"]["homeScore"]); ?>
                                            :
                                            <?php echo ($match["score"]["awayScore"]); ?> <?php echo ($match["visit_team"]["profile"]["name"]); ?>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <?php echo ($match["home_team"]["profile"]["name"]); ?>
                                        </div>
                                        <div class="col-xs-4">
                                            <?php echo ($match["score"]["statusDesc"]); ?>
                                        </div>
                                        <div class="col-xs-4">
                                            <?php echo ($match["visit_team"]["profile"]["name"]); ?>
                                        </div>
                                    </div>
                                    <!--<div class="team">-->
                                        <!--<?php echo ($match["home_team"]["profile"]["name"]); ?>-->
                                        <!--&lt;!&ndash;<div class="teamimg">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<img src="<?php echo ($match["visit_team_img"]); ?>"/>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--</div>-->
                                    <!--<?php echo ($match["time"]); ?>-->
                                    <!--<div class="team">-->
                                        <!--<?php echo ($match["visit_team"]["profile"]["name"]); ?>-->
                                        <!--<div class="teamimg">-->
                                            <!--&lt;!&ndash;<img src="<?php echo ($match["home_team_img"]); ?>"/>&ndash;&gt;-->
                                        <!--</div>-->
                                    <!--</div>-->
                                </div><?php endforeach; endif; ?>
                        </div>

                        <div class="lottery">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 右侧 -->

        <!-- footer -->
        <footer>
            <div class="statement">
                <p>本站仅供体育爱好者使用！不得违法使用！</p>
            </div>
            <div class="copyright">Copyright &copy; 2016 ZHENGZH . All Rights Reserved.</div>
        </footer>
        <script type="text/javascript" src="/js/jquery.min.js"></script>
    </body>
</html>
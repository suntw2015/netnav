<?php
return array(
	//'配置项'=>'配置值'
	'ZHIBOBA' => array(
		'TIME'    => 'http://m.zhibo8.cc/clock/',
		'MATCH'  => 'http://m.zhibo8.cc/json/zhibo/saishi.json?aabbccddeeff={time}',
		'MATCH2' => 'http://m.zhibo8.cc/json/zhibo/saishi2.json?aabbccddeeff={time}',
		'SCOREINDEX'  => 'http://bifen.qiumibao.com/json/list_code.htm',
		'SCOREDETAIL' => 'http://bifen.qiumibao.com/json/list.htm',
	),

	'NBA'	=> array(
		"MATCH" => "http://china.nba.com/static/data/scores/miniscoreboard.json"
	),

	'NBA_DAY_MATCH' => array(
		-1  => "previous",
		0   => "today",
		1   => "next",
		2	=> "next2",
		3	=> "next3",
		4	=> "next4",
		5	=> "next5",
		6	=> "next6",
		7	=> "next7",
	),

	'TMPL_PARSE_STRING'=>array(
		'__PUBLIC__'=>'/public',
		'__JS__'=>'/public/js',
		'__CSS__'=>'/public/css',
		'__PIC__'=>'/public/pic',
	),

	'NAV_TYPE_HEAD' => array(
		'first_nav',
		'second_nav',
	),

	'NAV_TYPE' => array(
		'first_navbar' 		=> array(
			'title'			=> 'first_navbar',
			'content_first' => 'first_navbar_content_first',
			'content'		=> 'first_navbar_content',
		),
		'second_navbar'		=> array(
			'title'			=> 'second_navbar',
			'content_first' => 'second_navbar_content_first',
			'content'		=> 'second_navbar_content',
		),
		'third_navbar'		=> array(
			'title'			=> 'third_navbar',
			'content_first' => 'third_navbar_content_first',
			'content'		=> 'third_navbar_content',
		),
		'forth_navbar'		=> array(
			'title'			=> 'forth_navbar',
			'content_first' => 'forth_navbar_content_first',
			'content'		=> 'forth_navbar_content',
		),
	),

	'LOAD_EXT_CONFIG'       => 'db',

);
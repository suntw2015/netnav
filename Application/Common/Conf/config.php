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

	'TMPL_PARSE_STRING'=>array(
		'__PUBLIC__'=>'/',
		'__JS__'=>'/js',
		'__CSS__'=>'/css',
		'__PIC__'=>'/pic',
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
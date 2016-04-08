<?php
	/**
	 * Created by Tianwen Sun.
	 * Date: 2016/2/27
	 * Time: 22:43
	 * Project: navigation
	 */

namespace Service\ZhibobaService;
class ZhibobaService{

	protected $serviceconf = "";
	protected $timestamp = "";

	public function __construct() {
		$this->serviceconf = C("ZHIBOBA");
		$this->timestamp = $this->getclock();
	}

	public function getclock(){
		$clockUrl = $this->serviceconf['TIME'];
		$res = get($clockUrl);
		$res =json_decode($res,true);
		return $res['timestamp'];
	}

	public function getmatchinfo($index=1,$date=""){
		$matchUrl = $this->serviceconf["MATCH"];
		$matchUrl = str_replace("{time}",$this->timestamp,$matchUrl);
		$res = get($matchUrl);
		$res =json_decode($res,true);

		$date = empty($date) ? today() : $date;
		$result = array();
		foreach($res as $key=>$value){
			if($value['formatDate'] == $date){
				$result =  $value['list'];
				break;
			}
		}

		return $result;
	}

	public function getscores(){
		$scoreUrl = $this->serviceconf['SCOREDETAIL'];
		$res = get($scoreUrl);
		$res = preg_replace("#\\\u([0-9a-f]+)#ie","iconv('UCS-2','UTF-8', pack('H4', '\\1'))",$res);
		$res = json_decode($res,true);
		return $res['list'];
	}

	public function getscoresindex(){}
}
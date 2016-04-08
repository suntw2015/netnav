<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/4/8
 * Time: 18:16
 */

namespace Service\NbaService;

class NbaService{

    protected $serviceconf = array();

    public function __construct() {
        $this->serviceconf = C("NBA");
    }

    public function getMatchList($date=""){
        $url = $this->serviceconf['MATCH'];

        $res = get($url);
        $res = json_decode($res,true);
        $res = $res['payload'];
        $day_mapping = C("NBA_DAY_MATCH");

        $date = empty($date) ? today() : $date;
        $dayindex = (strtotime($date) - strtotime(today())) / 2400;
        $dayindex = isset($day_mapping[$dayindex]) ? $day_mapping[$dayindex] : "";

        if($dayindex === ""){
            return array();
        }

        $matchlist = array();
        foreach($res[$dayindex]['games'] as $key=>$value){
            $matchlist[] = array(
                "time" => date("H:i",$value['profile']['utcMillis']/1000),
                "home_team" => $value['homeTeam'],
                "visit_team" => $value['awayTeam'],
                "score" => $value['boxscore'],
            );
        }

        return $matchlist;
    }
}
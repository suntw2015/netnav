<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends \Lib\Controller\BaseController {
    public function index(){
        $zhibobaService = new \Service\ZhibobaService\ZhibobaService();
        $matchlist = $zhibobaService->getmatchinfo();
        $scorelist = $zhibobaService->getscores();
        $basketballmatch = array();
        foreach($matchlist as $key=>$value){
            if($value['type'] == 'basketball' && strpos($value['title'],"金币") === false && !empty($value['visit_team'])){
                $value['visit_team_img'] = empty($value['visit_logo']) ? "/Public/pic/default.png" : "http://duihui.tu.qiumibao.com/nba/{$value['visit_logo']}.png";
                $value['home_team_img'] = empty($value['home_logo']) ? "/Public/pic/default.png" : "http://duihui.tu.qiumibao.com/nba/{$value['home_logo']}.png";
                $value['home_score'] = $value['visit_score'] = 0;
                foreach($scorelist as $k=>$v){
                    if($value['id'] == $v['id']){
                        $value['home_score'] = empty($v['home_score']) ? 0 : $v['home_score'];
                        $value['visit_score'] = empty($v['visit_score']) ? 0 : $v['visit_score'];
                        break;
                    }
                }
                $basketballmatch[] = $value;
            }
        }

        $websitesLogic = new \Home\Logic\WebsitesLogic();
        $sites = $websitesLogic->getNavList();
        $headsites = $websitesLogic->getNavHeadList();

        $this->assign("sites",$sites);
        $this->assign("headsites",$headsites);
        $this->assign("matchlist",$basketballmatch);
        $this->assign("matchlists",json_encode($basketballmatch));
        $this->display("index_self");
    }

    public function test(){
        $zhibobaService = new \Service\ZhibobaService\ZhibobaService();
        $matchlist = $zhibobaService->getmatchinfo();
        $scorelist = $zhibobaService->getscores();
        $basketballmatch = array();
        foreach($matchlist as $key=>$value){
            if($value['type'] == 'basketball' && strpos($value['title'],"金币") === false){
                $value['visit_team_img'] = empty($value['visit_logo']) ? "/Public/pic/default.png" : "http://duihui.tu.qiumibao.com/nba/{$value['visit_logo']}.png";
                $value['home_team_img'] = empty($value['home_logo']) ? "/Public/pic/default.png" : "http://duihui.tu.qiumibao.com/nba/{$value['home_logo']}.png";
                $value['home_score'] = $value['visit_score'] = 0;
                foreach($scorelist as $k=>$v){
                    if($value['id'] == $v['id']){
                        $value['home_score'] = empty($v['home_score']) ? 0 : $v['home_score'];
                        $value['visit_score'] = empty($v['visit_score']) ? 0 : $v['visit_score'];
                        break;
                    }
                }
                $basketballmatch[] = $value;
            }
        }

        echo json_encode($basketballmatch);exit;
    }
}
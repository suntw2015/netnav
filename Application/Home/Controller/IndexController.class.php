<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends \Lib\Controller\BaseController {
    public function index(){
        $nbaService = new \Service\NbaService\NbaService();
        $matchlist = $nbaService->getMatchList();

        $websitesLogic = new \Home\Logic\WebsitesLogic();
        $sites = $websitesLogic->getNavList();
        $headsites = $websitesLogic->getNavHeadList();

        $this->assign("sites",$sites);
        $this->assign("headsites",$headsites);
        $this->assign("matchlist",$matchlist);
        $this->assign("matchlists",json_encode($basketballmatch));
        $this->display("index_self");
    }

    public function test(){
        $nbaService = new \Service\NbaService\NbaService();
        $res = $nbaService->getMatchList();

        echo json_encode($res);exit;
    }
}
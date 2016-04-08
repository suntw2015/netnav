<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/4/6
 * Time: 16:02
 */

namespace Home\Logic;
class WebsitesLogic{

    public function getNavList(){

        $navlist = array();
        $websitesModel = new \Home\Model\WebsitesModel();

        $navtypelist = C("NAV_TYPE");
        foreach($navtypelist as $key=>$value){
//            foreach($value as $k=>$v){
//                $navlist[$key][$k] = $websitesModel->getListByType($v);
//            }
            $navlist[$key] = array(
                "title" => $websitesModel->getListByType($key),
                "content" => array(),
            );

            $contentlist = $websitesModel->getListByType($key."_content_first");

            foreach($contentlist as $k=>$v){
                $navlist[$key]["content"][]=array(
                    "first"=>$v,
                    "list"=>$websitesModel->getByCondition(array("pid"=>$v['id'],'status'=>1)),
                );
            }
        }

        return $navlist;
    }

    public function getNavHeadList(){
        $navlist = array();
        $websitesModel = new \Home\Model\WebsitesModel();

        $navtypelist = C("NAV_TYPE_HEAD");
        foreach($navtypelist as $value){
            $navlist[$value] = $websitesModel->getListByType($value);
        }

        return $navlist;
    }
}
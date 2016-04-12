<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/4/6
 * Time: 16:02
 */

namespace Home\Logic;
class WebsitesLogic{

    protected $data = array();

    public function __construct(){
        if(empty($data)){
            $websitesModel = new \Home\Model\WebsitesModel();
            $this->data = $websitesModel->loadAll();
        }
    }

    public function getNavList(){

        $navlist = array();
        $websitesModel = new \Home\Model\WebsitesModel();

        $navtypelist = C("NAV_TYPE");
        foreach($navtypelist as $key=>$value){
            $navlist[$key] = array(
                "title" => $this->getdata(array("type"=>$key,"status"=>1)),
                "content" => array(),
            );

            $contentlist = $this->getdata(array("type"=>$key."_content_first","status"=>1));

            foreach($contentlist as $k=>$v){
                $navlist[$key]["content"][]=array(
                    "first"=>$v,
                    "list"=>$this->getdata(array("pid"=>$v['id'],'status'=>1)),
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
            $navlist[$value] = $this->getdata(array("type"=>$value,"status"=>1));
        }

        return $navlist;
    }

    public function getdata($condition){
        $list = array();

        foreach($this->data as $key=>$value){
            $flag = 1;
            foreach($condition as $k=>$v){
                if($value[$k] != $v){
                    $flag = 0;
                    break;
                }
            }

            if($flag == 1){
                $list[] = $value;
            }
        }

        return $list;
    }
}
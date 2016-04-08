<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/4/6
 * Time: 15:58
 */

namespace Home\Model;
use Think\Model;

class WebsitesModel extends \Lib\Model\AppModel{

    protected $trueTableName = "websites";

    public function getListByType($type){
        $conditions =  array("type"=>$type,"status"=>1);
        return $this->Model->where($conditions)->select();
    }
}
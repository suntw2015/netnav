<?php
	/**
	 * Created by Tianwen Sun.
	 * Date: 2016/2/27
	 * Time: 22:54
	 * Project: navigation
	 */

	/**
	 * 模拟get方法
	 * @param string $url   请求地址
	 * @return mixed    返回get结果
	 */
	function get($url,$cookie=""){

		$ch=curl_init();
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch,CURLOPT_HTTPHEADER,0);
		curl_setopt($ch, CURLOPT_POST, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch,CURLOPT_COOKIE,$cookie);


		$result=curl_exec($ch);
		curl_close($ch);
		return $result;
	}

	function geturl($url){
		$trycount = 5;

		while($trycount--){
			$res = get($url);
			if(!empty($res)){
				return json_decode($res,true);
			}
		}

		return false;
	}


	/****************************************************************************************************
	//最大堆排序
	 * 按照部分key对2维数组排序
	 * arraysort 排序入口
	 * @param array $order 排序规则 array("key1"=>"desc","key2"=>"asc")
	 ****************************************************************************************************/

	function heapsort(&$arr,$order){
		$len = count($arr);
		$i = floor($len/2)-1;

		for(;$i>=0;$i--){
			build_head($arr,$len-1,$i,$order);
		}

		for($i=$len-1;$i>0;$i--){
			swap($arr,$i,0);
			build_head($arr,$i-1,0,$order);
		}
	}

	/****************************************************************************************************
	 * build_head 堆排序
	 ****************************************************************************************************/
	function build_head(&$arr,$maxindex,$index,$order){
		$relindex = $index+1;
		if(2*$relindex-1>$maxindex || $index > $maxindex){//leaf node or over the maxidnex
			return;
		}

		if(-1 == itemcompare($arr[$index],$arr[2*$relindex-1],$order)){//compare with left
			swap($arr,$index,2*$relindex-1);
			build_head($arr,$maxindex,2*$relindex-1,$order);
		}

		if(2*$relindex<=$maxindex && -1==itemcompare($arr[$index],$arr[2*$relindex],$order)){	//compare with right
			swap($arr,$index,2*$relindex);
			build_head($arr,$maxindex,2*$relindex,$order);
		}
	}

	/****************************************************************************************************
	 * itemcompare item比较规则
	 ****************************************************************************************************/
	function itemcompare($a,$b,$order){
		foreach($order as $key=>$value){
			if($value == "desc"){
				if($a[$key]<$b[$key]) {
					return 1;
				}elseif($a[$key]>$b[$key]){
					return -1;
				}else{
					continue;
				}
			}elseif($value =="asc"){
				if($a[$key]<$b[$key]) {
					return -1;
				}elseif($a[$key]>$b[$key]){
					return 1;
				}else{
					continue;
				}
			}
		}

		return 0;
	}

	/****************************************************************************************************
	 * swap 交换值
	 ****************************************************************************************************/
	function swap(&$arr,$i,$j){
		$temp = $arr[$i];
		$arr[$i] = $arr[$j];
		$arr[$j] = $temp;
	}

	function timenow(){
		return date("Y-m-d H:i:s",time());
	}

	function today(){
		return date("Y-m-d",time());
	}
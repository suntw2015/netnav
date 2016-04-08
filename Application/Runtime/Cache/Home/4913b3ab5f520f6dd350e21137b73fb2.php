<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link href="/Public/css/test.css" rel="stylesheet" type="text/css"/>
	<title>Title</title>
</head>
<body>
<?php if(is_array($matchlist)): foreach($matchlist as $key=>$match): ?><div class="match">
		<span class="time"><?php echo ($match['time']); ?></span>
		<div class="team">
			<img src="<?php echo ($match['visit_team_img']); ?>"/><?php echo mb_strlen($match['visit_team']) > 3 ? mb_substr($match['visit_team'],0,2).".." : $match['visit_team'];?>
		</div>
		<span class="score"><?php echo ($match['visit_score']); ?>-<?php echo ($match['home_score']); ?></span>
		<div class="team teamright">
			<img src="<?php echo ($match['home_team_img']); ?>"/><?php echo mb_strlen($match['home_team']) > 3 ? mb_substr($match['home_team'],0,2).".." : $match['home_team'];?>
		</div>
	</div><?php endforeach; endif; ?>
</body>
</html>
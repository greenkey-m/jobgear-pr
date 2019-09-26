<?php

$arr = array();

$obj = array('lat' => 1, 'lng' => 1, 'caption' => 'capt', 'link' => '', 'salary' => '1000 to 2000', 'text' => 'some text');

for ($i = 1; $i <= 500; $i++) {
    $obj['id'] = $i;
    $obj['lat'] = 51.5180861 + rand(1, 500) / 10000 - 0.025;
    $obj['lng'] = -0.1359333 + rand(1, 1000) / 10000 - 0.05;
    $obj['name'] = 'Uber '.$i;
    $obj['caption'] = 'User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job '.$i;
    $obj['link'] = 'https://greenkey.ru';
    $obj['salary'] = '£25,000 - £50,000 <span>per year</span>';
    $obj['text'] = "We're on the look out for a creative, UI/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros".
        "We're on the look out for a creative, UI/UX Designer to join our talented,".
        "growing team to help develop brands and work with exciting clients acros";
    $arr[] = $obj;
}

echo json_encode($arr);

?>

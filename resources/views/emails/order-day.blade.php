<div>
    <?php 
            $date = date('Y-m-d');
            $today = date('Y-m-d', strtotime($date));
            $tomorrow = date('Y-m-d', strtotime($date .' +1 day'));
            $remont_date = date('Y-m-d', strtotime($details->date));
           if($today == $remont_date) { 
            // dd($details->date);
            ?>
    <h2>{{__("Dear Customer")}}!<br> {{__("Let's remind you that today")}}, <span>{{$details->date}}</span> {{__("at")}}. <b>{{$details->time}}</b> {{__("Your device is logged for service")}} {{$details->branch_name}}. Promarket.lv</h2>
<?php }else{
        if($tomorrow == $remont_date) {
    ?>
    <h2>{{__("Dear Customer")}}!<br> {{__("Let's remind you that it goes")}} , <span>{{$details->date}}</span> {{__("at")}}. <b>{{$details->time}}</b> {{__("Your device is logged for service")}} {{$details->branch_name}}. Promarket.lv</h2>
    <? } } ?>
</div>

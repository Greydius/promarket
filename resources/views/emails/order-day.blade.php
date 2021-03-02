<div>
    <?php 
            $date = date('Y-m-d');
            $today = date('Y-m-d', strtotime($date));
            $tomorrow = date('Y-m-d', strtotime($date .' +1 day'));
            $remont_date = date('Y-m-d', strtotime($details->date));
           if($today == $remont_date) { 
            // dd($details->date);
            ?>
    <h2>God. klient!<br> Atgadinam, ka sodien, <span>{{$details->date}}</span> plkst. <b>{{$details->time}}</b> Jusu ierīce ir pieteikta servisa {{$details->branch_name}}. Promarket.lv</h2>
<?php }else{
        if($tomorrow == $remont_date) {
    ?>
    <h2>God. klient!<br> Atgadinam, ka rit, <span>{{$details->date}}</span> plkst. <b>{{$details->time}}</b> Jusu ierīce ir pieteikta servisa {{$details->branch_name}}. Promarket.lv</h2>
    <? } } ?>
</div>

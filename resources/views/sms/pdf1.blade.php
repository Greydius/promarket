<!DOCTYPE html>
<html>
<head>
     <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Avansa rēķins</title>
    <style type="text/css">
* {
 font-family: DejaVu Sans, sans-serif;
}
.columns .column{
width: 50%;
/*display: grid;*/
float: left;
}
.column div {
/*float: left;*/
width: 100%;
}
table.border, table.border th, table.border td {
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 9px;
}
td {
    width: 30%;
}
table span{
    font-size: 9px;
}
table{ width: 100%; font-size: 9px;}
table b{
    font-size: 10px;
}
.columns .column span {
    /*float: left;*/
    font-size: 9px;
    width: 30%;
    /*clear: both;*/
    margin-left: 25px;
}
.columns .column b {
    /*float: left;*/
    font-size: 9px;
    /*clear: both;*/
    width: 70%;
    margin-left: 35px;
}
    </style>
</head>
<body>
    <?php setlocale(LC_TIME, 'lv.UTF-8'); ?>
    <div class="wrapper" >
        <h2 style="font-size: 24px;text-align: center;"><b>Avansa rēķins Nr. <?php echo date("dmy"); ?>{{$order->id}}</b></h2>
        <h3 style="font-size: 17px;text-align: left;"><b> <?php echo date("Y."); ?> gada <?php echo strftime('%d. %B'); ?></b></h3>
        <hr>
        <div class="columns">           
              <table>
                <tr>
                    <td><span style="margin:0">Piegādātājs</span></td>
                    <td><b>SIA PROSADIGA</b></td>
                    <td><span style="margin:0">Reģ. Nr.</span></td>
                    <td><b>50103436321</b></td>
                </tr>
                <tr>
                    <td><span style="margin:0">Jurid.adrese/dekl.dz.v.</span></td>
                    <td><b>Dammes iela 33-74, LV-1069, Rīga</b></td>
                    <td><span style="margin:0">PVN Nr.</span></td>
                    <td><b>LV50103436321</b></td>
                </tr>
                <tr>
                    <td><span style="margin:0">Norēķinu rekvizīti</span></td>
                    <td><b>A/S "Swedbanka"</b></td>
                    <td><span style="margin:0">Konts</span></td>
                    <td><b>LV53HABA0551031352179</b></td>
                </tr>
                <tr>
                    <td><span style="margin:0">Izsniegšanas vieta</span></td>
                    <td><b>Dammes iela 33-74, Rīga, Latvija, LV-1069</b></td>
                    <td><span style="margin:0"></span></td>
                    <td><b></b></td>
                </tr>
            </table> 
            <hr>
            <table>
                <tr>
                    <td><span style="margin:0">Saņēmējs</span></td>
                    <td><b>{{$order->fio}} </b></td>
                    <td><span style="margin:0">Reģ. Nr.</span></td>
                    <td><b>{{$order->register_code}}</b></td>
                </tr>
                <tr>
                    <td><span style="margin:0">Jurid.adrese/dekl.dz.v.</span></td>
                    <td><b>{{$order->address_company}}</b></td>
                    <td><span style="margin:0">PVN Nr.</span></td>
                    <td><b>{{$order->code_nds_pay}}</b></td>
                </tr>
                <tr>
                    <td><span style="margin:0">Norēķinu rekvizīti</span></td>
                    <td><b></b></td>
                    <td><span style="margin:0">Konts</span></td>
                    <td><b>{{$order->user_id}}</b></td>
                </tr>
            </table> 
            <hr>
            <table>
                <tr>
                    <td><span style="margin:0">Apmaksas termiņš</span></td>
                    <td><b><?php                  
                            $next_date =  strftime('%Y. %d. %B', strtotime(' +3 day')); echo $next_date; ?></b></td>
                    <td><span style="margin:0">Piegādes datums</span></td>
                    <td><b> <?php echo date("Y."); ?> gada <?php echo strftime('%d. %B'); ?></b></td>
                </tr>
                <tr>
                    <td><span style="margin:0">Apmaksas veids</span></td>
                    <td><b>@if($order->payment_method == 'cash') Skaidra nauda @else Ar karti @endif</b></td>
                    <td><span style="margin:0"></span></td>
                    <td><b></b></td>
                </tr>
            </table> 
            <table class="border">
                <tr>
                        <td style="width:95px">Kods</td>
                        <td style="width:234px">Nosaukums</td>
                        <td style="width:67px">Mērvienība</td>
                        <td style="width:66px">Daudzums</td>
                        <td style="width:76px">Cena (EUR)</td>
                        <td style="width:32px">Atlaide (%)</td>
                        <td style="width:38px">PVN (%)</td>
                        <td style="width:76px">Summa</td>
                    </tr>
                    @foreach($products as $product)
                    
                    <tr>
                        <td style="width:95px">{{$product->vendor_code}}</td>
                        <td style="width:234px">Rezerves daļu komplekts</td>
                        <td style="width:67px">komplekti</td>
                        <td style="width:66px">{{$product->pivot->count}}</td>
                        <td style="width:76px">{{$product->price}}</td>
                        <td style="width:32px">10</td>
                        <td style="width:38px">21</td>
                        <td style="width:76px"><?php 
                        $allsum = $product->pivot->count * $product->price; 
                        echo $allsum; ?></td>
                    </tr>
                    <tr>
                    <td colspan="8" style="width:684px">Piezīmes : {{$product->name}} </td>
                    </tr>
                    @endforeach
                    <tr>
                        <td style="width:95px">PIEGĀDE</td>
                        <td style="width:234px">Piegāde</td>
                        <td style="width:67px">gab</td>
                        <td style="width:66px">1</td>
                        <td style="width:76px">3.26</td>
                        <td style="width:32px">10</td>
                        <td style="width:38px">21</td>
                        <td style="width:76px">3.26</td>
                    </tr>
                    <tr>
                    <td colspan="8" style="width:684px">Piezīmes : Ventspils Supernetto Tārgales pakomāts – Tārgales iela 62, Ventspils – Ventspils</td>
                    </tr>
            </table>
            <table class="" style="width: 50%;float: right;text-align: right;">
                <tr>
                    <td>Atlaide % (EUR)</td>
                    <td><?php echo $skidka = $order->total_amout / 10; ?></td>
                </tr>
                <tr>
                    <td>ar PVN 21% apl. summa (EUR)</td>
                    <td>{{$order->total_amout}}</td>
                </tr>
                <tr>
                    <td>PVN 21% (EUR)</td>
                    <td><?php echo $pvn = $order->total_amout / 100 * 21; ?></td>
                </tr>
                <tr>
                    <td>Summa kopā (EUR)</td>
                    <td><?php echo $spvn = $order->total_amout + $pvn; ?></td>
                </tr>
                <tr>
                    <td>Summa apmaksai (EUR)</td>
                    <td><?php echo $total_amout = $spvn-$skidka; ?> </td>
                </tr>
            </table>
        </div>
        <div class="" style="clear: both;font-size: 10px">Apmaksas summa vārdiem: <b><?php $digit = new \NumberFormatter("en", \NumberFormatter::SPELLOUT);
            $explode = explode(".", $total_amout);
echo $digit->format($explode[0]); ?>  eiro {{$explode[1]}} cents(i)</b></div>
        <div style="font-size: 9px;line-height: 15px"> <p style="line-height: 10px;">Sastādīja:     ______________________________
                                    <br><span style="padding-left: 85px;">vārds, uzvārds</span></p>
                            <p style="line-height: 5px; padding-top: 10px;padding-left: 42px;">
                                 <?php echo date("Y."); ?> gada <?php echo strftime('%d. %B'); ?>
                                <br>______________________________</p>
                            <p style="padding-left: 42px;line-height: 10px;">______________________________ <br>
                                    <span style="padding-left: 35px;">paraksts, zīmogs</span></p>
                                </div>
    </div>
</body>
</html>
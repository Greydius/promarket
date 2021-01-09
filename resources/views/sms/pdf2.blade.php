<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link rel="stylesheet" href="<?php echo url()->to('/'); ?>/pdf/2/base.min.css" />
<link rel="stylesheet" href="{{ asset('/pdf/2/fancy.min.css') }}" />
<link rel="stylesheet" href="{{ asset('/pdf/2/main.css') }}" />
<script src="{{ asset('/pdf/2/compatibility.min.js') }}">
</script>
<script>
try{
pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
}catch(e){}
</script>
<title>PAVADZĪME Nr. P/20-204</title>
</head>
<body>
<div id="sidebar">
<div id="outline">
</div>
</div>
<div id="page-container">
<div id="pf1" class="pf w0 h0" data-page-no="1">
	<div class="pc pc1 w0 h0">
	<img class="bi x0 y0 w1 h1" alt="" src="<?php echo url()->to('/'); ?>/pdf/2/bg1.png"/>
<div class="c x1 y1 w2 h2">
	<div class="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0"> <span class="ff2 fc1"> </span>
</div>
</div>
<div class="c x1 y3 w2 h4">
	<div class="t m0 x3 h5 y4 ff3 fs1 fc1 sc0 ls0 ws0">PAVADZĪME Nr. P/20-204</div>
<div class="t m0 x4 h6 y5 ff3 fs2 fc1 sc0 ls0 ws0"><?php echo date("Y d F"); ?></div>
</div>
<div class="c x5 y6 w3 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Reģistrācijas Nr.</div>
</div>
<div class="c x7 y6 w4 h7">
	<div class="t m0 x6 h8 y8 ff1 fs0 fc1 sc0 ls0 ws0"> <span class="ff3 fs3">{{$order->register_code}}</span>
</div>
</div>
<div class="c x0 y9 w5 h9">
	<div class="t m0 x6 h3 ya ff1 fs0 fc1 sc0 ls0 ws0">Piegādātājs</div>
</div>
<div class="c x8 y9 w6 h9">
	<div class="t m0 x6 h8 yb ff3 fs3 fc1 sc0 ls0 ws0">SIA PROSADIGA</div>
</div>
<div class="c x5 y9 w3 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">PVN reģ. Nr.</div>
</div>
<div class="c x7 y9 w4 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">LV50103436321</div>
</div>
<div class="c x0 yc w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Juridiskā adrese</div>
</div>
<div class="c x8 yc w7 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">{{$order->address_company}}</div>
</div>
<div class="c x0 yd w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Norēķinu rekvizīti</div>
</div>
<div class="c x8 yd w6 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">A/S &quot;Swedbanka&quot;</div>
</div>
<div class="c x5 yd w3 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Konta Nr.</div>
</div>
<div class="c x7 yd w4 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">LV53HABA0551031352179</div>
</div>
<div class="c x0 ye w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Izsniegšanas vieta</div>
</div>
<div class="c x8 ye w7 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0"> {{$order->address_company}}</div>
</div>
<div class="c x0 yf w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Kontaktinformācija</div>
</div>
<div class="c x5 y11 w3 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Reģistrācijas Nr.</div>
</div>
<div class="c x7 y11 w4 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">{{$order->register_code}}</div>
</div>
<div class="c x0 y12 w5 hb">
	<div class="t m0 x6 h3 y13 ff1 fs0 fc1 sc0 ls0 ws0">Saņēmēja</div>
</div>
<div class="c x8 y12 w6 hb">
	<div class="t m0 x6 h8 y14 ff3 fs3 fc1 sc0 ls0 ws0">{{$order->name_company}} </div>
</div>
<div class="c x5 y12 w3 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">PVN reģ.Nr.</div>
</div>
<div class="c x0 y15 w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Juridiskā adrese</div>
</div>
<div class="c x8 y15 w7 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">{{$order->address_company}}</div>
</div>
<div class="c x0 y16 w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Norēķinu rekvizīti</div>
</div>
<div class="c x8 y16 w6 ha">
	<div class="t m0 x6 h8 y17 ff3 fs3 fc0 sc0 ls0 ws0"> </div>
</div>
<div class="c x5 y16 w3 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Konta Nr.</div>
</div>
<div class="c x0 y18 w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Saņemšanas vieta</div>
</div>
<div class="c x8 y18 w7 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">{{$order->address_company}}</div>
</div>
<div class="c x0 y19 w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Kontaktinformācija</div>
</div>
<div class="c x0 y1a w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Preču pārvadātājs</div>
</div>
<div class="c x5 y1a w3 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Reģistrācijas Nr.</div>
</div>
<div class="c x5 y1b w3 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">PVN reģ. Nr.</div>
</div>
<div class="c x0 y1c w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">TL vadītāja vārds, uzvārds</div>
</div>
<div class="c x5 y1c w3 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">TL reģ. Nr.</div>
</div>
<div class="c x0 y1d w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Apmaksas termiņš</div>
</div>
<div class="c x8 y1d w6 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">14.12.2020.</div>
</div>
<div class="c x5 y1d w3 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Piegādes datums</div>
</div>
<div class="c x7 y1d w4 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">09.12.2020.</div>
</div>
<div class="c x0 y1e w5 h7">
	<div class="t m0 x6 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Apmaksas veids:</div>
</div>
<div class="c x8 y1e w7 h7">
	<div class="t m0 x6 h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">Priekšapmaksa</div>
</div>
<div class="c x0 y1f w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Darījuma veids</div>
</div>
<div class="c x0 y20 w5 ha">
	<div class="t m0 x6 h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Papildinformācija</div>
</div>
<div class="c x0 y21 w8 hc">
	<div class="t m0 x9 h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">Nosaukums</div>
</div>
<div class="c xa y21 w9 hc">
	<div class="t m0 xb h3 y23 ff1 fs0 fc1 sc0 ls0 ws0">Mēr-</div>
<div class="t m0 xc h3 y24 ff1 fs0 fc1 sc0 ls0 ws0">vienība</div>
</div>
<div class="c xd y21 wa hc">
	<div class="t m0 xe h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">Skaits</div>
</div>
<div class="c xf y21 wb hc">
	<div class="t m0 x6 h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">Cena (EUR)</div>
</div>
<div class="c x10 y21 wc hc">
	<div class="t m0 xc h3 y23 ff1 fs0 fc1 sc0 ls0 ws0">Atlaide </div>
<div class="t m0 x11 h3 y24 ff1 fs0 fc1 sc0 ls0 ws0">(%)</div>
</div>
<div class="c x12 y21 wa hc">
	<div class="t m0 xc h3 y25 ff1 fs0 fc1 sc0 ls0 ws0">PVN </div>
<div class="t m0 xc h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">likme </div>
<div class="t m0 x13 h3 y26 ff1 fs0 fc1 sc0 ls0 ws0">(%)</div>
</div>
<div class="c x14 y21 wd hc">
	<div class="t m0 x15 h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">Summa (EUR)</div>
</div>
@foreach($products as $product) 	
<div class="c x0 y27 w8 hd">
	<div class="t m0 x6 h3 y28 ff1 fs0 fc1 sc0 ls0 ws0">Rezerves daļu komplekts ( {{$product->name}}</div>
<div class="t m0 x6 h3 y29 ff1 fs0 fc1 sc0 ls0 ws0">)</div>
</div>
<div class="c xa y27 w9 hd">
	<div class="t m0 x6 h3 y2a ff1 fs0 fc1 sc0 ls0 ws0">komplekti</div>
</div>
<div class="c xd y27 wa hd">
	<div class="t m0 x16 h3 y2a ff1 fs0 fc1 sc0 ls0 ws0">{{$product->pivot->count}}</div>
</div>
<div class="c xf y27 wb hd">
	<div class="t m0 x16 h3 y2a ff1 fs0 fc1 sc0 ls0 ws0">{{$product->price}}</div>
</div>
<div class="c x10 y27 wc hd">
	<div class="t m0 x17 h3 y2a ff1 fs0 fc1 sc0 ls0 ws0">0</div>
</div>
<div class="c x12 y27 wa hd">
	<div class="t m0 xb h3 y2a ff1 fs0 fc1 sc0 ls0 ws0">21</div>
</div>
<div class="c x14 y27 wd hd">
	<div class="t m0 x18 h3 y2a ff1 fs0 fc1 sc0 ls0 ws0"><?=$product->pivot->count * $product->price; ?></div>
</div>
@endforeach
<div class="c x19 y2b we h7">
	<div class="t m0 x1a h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Atlaide (EUR)</div>
</div>
<div class="c x1b y2b wf h7">
	<div class="t m0 x1c h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">0.00</div>
</div>
<div class="c x19 y2c we hc">
	<div class="t m0 x1d h3 y2d ff1 fs0 fc1 sc0 ls0 ws0">Ar PVN 21% apliekamā summa (EUR) </div>
<div class="t m0 x1e h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">PVN  21% (EUR)</div>
</div>
<div class="c x1b y2c wf hc">
	<div class="t m0 x1f h8 y2e ff3 fs3 fc1 sc0 ls0 ws0">{{$order->total_amout}}</div>
<div class="t m0 x1f h8 y2f ff3 fs3 fc1 sc0 ls0 ws0"><?php $pvn = $order->total_amout / 100 * 21; echo $pvn; ?></div>
</div>
<div class="c x19 y30 we he">
	<div class="t m0 x20 h3 y31 ff1 fs0 fc1 sc0 ls0 ws0">Kopā (EUR)</div>
</div>
<div class="c x1b y30 wf he">
	<div class="t m0 x1f h8 y32 ff3 fs3 fc1 sc0 ls0 ws0"><?= $order->total_amout + $pvn; ?></div>
</div>
<div class="c x19 y33 we h7">
	<div class="t m0 x21 h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Summa apmaksai (EUR)</div>
</div>
<div class="c x1b y33 wf h7">
	<div class="t m0 x1f h8 y8 ff3 fs3 fc1 sc0 ls0 ws0"><?= $order->total_amout + $pvn; ?></div>
</div>
<div class="c x1 y3 w2 h4">
	<div class="t m0 x4 hf y34 ff1 fs0 fc1 sc0 ls0 ws0">Apmaksas summa vārdiem:<span class="ff4"> <span class="ff5 fs3">Sešdesmit eiro 0 cents(i)</span>
</span>
</div>
</div>
<div class="c x0 y35 w10 h10">
	<div class="t m0 x6 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">Izsniedza</div>
	<div class="t m0 x22 h3 y37 ff1 fs0 fc1 sc0 ls0 ws0">:</div></div><div class="c x23 y35 w11 h10"><div class="t m0 x1 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">________________________</div><div class="t m0 x6 h3 y38 ff1 fs0 fc1 sc0 ls0 ws0"><?php echo date("d.m.Y"); ?></div></div><div class="c x24 y35 w12 h10"><div class="t m0 x15 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">Pieņēma </div><div class="t m0 xe h3 y37 ff1 fs0 fc1 sc0 ls0 ws0">pārvadāšanā:</div></div><div class="c x25 y35 w13 h10">	<div class="t m0 x26 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">____________________</div><div class="t m0 x11 h3 y39 ff1 fs0 fc1 sc0 ls0 ws0">_____________________</div><div class="t m0 x27 h3 y3a ff1 fs0 fc1 sc0 ls0 ws0">(datums)</div></div><div class="c x5 y35 w14 h10"><div class="t m0 xc h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">Saņēma:</div></div>
<div class="c x28 y35 w15 h10"><div class="t m0 x17 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">___________________________</div><div class="t m0 x22 h3 y37 ff1 fs0 fc1 sc0 ls0 ws0">(Vārds, uzvārds, paraksts)</div><div class="t m0 x22 h3 y3a ff1 fs0 fc1 sc0 ls0 ws0">_____________________</div>
<div class="t m0 x29 h3 y3b ff1 fs0 fc1 sc0 ls0 ws0">(datums)</div>
</div>
</div>
<div class="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'>
</div>
</div>
</div>
</body>
</html>

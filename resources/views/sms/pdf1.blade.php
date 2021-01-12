<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="<?php echo url()->to('/'); ?>/pdf/2/base.min.css"/>
    <link rel="stylesheet" href="{{ asset('/pdf/2/fancy.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('/pdf/2/main.css') }}"/>
    <script>
        try {
            pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
        } catch (e) {
        }
    </script>
</head>
<body>
<div id="sidebar">
    <div id="outline">
    </div>
</div>
<div id="page-container">
    <div id="pf1" class="pf w0 h0" data-page-no="1">
        <div class="pc pc1 w0 h0">
            <img class="bi x0 y0 w1 h1" alt="" src="<?php echo url()->to('/'); ?>/pdf/1/bg1.png"/>
            <div class="c x1 y1 w2 h2">
                <div class="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0"><span class="_ _0">
</span><?php echo date("Y d F"); ?><span class="_ _0">
</span><span class="_ _0">
</span></div>
            </div>
            <div class="c x3 y3 w3 h2">
                <div class="t m0 x2 h4 y4 ff2 fs0 fc0 sc0 ls0 ws0">{{$order->fio}}<span class="_ _0">
</span><span class="_ _0">
</span></div>
            </div>
            <div class="c x0 y5 w4 h5">
                <div class="t m0 x4 h6 y6 ff2 fs1 fc0 sc0 ls0 ws0">A<span class="_ _1">
</span>vansa rēķ<span class="_ _0">
</span>ins Nr<span class="_ _0">
</span>. AV R/20-100
                </div>
            </div>
            <div class="c x0 y7 w5 h7">
                <div class="t m0 x2 h8 y8 ff3 fs2 fc0 sc0 ls0 ws0">Saņēmējs</div>
            </div>
            <div class="c x0 y9 w5 h7">
                <div class="t m0 x2 h9 y8 ff4 fs2 fc0 sc0 ls0 ws0">Jurid.adre<span class="_ _1">
</span>se/dekl.dz.v.
                </div>
            </div>
            <div class="c x0 ya w5 h7">
                <div class="t m0 x2 h8 y8 ff3 fs2 fc0 sc0 ls0 ws0">Norēķinu rekvizī<span class="_ _1">
</span>ti
                </div>
            </div>
            <div class="c x5 yb w6 ha">
                <div class="t m0 x2 h8 yc ff3 fs2 fc0 sc0 ls0 ws0">Reģ. Nr.</div>
            </div>
            <div class="c x5 yd w6 ha">
                <div class="t m0 x2 h9 yc ff4 fs2 fc0 sc0 ls0 ws0">Konts</div>
            </div>
            <div class="c x5 ye w6 ha">
                <div class="t m0 x2 h9 yc ff4 fs2 fc0 sc0 ls0 ws0">PVN Nr.</div>
            </div>
            <div class="c x3 yf w7 hb">
                <div class="t m0 x2 hc y10 ff2 fs3 fc0 sc0 ls0 ws0">Priekšap<span class="_ _0">
</span>maksa
                </div>
            </div>
            <div class="c x3 y11 w8 hb">
                <div class="t m0 x2 hd y12 ff1 fs3 fc0 sc0 ls0 ws0">2020. gad<span class="_ _0">
</span>a 7. n<span class="_ _0">
</span>ovemb<span class="_ _0">
</span>ris
                </div>
            </div>
            <div class="c x0 y13 w5 h7">
                <div class="t m0 x2 h8 y8 ff3 fs2 fc0 sc0 ls0 ws0">Apmaksas termiņš</div>
            </div>
            <div class="c x0 y14 w5 h7">
                <div class="t m0 x2 h9 y15 ff4 fs2 fc0 sc0 ls0 ws0">Apmaksas veids</div>
            </div>
            <div class="c x6 y11 w9 hb">
                <div class="t m0 x2 hd y12 ff1 fs3 fc0 sc0 ls0 ws0">2020. gad<span class="_ _0">
</span>a 2. n<span class="_ _0">
</span>ovemb<span class="_ _0">
</span>ris
                </div>
            </div>
            <div class="c x5 y13 wa h7">
                <div class="t m0 x2 h8 y8 ff3 fs2 fc0 sc0 ls0 ws0">Piegādes da<span class="_ _1">
</span>tums
                </div>
            </div>
            <div class="c x3 y16 w3 he">
                <div class="t m0 x2 h3 y17 ff1 fs0 fc0 sc0 ls0 ws0">{{$order->name_company}}</div>
            </div>
            <div class="c x3 y18 w3 hb">
                <div class="t m0 x2 hf y12 ff2 fs4 fc0 sc0 ls0 ws0"><span class="_ _0">
</span>{{$order->address_company}}<span class="_ _0">
</span><span class="_ _0">
</span></div>
            </div>
            <div class="c x3 y19 w3 hb">
                <div class="t m0 x2 h10 y10 ff1 fs4 fc0 sc0 ls0 ws0">A<span class="_ _1">
</span>/S &quot;S<span class="_ _0">
</span>wedb<span class="_ _0">
</span>anka&quot;
                </div>
            </div>
            <div class="c x7 y1a w3 hb">
                <div class="t m0 x2 h10 y12 ff1 fs4 fc0 sc0 ls0 ws0">{{$order->register_code}}</div>
            </div>
            <div class="c x7 y19 w3 hb">
                <div class="t m0 x2 h10 y10 ff1 fs4 fc0 sc0 ls0 ws0">LV53HA<span class="_ _1">
</span>BA<span class="_ _1">
</span>0551031352179
                </div>
            </div>
            <div class="c x0 y1b w5 h11">
                <div class="t m0 x2 h8 y1c ff3 fs2 fc0 sc0 ls0 ws0">Piegādātājs</div>
            </div>
            <div class="c x0 y1d w5 h7">
                <div class="t m0 x2 h9 y8 ff4 fs2 fc0 sc0 ls0 ws0">Jurid.adre<span class="_ _1">
</span>se/dekl.dz.v.
                </div>
            </div>
            <div class="c x0 y1e w5 h7">
                <div class="t m0 x2 h8 y15 ff3 fs2 fc0 sc0 ls0 ws0">Norēķinu rekvizī<span class="_ _1">
</span>ti
                </div>
            </div>
            <div class="c x5 y1b w6 h11">
                <div class="t m0 x2 h8 y1c ff3 fs2 fc0 sc0 ls0 ws0">Reģ. Nr.</div>
            </div>
            <div class="c x5 y1e w6 h7">
                <div class="t m0 x2 h9 y15 ff4 fs2 fc0 sc0 ls0 ws0">Konts</div>
            </div>
            <div class="c x3 y1f w7 hb">
                <div class="t m0 x2 hf y12 ff2 fs4 fc0 sc0 ls0 ws0"> <span class="_ _0">
</span>es iela 33-74,<span class="_ _0">
</span> Rīga, <span class="_ _0">
</span>Latvija, LV<span class="_ _0">
</span></div>
            </div>
            <div class="c x0 y20 w5 h11">
                <div class="t m0 x2 h8 y1c ff3 fs2 fc0 sc0 ls0 ws0">Iz<span class="_ _1">
</span>sniegšanas vieta
                </div>
            </div>
            <div class="c x7 y18 w3 hb">
                <div class="t m0 x2 h10 y12 ff1 fs4 fc0 sc0 ls0 ws0">{{$order->code_nds_pay}}</div>
            </div>
            <div class="c x5 y1d w6 h7">
                <div class="t m0 x2 h9 y8 ff4 fs2 fc0 sc0 ls0 ws0">PVN Nr.</div>
            </div>
            <div class="c x0 y21 wb h12">
                <div class="t m0 x8 h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">Kods</div>
            </div>
            <div class="c x9 y21 wc h12">
                <div class="t m0 xa h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">Nosaukums</div>
            </div>
            <div class="c xb y21 wd h12">
                <div class="t m0 xc h14 y22 ff3 fs5 fc0 sc0 ls0 ws0">Mērvienī<span class="_ _1">
</span>ba
                </div>
            </div>
            <div class="c xd y21 we h12">
                <div class="t m0 xc h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">Daudzums</div>
            </div>
            <div class="c xe y21 wf h12">
                <div class="t m0 xf h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">Cena</div>
                <div class="t m0 x10 h13 y2 ff4 fs5 fc0 sc0 ls0 ws0">(EUR)</div>
            </div>
            <div class="c x11 y21 w10 h12">
                <div class="t m0 x2 h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">Atlaide</div>
                <div class="t m0 x12 h13 y2 ff4 fs5 fc0 sc0 ls1 ws0">(%)</div>
            </div>
            <div class="c x13 y21 w11 h12">
                <div class="t m0 x12 h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">PVN</div>
                <div class="t m0 xc h13 y2 ff4 fs5 fc0 sc0 ls1 ws0">(%)</div>
            </div>
            <div class="c x14 y21 wf h12">
                <div class="t m0 x15 h13 y22 ff4 fs5 fc0 sc0 ls0 ws0">Summa</div>
            </div>
            @foreach($products as $product)
                <div class="c x0 y23 w12 h15">
                    <div class="t m0 x2 h16 y24 ff4 fs3 fc0 sc0 ls2 ws0">RDK</div>
                </div>
                <div class="c x9 y23 w13 h15">
                    <div class="t m0 x2 h17 y24 ff3 fs3 fc0 sc0 ls0 ws0">Rezerves daļu <span class="_ _0">
</span>kom<span class="_ _0">
</span>plek<span class="_ _0">
</span>ts
                    </div>
                </div>
                <div class="c xb y23 w14 h15">
                    <div class="t m0 x12 h16 y24 ff4 fs3 fc0 sc0 ls0 ws0">kom<span class="_ _0">
</span>plekt<span class="_ _0">
</span>i
                    </div>
                </div>
                <div class="c xd y23 w15 h15">
                    <div class="t m0 x16 h16 y24 ff4 fs3 fc0 sc0 ls0 ws0">{{$product->pivot->count}}</div>
                </div>
                <div class="c xe y23 w16 h15">
                    <div class="t m0 x17 h16 y24 ff4 fs3 fc0 sc0 ls0 ws0">{{$product->price}}</div>
                </div>
                <div class="c x11 y23 w17 h15">
                    <div class="t m0 x18 h16 y24 ff4 fs3 fc0 sc0 ls0 ws0">0</div>
                </div>
                <div class="c x13 y23 w18 h15">
                    <div class="t m0 x18 h16 y24 ff4 fs3 fc0 sc0 ls3 ws0">21</div>
                </div>
                <div class="c x14 y23 w16 h15">
                    <div
                        class="t m0 x17 h16 y24 ff4 fs3 fc0 sc0 ls0 ws0"><?=$product->pivot->count * $product->price; ?></div>
                </div>
                <div class="c x19 y25 w19 h18">
                    <div class="t m0 x2 h17 y26 ff3 fs3 fc0 sc0 ls0 ws0">Piezīm<span class="_ _0">
</span>es :{{$product->model}} {{$product->name}} </div>
                    <div class="t m0 x2 h17 y27 ff3 fs3 fc0 sc0 ls0 ws0">skāri<span class="_ _0">
</span>enjūtīgo paneli<span class="_ _0">
</span> un ram<span class="_ _0">
</span>iti<span class="_ _0">
</span> <span class="_ _0">
</span> <span class="_ _0">
</span>(Tianm<span class="_ _0">
</span>a {{$product->vendor_code}}<span class="_ _0">
</span>)
                    </div>
                </div>
            @endforeach
            <div class="c x0 y28 w12 h15">
                <div class="t m0 x2 h17 y29 ff3 fs3 fc0 sc0 ls0 ws0">PIE<span class="_ _0">
</span>GĀDE
                </div>
            </div>
            <div class="c x9 y28 w13 h15">
                <div class="t m0 x2 h17 y29 ff3 fs3 fc0 sc0 ls0 ws0">Piegāde</div>
            </div>
            <div class="c xb y28 w14 h15">
                <div class="t m0 x10 h16 y29 ff4 fs3 fc0 sc0 ls3 ws0">gab</div>
            </div>
            <div class="c xd y28 w15 h15">
                <div class="t m0 x16 h16 y29 ff4 fs3 fc0 sc0 ls0 ws0">1</div>
            </div>
            <div class="c xe y28 w16 h15">
                <div class="t m0 x1a h16 y29 ff4 fs3 fc0 sc0 ls0 ws0">3.26</div>
            </div>
            <div class="c x11 y28 w17 h15">
                <div class="t m0 x18 h16 y29 ff4 fs3 fc0 sc0 ls0 ws0">0</div>
            </div>
            <div class="c x13 y28 w18 h15">
                <div class="t m0 x18 h16 y29 ff4 fs3 fc0 sc0 ls3 ws0">21</div>
            </div>
            <div class="c x14 y28 w16 h15">
                <div class="t m0 x1a h16 y29 ff4 fs3 fc0 sc0 ls0 ws0">3.26</div>
            </div>
            <div class="c x19 y2a w19 h18">
                <div class="t m0 x2 h17 y2b ff3 fs3 fc0 sc0 ls0 ws0">Piezīm<span class="_ _0">
</span>es :<span class="_ _0">
</span> Vents<span class="_ _0">
</span>pils<span class="_ _0">
</span> Superne<span class="_ _0">
</span>tto T<span class="_ _0">
</span>ārgales pa<span class="_ _0">
</span>kom<span class="_ _0">
</span>āts<span class="_ _0">
</span> - Tārgales<span class="_ _0">
</span></div>
                <div class="t m0 x2 h16 y2c ff4 fs3 fc0 sc0 ls0 ws0">iela 62, <span class="_ _0">
</span>Vents<span class="_ _0">
</span>pils<span class="_ _0">
</span> - Ven<span class="_ _0">
</span>tspil<span class="_ _0">
</span>s
                </div>
            </div>
            <div class="c x1b y2d wa h19">
                <div class="t m0 x1c hd y2e ff1 fs3 fc0 sc0 ls0 ws0">0.00</div>
                <div class="t m0 x1d hd y2f ff1 fs3 fc0 sc0 ls0 ws0">{{$order->total_amout}}</div>
                <div
                    class="t m0 x1c hd y30 ff1 fs3 fc0 sc0 ls0 ws0"><?php $pvn = $order->total_amout / 100 * 21; echo $pvn; ?></div>
                <div class="t m0 x1d hd y31 ff1 fs3 fc0 sc0 ls0 ws0"><?= $order->total_amout + $pvn; ?></div>
                <div class="t m0 x1d hd y32 ff1 fs3 fc0 sc0 ls0 ws0"><?= $order->total_amout + $pvn; ?></div>
            </div>
            <div class="c x1e y33 w1a h1a">
                <div class="t m0 x9 h16 y34 ff4 fs3 fc0 sc0 ls0 ws0">Atlaide<span class="_ _0">
</span> (EUR)
                </div>
                <div class="t m0 x1f h16 y35 ff4 fs3 fc0 sc0 ls0 ws0">ar PVN <span class="_ _0">
</span>21% <span class="_ _0">
</span>apl. s<span class="_ _0">
</span>um<span class="_ _0">
</span>ma <span class="_ _0">
</span>(EUR)
                </div>
                <div class="t m0 x20 h16 y36 ff4 fs3 fc0 sc0 ls0 ws0">PVN <span class="_ _0">
</span>21% (E<span class="_ _0">
</span>UR)
                </div>
                <div class="t m0 x21 h17 y37 ff3 fs3 fc0 sc0 ls0 ws0">Sum<span class="_ _0">
</span>ma <span class="_ _0">
</span>kopā <span class="_ _0">
</span>(EUR)
                </div>
                <div class="t m0 x22 h16 y38 ff4 fs3 fc0 sc0 ls0 ws0">Sum<span class="_ _0">
</span>ma <span class="_ _0">
</span>apm<span class="_ _0">
</span>aks<span class="_ _0">
</span>ai (EU<span class="_ _0">
</span>R)
                </div>
            </div>
            <div class="c x0 y39 w1b h1b">
                <div class="t m0 xc h17 y2c ff3 fs3 fc0 sc0 ls0 ws0">Apm<span class="_ _0">
</span>aks<span class="_ _0">
</span>as <span class="_ _0">
</span>sum<span class="_ _0">
</span>m<span class="_ _0">
</span>a vārdiem<span class="_ _0">
</span>:
                </div>
            </div>
            <div class="c x4 y3a w1c h2">
                <div class="t m0 x2 h4 y2 ff2 fs0 fc0 sc0 ls0 ws0"><?= $order->total_amout + $pvn; ?><span class="_ _0">
</span> <span class="_ _0">
</span><span class="_ _0">
</span> <span class="_ _0">
</span></div>
            </div>
            <div class="c x23 y3b w1d h1c">
                <div class="t m0 x24 h1d y3c ff3 fs6 fc0 sc0 ls0 ws0">Sa<span class="_ _1"></span>stād<span
                        class="_ _0"></span>ī<span class="_ _1"></span>ja<span class="ff5">:<span
                            class="_ _2"> </span><span class="ls4">___<span class="ff4">___________</span>__<span
                                class="ff4">_________<span class="_ _0"></span></span>_____</span></span></div>
                <div class="t m0 x9 h17 y3d ff3 fs3 fc0 sc0 ls0 ws0">vārds, uzvā<span class="_ _1"></span>rd<span
                        class="_ _0"></span>s
                </div>
                <div class="t m0 x25 h1d y3e ff5 fs6 fc0 sc0 ls4 ws0">___<span class="ff4">___________</span>__<span
                        class="ff4">_________<span class="_ _0"></span></span>_____
                </div>
            </div>
            <div class="c x23 y3f w1d h1e">
                <div class="t m0 x25 h1f y40 ff5 fs7 fc0 sc0 ls5 ws0">___<span class="ff4">___________</span>__<span
                        class="ff4">__________<span class="_ _0">
</span>
</span>____
                </div>
                <div class="t m0 x26 h20 y41 ff3 fs8 fc0 sc0 ls0 ws0">p<span class="_ _0">
</span>araksts, zī<span class="_ _1">
</span>mo<span class="_ _0">
</span>g<span class="_ _0">
</span>s
                </div>
            </div>
            <div class="c x27 y42 w1d h21">
                <div class="t m0 x2 h1d y43 ff4 fs6 fc0 sc0 ls0 ws0">2020. gada 2<span class="_ _1">
</span>. novembris
                </div>
            </div>
        </div>
        <div class="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'>
        </div>
    </div>
</div>
<div class="loading-indicator">
    <img alt="" src="pdf2htmlEX-64x64.png"/>
</div>
</body>
</html>

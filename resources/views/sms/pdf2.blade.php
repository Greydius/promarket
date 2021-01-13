<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        /*!
 * Base CSS
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com>
 * https://github.com/coolwanglu/pdf2htmlEX/blob/master/share/LICENSE
 */#sidebar{position:absolute;top:0;left:0;bottom:0;width:250px;padding:0;margin:0;overflow:auto}#page-container{position:absolute;top:0;left:0;margin:0;padding:0;border:0}@media screen{#sidebar.opened+#page-container{left:250px}#page-container{bottom:0;right:0;overflow:auto}.loading-indicator{display:none}.loading-indicator.active{display:block;position:absolute;width:64px;height:64px;top:50%;left:50%;margin-top:-32px;margin-left:-32px}.loading-indicator img{position:absolute;top:0;left:0;bottom:0;right:0}}@media print{@page{margin:0}html{margin:0}body{margin:0;-webkit-print-color-adjust:exact}#sidebar{display:none}#page-container{width:auto;height:auto;overflow:visible;background-color:transparent}.d{display:none}}.pf{position:relative;background-color:white;overflow:hidden;margin:0;border:0}.pc{position:absolute;border:0;padding:0;margin:0;top:0;left:0;width:100%;height:100%;overflow:hidden;display:block;transform-origin:0 0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0}.pc.opened{display:block}.bf{position:absolute;border:0;margin:0;top:0;bottom:0;width:100%;height:100%;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.bi{position:absolute;border:0;margin:0;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}@media print{.pf{margin:0;box-shadow:none;page-break-after:always;page-break-inside:avoid}@-moz-document url-prefix(){.pf{overflow:visible;border:1px solid #fff}.pc{overflow:visible}}}.c{position:absolute;border:0;padding:0;margin:0;overflow:hidden;display:block}.t{position:absolute;white-space:pre;font-size:1px;transform-origin:0 100%;-ms-transform-origin:0 100%;-webkit-transform-origin:0 100%;unicode-bidi:bidi-override;-moz-font-feature-settings:"liga" 0}.t:after{content:''}.t:before{content:'';display:inline-block}.t span{position:relative;unicode-bidi:bidi-override}._{display:inline-block;color:transparent;z-index:-1}::selection{background:rgba(127,255,255,0.4)}::-moz-selection{background:rgba(127,255,255,0.4)}.pi{display:none}.d{position:absolute;transform-origin:0 100%;-ms-transform-origin:0 100%;-webkit-transform-origin:0 100%}.it{border:0;background-color:rgba(255,255,255,0.0)}.ir:hover{cursor:pointer}
    </style>
    <style>
        /*!
 * Fancy styles
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com>
 * https://github.com/coolwanglu/pdf2htmlEX/blob/master/share/LICENSE
 */@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes swing{0{transform:rotate(0)}10%{transform:rotate(0)}90%{transform:rotate(720deg)}100%{transform:rotate(720deg)}}@-webkit-keyframes swing{0{-webkit-transform:rotate(0)}10%{-webkit-transform:rotate(0)}90%{-webkit-transform:rotate(720deg)}100%{-webkit-transform:rotate(720deg)}}@media screen{#sidebar{background-color:#2f3236;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")}#outline{font-family:Georgia,Times,"Times New Roman",serif;font-size:13px;margin:2em 1em}#outline ul{padding:0}#outline li{list-style-type:none;margin:1em 0}#outline li>ul{margin-left:1em}#outline a,#outline a:visited,#outline a:hover,#outline a:active{line-height:1.2;color:#e8e8e8;text-overflow:ellipsis;white-space:nowrap;text-decoration:none;display:block;overflow:hidden;outline:0}#outline a:hover{color:#0cf}#page-container{background-color:#9e9e9e;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");-webkit-transition:left 500ms;transition:left 500ms}.pf{margin:13px auto;box-shadow:1px 1px 3px 1px #333;border-collapse:separate}.pc.opened{-webkit-animation:fadein 100ms;animation:fadein 100ms}.loading-indicator.active{-webkit-animation:swing 1.5s ease-in-out .01s infinite alternate none;animation:swing 1.5s ease-in-out .01s infinite alternate none}.checked{background:no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)}}
    </style>
    <style>
        .ff0{font-family:sans-serif;visibility:hidden;}
        @font-face{font-family:ff1;src:url(f1.woff)format("woff");}.ff1{font-family:ff1;line-height:0.979980;font-style:normal;font-weight:normal;visibility:visible;}
        @font-face{font-family:ff2;src:url(f2.woff)format("woff");}.ff2{font-family:ff2;line-height:0.715820;font-style:normal;font-weight:normal;visibility:visible;}
        @font-face{font-family:ff3;src:url(f3.woff)format("woff");}.ff3{font-family:ff3;line-height:1.081055;font-style:normal;font-weight:normal;visibility:visible;}
        @font-face{font-family:ff4;src:url(f4.woff)format("woff");}.ff4{font-family:ff4;line-height:0.669434;font-style:normal;font-weight:normal;visibility:visible;}
        @font-face{font-family:ff5;src:url(f5.woff)format("woff");}.ff5{font-family:ff5;line-height:0.941895;font-style:normal;font-weight:normal;visibility:visible;}
        .m0{transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);-ms-transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);-webkit-transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);}
        .v0{vertical-align:0.000000px;}
        .ls0{letter-spacing:0.000000px;}
        .sc_{text-shadow:none;}
        .sc0{text-shadow:-0.015em 0 transparent,0 0.015em transparent,0.015em 0 transparent,0 -0.015em  transparent;}
        @media screen and (-webkit-min-device-pixel-ratio:0){
            .sc_{-webkit-text-stroke:0px transparent;}
            .sc0{-webkit-text-stroke:0.015em transparent;text-shadow:none;}
        }
        .ws0{word-spacing:0.000000px;}
        .fc1{color:rgb(0,0,0);}
        .fc0{color:rgb(255,0,0);}
        .fs0{font-size:28.000000px;}
        .fs3{font-size:32.000000px;}
        .fs2{font-size:44.000000px;}
        .fs1{font-size:48.000000px;}
        .y3b{bottom:2.483000px;}
        .y2{bottom:2.954000px;}
        .y29{bottom:3.483000px;}
        .y8{bottom:3.695001px;}
        .y26{bottom:4.483000px;}
        .y32{bottom:4.545000px;}
        .y7{bottom:4.633000px;}
        .y31{bottom:5.483000px;}
        .y2a{bottom:7.507999px;}
        .y24{bottom:8.507999px;}
        .y2f{bottom:10.443999px;}
        .y3a{bottom:10.532000px;}
        .y28{bottom:11.532000px;}
        .y22{bottom:12.532000px;}
        .yb{bottom:14.894001px;}
        .ya{bottom:15.832001px;}
        .y23{bottom:16.556999px;}
        .y17{bottom:17.938000px;}
        .y39{bottom:18.580999px;}
        .y10{bottom:18.875999px;}
        .y25{bottom:20.580999px;}
        .y2e{bottom:20.643000px;}
        .y2d{bottom:21.580999px;}
        .y38{bottom:24.629999px;}
        .y37{bottom:26.629999px;}
        .y14{bottom:29.136999px;}
        .y13{bottom:30.074999px;}
        .y36{bottom:34.678999px;}
        .y3{bottom:42.550037px;}
        .y35{bottom:227.982040px;}
        .y34{bottom:246.371977px;}
        .y33{bottom:301.426019px;}
        .y30{bottom:312.625023px;}
        .y2c{bottom:324.674023px;}
        .y2b{bottom:352.821023px;}
        .y27{bottom:366.820023px;}
        .y0{bottom:367.500000px;}
        .y21{bottom:385.418022px;}
        .y20{bottom:416.865026px;}
        .y1f{bottom:442.307013px;}
        .y1e{bottom:467.749017px;}
        .y1d{bottom:478.948022px;}
        .y1c{bottom:490.647024px;}
        .y1b{bottom:516.089025px;}
        .y1a{bottom:541.531027px;}
        .y19{bottom:567.473028px;}
        .y18{bottom:592.915032px;}
        .y16{bottom:604.114035px;}
        .y15{bottom:629.556024px;}
        .y12{bottom:640.755027px;}
        .y11{bottom:666.197030px;}
        .yf{bottom:677.896029px;}
        .ye{bottom:703.338025px;}
        .yd{bottom:714.537026px;}
        .y5{bottom:720.613988px;}
        .yc{bottom:725.736026px;}
        .y9{bottom:736.935026px;}
        .y4{bottom:745.543988px;}
        .y6{bottom:748.134027px;}
        .y1{bottom:800.122024px;}
        .h7{height:13.199000px;}
        .h2{height:13.428000px;}
        .he{height:14.049000px;}
        .hd{height:20.098000px;}
        .h3{height:21.546875px;}
        .hf{height:23.406250px;}
        .h9{height:24.398001px;}
        .ha{height:27.441999px;}
        .h8{height:27.859375px;}
        .hc{height:30.146999px;}
        .h6{height:38.306641px;}
        .hb{height:38.640999px;}
        .h5{height:41.789062px;}
        .h10{height:42.244999px;}
        .h1{height:393.500000px;}
        .h4{height:756.799988px;}
        .h0{height:841.900024px;}
        .wa{width:36.950001px;}
        .w10{width:42.849998px;}
        .w9{width:44.000000px;}
        .wc{width:44.049999px;}
        .w14{width:44.500000px;}
        .wb{width:51.099998px;}
        .w12{width:58.700001px;}
        .w3{width:72.849998px;}
        .wf{width:87.050003px;}
        .wd{width:93.550003px;}
        .w5{width:99.550003px;}
        .w11{width:101.250000px;}
        .w4{width:113.650002px;}
        .w13{width:115.400002px;}
        .w15{width:151.199997px;}
        .w8{width:226.199997px;}
        .w6{width:243.000000px;}
        .we{width:370.600006px;}
        .w7{width:425.500000px;}
        .w1{width:523.000000px;}
        .w2{width:595.299976px;}
        .w0{width:595.299988px;}
        .x1{left:0.000000px;}
        .x26{left:4.757999px;}
        .x6{left:6.400000px;}
        .xe{left:8.944000px;}
        .xc{left:10.714000px;}
        .x13{left:13.032000px;}
        .xb{left:14.807000px;}
        .x11{left:16.582000px;}
        .x17{left:20.078001px;}
        .x15{left:24.022999px;}
        .x16{left:26.907000px;}
        .x22{left:34.504999px;}
        .x27{left:43.891001px;}
        .x0{left:51.000000px;}
        .x4{left:56.700001px;}
        .x1f{left:60.630000px;}
        .x29{left:61.790999px;}
        .x1c{left:65.080000px;}
        .x18{left:69.883002px;}
        .x23{left:91.149999px;}
        .x9{left:94.621001px;}
        .x19{left:126.550001px;}
        .x8{left:147.850004px;}
        .x24{left:204.550001px;}
        .x3{left:240.468998px;}
        .x1d{left:244.776007px;}
        .x25{left:261.249998px;}
        .xa{left:275.249998px;}
        .x21{left:286.794013px;}
        .x1e{left:310.521002px;}
        .xd{left:317.750013px;}
        .x1a{left:321.410986px;}
        .x20{left:326.466010px;}
        .xf{left:353.199995px;}
        .x5{left:388.849988px;}
        .x10{left:402.800001px;}
        .x28{left:431.349988px;}
        .x12{left:445.349988px;}
        .x7{left:459.699995px;}
        .x14{left:480.800001px;}
        .x1b{left:495.150007px;}
        .x2{left:566.950001px;}
        @media print{
            .v0{vertical-align:0.000000pt;}
            .ls0{letter-spacing:0.000000pt;}
            .ws0{word-spacing:0.000000pt;}
            .fs0{font-size:37.333333pt;}
            .fs3{font-size:42.666667pt;}
            .fs2{font-size:58.666667pt;}
            .fs1{font-size:64.000000pt;}
            .y3b{bottom:3.310666pt;}
            .y2{bottom:3.938667pt;}
            .y29{bottom:4.644000pt;}
            .y8{bottom:4.926668pt;}
            .y26{bottom:5.977333pt;}
            .y32{bottom:6.060000pt;}
            .y7{bottom:6.177334pt;}
            .y31{bottom:7.310666pt;}
            .y2a{bottom:10.010666pt;}
            .y24{bottom:11.343999pt;}
            .y2f{bottom:13.925332pt;}
            .y3a{bottom:14.042666pt;}
            .y28{bottom:15.375999pt;}
            .y22{bottom:16.709333pt;}
            .yb{bottom:19.858668pt;}
            .ya{bottom:21.109334pt;}
            .y23{bottom:22.075999pt;}
            .y17{bottom:23.917333pt;}
            .y39{bottom:24.774666pt;}
            .y10{bottom:25.167999pt;}
            .y25{bottom:27.441333pt;}
            .y2e{bottom:27.524000pt;}
            .y2d{bottom:28.774666pt;}
            .y38{bottom:32.839999pt;}
            .y37{bottom:35.506666pt;}
            .y14{bottom:38.849332pt;}
            .y13{bottom:40.099998pt;}
            .y36{bottom:46.238665pt;}
            .y3{bottom:56.733383pt;}
            .y35{bottom:303.976054pt;}
            .y34{bottom:328.495969pt;}
            .y33{bottom:401.901358pt;}
            .y30{bottom:416.833364pt;}
            .y2c{bottom:432.898697pt;}
            .y2b{bottom:470.428031pt;}
            .y27{bottom:489.093363pt;}
            .y0{bottom:490.000000pt;}
            .y21{bottom:513.890696pt;}
            .y20{bottom:555.820035pt;}
            .y1f{bottom:589.742683pt;}
            .y1e{bottom:623.665356pt;}
            .y1d{bottom:638.597363pt;}
            .y1c{bottom:654.196032pt;}
            .y1b{bottom:688.118701pt;}
            .y1a{bottom:722.041369pt;}
            .y19{bottom:756.630704pt;}
            .y18{bottom:790.553377pt;}
            .y16{bottom:805.485380pt;}
            .y15{bottom:839.408031pt;}
            .y12{bottom:854.340036pt;}
            .y11{bottom:888.262707pt;}
            .yf{bottom:903.861371pt;}
            .ye{bottom:937.784033pt;}
            .yd{bottom:952.716035pt;}
            .y5{bottom:960.818651pt;}
            .yc{bottom:967.648034pt;}
            .y9{bottom:982.580035pt;}
            .y4{bottom:994.058651pt;}
            .y6{bottom:997.512035pt;}
            .y1{bottom:1066.829365pt;}
            .h7{height:17.598667pt;}
            .h2{height:17.904001pt;}
            .he{height:18.732000pt;}
            .hd{height:26.797333pt;}
            .h3{height:28.729167pt;}
            .hf{height:31.208333pt;}
            .h9{height:32.530668pt;}
            .ha{height:36.589333pt;}
            .h8{height:37.145833pt;}
            .hc{height:40.195999pt;}
            .h6{height:51.075521pt;}
            .hb{height:51.521332pt;}
            .h5{height:55.718750pt;}
            .h10{height:56.326665pt;}
            .h1{height:524.666667pt;}
            .h4{height:1009.066650pt;}
            .h0{height:1122.533366pt;}
            .wa{width:49.266668pt;}
            .w10{width:57.133331pt;}
            .w9{width:58.666667pt;}
            .wc{width:58.733332pt;}
            .w14{width:59.333333pt;}
            .wb{width:68.133331pt;}
            .w12{width:78.266668pt;}
            .w3{width:97.133331pt;}
            .wf{width:116.066671pt;}
            .wd{width:124.733337pt;}
            .w5{width:132.733337pt;}
            .w11{width:135.000000pt;}
            .w4{width:151.533335pt;}
            .w13{width:153.866669pt;}
            .w15{width:201.599996pt;}
            .w8{width:301.599996pt;}
            .w6{width:324.000000pt;}
            .we{width:494.133341pt;}
            .w7{width:567.333333pt;}
            .w1{width:697.333333pt;}
            .w2{width:793.733302pt;}
            .w0{width:793.733317pt;}
            .x1{left:0.000000pt;}
            .x26{left:6.343999pt;}
            .x6{left:8.533333pt;}
            .xe{left:11.925333pt;}
            .xc{left:14.285334pt;}
            .x13{left:17.376000pt;}
            .xb{left:19.742666pt;}
            .x11{left:22.109334pt;}
            .x17{left:26.770667pt;}
            .x15{left:32.030666pt;}
            .x16{left:35.876000pt;}
            .x22{left:46.006665pt;}
            .x27{left:58.521335pt;}
            .x0{left:68.000000pt;}
            .x4{left:75.600001pt;}
            .x1f{left:80.840000pt;}
            .x29{left:82.387999pt;}
            .x1c{left:86.773334pt;}
            .x18{left:93.177336pt;}
            .x23{left:121.533332pt;}
            .x9{left:126.161334pt;}
            .x19{left:168.733334pt;}
            .x8{left:197.133338pt;}
            .x24{left:272.733334pt;}
            .x3{left:320.625331pt;}
            .x1d{left:326.368010pt;}
            .x25{left:348.333330pt;}
            .xa{left:366.999997pt;}
            .x21{left:382.392017pt;}
            .x1e{left:414.028003pt;}
            .xd{left:423.666684pt;}
            .x1a{left:428.547982pt;}
            .x20{left:435.288013pt;}
            .xf{left:470.933326pt;}
            .x5{left:518.466651pt;}
            .x10{left:537.066668pt;}
            .x28{left:575.133318pt;}
            .x12{left:593.799985pt;}
            .x7{left:612.933326pt;}
            .x14{left:641.066668pt;}
            .x1b{left:660.200009pt;}
            .x2{left:755.933334pt;}
        }
    </style>
    <script>
        /*
         Copyright 2012 Mozilla Foundation
         Copyright 2013 Lu Wang <coolwanglu@gmail.com>
         Apachine License Version 2.0
        */
        (function(){function b(a,b,e,f){var c=(a.className||"").split(/\s+/g);""===c[0]&&c.shift();var d=c.indexOf(b);0>d&&e&&c.push(b);0<=d&&f&&c.splice(d,1);a.className=c.join(" ");return 0<=d}if(!("classList"in document.createElement("div"))){var e={add:function(a){b(this.element,a,!0,!1)},contains:function(a){return b(this.element,a,!1,!1)},remove:function(a){b(this.element,a,!1,!0)},toggle:function(a){b(this.element,a,!0,!0)}};Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList;
                var a=Object.create(e,{element:{value:this,writable:!1,enumerable:!0}});Object.defineProperty(this,"_classList",{value:a,writable:!1,enumerable:!1});return a},enumerable:!0})}})();
    </script>
    <script>
        try {
            pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
        } catch (e) {
        }
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
            <img class="bi x0 y0 w1 h1" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBYAAAMTCAIAAACaKgPAAAAACXBIWXMAABYlAAAWJQFJUiTwAAAOZUlEQVR42u3aMW6DQBCGUTbiktD5JlPNUfaM9jaTgjpkbSmKbN6rtuUHIX3StsfjkZkLAADAzyLiOLSqMgcAADDpywQAAICEAAAAJAQAACAhAAAACQEAAEgIAABAQpgAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgTAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAAAlhAgAAQEIAAAASAgAAkBAAAICEAAAAJAQAACAhTAAAAEgIAABAQgAAABICAACQEAAAgIQAAAAkhAkAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhDABAAAgIQAAAAkBAABICAAAQEIAAAASAgAAkBAmAAAAJAQAACAhAAAACQEAAEgIAABAQgAAABLCBAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAEBCmAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICBMAAAASAgAAkBAAAICEAAAAJAQAACAhAAAACWECAABAQgAAABICAACQEAAAgIQAAAAkBAAAICFMAAAASAgAAEBCAAAAEgIAAJAQAACAhAAAACSECQAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEMAEAACAhAAAACQEAAEgIAABAQgAAABICAACQECYAAAAkBAAAICEAAAAJAQAASAgAAEBCAAAAEsIEAACAhAAAACQEAAAgIQAAAAkBAABICAAAQEKYAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIEwAAABICAACQEAAAgIQAAAAkBAAAICEAAAAJYQIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIUwAAABICAAAQEIAAAASAgAAkBAAAICEAAAAJIQJAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQwAQAAICEAAAAJAQAASAgAAEBCAAAAEgIAAJAQJgAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASwgQAAICEAAAAJAQAACAhAAAACQEAAEgIAABAQpgAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgTAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAgMtbxxiZaQgAAOBERByHVlXmAAAAJrnIBAAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICAAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICAAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICAAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICAAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICAAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAAAkBAABICAAAAAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAA/24dY2SmIQAAgBMRcRxaVZkDAACY5CITAAAgIQAAAAkBAABICAAAQEIAAAASAgAAQEIAAAASAgAAkBAAAICEAAAAJAQAACAhAAAAJAQAACAhAAAACQEAAEgIAABAQgAAABICAABAQgAAABICAACQEAAAgIQAAAAkBAAAICEAAAAkBAAAICEAAAAJAQAASAgAAEBCAAAAEgIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASAgAAQEIAAAASAgAAkBAAAICEAAAAJAQAACAhAAAAJAQAACAhAAAACQEAAEgIAABAQgAAABICAABAQgAAABICAACQEAAAgIQAAAAkBAAAICEAAAAkBAAAICEAAAAJAQAASAgAAEBCAAAAEgIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASAgAAQEIAAAASAgAAkBAAAICEAAAAJAQAACAhAAAAJAQAACAhAAAACQEAAEgIAABAQgAAABICAABAQgAAABICAACQEAAAgIQAAAAkBAAAICEAAAAkBAAAICEAAAAJAQAASAgAAEBCAAAAEgIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASAgAAQEIAAAASAgAAkBAAAICEAAAAJAQAACAhAAAAJAQAACAhAAAACQEAAEgIAABAQgAAABICAABAQgAAABICAACQEAAAgIQAAAAkBAAAICEAAAAkBAAAICEAAAAJAQAASAgAAEBCAAAAEgIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASAgAAQEIAAAASAgAA+BvrGCMzDQEAAJyIiOPQqsocAADAJBeZAAAACQEAAEgIAABAQgAAABICAACQEAAAABICAACQEAAAgIQAAAAkBAAAICEAAAAJAQAAICEAAAAJAQAASAgAAEBCAAAAEgIAAJAQAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAAAkBAAAgIQAAAAkBAABICAAAQEIAAAASAgAAkBAAAAASAgAAkBAAAICEAAAAJAQAACAhAAAACQEAACAhAAAACQEAAEgIAABAQgAAABICAACQEAAAABICAACQEAAAgIQAAAAkBAAAICEAAAAJAQAAICEAAAAJAQAASAgAAEBCAAAAEgIAAJAQAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAAAkBAAAgIQAAAAkBAABICAAAQEIAAAASAgAAkBAAAAASAgAAkBAAAICEAAAAJAQAACAhAAAACQEAACAhAAAACQEAAEgIAABAQgAAABICAACQEAAAABICAACQEAAAgIQAAAAkBAAAICEAAAAJAQAAICEAAAAJAQAASAgAAEBCAAAAEgIAAJAQAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAAAkBAAAgIQAAAAkBAABICAAAQEIAAAASAgAAkBAAAAASAgAAkBAAAICEAAAAJAQAACAhAAAACQEAACAhAAAACQEAAEgIAABAQgAAABICAACQEAAAABICAACQEAAAgIQAAAAkBAAAICEAAAAJAQAAICEAAAAJAQAASAgAAEBCAAAAEgIAAJAQAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAAAkBAAAgIQAAAAkBAABICAAAQEIAAAASAgAAkBAAAAASAgAAkBAAAICEAAAAJAQAACAhAAAACQEAACAhAACAJ6xjjMw0BAAAcCIijkOrKnMAAACTXGQCAAAkBAAAICEAAAAJAQAAvJO2bZsVAACASeuyLL13QwC8YN/3i/9CP28B79RWV3583z+T34mLTAAAwBMkBAAAICEAAAAJAQAASAgAAEBCAAAAEgIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASAgAAQEIAAAASAgAAkBAAAICEAAAAJAQAACAhAAAAJAQAACAhAAAACQEAAEgIAABAQgAAABICAABAQgAAABICAACQEAAAgIQAAAAkBAAAICEAAAAkBAAAICEAAAAJAQAASAgAAEBCAAAAEgIAAEBCAAAAEgIAAJAQAACAhAAAACQEAAAgIQAAACQEAAAgIQAAAAkBAABICAAAQEIAAAASAgAAoG3bZgUAAGDSuixL790QAC/Y9/3iv9DPW8A7tdWVH9/3z+R34iITAADwBAkBAABICAAAQEIAAAASAgAAkBAAAICEAAAAkBAAAICEAAAAJAQAACAhAAAACQEAAEgIAAAACQEAAEgIAABAQgAAABICAACQEAAAgIQAAACQEAAAgIQAAAAkBAAAICEAAAAJAQAASAgAAAAJAQAASAgAAEBCAAAAEgIAAJAQAACAhAAAAJAQAACAhAAAACQEAAAgIQAAgHfS7vf77XYzBAAA8Kve+zdizWUr/ledFAAAAABJRU5ErkJggg=="/>
            <div class="c x1 y1 w2 h2">
                <div class="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0"><span class="ff2 fc1"> </span>
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
                <div class="t m0 x6 h8 y8 ff1 fs0 fc1 sc0 ls0 ws0"><span
                        class="ff3 fs3">{{$order->register_code}}</span>
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
                <div class="t m0 x6 h8 y17 ff3 fs3 fc0 sc0 ls0 ws0"></div>
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
                <div class="t m0 xc h3 y23 ff1 fs0 fc1 sc0 ls0 ws0">Atlaide</div>
                <div class="t m0 x11 h3 y24 ff1 fs0 fc1 sc0 ls0 ws0">(%)</div>
            </div>
            <div class="c x12 y21 wa hc">
                <div class="t m0 xc h3 y25 ff1 fs0 fc1 sc0 ls0 ws0">PVN</div>
                <div class="t m0 xc h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">likme</div>
                <div class="t m0 x13 h3 y26 ff1 fs0 fc1 sc0 ls0 ws0">(%)</div>
            </div>
            <div class="c x14 y21 wd hc">
                <div class="t m0 x15 h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">Summa (EUR)</div>
            </div>
            @foreach($products as $product)
                <div class="c x0 y27 w8 hd">
                    <div class="t m0 x6 h3 y28 ff1 fs0 fc1 sc0 ls0 ws0">Rezerves daļu komplekts
                        ( {{$product->name}}</div>
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
                    <div
                        class="t m0 x18 h3 y2a ff1 fs0 fc1 sc0 ls0 ws0"><?=$product->pivot->count * $product->price; ?></div>
                </div>
            @endforeach
            <div class="c x19 y2b we h7">
                <div class="t m0 x1a h3 y7 ff1 fs0 fc1 sc0 ls0 ws0">Atlaide (EUR)</div>
            </div>
            <div class="c x1b y2b wf h7">
                <div class="t m0 x1c h8 y8 ff3 fs3 fc1 sc0 ls0 ws0">0.00</div>
            </div>
            <div class="c x19 y2c we hc">
                <div class="t m0 x1d h3 y2d ff1 fs0 fc1 sc0 ls0 ws0">Ar PVN 21% apliekamā summa (EUR)</div>
                <div class="t m0 x1e h3 y22 ff1 fs0 fc1 sc0 ls0 ws0">PVN 21% (EUR)</div>
            </div>
            <div class="c x1b y2c wf hc">
                <div class="t m0 x1f h8 y2e ff3 fs3 fc1 sc0 ls0 ws0">{{$order->total_amout}}</div>
                <div
                    class="t m0 x1f h8 y2f ff3 fs3 fc1 sc0 ls0 ws0"><?php $pvn = $order->total_amout / 100 * 21; echo $pvn; ?></div>
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
                <div class="t m0 x4 hf y34 ff1 fs0 fc1 sc0 ls0 ws0">Apmaksas summa vārdiem:<span class="ff4"> <span
                            class="ff5 fs3">Sešdesmit eiro 0 cents(i)</span>
</span>
                </div>
            </div>
            <div class="c x0 y35 w10 h10">
                <div class="t m0 x6 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">Izsniedza</div>
                <div class="t m0 x22 h3 y37 ff1 fs0 fc1 sc0 ls0 ws0">:</div>
            </div>
            <div class="c x23 y35 w11 h10">
                <div class="t m0 x1 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">________________________</div>
                <div class="t m0 x6 h3 y38 ff1 fs0 fc1 sc0 ls0 ws0"><?php echo date("d.m.Y"); ?></div>
            </div>
            <div class="c x24 y35 w12 h10">
                <div class="t m0 x15 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">Pieņēma</div>
                <div class="t m0 xe h3 y37 ff1 fs0 fc1 sc0 ls0 ws0">pārvadāšanā:</div>
            </div>
            <div class="c x25 y35 w13 h10">
                <div class="t m0 x26 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">____________________</div>
                <div class="t m0 x11 h3 y39 ff1 fs0 fc1 sc0 ls0 ws0">_____________________</div>
                <div class="t m0 x27 h3 y3a ff1 fs0 fc1 sc0 ls0 ws0">(datums)</div>
            </div>
            <div class="c x5 y35 w14 h10">
                <div class="t m0 xc h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">Saņēma:</div>
            </div>
            <div class="c x28 y35 w15 h10">
                <div class="t m0 x17 h3 y36 ff1 fs0 fc1 sc0 ls0 ws0">___________________________</div>
                <div class="t m0 x22 h3 y37 ff1 fs0 fc1 sc0 ls0 ws0">(Vārds, uzvārds, paraksts)</div>
                <div class="t m0 x22 h3 y3a ff1 fs0 fc1 sc0 ls0 ws0">_____________________</div>
                <div class="t m0 x29 h3 y3b ff1 fs0 fc1 sc0 ls0 ws0">(datums)</div>
            </div>
        </div>
        <div class="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'>
        </div>
    </div>
</div>
</body>
</html>
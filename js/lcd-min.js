var Lcd=function(T){var l=document;var m=T||{};var K=m.id||"control";var f=m.parentId||"body";var k=m.upperCenterText||"";var o=m.upperCenterTextVisible==undefined?false:m.upperCenterTextVisible;var Q=m.unitString||"";var j=m.unitVisible==undefined?false:m.unitVisible;var p=m.lowerRightText||"";var I=m.lowerRightTextVisible==undefined?false:m.lowerRightTextVisible;var O=m.value||0;var G=m.decimals||2;var i=m.threshold||100;var J=m.thresholdVisible==undefined?false:m.thresholdVisible;var x=m.upperLeftText||0;var r=m.upperLeftTextVisible==undefined?false:m.upperLeftTextVisible;var L=m.upperRightText||0;var D=m.upperRightTextVisible==undefined?false:m.upperRightTextVisible;var R=m.lowerCenterText||"";var v=m.lowerCenterTextVisible==undefined?false:m.lowerCenterTextVisible;var ac=m.battery||"";var c=m.batteryVisible==undefined?false:m.batteryVisible;var C=m.trend||"";var y=m.trendVisible==undefined?false:m.trendVisible;var E=m.crystalEffectVisible==undefined?false:m.crystalEffectVisible;var b=m.width||window.innerWidth;var g=m.height||window.innerWidth*0.2666666666;var V=m.scalable||false;var s=m.design||"standard";var h=m.foregroundShadowEnabled==undefined?false:m.foregroundShadowEnabled;var X="rgb(53, 42, 52)";var d="rgba(53, 42, 52, 0.1)";if(V){window.addEventListener("resize",P,false)}const ab="digital-7mono";var Y=Math.floor(0.5833333333*g);var N=Y+"px "+ab;const e="Arial, sans-serif";var F=(0.26*g)+"px "+e;var A=(0.1666666667*g)+"px "+e;var u=(0.1666666667*g)+"px "+e;var aa=100;var B=0;var z=0;var n=l.createElement("canvas");n.id=K;if(f==="body"){l.body.appendChild(n)}else{l.getElementById(f).appendChild(n)}var S=l.getElementById(K).getContext("2d");var W=l.createElement("canvas");var M=l.createElement("canvas");var H=l.createElement("canvas");var q=function(){var ao=W.getContext("2d");var ad=W.width;var an=W.height;var ai=0.09375*an;ao.clearRect(0,0,ad,an);var ae=ao.createLinearGradient(0,0,0,an);ae.addColorStop(0,"rgb(26, 26, 26)");ae.addColorStop(0.01,"rgb(77, 77, 77)");ae.addColorStop(0.83,"rgb(77, 77, 77)");ae.addColorStop(1,"rgb(221, 221, 221)");var ah=ao.createLinearGradient(0,0.021*an,0,0.98*an);if(s=="lcd-beige"){ah.addColorStop(0,"rgb(200, 200, 177)");ah.addColorStop(0.005,"rgb(241, 237, 207)");ah.addColorStop(0.5,"rgb(234, 230, 194)");ah.addColorStop(0.5,"rgb(225, 220, 183)");ah.addColorStop(1,"rgb(237, 232, 191)");X="rgb(0, 0, 0)";d="rgba(0, 0, 0, 0.1)"}else{if(s=="blue"){ah.addColorStop(0,"rgb(255, 255, 255)");ah.addColorStop(0.005,"rgb(231, 246, 255)");ah.addColorStop(0.5,"rgb(170, 224, 255)");ah.addColorStop(0.5,"rgb(136, 212, 255)");ah.addColorStop(1,"rgb(192, 232, 255)");X="rgb( 18, 69, 100)";d="rgba(18, 69, 100, 0.1)"}else{if(s=="orange"){ah.addColorStop(0,"rgb(255, 255, 255)");ah.addColorStop(0.005,"rgb(255, 245, 225)");ah.addColorStop(0.5,"rgb(255, 217, 147)");ah.addColorStop(0.5,"rgb(255, 201, 104)");ah.addColorStop(1,"rgb(255, 227, 173)");X="rgb( 80, 55, 0)";d="rgba(80, 55, 0, 0.1)"}else{if(s=="red"){ah.addColorStop(0,"rgb(255, 255, 255)");ah.addColorStop(0.005,"rgb(255, 225, 225)");ah.addColorStop(0.5,"rgb(252, 114, 115)");ah.addColorStop(0.5,"rgb(252, 114, 115)");ah.addColorStop(1,"rgb(254, 178, 178)");X="rgb( 79, 12, 14)";d="rgba(79, 12, 14, 0.1)"}else{if(s=="yellow"){ah.addColorStop(0,"rgb(255, 255, 255)");ah.addColorStop(0.005,"rgb(245, 255, 186)");ah.addColorStop(0.5,"rgb(158, 205,   0)");ah.addColorStop(0.5,"rgb(158, 205,   0)");ah.addColorStop(1,"rgb(210, 255,   0)");X="rgb( 64, 83, 0)";d="rgba(64, 83, 0, 0.1)"}else{if(s=="white"){ah.addColorStop(0,"rgb(255, 255, 255)");ah.addColorStop(0.005,"rgb(255, 255, 255)");ah.addColorStop(0.5,"rgb(241, 246, 242)");ah.addColorStop(0.5,"rgb(229, 239, 244)");ah.addColorStop(1,"rgb(255, 255, 255)");X="rgb(0, 0, 0)";d="rgba(0, 0, 0, 0.1)"}else{if(s=="gray"){ah.addColorStop(0,"rgb( 65,  65,  65)");ah.addColorStop(0.005,"rgb(117, 117, 117)");ah.addColorStop(0.5,"rgb( 87,  87,  87)");ah.addColorStop(0.5,"rgb( 65,  65,  65)");ah.addColorStop(1,"rgb( 81,  81,  81)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="black"){ah.addColorStop(0,"rgb( 65,  65,  65)");ah.addColorStop(0.005,"rgb(102, 102, 102)");ah.addColorStop(0.5,"rgb( 51,  51,  51)");ah.addColorStop(0.5,"rgb(  0,   0,   0)");ah.addColorStop(1,"rgb( 51,  51,  51)");X="rgb(204, 204, 204)";d="rgba(204, 204, 204, 0.1)"}else{if(s=="green"){ah.addColorStop(0,"rgb( 33,  67,  67)");ah.addColorStop(0.005,"rgb( 33,  67,  67)");ah.addColorStop(0.5,"rgb( 29,  58,  58)");ah.addColorStop(0.5,"rgb( 28,  57,  57)");ah.addColorStop(1,"rgb( 23,  46,  46)");X="rgb(  0, 185, 165)";d="rgba(0,  185, 165, 0.1)"}else{if(s=="green-darkgreen"){ah.addColorStop(0,"rgb( 27,  41,  17)");ah.addColorStop(0.005,"rgb( 70,  84,  58)");ah.addColorStop(0.5,"rgb( 36,  60,  14)");ah.addColorStop(0.5,"rgb( 24,  50,   1)");ah.addColorStop(1,"rgb(  8,  10,   7)");X="rgb(152,  255, 74)";d="rgba(152, 255, 74, 0.1)"}else{if(s=="blue2"){ah.addColorStop(0,"rgb(  0,  68, 103)");ah.addColorStop(0.005,"rgb(  8, 109, 165)");ah.addColorStop(0.5,"rgb(  0,  72, 117)");ah.addColorStop(0.5,"rgb(  0,  72, 117)");ah.addColorStop(1,"rgb(  0,  68, 103)");X="rgb(111, 182, 228)";d="rgba(111, 182, 228, 0.1)"}else{if(s=="blue-black"){ah.addColorStop(0,"rgb( 22, 125, 212)");ah.addColorStop(0.005,"rgb(  3, 162, 254)");ah.addColorStop(0.5,"rgb(  3, 162, 254)");ah.addColorStop(0.5,"rgb(  3, 162, 254)");ah.addColorStop(1,"rgb( 11, 172, 244)");X="rgb(  0,   0,   0)";d="rgba( 0,   0,   0, 0.1)"}else{if(s=="blue-darkblue"){ah.addColorStop(0,"rgb( 18,  33,  88)");ah.addColorStop(0.005,"rgb( 18,  33,  88)");ah.addColorStop(0.5,"rgb( 19,  30,  90)");ah.addColorStop(0.5,"rgb( 17,  31,  94)");ah.addColorStop(1,"rgb( 21,  25,  90)");X="rgb( 23,  99, 221)";d="rgba(23,  99, 221, 0.1)"}else{if(s=="blue-lightblue"){ah.addColorStop(0,"rgb( 88, 107, 132)");ah.addColorStop(0.005,"rgb( 53,  74, 104)");ah.addColorStop(0.5,"rgb( 27,  37,  65)");ah.addColorStop(0.5,"rgb(  5,  12,  40)");ah.addColorStop(1,"rgb( 32,  47,  79)");X="rgb( 71, 178, 254)";d="rgba(71, 178, 254, 0.1)"}else{if(s=="blue-gray"){ah.addColorStop(0,"rgb(135, 174, 255)");ah.addColorStop(0.005,"rgb(101, 159, 255)");ah.addColorStop(0.5,"rgb( 44,  93, 255)");ah.addColorStop(0.5,"rgb( 27,  65, 254)");ah.addColorStop(1,"rgb( 12,  50, 255)");X="rgb(178, 180, 237)";d="rgba(178, 180, 237, 0.1)"}else{if(s=="standard"){ah.addColorStop(0,"rgb(131, 133, 119)");ah.addColorStop(0.005,"rgb(176, 183, 167)");ah.addColorStop(0.5,"rgb(165, 174, 153)");ah.addColorStop(0.5,"rgb(166, 175, 156)");ah.addColorStop(1,"rgb(175, 184, 165)");X="rgb( 35,  42,  52)";d="rgba(35,  42,  52, 0.1)"}else{if(s=="lightgreen"){ah.addColorStop(0,"rgb(194, 212, 188)");ah.addColorStop(0.005,"rgb(212, 234, 206)");ah.addColorStop(0.5,"rgb(205, 224, 194)");ah.addColorStop(0.5,"rgb(206, 225, 194)");ah.addColorStop(1,"rgb(214, 233, 206)");X="rgb(  0,  12,   6)";d="rgba(0,   12,   6, 0.1)"}else{if(s=="standard-green"){ah.addColorStop(0,"rgb(255, 255, 255)");ah.addColorStop(0.005,"rgb(219, 230, 220)");ah.addColorStop(0.5,"rgb(179, 194, 178)");ah.addColorStop(0.5,"rgb(153, 176, 151)");ah.addColorStop(1,"rgb(114, 138, 109)");X="rgb(  0,  12,   6)";d="rgba(0,   12,   6, 0.1)"}else{if(s=="blue-blue"){ah.addColorStop(0,"rgb(100, 168, 253)");ah.addColorStop(0.005,"rgb(100, 168, 253)");ah.addColorStop(0.5,"rgb( 95, 160, 250)");ah.addColorStop(0.5,"rgb( 80, 144, 252)");ah.addColorStop(1,"rgb( 74, 134, 255)");X="rgb(  0,  44, 187)";d="rgba( 0,  44, 187, 0.1)"}else{if(s=="red-darkred"){ah.addColorStop(0,"rgb( 72,  36,  50)");ah.addColorStop(0.005,"rgb(185, 111, 110)");ah.addColorStop(0.5,"rgb(148,  66,  72)");ah.addColorStop(0.5,"rgb( 83,  19,  20)");ah.addColorStop(1,"rgb(  7,   6,  14)");X="rgb(254, 139, 146)";d="rgba(254, 139, 146, 0.1)"}else{if(s=="darkblue"){ah.addColorStop(0,"rgb( 14,  24,  31)");ah.addColorStop(0.005,"rgb( 46, 105, 144)");ah.addColorStop(0.5,"rgb( 19,  64,  96)");ah.addColorStop(0.5,"rgb(  6,  20,  29)");ah.addColorStop(1,"rgb(  8,   9,  10)");X="rgb( 61, 179, 255)";d="rgba(61, 179, 255, 0.1)"}else{if(s=="purple"){ah.addColorStop(0,"rgb(175, 164, 255)");ah.addColorStop(0.005,"rgb(188, 168, 253)");ah.addColorStop(0.5,"rgb(176, 159, 255)");ah.addColorStop(0.5,"rgb(174, 147, 252)");ah.addColorStop(1,"rgb(168, 136, 233)");X="rgb(  7,  97,  72)";d="rgba( 7,  97,  72, 0.1)"}else{if(s=="black-red"){ah.addColorStop(0,"rgb(  8,  12,  11)");ah.addColorStop(0.005,"rgb( 10,  11,  13)");ah.addColorStop(0.5,"rgb( 11,  10,  15)");ah.addColorStop(0.5,"rgb(  7,  13,   9)");ah.addColorStop(1,"rgb(  9,  13,  14)");X="rgb(181,   0,  38)";d="rgba(181,  0,  38, 0.1)"}else{if(s=="darkgreen"){ah.addColorStop(0,"rgb( 25,  85,   0)");ah.addColorStop(0.005,"rgb( 47, 154,   0)");ah.addColorStop(0.5,"rgb( 30, 101,   0)");ah.addColorStop(0.5,"rgb( 30, 101,   0)");ah.addColorStop(1,"rgb( 25,  85,   0)");X="rgb( 35,  49,  35)";d="rgba(35,  49,  35, 0.1)"}else{if(s=="amber"){ah.addColorStop(0,"rgb(182,  71,   0)");ah.addColorStop(0.005,"rgb(236, 155,  25)");ah.addColorStop(0.5,"rgb(212,  93,   5)");ah.addColorStop(0.5,"rgb(212,  93,   5)");ah.addColorStop(1,"rgb(182,  71,   0)");X="rgb( 89,  58,  10)";d="rgba(89,  58,  10, 0.1)"}else{if(s=="lightblue"){ah.addColorStop(0,"rgb(125, 146, 184)");ah.addColorStop(0.005,"rgb(197, 212, 231)");ah.addColorStop(0.5,"rgb(138, 155, 194)");ah.addColorStop(0.5,"rgb(138, 155, 194)");ah.addColorStop(1,"rgb(125, 146, 184)");X="rgb(  9,   0,  81)";d="rgba( 9,   0,  81, 0.1)"}else{if(s=="green-black"){ah.addColorStop(0,"rgb(  1,  47,   0)");ah.addColorStop(0.005,"rgb( 20, 106,  61)");ah.addColorStop(0.5,"rgb( 33, 125,  84)");ah.addColorStop(0.5,"rgb( 33, 125,  84)");ah.addColorStop(1,"rgb( 33, 109,  63)");X="rgb(  3,  15,  11)";d="rgba(3, 15, 11, 0.1)"}else{if(s=="yellow-black"){ah.addColorStop(0,"rgb(223, 248,  86)");ah.addColorStop(0.005,"rgb(222, 255,  28)");ah.addColorStop(0.5,"rgb(213, 245,  24)");ah.addColorStop(0.5,"rgb(213, 245,  24)");ah.addColorStop(1,"rgb(224, 248,  88)");X="rgb(  9,  19,   0)";d="rgba( 9,  19,   0, 0.1)"}else{if(s=="black-yellow"){ah.addColorStop(0,"rgb( 43,   3,   3)");ah.addColorStop(0.005,"rgb( 29,   0,   0)");ah.addColorStop(0.5,"rgb( 26,   2,   2)");ah.addColorStop(0.5,"rgb( 31,   5,   8)");ah.addColorStop(1,"rgb( 30,   1,   3)");X="rgb(255, 254,  24)";d="rgba(255, 254, 24, 0.1)"}else{if(s=="lightgreen-black"){ah.addColorStop(0,"rgb( 79, 121,  19)");ah.addColorStop(0.005,"rgb( 96, 169,   0)");ah.addColorStop(0.5,"rgb(120, 201,   2)");ah.addColorStop(0.5,"rgb(118, 201,   0)");ah.addColorStop(1,"rgb(105, 179,   4)");X="rgb(  0,  35,   0)";d="rgba( 0,  35,   0, 0.1)"}else{if(s=="darkpurple"){ah.addColorStop(0,"rgb( 35,  24,  75)");ah.addColorStop(0.005,"rgb( 42,  20, 111)");ah.addColorStop(0.5,"rgb( 40,  22, 103)");ah.addColorStop(0.5,"rgb( 40,  22, 103)");ah.addColorStop(1,"rgb( 41,  21, 111)");X="rgb(158, 167, 210)";d="rgba(158, 167, 210, 0.1)"}else{if(s=="darkamber"){ah.addColorStop(0,"rgb(134,  39,  17)");ah.addColorStop(0.005,"rgb(120,  24,   0)");ah.addColorStop(0.5,"rgb( 83,  15,  12)");ah.addColorStop(0.5,"rgb( 83,  15,  12)");ah.addColorStop(1,"rgb(120,  24,   0)");X="rgb(233, 140,  44)";d="rgba(233, 140, 44, 0.1)"}else{if(s=="blue-lightblue2"){ah.addColorStop(0,"rgb( 15,  84, 151)");ah.addColorStop(0.005,"rgb( 60, 103, 198)");ah.addColorStop(0.5,"rgb( 67, 109, 209)");ah.addColorStop(0.5,"rgb( 67, 109, 209)");ah.addColorStop(1,"rgb( 64, 101, 190)");X="rgb(193, 253, 254)";d="rgba(193, 253, 254, 0.1)"}else{if(s=="gray-purple"){ah.addColorStop(0,"rgb(153, 164, 161)");ah.addColorStop(0.005,"rgb(203, 215, 213)");ah.addColorStop(0.5,"rgb(202, 212, 211)");ah.addColorStop(0.5,"rgb(202, 212, 211)");ah.addColorStop(1,"rgb(198, 209, 213)");X="rgb( 99, 124, 204)";d="rgba(99, 124, 204, 0.1)"}else{if(s=="sections"){ah.addColorStop(0,"rgb(178, 178, 178)");ah.addColorStop(0.005,"rgb(255, 255, 255)");ah.addColorStop(0.5,"rgb(196, 196, 196)");ah.addColorStop(0.5,"rgb(196, 196, 196)");ah.addColorStop(1,"rgb(178, 178, 178)");X="rgb(0, 0, 0)";d="rgba(0, 0, 0, 0.1)"}else{if(s=="yoctopuce"){ah.addColorStop(0,"rgb(14, 24, 31)");ah.addColorStop(0.005,"rgb(35, 35, 65)");ah.addColorStop(0.5,"rgb(30, 30, 60)");ah.addColorStop(0.5,"rgb(30, 30, 60)");ah.addColorStop(1,"rgb(25, 25, 55)");X="rgb(153, 229, 255)";d="rgba(153,229,255, 0.1)"}else{if(s=="flat-turqoise"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 31, 188, 156)");ah.addColorStop(0.005,"rgb( 31, 188, 156)");ah.addColorStop(0.5,"rgb( 31, 188, 156)");ah.addColorStop(0.5,"rgb( 31, 188, 156)");ah.addColorStop(1,"rgb( 31, 188, 156)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-green-sea"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 26, 188, 156)");ah.addColorStop(0.005,"rgb( 26, 188, 156)");ah.addColorStop(0.5,"rgb( 26, 188, 156)");ah.addColorStop(0.5,"rgb( 26, 188, 156)");ah.addColorStop(1,"rgb( 26, 188, 156)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-emerland"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 46, 204, 113)");ah.addColorStop(0.005,"rgb( 46, 204, 113)");ah.addColorStop(0.5,"rgb( 46, 204, 113)");ah.addColorStop(0.5,"rgb( 46, 204, 113)");ah.addColorStop(1,"rgb( 46, 204, 113)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-nephritis"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 39, 174,  96)");ah.addColorStop(0.005,"rgb( 39, 174,  96)");ah.addColorStop(0.5,"rgb( 39, 174,  96)");ah.addColorStop(0.5,"rgb( 39, 174,  96)");ah.addColorStop(1,"rgb( 39, 174,  96)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-peter-river"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 52, 152, 219)");ah.addColorStop(0.005,"rgb( 52, 152, 219)");ah.addColorStop(0.5,"rgb( 52, 152, 219)");ah.addColorStop(0.5,"rgb( 52, 152, 219)");ah.addColorStop(1,"rgb( 52, 152, 219)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-belize-hole"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 41, 128, 185)");ah.addColorStop(0.005,"rgb( 41, 128, 185)");ah.addColorStop(0.5,"rgb( 41, 128, 185)");ah.addColorStop(0.5,"rgb( 41, 128, 185)");ah.addColorStop(1,"rgb( 41, 128, 185)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-amythyst"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(155,  89, 182)");ah.addColorStop(0.005,"rgb(155,  89, 182)");ah.addColorStop(0.5,"rgb(155,  89, 182)");ah.addColorStop(0.5,"rgb(155,  89, 182)");ah.addColorStop(1,"rgb(155,  89, 182)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-wisteria"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(142,  68, 173)");ah.addColorStop(0.005,"rgb(142,  68, 173)");ah.addColorStop(0.5,"rgb(142,  68, 173)");ah.addColorStop(0.5,"rgb(142,  68, 173)");ah.addColorStop(1,"rgb(142,  68, 173)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-sunflower"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(241, 196,  15)");ah.addColorStop(0.005,"rgb(241, 196,  15)");ah.addColorStop(0.5,"rgb(241, 196,  15)");ah.addColorStop(0.5,"rgb(241, 196,  15)");ah.addColorStop(1,"rgb(241, 196,  15)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-orange"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(243, 156,  18)");ah.addColorStop(0.005,"rgb(243, 156,  18)");ah.addColorStop(0.5,"rgb(243, 156,  18)");ah.addColorStop(0.5,"rgb(243, 156,  18)");ah.addColorStop(1,"rgb(243, 156,  18)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-carrot"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(230, 126,  34)");ah.addColorStop(0.005,"rgb(230, 126,  34)");ah.addColorStop(0.5,"rgb(230, 126,  34)");ah.addColorStop(0.5,"rgb(230, 126,  34)");ah.addColorStop(1,"rgb(230, 126,  34)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-pumpkin"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(211,  84,   0)");ah.addColorStop(0.005,"rgb(211,  84,   0)");ah.addColorStop(0.5,"rgb(211,  84,   0)");ah.addColorStop(0.5,"rgb(211,  84,   0)");ah.addColorStop(1,"rgb(211,  84,   0)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-alizarin"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(231,  76,  60)");ah.addColorStop(0.005,"rgb(231,  76,  60)");ah.addColorStop(0.5,"rgb(231,  76,  60)");ah.addColorStop(0.5,"rgb(231,  76,  60)");ah.addColorStop(1,"rgb(231,  76,  60)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-pomegranate"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(192,  57,  43)");ah.addColorStop(0.005,"rgb(192,  57,  43)");ah.addColorStop(0.5,"rgb(192,  57,  43)");ah.addColorStop(0.5,"rgb(192,  57,  43)");ah.addColorStop(1,"rgb(192,  57,  43)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-clouds"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(236, 240, 241)");ah.addColorStop(0.005,"rgb(236, 240, 241)");ah.addColorStop(0.5,"rgb(236, 240, 241)");ah.addColorStop(0.5,"rgb(236, 240, 241)");ah.addColorStop(1,"rgb(236, 240, 241)");X="rgb(  0,   0,   0)";d="rgba(  0,   0,   0, 0.1)"}else{if(s=="flat-silver"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(189, 195, 199)");ah.addColorStop(0.005,"rgb(189, 195, 199)");ah.addColorStop(0.5,"rgb(189, 195, 199)");ah.addColorStop(0.5,"rgb(189, 195, 199)");ah.addColorStop(1,"rgb(189, 195, 199)");X="rgb(  0,   0,   0)";d="rgba(  0,   0,   0, 0.1)"}else{if(s=="flat-concrete"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(149, 165, 166)");ah.addColorStop(0.005,"rgb(149, 165, 166)");ah.addColorStop(0.5,"rgb(149, 165, 166)");ah.addColorStop(0.5,"rgb(149, 165, 166)");ah.addColorStop(1,"rgb(149, 165, 166)");X="rgb(  0,   0,   0)";d="rgba(  0,   0,   0, 0.1)"}else{if(s=="flat-asbestos"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb(127, 140, 141)");ah.addColorStop(0.005,"rgb(127, 140, 141)");ah.addColorStop(0.5,"rgb(127, 140, 141)");ah.addColorStop(0.5,"rgb(127, 140, 141)");ah.addColorStop(1,"rgb(127, 140, 141)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-wet-asphalt"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 52,  73,  94)");ah.addColorStop(0.005,"rgb( 52,  73,  94)");ah.addColorStop(0.5,"rgb( 52,  73,  94)");ah.addColorStop(0.5,"rgb( 52,  73,  94)");ah.addColorStop(1,"rgb( 52,  73,  94)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{if(s=="flat-midnight-blue"){ae="rgb(255, 255, 255)";ah.addColorStop(0,"rgb( 44,  62,  80)");ah.addColorStop(0.005,"rgb( 44,  62,  80)");ah.addColorStop(0.5,"rgb( 44,  62,  80)");ah.addColorStop(0.5,"rgb( 44,  62,  80)");ah.addColorStop(1,"rgb( 44,  62,  80)");X="rgb(255, 255, 255)";d="rgba(255, 255, 255, 0.1)"}else{ah.addColorStop(0,"rgb(131, 133, 119)");ah.addColorStop(0.005,"rgb(176, 183, 167)");ah.addColorStop(0.5,"rgb(165, 174, 153)");ah.addColorStop(0.5,"rgb(166, 175, 156)");ah.addColorStop(1,"rgb(175, 184, 165)");X="rgb( 35,  42,  52)";d="rgba(35,  42,  52, 0.1)"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}Z(ao,0,0,ad,an,ai);ao.fillStyle=ae;ao.strokeStyle="transparent";ao.fill();Z(ao,1,1,ad-2,an-2,0.0833333333*an);ao.fillStyle=ah;ao.strokeStyle="transparent";ao.fill();if(E){Z(ao,2,2,ad-4,an-4,0.0833333333*an);ao.clip();var af="rgba(100, 100, 100, ";var am="rgba(200, 200, 200, ";var ag;var al;for(var aj=0;aj<an;aj++){for(var ak=0;ak<ad;ak++){ag=Math.floor(Math.random())==0?af:am;al=t(0,1,0.04+Math.random()*0.08);ao.fillStyle=ag+al+")";ao.fillRect(ak,aj,1,1)}}}};var a=function(){var ao=M.getContext("2d");var ad=M.width;var an=M.height;ao.clearRect(0,0,ad,an);Y=Math.floor(0.5833333333*an);N=Y+"px "+ab;F=Math.floor(0.26*an)+"px "+e;A=Math.floor(0.1666666667*an)+"px "+e;u=Math.floor(0.1666666667*an)+"px "+e;ao.font=F;var ag=ao.measureText(Q).width;ao.font=N;var ak=ao.measureText(Number(O).toFixed(2)).width;var af=ao.measureText("8").width;var ai=G==0?0:G*af+af;var am=ad-2-(ag+an*0.0833333333)-ai;var ae=Math.floor(am/af);var al="";for(var ah=0;ah<ae;ah++){al+="8"}if(G!=0){al+=".";for(var ah=0;ah<G;ah++){al+="8"}}var aj=ao.measureText(al).width;if(h){ao.shadowOffsetX=0;ao.shadowOffsetY=1;ao.shadowBlur=2;ao.shadowColor="rgba(0, 0, 0, 0.5)"}ao.save();ao.fillStyle=d;ao.font=N;ao.textBaseline="bottom";if(j){ao.fillText(al,ad-2-aj-(ag+an*0.0833333333),0.77*an)}else{ao.fillText(al,ad-2-aj-an*0.0833333333,0.77*an)}ao.fillStyle=X;ao.font=N;ao.textBaseline="bottom";if(j){ao.fillText(Number(O).toFixed(G),ad-2-ak-(ag+an*0.0833333333),0.77*an)}else{ao.fillText(Number(O).toFixed(G),ad-2-ak-an*0.0833333333,0.77*an)}if(j){ao.fill();ao.font=F;ao.textBaseline="bottom";ao.fillText(Q,ad-ag-0.04*an,0.745*an)}if(v){ao.font=u;ao.textBaseline="bottom";ao.fillText(Number(R).toFixed(G),(ad-ao.measureText(Number(R).toFixed(2)).width)*0.5,0.98*an)}if(r){ao.font=u;ao.textBaseline="bottom";ao.fillText(Number(x).toFixed(G),0.0416666667*an,0.23*an)}if(D){ao.font=u;ao.textBaseline="bottom";ao.fillText(Number(L).toFixed(G),ad-0.0416666667*an-ao.measureText(Number(L).toFixed(2)).width,0.23*an)}if(o){ao.font="bold "+A;ao.textBaseline="bottom";ao.fillText(k,(ad-ao.measureText(k).width)*0.5,0.23*an)}if(I){ao.font=u;ao.textBaseline="bottom";ao.fillText(p,ad-0.0416666667*an-ao.measureText(p).width,0.98*an)}};var U=function(){var ae=H.getContext("2d");var af=H.width;var ad=H.height;ae.clearRect(0,0,af,ad);if(h){ae.shadowOffsetX=0;ae.shadowOffsetY=1;ae.shadowBlur=2;ae.shadowColor="rgba(0, 0, 0, 0.5)"}ae.fillStyle=X;if(J){ae.beginPath();ae.moveTo(0.07575757575757576*af,0.8958333333333334*ad);ae.lineTo(0.08333333333333333*af,0.8958333333333334*ad);ae.lineTo(0.08333333333333333*af,0.9166666666666666*ad);ae.lineTo(0.07575757575757576*af,0.9166666666666666*ad);ae.lineTo(0.07575757575757576*af,0.8958333333333334*ad);ae.closePath();ae.moveTo(0.07575757575757576*af,0.8125*ad);ae.lineTo(0.08333333333333333*af,0.8125*ad);ae.lineTo(0.08333333333333333*af,0.875*ad);ae.lineTo(0.07575757575757576*af,0.875*ad);ae.lineTo(0.07575757575757576*af,0.8125*ad);ae.closePath();ae.moveTo(0.11363636363636363*af,0.9375*ad);ae.lineTo(0.08*af,0.75*ad);ae.lineTo(0.045454545454545456*af,0.9375*ad);ae.closePath();ae.fill()}if(y){if(C==="down"){ae.beginPath();ae.moveTo(0.18181818181818182*af,0.8125*ad);ae.lineTo(0.21212121212121213*af,0.9375*ad);ae.lineTo(0.24242424242424243*af,0.8125*ad);ae.lineTo(0.18181818181818182*af,0.8125*ad);ae.closePath();ae.fill()}else{if(C==="falling"){ae.beginPath();ae.moveTo(0.18181818181818182*af,0.8958333333333334*ad);ae.lineTo(0.24242424242424243*af,0.9375*ad);ae.lineTo(0.20454545454545456*af,0.8125*ad);ae.lineTo(0.18181818181818182*af,0.8958333333333334*ad);ae.closePath();ae.fill()}else{if(C==="steady"){ae.beginPath();ae.moveTo(0.18181818181818182*af,0.8125*ad);ae.lineTo(0.24242424242424243*af,0.875*ad);ae.lineTo(0.18181818181818182*af,0.9375*ad);ae.lineTo(0.18181818181818182*af,0.8125*ad);ae.closePath();ae.fill()}else{if(C==="rising"){ae.beginPath();ae.moveTo(0.18181818181818182*af,0.8541666666666666*ad);ae.lineTo(0.24242424242424243*af,0.8125*ad);ae.lineTo(0.20454545454545456*af,0.9375*ad);ae.lineTo(0.18181818181818182*af,0.8541666666666666*ad);ae.closePath();ae.fill()}else{if(C==="up"){ae.beginPath();ae.moveTo(0.18181818181818182*af,0.9375*ad);ae.lineTo(0.21212121212121213*af,0.8125*ad);ae.lineTo(0.24242424242424243*af,0.9375*ad);ae.lineTo(0.18181818181818182*af,0.9375*ad);ae.closePath();ae.fill()}}}}}}if(c){if(ac==="empty"){ae.save();ae.beginPath();ae.moveTo(0.8106060606060606*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9375*ad,0.803030303030303*af,0.9375*ad);ae.bezierCurveTo(0.803030303030303*af,0.9375*ad,0.7954545454545454*af,0.9583333333333334*ad,0.7954545454545454*af,0.9583333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9583333333333334*ad,0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.9375*ad);ae.bezierCurveTo(0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.8125*ad,0.6666666666666666*af,0.8125*ad);ae.bezierCurveTo(0.6666666666666666*af,0.8125*ad,0.6742424242424242*af,0.7916666666666666*ad,0.6742424242424242*af,0.7916666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.7916666666666666*ad,0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8125*ad);ae.bezierCurveTo(0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad);ae.bezierCurveTo(0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad,0.8106060606060606*af,0.8333333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8333333333333334*ad,0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8541666666666666*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.8958333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.9166666666666666*ad,0.8106060606060606*af,0.9166666666666666*ad);ae.closePath();ae.moveTo(0.7954545454545454*af,0.8333333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.8125*ad,0.7954545454545454*af,0.8125*ad,0.7878787878787878*af,0.8125*ad);ae.bezierCurveTo(0.7878787878787878*af,0.8125*ad,0.6818181818181818*af,0.8125*ad,0.6818181818181818*af,0.8125*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8333333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8333333333333334*ad,0.6742424242424242*af,0.9166666666666666*ad,0.6742424242424242*af,0.9166666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9375*ad,0.6742424242424242*af,0.9375*ad,0.6818181818181818*af,0.9375*ad);ae.bezierCurveTo(0.6818181818181818*af,0.9375*ad,0.7878787878787878*af,0.9375*ad,0.7878787878787878*af,0.9375*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9166666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9166666666666666*ad,0.7954545454545454*af,0.8333333333333334*ad,0.7954545454545454*af,0.8333333333333334*ad);ae.closePath();ae.fill()}else{if(ac==="onethird"){ae.beginPath();ae.moveTo(0.8106060606060606*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9375*ad,0.803030303030303*af,0.9375*ad);ae.bezierCurveTo(0.803030303030303*af,0.9375*ad,0.7954545454545454*af,0.9583333333333334*ad,0.7954545454545454*af,0.9583333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9583333333333334*ad,0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.9375*ad);ae.bezierCurveTo(0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.8125*ad,0.6666666666666666*af,0.8125*ad);ae.bezierCurveTo(0.6666666666666666*af,0.8125*ad,0.6742424242424242*af,0.7916666666666666*ad,0.6742424242424242*af,0.7916666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.7916666666666666*ad,0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8125*ad);ae.bezierCurveTo(0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad);ae.bezierCurveTo(0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad,0.8106060606060606*af,0.8333333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8333333333333334*ad,0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8541666666666666*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.8958333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.9166666666666666*ad,0.8106060606060606*af,0.9166666666666666*ad);ae.closePath();ae.moveTo(0.7954545454545454*af,0.8333333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.8125*ad,0.7954545454545454*af,0.8125*ad,0.7878787878787878*af,0.8125*ad);ae.bezierCurveTo(0.7878787878787878*af,0.8125*ad,0.6818181818181818*af,0.8125*ad,0.6818181818181818*af,0.8125*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8333333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8333333333333334*ad,0.6742424242424242*af,0.9166666666666666*ad,0.6742424242424242*af,0.9166666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9375*ad,0.6742424242424242*af,0.9375*ad,0.6818181818181818*af,0.9375*ad);ae.bezierCurveTo(0.6818181818181818*af,0.9375*ad,0.7878787878787878*af,0.9375*ad,0.7878787878787878*af,0.9375*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9166666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9166666666666666*ad,0.7954545454545454*af,0.8333333333333334*ad,0.7954545454545454*af,0.8333333333333334*ad);ae.closePath();ae.moveTo(0.6818181818181818*af,0.8333333333333334*ad);ae.lineTo(0.7121212121212122*af,0.8333333333333334*ad);ae.lineTo(0.7121212121212122*af,0.9166666666666666*ad);ae.lineTo(0.6818181818181818*af,0.9166666666666666*ad);ae.lineTo(0.6818181818181818*af,0.8333333333333334*ad);ae.closePath();ae.fill()}else{if(ac==="twothirds"){ae.beginPath();ae.moveTo(0.8106060606060606*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9375*ad,0.803030303030303*af,0.9375*ad);ae.bezierCurveTo(0.803030303030303*af,0.9375*ad,0.7954545454545454*af,0.9583333333333334*ad,0.7954545454545454*af,0.9583333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9583333333333334*ad,0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.9375*ad);ae.bezierCurveTo(0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.8125*ad,0.6666666666666666*af,0.8125*ad);ae.bezierCurveTo(0.6666666666666666*af,0.8125*ad,0.6742424242424242*af,0.7916666666666666*ad,0.6742424242424242*af,0.7916666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.7916666666666666*ad,0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8125*ad);ae.bezierCurveTo(0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad);ae.bezierCurveTo(0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad,0.8106060606060606*af,0.8333333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8333333333333334*ad,0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8541666666666666*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.8958333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.9166666666666666*ad,0.8106060606060606*af,0.9166666666666666*ad);ae.closePath();ae.moveTo(0.7954545454545454*af,0.8333333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.8125*ad,0.7954545454545454*af,0.8125*ad,0.7878787878787878*af,0.8125*ad);ae.bezierCurveTo(0.7878787878787878*af,0.8125*ad,0.6818181818181818*af,0.8125*ad,0.6818181818181818*af,0.8125*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8333333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8333333333333334*ad,0.6742424242424242*af,0.9166666666666666*ad,0.6742424242424242*af,0.9166666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9375*ad,0.6742424242424242*af,0.9375*ad,0.6818181818181818*af,0.9375*ad);ae.bezierCurveTo(0.6818181818181818*af,0.9375*ad,0.7878787878787878*af,0.9375*ad,0.7878787878787878*af,0.9375*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9166666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9166666666666666*ad,0.7954545454545454*af,0.8333333333333334*ad,0.7954545454545454*af,0.8333333333333334*ad);ae.closePath();ae.moveTo(0.7196969696969697*af,0.8333333333333334*ad);ae.lineTo(0.75*af,0.8333333333333334*ad);ae.lineTo(0.75*af,0.9166666666666666*ad);ae.lineTo(0.7196969696969697*af,0.9166666666666666*ad);ae.lineTo(0.7196969696969697*af,0.8333333333333334*ad);ae.closePath();ae.moveTo(0.6818181818181818*af,0.8333333333333334*ad);ae.lineTo(0.7121212121212122*af,0.8333333333333334*ad);ae.lineTo(0.7121212121212122*af,0.9166666666666666*ad);ae.lineTo(0.6818181818181818*af,0.9166666666666666*ad);ae.lineTo(0.6818181818181818*af,0.8333333333333334*ad);ae.closePath();ae.fill()}else{if(ac==="full"){ae.beginPath();ae.moveTo(0.8106060606060606*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9166666666666666*ad);ae.bezierCurveTo(0.803030303030303*af,0.9166666666666666*ad,0.803030303030303*af,0.9375*ad,0.803030303030303*af,0.9375*ad);ae.bezierCurveTo(0.803030303030303*af,0.9375*ad,0.7954545454545454*af,0.9583333333333334*ad,0.7954545454545454*af,0.9583333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad,0.6742424242424242*af,0.9583333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9583333333333334*ad,0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.9375*ad);ae.bezierCurveTo(0.6666666666666666*af,0.9375*ad,0.6666666666666666*af,0.8125*ad,0.6666666666666666*af,0.8125*ad);ae.bezierCurveTo(0.6666666666666666*af,0.8125*ad,0.6742424242424242*af,0.7916666666666666*ad,0.6742424242424242*af,0.7916666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad,0.7954545454545454*af,0.7916666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.7916666666666666*ad,0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8125*ad);ae.bezierCurveTo(0.803030303030303*af,0.8125*ad,0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad);ae.bezierCurveTo(0.803030303030303*af,0.8333333333333334*ad,0.803030303030303*af,0.8333333333333334*ad,0.8106060606060606*af,0.8333333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8333333333333334*ad,0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8541666666666666*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8541666666666666*ad,0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.8958333333333334*ad);ae.bezierCurveTo(0.8106060606060606*af,0.8958333333333334*ad,0.8106060606060606*af,0.9166666666666666*ad,0.8106060606060606*af,0.9166666666666666*ad);ae.closePath();ae.moveTo(0.7954545454545454*af,0.8333333333333334*ad);ae.bezierCurveTo(0.7954545454545454*af,0.8125*ad,0.7954545454545454*af,0.8125*ad,0.7878787878787878*af,0.8125*ad);ae.bezierCurveTo(0.7878787878787878*af,0.8125*ad,0.6818181818181818*af,0.8125*ad,0.6818181818181818*af,0.8125*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8125*ad,0.6742424242424242*af,0.8333333333333334*ad);ae.bezierCurveTo(0.6742424242424242*af,0.8333333333333334*ad,0.6742424242424242*af,0.9166666666666666*ad,0.6742424242424242*af,0.9166666666666666*ad);ae.bezierCurveTo(0.6742424242424242*af,0.9375*ad,0.6742424242424242*af,0.9375*ad,0.6818181818181818*af,0.9375*ad);ae.bezierCurveTo(0.6818181818181818*af,0.9375*ad,0.7878787878787878*af,0.9375*ad,0.7878787878787878*af,0.9375*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9375*ad,0.7954545454545454*af,0.9166666666666666*ad);ae.bezierCurveTo(0.7954545454545454*af,0.9166666666666666*ad,0.7954545454545454*af,0.8333333333333334*ad,0.7954545454545454*af,0.8333333333333334*ad);ae.closePath();ae.moveTo(0.7575757575757576*af,0.8333333333333334*ad);ae.lineTo(0.7878787878787878*af,0.8333333333333334*ad);ae.lineTo(0.7878787878787878*af,0.9166666666666666*ad);ae.lineTo(0.7575757575757576*af,0.9166666666666666*ad);ae.lineTo(0.7575757575757576*af,0.8333333333333334*ad);ae.closePath();ae.moveTo(0.7196969696969697*af,0.8333333333333334*ad);ae.lineTo(0.75*af,0.8333333333333334*ad);ae.lineTo(0.75*af,0.9166666666666666*ad);ae.lineTo(0.7196969696969697*af,0.9166666666666666*ad);ae.lineTo(0.7196969696969697*af,0.8333333333333334*ad);ae.closePath();ae.moveTo(0.6818181818181818*af,0.8333333333333334*ad);ae.lineTo(0.7121212121212122*af,0.8333333333333334*ad);ae.lineTo(0.7121212121212122*af,0.9166666666666666*ad);ae.lineTo(0.6818181818181818*af,0.9166666666666666*ad);ae.lineTo(0.6818181818181818*af,0.8333333333333334*ad);ae.closePath();ae.fill()}}}}}};function t(ae,ad,af){if(af<ae){return ae}if(af>ad){return ad}return af}function Z(ah,af,ak,ag,ai,ae){var aj=af+ag,ad=ak+ai;ah.beginPath();ah.moveTo(af+ae,ak);ah.lineTo(aj-ae,ak);ah.quadraticCurveTo(aj,ak,aj,ak+ae);ah.lineTo(aj,ak+ai-ae);ah.quadraticCurveTo(aj,ad,aj-ae,ad);ah.lineTo(af+ae,ad);ah.quadraticCurveTo(af,ad,af,ad-ae);ah.lineTo(af,ak+ae);ah.quadraticCurveTo(af,ak,af+ae,ak);ah.closePath();ah.stroke()}function P(){if(V){b=window.innerWidth*0.8;g=window.innerHeight*0.8}n.width=b;n.height=g;W.width=b;W.height=g;M.width=b;M.height=g;H.width=b;H.height=g;S.canvas.width=n.width;S.canvas.height=n.height;q();a();U();w()}function w(){S.clearRect(0,0,n.width,n.height);S.drawImage(W,0,0);S.drawImage(M,0,0);S.drawImage(H,0,0)}this.setValue=function(ad){z=O;R=Number(O).toFixed(G);O=Number(ad).toFixed(G);if(O<x){x=Number(O).toFixed(G)}if(O>L){L=Number(O).toFixed(G)}J=O>i?true:false;var ae=O-z;if(ae>=1){C="up"}else{if(ae<1&&ae>0.1){C="rising"}else{if(ae<=-1){C="down"}else{if(ae>-1&&ae<-0.1){C="falling"}else{C="steady"}}}}a();U();w()};this.setDesign=function(ad){s=ad;P()};this.setUpperCenterText=function(ad){k=ad;a();w()};this.setLowerRightText=function(ad){p=ad;a();w()};this.setUnit=function(ad){Q=ad;a();w()};this.setSize=function(ae,ad){b=ae;g=ad;P()};this.update=function(af,ae,ad){x=Number(ae).toFixed(G);L=Number(ad).toFixed(G);R=Number(O).toFixed(G);z=O;O=Number(af).toFixed(G);J=O>i?true:false;var ag=O-z;if(ag>=1){C="up"}else{if(ag<1&&ag>0.1){C="rising"}else{if(ag<=-1){C="down"}else{if(ag>-1&&ag<-0.1){C="falling"}else{C="steady"}}}}a();U();w()};P()};
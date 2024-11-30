var minimumTime = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  
  if(grid[0][1] > 1 && grid[1][0] > 1) return -1;
  
  const time = Array.from({ length: row + 1 }, () => Array(col + 1).fill(Infinity));
  const visited = Array.from({ length: row + 1 }, () => Array(col + 1).fill(false));
  const queue = [[0, 0, 0]];  // [row, col, time]

  const directions = [
    [0, -1], // left
    [0, 1],  // right
    [-1, 0], // top
    [1, 0]   // bottom
  ];

  while (queue.length) {
    queue.sort((a, b) => a[2] - b[2]);  // Sort queue by the minimum time
    const [cRow, cCol, currentTime] = queue.shift();  // Extract the current position and time

    if (cRow === row - 1 && cCol === col - 1) {
      return currentTime;  // Return the time when we reach the bottom-right corner
    }

    if (visited[cRow][cCol]) continue;  // Skip already visited cells
    visited[cRow][cCol] = true;

    for (const [dRow, dCol] of directions) {
      const newRow = cRow + dRow;
      const newCol = cCol + dCol;
      
      if (newRow >= 0 && newRow < row && newCol >= 0 && newCol < col) {
        let neededTime = currentTime + 1;

        if (grid[newRow][newCol] > currentTime + 1) {
          const diff = grid[newRow][newCol] - currentTime;
          neededTime = diff % 2 ? grid[newRow][newCol] : grid[newRow][newCol] + 1;
        }

        if (neededTime < time[newRow][newCol]) {
          time[newRow][newCol] = neededTime;
          queue.push([newRow, newCol, neededTime]);
        }
      }
    }
  }

  return -1; 
};

console.log(minimumTime(
 [[0,1,9,2],
  [5,9,9,5],
  [4,3,8,6]]
))


console.log(minimumTime([
  [0,1,4878,45087,56590,38472,56784,14057,82345,17038,81843,33419,57002,81714,24418,17645,21746,11394,216,23489,30851,58973],
  [0,11452,50085,43495,2163,24630,2492,11545,61376,97658,99389,35255,44581,1186,99922,41178,83008,42415,37867,51818,90976,80856],
  [54131,3975,46251,16674,2952,80995,58061,76306,10220,38710,5542,22079,60800,17614,94375,21989,5476,56266,45396,85921,36868,21851],
  [22676,71167,16511,69380,7705,82660,34097,96081,31995,44906,93612,64755,68639,22905,61417,16224,83532,58986,7067,10464,25850,30692],
  [86415,51634,34212,77392,70305,11241,68322,36010,97951,39885,70478,27980,90788,65248,25302,78895,84977,37995,93712,69777,90873,35307],
  [74583,42328,451,93466,92549,17980,49758,23340,9068,92732,46021,40235,89351,69451,66016,43908,41550,36786,49494,88173,43972,7906],
  [58157,25235,17889,57134,81808,16331,12199,85480,6688,52203,52567,71122,15115,28676,40458,8294,51056,33744,47000,13873,2021,24457],
  [55026,14592,32347,54307,13459,85147,31201,24311,18840,43143,65360,66506,29182,36181,95053,40661,16957,5327,81323,14773,33222,88004],
  [8468,9687,76498,17914,56774,66020,92301,84045,1547,50620,91696,47237,43850,2554,57002,61981,42623,72264,26259,66675,55798,15557],
  [22621,16586,64643,37486,90965,77554,38432,31022,88705,75120,53592,78601,95947,50674,28544,80460,17194,69544,30634,91044,25639,12287],
  [54402,13547,80468,69492,82906,42166,70425,22569,51167,20128,81310,11083,1032,58114,3763,16736,58119,63694,78792,14572,17765,77821],
  [9718,65682,16970,68902,60043,2594,65421,57892,73587,62900,50394,20562,14665,95063,27598,52184,6027,52222,30886,79958,39819,38741],
  [19099,59524,3315,75444,80862,40422,12795,49040,17178,34559,80456,4405,63924,81159,59587,16024,93422,10810,84263,72633,53665,81036],
  [78449,44654,83219,62788,26975,47224,2092,21644,46528,35202,67615,67442,33395,11508,46091,9521,582,63920,73795,74916,95566,26105],
  [14869,49434,22746,24444,65527,46613,38512,31183,82025,45808,74179,4363,47366,93953,43969,88676,64666,925,9185,15151,56023,55929],
  [89323,30379,92263,63922,8318,89856,93738,22939,50777,41672,80241,90236,59193,89944,29739,99598,40618,24562,8776,7527,19248,83804],
  [90669,6203,81025,18848,92968,76534,18936,13160,63555,24669,29290,48745,53432,57581,37313,80064,63117,72121,64218,46880,36482,30040],
  [94250,70515,67791,28905,92521,41420,41106,74492,39549,37276,99175,13475,18288,55860,30295,47170,65099,49314,26714,38730,80870,82670],
  [63263,45256,87750,17599,74523,43891,3962,78875,56288,63238,86537,52863,47837,76217,90500,99348,48631,7635,84746,67463,15101,51874],
  [71723,94684,32390,22403,91021,35151,81917,71937,46990,52993,68216,87442,8925,69203,36560,83178,57537,50422,99242,42515,45589,71406],
  [73375,24376,17836,73999,43277,51679,62284,98347,54589,56207,14220,28192,56429,90208,8867,24269,59257,3380,21951,22450,70601,55867],
  [52944,15251,44909,39640,6446,5093,63283,43409,93575,63695,55848,53286,5345,56623,20288,67479,81341,34073,70393,55611,2024,81310],
  [35120,5870,73730,56499,5210,697,31186,78875,61613,45328,82421,21324,59181,38089,54183,53005,20508,26109,42741,13741,31980,60478],
  [41228,74313,84408,43297,92441,84522,69491,83055,43394,64349,89987,10736,75653,25905,16125,99240,43239,82443,42553,92878,39409,98284],
  [93691,4641,17706,85628,60471,11068,49252,52541,39807,81505,38150,95817,66330,96015,36769,69769,74297,42909,27049,21372,77639,33909],
  [61954,94532,51637,45916,90,67173,22028,2313,82986,48424,51360,3797,13082,60783,85022,21692,80798,77425,18905,21340,72174,39853],
  [75192,67167,24437,98215,8569,78455,82893,65762,45384,89370,63036,56729,33580,34845,45282,46728,55480,25678,85986,43006,36945,86507],
  [55820,28761,8755,89101,57300,54310,79463,81737,26655,17992,24877,50168,20019,77669,91222,30079,11746,18982,33205,52354,89398,18840],
  [36733,6696,50323,5505,66612,45146,36997,11749,53167,38814,40508,52921,96704,95085,33638,90510,89676,67519,98809,55185,26649,13607],
  [77541,22117,6413,19346,98865,93167,70181,35471,44150,22922,36136,8506,7544,11016,86816,81218,54556,11877,90837,79078,24030,90798],
  [30672,28364,15381,55910,13764,29887,40104,18796,94301,67405,79321,40240,77274,37154,97384,43511,294,19415,96295,84883,3587,28651],
  [4059,88606,28241,62924,34527,73721,89648,80088,11986,78444,96271,971,77482,47757,65987,91410,70009,22579,89793,44314,44093,26527],
  [58190,77256,29293,63118,55062,40175,50610,2559,65587,51089,71831,34581,3966,11514,56081,92300,63593,41491,16935,13063,86056,35488],
  [12213,10994,45367,69518,59047,95016,95783,55910,27113,87870,20387,11200,44707,80186,41078,79188,28908,40415,17772,95143,18041,83759],
  [21295,32819,46893,21038,74759,85068,67265,27077,32848,59877,43125,35470,57845,30714,24376,46829,92699,70111,32478,77004,77166,46934],
  [11423,66918,93859,79878,20327,70213,37550,39969,41052,25330,2325,4186,79414,15240,88417,45766,72066,25529,80567,91173,56173,33955],
  [60936,73247,47058,77418,86458,63820,78677,17241,3892,68955,11801,73419,84090,66532,87623,32945,84094,47438,41248,3941,97489,55970],
  [55324,53168,1653,52537,69935,15126,20289,68078,22005,71389,42594,47001,53996,83562,74954,60552,44854,94131,11965,77187,86952,52225],
  [17957,76781,53770,95084,26279,56508,96357,10587,45675,4969,86665,40118,30371,30243,57623,25704,70954,70219,39958,10325,43232,84542],
  [40273,7468,20600,34041,24488,19756,18940,4559,61981,24252,42272,96324,10543,59616,89404,42089,77938,20943,52586,90118,74197,84417],
  [93966,49271,13965,98940,77294,82902,47048,26752,47702,61131,13161,78831,8928,83221,78663,10608,19798,17874,25574,37280,21232,50852],
  [18460,86734,31377,15202,55068,64296,89845,56482,82347,71362,84547,26549,22487,66767,43811,61627,8191,56717,97027,63665,91006,94808],
  [42129,77103,60377,60287,87621,6095,12158,2430,25253,24678,48886,56864,36699,28211,83543,22428,34895,11480,96071,28991,8586,16593],
  [85238,54658,49469,19988,48335,18652,3707,47889,13308,27978,35966,35068,4167,70302,10062,91246,30799,15139,55139,85812,43649,40642],
  [85944,44384,87529,64456,43518,4908,36980,79044,19389,80735,58192,805,42905,3391,35697,16414,30351,42174,8993,86688,56777,10357],
  [51659,47130,65978,88775,28627,66408,14995,55314,53253,93488,40708,21334,88035,34477,96762,50842,6271,81667,96690,84503,45526,11249],
  [28918,555,41485,69318,5838,56204,50431,96989,88977,30030,10739,60997,23885,39036,54298,29773,79808,28687,55518,95457,35971,82987],
  [10910,14774,43768,57989,54682,2028,25873,70798,25,27562,32353,49013,62456,65641,91201,44010,82412,89698,68085,43377,24650,41344],
  [42502,39064,87643,88942,10155,19882,77427,41699,82346,59626,87135,39197,13436,32550,88425,60564,80638,6002,68284,32996,50101,20255],
  [60395,82186,61922,8992,82123,5747,3514,38141,20799,3407,77886,68984,11615,79189,6256,16440,82809,26134,21688,74911,51188,63867],
  [29713,25003,65497,60609,34672,38423,67162,37421,23058,77796,12574,76022,67545,18871,91369,95193,58606,12194,82016,70988,31719,11449],
  [75740,12874,89308,97961,37418,72937,60976,70780,25337,88931,69693,98184,96687,53785,46732,7941,36583,28849,17299,52044,33983,80704],
  [47666,36984,20696,16795,69521,84328,15387,32855,27790,45448,38555,68626,13341,75897,87026,18732,65189,25788,16036,57095,21363,37601],
  [36140,99354,45490,96714,10308,46448,19508,62263,56542,11989,64910,12503,57170,54304,18917,50833,78280,65814,29771,59299,9674,39420],
  [86469,85918,53143,54541,73339,79877,97696,61785,88155,91544,11109,59773,14927,87775,36539,31984,84130,27308,91958,59174,2392,52388],
  [30195,23957,13357,17140,21828,99322,10535,88789,72634,87180,57222,82359,19662,34498,11719,44350,18266,92730,46772,62219,13752,75178],
  [73993,25085,26378,10934,64854,21008,98151,3345,13050,29012,53540,6339,21337,71077,96710,2912,72175,73362,79802,37661,56772,75489],
  [44330,4628,78244,62270,87063,64163,36478,78730,52365,9392,683,2226,31804,98755,87709,93231,83011,27310,83149,12286,20273,59480],
  [84518,90166,1363,67938,51927,61722,50093,33788,2645,12487,65623,6553,29016,2930,29967,81363,7493,54191,58074,88111,35349,55378],
  [6696,64006,11910,34258,8881,90157,90809,86954,7580,88851,46983,34964,75879,99411,96029,927,76935,50668,83523,62327,68542,7313],
  [57958,35824,72773,34323,58678,96871,5415,8914,14690,75037,70207,6963,51039,92821,52703,342,94646,28476,75205,60888,95648,92660],
  [96228,56249,53581,91024,64747,50484,44271,5011,8313,4474,82070,27140,77997,55394,13303,62740,72252,23923,79793,45753,36149,29062],
  [64073,43286,84849,27226,87568,93861,99801,9659,43814,61354,82106,60419,66272,10228,45147,14154,7389,558,58380,5539,18175,33151],
  [46400,55433,98008,86464,4777,94539,20676,65404,19597,17224,89117,7524,40928,76529,59184,26372,35539,70005,70235,27116,95173,92053],
  [20550,20962,29228,31887,23156,54435,11157,26840,70953,29098,35650,36959,51908,27593,4993,45299,12456,93523,34578,60814,23914,56714],
  [60556,74303,90780,92479,16467,61307,32784,53365,52122,54524,94357,31282,56443,86418,79540,95276,88059,23687,98117,18731,3365,38229],
  [48374,69530,95077,86482,12823,65674,52801,67837,35957,47628,93508,80910,76990,84205,63167,9888,84951,35595,80197,7394,11462,43070],
  [17851,1719,59309,74883,19167,22566,98460,32706,81482,96065,64713,93145,90594,72972,33939,54747,59299,48054,6286,67031,13985,81102],
  [90023,67146,78285,45871,27384,42164,17572,99467,46631,21943,61365,71773,67839,69263,25379,241,15723,39738,57719,9326,30747,85760],
  [26354,79132,43702,33068,61650,96015,82199,3800,65368,66270,65030,37947,89216,53767,85968,83222,16368,90985,42483,9103,5278,29331],
  [9094,43907,58917,46638,74598,82696,86337,75757,17081,5316,72563,35688,57560,46846,37840,22955,22018,41986,17444,33937,22878,25086],
  [80678,15545,45522,37929,15245,59298,4831,71692,58266,38299,18611,12204,68980,94256,77670,14307,38040,17575,26736,88634,26380,26779],
  [71963,59937,81851,35977,87673,68616,78172,14082,84027,72727,63735,70907,24625,74371,76387,71845,61590,44393,1450,28426,58469,92352],
  [17728,41374,82025,51310,53381,81989,3212,86516,61909,15363,68270,21614,99042,37270,8708,53364,2300,54261,89833,7681,25869,25366],
  [50821,71674,41814,50749,27562,99356,72076,16973,38863,44481,703,36066,74365,12191,66014,75141,71918,79738,5327,14255,13901,54332],
  [19440,39172,23144,57858,20437,89798,27920,70888,84083,60127,68332,73209,40280,14831,25055,39723,66673,36650,37961,38188,73397,68668],
  [59628,93487,90922,48595,67492,27477,29950,33956,21923,44758,51379,15187,60353,36501,91945,361,73727,28589,81386,98937,54482,82324],
  [2884,27889,65184,97101,46240,43679,56817,6811,77530,87062,10882,39246,71974,84923,49851,16401,33633,71109,59604,86549,88723,87023],
  [17487,44579,66797,93512,24551,3696,31058,1294,70832,72388,81117,84561,58907,68282,51589,17136,31265,18430,96723,91522,51100,91198]]));
var app = angular.module('draftApp');

app.controller("valueController", function($scope) {

  $scope.adp = [];
  $scope.pick = [];
  $scope.tvk = [];
  $scope.valueChart = [
    {"num": 1, "value": 3000},{"num": 2, "value": 2600},{"num": 3, "value": 2200},
    {"num": 4, "value": 1800},{"num": 5, "value": 1700},{"num": 6, "value": 1600},
    {"num": 7, "value": 1500},{"num": 8, "value": 1400},{"num": 9, "value": 1350},
    {"num": 10, "value": 1300},{"num": 11, "value": 1250},{"num": 12, "value": 1200},
    {"num": 13, "value": 1150},{"num": 14, "value": 1100},{"num": 15, "value": 1050},
    {"num": 16, "value": 1000},{"num": 17, "value": 950},{"num": 18, "value": 900},
    {"num": 19, "value": 875},{"num": 20, "value": 850},{"num": 21, "value": 800},
    {"num": 22, "value": 780},{"num": 23, "value": 760},{"num": 24, "value": 740},
    {"num": 25, "value": 720},{"num": 26, "value": 700},{"num": 27, "value": 680},
    {"num": 28, "value": 660},{"num": 29, "value": 640},{"num": 30, "value": 620},
    {"num": 31, "value": 600},{"num": 32, "value": 590},{"num": 33, "value": 580},
    {"num": 34, "value": 560},{"num": 35, "value": 550},{"num": 36, "value": 540},
    {"num": 37, "value": 530},{"num": 38, "value": 520},{"num": 39, "value": 510},
    {"num": 40, "value": 500},{"num": 41, "value": 490},{"num": 42, "value": 480},
    {"num": 43, "value": 470},{"num": 44, "value": 460},{"num": 45, "value": 450},
    {"num": 46, "value": 440},{"num": 47, "value": 430},{"num": 48, "value": 420},
    {"num": 49, "value": 410},{"num": 50, "value": 400},{"num": 51, "value": 390},
    {"num": 52, "value": 380},{"num": 53, "value": 370},{"num": 54, "value": 360},
    {"num": 55, "value": 350},{"num": 56, "value": 340},{"num": 57, "value": 330},
    {"num": 58, "value": 320},{"num": 59, "value": 310},{"num": 60, "value": 300},
    {"num": 61, "value": 292},{"num": 62, "value": 284},{"num": 63, "value": 276},
    {"num": 64, "value": 270},{"num": 65, "value": 265},{"num": 66, "value": 260},
    {"num": 67, "value": 255},{"num": 68, "value": 250},{"num": 69, "value": 245},
    {"num": 70, "value": 240},{"num": 71, "value": 235},{"num": 72, "value": 230},
    {"num": 73, "value": 225},{"num": 74, "value": 220},{"num": 75, "value": 215},
    {"num": 76, "value": 210},{"num": 77, "value": 205},{"num": 78, "value": 200},
    {"num": 79, "value": 195},{"num": 80, "value": 190},{"num": 81, "value": 185},
    {"num": 82, "value": 180},{"num": 83, "value": 175},{"num": 84, "value": 170},
    {"num": 85, "value": 165},{"num": 86, "value": 160},{"num": 87, "value": 155},
    {"num": 88, "value": 150},{"num": 89, "value": 145},{"num": 90, "value": 140},
    {"num": 91, "value": 136},{"num": 92, "value": 132},{"num": 93, "value": 128},
    {"num": 94, "value": 124},{"num": 95, "value": 120},{"num": 96, "value": 116},
    {"num": 97, "value": 112},{"num": 98, "value": 108},{"num": 99, "value": 104},
    {"num": 100, "value": 100},{"num": 101, "value": 96},{"num": 102, "value": 92},
    {"num": 103, "value": 88},{"num": 104, "value": 86},{"num": 105, "value": 84},
    {"num": 106, "value": 82},{"num": 107, "value": 80},{"num": 108, "value": 78},
    {"num": 109, "value": 76},{"num": 110, "value": 74},{"num": 111, "value": 72},
    {"num": 112, "value": 70},{"num": 113, "value": 68},{"num": 114, "value": 66},
    {"num": 115, "value": 64},{"num": 116, "value": 62},{"num": 117, "value": 60},
    {"num": 118, "value": 58},{"num": 119, "value": 56},{"num": 120, "value": 54},
    {"num": 121, "value": 52},{"num": 122, "value": 50},{"num": 123, "value": 49},
    {"num": 124, "value": 48},{"num": 125, "value": 47},{"num": 126, "value": 46},
    {"num": 127, "value": 45},{"num": 128, "value": 44},{"num": 129, "value": 43},
    {"num": 130, "value": 42},{"num": 131, "value": 41},{"num": 132, "value": 40},
    {"num": 133, "value": 39.5},{"num": 134, "value": 39},{"num": 135, "value": 38.5},
    {"num": 136, "value": 38},{"num": 137, "value": 37.5},{"num": 138, "value": 37},
    {"num": 139, "value": 36.5},{"num": 140, "value": 36},{"num": 141, "value": 35.5},
    {"num": 142, "value": 35},{"num": 143, "value": 34.5},{"num": 144, "value": 34},
    {"num": 145, "value": 33.5},{"num": 146, "value": 33},{"num": 147, "value": 32.6},
    {"num": 148, "value": 32.2},{"num": 149, "value": 31.8},{"num": 150, "value": 31.4},
    {"num": 151, "value": 31},{"num": 152, "value": 30.6},{"num": 153, "value": 30.2},
    {"num": 154, "value": 29.8},{"num": 155, "value": 29.4},{"num": 156, "value": 29},
    {"num": 157, "value": 28.6},{"num": 158, "value": 28.2},{"num": 159, "value": 27.8},
    {"num": 160, "value": 27.4},{"num": 161, "value": 27},{"num": 162, "value": 26.6},
    {"num": 163, "value": 26.2},{"num": 164, "value": 25.8},{"num": 165, "value": 25.4},
    {"num": 166, "value": 25},{"num": 167, "value": 24.6},{"num": 168, "value": 24.2},
    {"num": 169, "value": 23.8},{"num": 170, "value": 23.4},{"num": 171, "value": 23},
    {"num": 172, "value": 22.6},{"num": 173, "value": 21.2},{"num": 174, "value": 21.8},
    {"num": 175, "value": 21.4},{"num": 176, "value": 21},{"num": 177, "value": 20.6},
    {"num": 178, "value": 20.2},{"num": 179, "value": 19.8},{"num": 180, "value": 19.4},
    {"num": 181, "value": 19},{"num": 182, "value": 18.6},{"num": 183, "value": 18.2},
    {"num": 184, "value": 17.8},{"num": 185, "value": 17.4},{"num": 186, "value": 17},
    {"num": 187, "value": 16.6},{"num": 188, "value": 16.2},{"num": 189, "value": 15.8},
    {"num": 190, "value": 15.4},{"num": 191, "value": 15},{"num": 192, "value": 14.6},
    {"num": 193, "value": 14.2},{"num": 194, "value": 13.8},{"num": 195, "value": 13.4},
    {"num": 196, "value": 13},{"num": 197, "value": 12.6},{"num": 198, "value": 12.2},
    {"num": 199, "value": 11.8},{"num": 200, "value": 11.4},{"num": 201, "value": 11},
    {"num": 202, "value": 10.6},{"num": 203, "value": 10.2},{"num": 204, "value": 9.8},
    {"num": 205, "value": 9.4},{"num": 206, "value": 9},{"num": 207, "value": 8.6},
    {"num": 208, "value": 8.2},{"num": 209, "value": 7.8},{"num": 210, "value": 7.4},
    {"num": 211, "value": 7},{"num": 212, "value": 6.6},{"num": 213, "value": 6.2},
    {"num": 214, "value": 5.8},{"num": 215, "value": 5.4},{"num": 216, "value": 5},
    {"num": 217, "value": 4.6},{"num": 218, "value": 4.2},{"num": 219, "value": 3.8},
    {"num": 220, "value": 3.4},{"num": 221, "value": 3},{"num": 222, "value": 2.6},
    {"num": 223, "value": 2.3},{"num": 224, "value": 2}
  ];

  $scope.calculate = function() {
    $scope.tkv = $scope.adp - $scope.pick;
  }
});

// 1	3000
// 33	580
// 65	265
// 97	112
// 129	43
// 161	27
// 193	14.2
// 2	2600
// 34	560
// 66	260
// 98	108
// 130	42
// 162	26.6
// 194	13.8
// 3	2200
// 35	550
// 67	255
// 99	104
// 131	41
// 163	26.2
// 195	13.4
// 4	1800
// 36	540
// 68	250
// 100	100
// 132	40
// 164	25.8
// 196	13
// 5	1700
// 37	530
// 69	245
// 101	96
// 133	39.5
// 165	25.4
// 197	12.6
// 6	1600
// 38	520
// 70	240
// 102	92
// 134	39
// 166	25
// 198	12.2
// 7	1500
// 39	510
// 71	235
// 103	88
// 135	38.5
// 167	24.6
// 199	11.8
// 8	1400
// 40	500
// 72	230
// 104	86
// 136	38
// 168	24.2
// 200	11.4
// 9	1350
// 41	490
// 73	225
// 105	84
// 137	37.5
// 169	23.8
// 201	11
// 10	1300
// 42	480
// 74	220
// 106	82
// 138	37
// 170	23.4
// 202	10.6
// 11	1250
// 43	470
// 75	215
// 107	80
// 139	36.5
// 171	23
// 203	10.2
// 12	1200
// 44	460
// 76	210
// 108	78
// 140	36
// 172	22.6
// 204	9.8
// 13	1150
// 45	450
// 77	205
// 109	76
// 141	35.5
// 173	22.2
// 205	9.4
// 14	1100
// 46	440
// 78	200
// 110	74
// 142	35
// 174	21.8
// 206	9
// 15	1050
// 47	430
// 79	195
// 111	72
// 143	34.5
// 175	21.4
// 207	8.6
// 16	1000
// 48	420
// 80	190
// 112	70
// 144	34
// 176	21
// 208	8.2
// 17	950
// 49	410
// 81	185
// 113	68
// 145	33.5
// 177	20.6
// 209	7.8
// 18	900
// 50	400
// 82	180
// 114	66
// 146	33
// 178	20.2
// 210	7.4
// 19	875
// 51	390
// 83	175
// 115	64
// 147	32.6
// 179	19.8
// 211	7
// 20	850
// 52	380
// 84	170
// 116	62
// 148	32.2
// 180	19.4
// 212	6.6
// 21	800
// 53	370
// 85	165
// 117	60
// 149	31.8
// 181	19
// 213	6.2
// 22	780
// 54	360
// 86	160
// 118	58
// 150	31.4
// 182	18.6
// 214	5.8
// 23	760
// 55	350
// 87	155
// 119	56
// 151	31
// 183	18.2
// 215	5.4
// 24	740
// 56	340
// 88	150
// 120	54
// 152	30.6
// 184	17.8
// 216	5
// 25	720
// 57	330
// 89	145
// 121	52
// 153	30.2
// 185	17.4
// 217	4.6
// 26	700
// 58	320
// 90	140
// 122	50
// 154	29.8
// 186	17
// 218	4.2
// 27	680
// 59	310
// 91	136
// 123	49
// 155	29.4
// 187	16.6
// 219	3.8
// 28	660
// 60	300
// 92	132
// 124	48
// 156	29
// 188	16.2
// 220	3.4
// 29	640
// 61	292
// 93	128
// 125	47
// 157	28.6
// 189	15.8
// 221	3
// 30	620
// 62	284
// 94	124
// 126	46
// 158	28.2
// 190	15.4
// 222	2.6
// 31	600
// 63	276
// 95	120
// 127	45
// 159	27.8
// 191	15
// 223	2.3
// 32	590
// 64	270
// 96	116
// 128	44
// 160	27.4
// 192	14.6
// 224	2

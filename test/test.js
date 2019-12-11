var assert = require("assert");

describe("Day 1a - read input", function() {
  it("should return first item as 56017", function() {
    assert.equal(split_input(day_one_a)[0], "56017");
  });
});

describe("Day 1a - caluclate fuel required", function() {
  it("should 2 for mass of 12", function() {
    assert.equal(fuel(12), 2);
  });

  it("should 2 for mass of 14", function() {
    assert.equal(fuel(14), 2);
  });

  it("should 654 for mass of 1969", function() {
    assert.equal(fuel(1969), 654);
  });

  it("should 33583 for mass of 100756", function() {
    assert.equal(fuel(100756), 33583);
  });

  it("should 18670 for mass of 56017", function() {
    assert.equal(fuel(56017), 18670);
  });
});

describe("Day 1a - ANSWER", function() {
  it("Should return the total fuel required for given input", function() {
    assert.equal(calculate_all(day_one_a), 3381405);
  });
});

function calculate_all(data) {
  let all = split_input(data);
  return all
    .map(Number)
    .map(x => fuel(x))
    .reduce((x, y) => x + y);
}

function split_input(input) {
  return input.split("\n");
}

function fuel(mass) {
  return Math.floor(mass / 3) - 2;
}

let day_one_a = `56017
141632
71303
148129
59828
83478
136501
97611
92298
107697
102886
57037
58458
121031
119944
147894
110097
146857
137133
126985
81583
106275
130025
99276
76704
105244
111534
110405
88847
106736
109562
112705
50061
146911
143213
126404
131161
82251
56396
86306
110074
94474
113640
60274
102171
97755
142020
100304
100155
80432
124345
79730
105762
114971
141583
135170
87585
105794
101571
62313
62865
136660
121434
67603
53325
76232
93160
99580
90716
102187
115997
134281
64593
87597
131885
68041
88209
136400
127058
141613
66822
62441
136063
134204
52078
135123
95428
91311
55524
97099
80454
91710
130396
130089
127464
86160
53158
64908
98321
112176`;

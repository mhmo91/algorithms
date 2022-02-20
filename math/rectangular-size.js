// Array Challenge
// Have the function ArrayChallenge(strArr) read the strArr parameter being passed which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2. It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should determine the area of the space where the two rectangles overlap, and then output the number of times this overlapping region can fit into the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. The coordinates will all be integers. If there's no overlap between the two rectangles return 0.
// Examples
// Input: ["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]
// Output: 1
// Input: ["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]
// Output: 3

//  TODO: improve readability and calculat Space/time notations

function numBetween(x, y, num) {
  // swap if x is bigger than y
  let tempBox;
  if (x > y) {
    tempBox = y;
    y = x;
    x = tempBox;
  }

  return num >= x && num <= y;
}

function getRibsFromRecPoints(points) {
  let recRibX, recRibY;
  recRibX = Array.from(new Set(points.map((r) => r[0])));
  recRibY = Array.from(new Set(points.map((r) => r[1])));
  return [recRibX, recRibY];
}

function ArrayChallenge(strArr) {
  // code goes here
  let rec1 = [],
    rec2 = [];
  const arrOfArrays = strArr[0]
    .split(")")
    .filter((s) => s.length !== 0)
    .map((s) => s.replace(/\(|(,\()/g, ""))
    .map((s) => s.split(",").map((s) => parseInt(s)));
  rec1 = arrOfArrays.slice(0, 4);
  rec2 = arrOfArrays.slice(4);

  // reduce rec1 into to linears
  // TODO : debug if so far correct.

  // find intersection points
  let overLapPoints = [];

  const rec1RibX = Array.from(new Set(rec1.map((r) => r[0])));
  const rec1RibY = Array.from(new Set(rec1.map((r) => r[1])));

  const rec2RibX = Array.from(new Set(rec2.map((r) => r[0])));
  const rec2RibY = Array.from(new Set(rec2.map((r) => r[1])));

  rec1.forEach((point) => {
    if (
      numBetween(rec2RibX[0], rec2RibX[1], point[0]) &&
      numBetween(rec2RibY[0], rec2RibY[1], point[1])
    ) {
      overLapPoints.push(point);
    }
  });

  rec2.forEach((point) => {
    if (
      numBetween(rec1RibX[0], rec1RibX[1], point[0]) &&
      numBetween(rec1RibY[0], rec1RibY[1], point[1])
    ) {
      overLapPoints.push(point);
    }
  });

  // triangle,

  const [ribx, riby] = getRibsFromRecPoints(overLapPoints);
  return Math.abs(ribx[0] - ribx[1]) * Math.abs(riby[0] - riby[1]);
}

// keep this function call here
console.log(ArrayChallenge(readline()));

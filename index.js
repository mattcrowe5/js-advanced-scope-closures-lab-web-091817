function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let distance = Math.abs(parseInt(startingBlock) - parseInt(endingBlock));
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  };
}

function produceTipCalculator(bill) {
  return function(percentage) {
    return bill * percentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}

let washing = {
  withSoap: true,
  waterLevel: 20,
  waterTemp: 60,
  spinRpm: 40,
}

let dehydrate = {
  time: 60,
  strenghtRpm: 60
}

let dry = {
  temp: 60,
  speedRpm: 50
}

let machine = {
  washing,
  hy: dehydrate,
  dry
}

let washer = {
  process: [washMode('wool'), dehydrateMode('twice'), dryMode('lowTemp')]
}

// ========== mode functions ============
function washMode(mode) {
  switch(mode) {
    case: 'wool'
      withSoap = false
      watereLvel = 60
      break;
    case 'cotton': 
      withSoap = false
      watereLvel = 60
      break;
    default: 
      withSoap = false
      watereLvel = 60
      break;
  }

  return {
    // withSoap: withSoap,
    // 可以合併縮寫為以下：
    withSoap,
    // waterLevel: waterLevel,
    waterLevel,
    waterTemp: waterTemp,
    spinRpm: spinRpm,
  }
}

function dehydrateMode(mode) {
  // return a dehytrate object
}

function dryMode(mode) {
  // return a dry object
}
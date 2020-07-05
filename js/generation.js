var dataType = ['date', 'time', 'type', 'size', 'name'];
var dataArr = [
    ['20030511', '1015', 'exe', '47450', 'pornhub'],
    ['19931102', '1035', 'txt', '632450', 'Github'],
    ['20171201', '1235', 'mp4', '6523550', 'Steam'],
    ['20200101', '1615', 'exe', '6545235', 'Dota'],
    ['20030111', '1105', 'exe', '11144420', 'JS'],
    ];
var dataMap = {
  date: 0
  , time: 0
  , type: 1
  , size: 0
  , name: 2
, }

// Generate start content(start page)
function generationContent(block) {
  for (var i=0; i<dataArr.length; i++) {
    var blocks = document.createElement('div');
    blocks.classList.add('container' + (i + 1));
    blocks.classList.add('container');
    block.appendChild(blocks);
    for (var x=0; x<dataArr[i].length; x++) {
      var a = document.createElement('a');
//      a.classList.add(dataType[x]);
//      a.classList.add(dataType[x] + dataArr[i][x]);
//      a.classList.add(dataArr[i][x]);
      a.setAttribute('data-' + dataType[x], dataArr[i][x])
      a.classList.add(dataType[x] + 'El')
      blocks.appendChild(a);
      a.innerHTML = dataArr[i][x];
    }
    var br = document.createElement('br');
    block.appendChild(br);
  }
}


// Create 2 checkboxes: from HtL & LtH; Takes block Id where create
function checkboxByValue(checkboxId) {
  var checkName = ['fromLow', 'fromHigh'];
  var checkId = ['Lowest', 'Highest'];
  for (var i=0; i<2; i++) {
    var checkByVal = document.createElement('input');
    checkByVal.type = 'checkbox';
    checkByVal.name = checkName[i];
    checkByVal.id = checkboxId + '_' + checkId[i];
    var ulByVal = document.getElementById(checkboxId);
    ulByVal.appendChild(checkByVal);
    var lblForCheck = document.createElement('label');
    lblForCheck.setAttribute('for', checkboxId + '_' + checkId[i]);
    lblForCheck.innerHTML = checkName[i];
    ulByVal.appendChild(lblForCheck);
  }
}


// Create 3 checkboxes by type: exe, txt, mp4
function checkboxByTypes() {
  var checkName = ['hideExe', 'hideTxt', 'hideMp4'];
  var checkId = ['exe', 'txt', 'mp4'];
  for (var i=0; i<3; i++) {
    var checkByType = document.createElement('input');
    checkByType.type = 'checkbox';
    checkByType.name = checkName[i];
    checkByType.id = checkId[i];
    var ulByType = document.getElementById('type');
    ulByType.appendChild(checkByType);
    var lblForCheck = document.createElement('label');
    lblForCheck.setAttribute('for', checkId[i]);
    lblForCheck.innerHTML = checkName[i];
    ulByType.appendChild(lblForCheck);
  }
}


// Create 2 checkboxes: A-Z & Z-A
function checkboxByString() {
  var checkName = ['A-Z', 'Z-A'];
  var checkId = ['fromA', 'FromZ'];
  for (var i=0; i<2; i++) {
    var checkByStr = document.createElement('input');
    checkByStr.type = 'checkbox';
    checkByStr.name = checkName[i];
    checkByStr.id = checkId[i];
    var ulByVal = document.getElementById('name');
    ulByVal.appendChild(checkByStr);
    var lblForCheck = document.createElement('label');
    lblForCheck.setAttribute('for', checkId[i]);
    lblForCheck.innerHTML = checkName[i];
    ulByVal.appendChild(lblForCheck);
  }
}

//Create tree for checkbox blocks
function generationFilters(block) {
  for (var i=0; i<dataType.length; i++) {
    var ulList = document.createElement('ul');
    block.appendChild(ulList);
    ulList.id = dataType[i];
    var strongList = document.createElement('strong');
    ulList.appendChild(strongList);
    var textStrong = document.createTextNode(dataType[i]);
    strongList.appendChild(textStrong);
    //
    switch (dataType[i]) {
    case 'date':
    case 'time':
    case 'size':
      checkboxByValue(dataType[i]);
      break;
    case 'type':
      checkboxByTypes();
      break;
    case 'name':
      checkboxByString();
      break;
    }
  }
}

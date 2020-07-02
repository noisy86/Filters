var clicks = 0;
// Hide exe elements | on second click return to initial view
function sortByExe() {
  var checkbox
  var exeEl = document.getElementsByClassName('exe');
  clicks++;
  console.log(clicks);
  for (var a=0; a<exeEl.length; a++) {
    console.log(exeEl[a].parentElement);
  }
  for (var i=0; i<exeEl.length; i++) {
    if (clicks % 2 == 0) {
      exeEl[i].parentElement.classList.add('block');
      exeEl[i].parentElement.classList.remove('none');
    }
    else {
      exeEl[i].parentElement.classList.remove('block');
      exeEl[i].parentElement.classList.add('none');
    }
  }
}
//
//
//var dateArray = [];
// Create Date Array
//(function newDateArray() {
//  for (var i=0; i<dataArr.length; i++) {
//    dateArray.push(parseInt(dataArr[i][0]));
//  }
//  console.log(dateArray);
//})();
//
// Sort date Array
//(function sortDateArray() {
//  dateArray.sort(function (a, b) {
//    return a - b;
//  });
//})();
// Sort Html table by Date
//function sortByDate(el) {
//  console.log(el.id);
//  for (var a = 0; a < dateArray.length; a++) {
//    var dateEl = document.getElementsByClassName(dateArray[a])[0];
//    var parentEl = dateEl.parentElement;
//    var pageByDate = parentEl.cloneNode(true);
//    document.body.appendChild(pageByDate);
//  }
//  var myNode = document.getElementById("zopa");
//  while (myNode.firstChild) {
//    myNode.removeChild(myNode.firstChild);
//  }
//}

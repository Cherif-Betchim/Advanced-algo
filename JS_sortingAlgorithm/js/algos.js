// Converts from degrees to radians.
Number.prototype.toRadians = function () {
    return this * Math.PI / 180;
};

// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {

    var lat1 = 45.166667;
    var lon1 = 5.716667;
    var lat2 = parseFloat(city.latitude);
    var lon2 = parseFloat(city.longitude);
    var R = 6371e3; // metres
    var phi1 = lat1.toRadians();
    var phi2 = lat2.toRadians();
    var deltaPhi = (lat2-lat1).toRadians();
    var DELTAdelta = (lon2-lon1).toRadians();

    var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(DELTAdelta/2) * Math.sin(DELTAdelta/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    d = d / 1000;
    console.log(d);

    return d;
}


// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
    console.log("swap - implement me !");
    var t = csvData[i];
    csvData[i] = csvData[j];
    csvData[j] = t;



}
//
// // Returns true if city with index i in csvData is closer to Grenoble than city with index j
// // i is the index of the first city
// // j is the index of the second city
function isLess(i, j) {
    displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
    console.log("isLess - implement me !");
    if (csvData[i].dist < csvData[j].dist){
        return true
    }else {
        return false
    }
}


function insertsort() {
for( var i = 1 ;i< csvData.length; i++){
    for ( var k = i; k > 0 ; k-- ){
        if (isLess(k,k-1)){
            swap(k,k-1)
        }
    }
    }
}

function selectionsort() {
    for (var i = 0; i < csvData.length; i++) {

        var k = i; //  storing the index of minimum element

        for (var j = i + 1; j < csvData.length; j++) {
            if(isLess(j,k)){
                k=j;
            }
        }
        swap(i,k)
    }
}

function bubblesort() {
    console.log("bubblesort - implement me !");
    for(var i =0; i <csvData.length; i++){
        var swapped = false;
        for (var j = csvData.length-1; j > i; j--){
            if (isLess(j,j-1)){
                swap(j,j-1);
                swapped = true;
            }
        }
    if(!swapped){
            break;
    }
    }
}

function shellsort() {
    console.log("shellsort - implement me !");
}

function mergesort() {
    console.log("mergesort - implement me !");
}

function heapsort() {
    console.log("heapsort - implement me !");
}

function quicksort() {
    console.log("quicksort - implement me !");
}

function quick3sort() {
    console.log("quick3sort - implement me !");
}


function sort(algo) {
    switch (algo) {
        case 'insert':
            insertsort();
            break;
        case 'select':
            selectionsort();
            break;
        case 'bubble':
            bubblesort();
            break;
        case 'shell':
            shellsort();
            break;
        case 'merge':
            mergesort();
            break;
        case 'heap':
            heapsort();
            break;
        case 'quick':
            quicksort();
            break;
        case 'quick3':
            quick3sort();
            break;
        default:
            throw 'Invalid algorithm ' + algo;
    }
}

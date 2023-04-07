

function Automobile(year, make, model, type) {
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
];


function sortArr(comparator, array) {
    for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < array.length - 1; ++j) {
            if (!comparator(array[j], array[j + 1])) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function exComparator(int1, int2) {
    if (int1 > int2) {
        return true;
    } else {
        return false;
    }
}


function yearComparator(auto1, auto2) {
    return auto1.year > auto2.year;
}


function makeComparator(auto1, auto2) {
    return auto1.make.toUpperCase() < auto2.make.toUpperCase();
}




function typeComparator(auto1, auto2) {
    var order = ['wagon', 'suv', 'pickup', 'roadster'];
    var i1 = order.indexOf(auto2.type.toLowerCase());
    var i2 = order.indexOf(auto1.type.toLowerCase());
    if (i1 === i2) {
        return auto1.year > auto2.year;
    } else {
        return i2 > i1;
    }
}

function printArr(autos) {
    for (var i = 0; i < autos.length; ++i) {
        console.log(autos[i].year + " " + autos[i].make + " " + autos[i].model);
    }
}

console.log('*****');
console.log('The cars sorted by year are:');
sortArr(yearComparator, automobiles);
printArr(automobiles);
console.log('\nThe cars sorted by make are:');
sortArr(makeComparator, automobiles);
printArr(automobiles);
console.log('\nThe cars sorted by type are:');
sortArr(typeComparator, automobiles);
printArr(automobiles);
console.log('*****');

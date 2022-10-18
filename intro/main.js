const items = ["id1", "id2"];

/*
CONST betekent niet dat de waarde van de constante niet kan veranderd worden. Er kan niks anders geassigneerd worden onder deze variabele.
*/

/*
Om waarde vast te zetten, doen we Object.freeze()
*/
let text = Object.freeze("");

/**
 * Primitive types
 *
 *
 * string, numbers en booleans
 */

/**
 * Complex types
 * Bij het declareren van deze variabele, zit de waarde er niet in, maar is er een pointer naar die waarde.
 *
 * arrays, objects
 */

let array = ["id1", "id2"];

// Hier maken we een kopie van de array, om het probleem van deze reference te vermijden
let reassigned = [...array];

reassigned.push("id3");

console.log(array);
console.log(reassigned);

const mapper = function (array, func) {
  const newArray = [];
  for (const item of array) {
    newArray.push(func(item));
  }
  return newArray;
};

function duplicate(number) {
  return number * 2;
}

const randomArray = [1, 3, 5];

console.log(mapper(randomArray, duplicate));

const customFilter = (array, func) => {
  const newArray = [];
  for (const item of array) {
    if (func(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

function largerThan2(number) {
  if (number > 2) {
    return true;
  } else {
    return false;
  }
}

console.log(customFilter(randomArray, largerThan2));

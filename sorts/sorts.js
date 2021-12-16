function bubbleSortExample(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[j] > array[i]) {
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}
function selectionSoertExample(array) {
	for (let i = 0; i < array.length; i++) {
		let max = i;
		for (let j = i; j < array.length; j++) {
			if (array[j] < array[max]) {
				max = j;
			}
		}
		var temp = array[i];
		array[i] = array[max];
		array[max] = temp;
	}
	return array;
}
function insertionSortExample(array) {
	let i, key, j;
	for (i = 1; i < array.length; i++) {
		key = array[i];
		j = i - 1;
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = key;
	}
	return array;
}
function merge(array1, array2) {}
function mergeSortExample(array) {}

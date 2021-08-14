module.exports = function toReadable (num) {
    const arr = `${num}`.split(''); 
    
    const stepOne = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    },
    special = {
        '0': 'ten',
        '1': 'eleven',
        '2': 'twelve',
        '3': 'thirteen',
        '4': 'fourteen',
        '5': 'fifteen',
        '6': 'sixteen',
        '7': 'seventeen',
        '8': 'eighteen',
        '9': 'nineteen'
    },
    stepTwo = {
        '1': 'ten',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    },
    stepThree = {
        '1': 'one hundred',
        '2': 'two hundred',
        '3': 'three hundred',
        '4': 'four hundred',
        '5': 'five hundred',
        '6': 'six hundred',
        '7': 'seven hundred',
        '8': 'eight hundred',
        '9': 'nine hundred'
    };

    if (arr.length == 1) {
        if(arr[0] == '0') {
            return 'zero';
        } else {
            return `${stepOne[arr[0]]}`;
        }
    } else if(arr.length == 2) {
        if(arr[1] == '0') {
            return `${stepTwo[arr[0]]}`;
        } else if(arr[0] == '1') {
            return `${special[arr[1]]}`;
        } else {
            return `${stepTwo[arr[0]]} ${stepOne[arr[1]]}`;
        }
    } else if(arr.length == 3) {
       if(arr[2] == '0' && arr[1] == '0') {
            return `${stepThree[arr[0]]}`;
        } else if(arr[2] == '0') {
            return `${stepThree[arr[0]]} ${stepTwo[arr[1]]}`;
        } else if(arr[1] == '0') {
            return `${stepThree[arr[0]]} ${stepOne[arr[2]]}`;
        } else if(arr[1] == '1') {
            return `${stepThree[arr[0]]} ${special[arr[2]]}`;
        } else {
            return `${stepThree[arr[0]]} ${stepTwo[arr[1]]} ${stepOne[arr[2]]}`;
        }
    } 
}
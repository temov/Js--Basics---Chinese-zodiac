

let year = window.prompt('Enter a year');
let calcFormula = (year - 4)%12;

function chineseZodiac(year) {
    switch (calcFormula) {
        case 0:
            return 'Rat';
            break;
        case 1:
            return 'Ox';
            break;
        case 2:
            return 'Tiger';
            break;
        case 3:
            return 'Rabbit';
            break;
        case 4:
            return 'RDragon';
            break;
        case 5:
            return 'Snake';
            break;
        case 6:
            return 'Horse';
            break;
        case 7:
            return 'Goat';
            break;
        case 8:
            return 'Monkey';
            break;
        case 9:
            return 'Rooster';
            break;
        case 10:
            return 'Dog';
            break;
        case 11:
            return 'Pig';
            break;
    }
}

let result = chineseZodiac(2020)
console.log('You Chinese Zodiac is' + ' ' + result)
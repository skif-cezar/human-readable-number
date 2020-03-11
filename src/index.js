var arr10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var arr20 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number){
    if(number < 20){
        return arr10[number];
    }

    if(number >= 20 && number < 100){
        if(number % 10 == 0){
            return arr20[number / 10];
        } else return (arr20[Math.floor(number / 10)] + ' ' + arr10[number % 10]);
    }

    if(number > 99){
        if(number % 100 == 0){
            return (arr10[number / 100] + ' ' + 'hundred');
        }else if(number % 10 == 0){
            return (arr10[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
            arr20[(Math.floor(number / 10)) % 10]);
        } else if(number % 100 < 20){
            return (arr10[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
            arr10[number % 100]);
        }else {
            return (arr10[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' +
            arr20[(Math.floor(number / 10)) % 10] + ' ' + arr10[number % 10]);
        }
    }
};


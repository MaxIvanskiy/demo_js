let context = { 
    min : 321654, 
    max : 654321 
};
export const task5 = (tickets) => {
    if(tickets == undefined){
        return false;
    }if(typeof(tickets) != 'object'){
        return false;
    }else if(tickets.min < tickets.max){
        let result = {
            method : 0,
            firstMethod : 0,
            secondMethod : 0
        };
        let happy1 = 0;
        let happy2 = 0;

        let min = tickets.min;
        let max = tickets.max;

        while(min < max){
            let x = min.toString().split('');

            let sumFirst = +x[0] + +x[1] + +x[2];
            let sumLast = +x[3] + +x[4] + +x[5];
            if(sumFirst == sumLast){ result.firstMethod += 1; }

            let sumOdd = 0;
            let sumEven = 0;
            for(let i = 0; i < x.length; i += 1){
                x[i] % 2 ? sumEven += +x[i] : sumOdd += +x[i];
            }
            if(sumOdd == sumEven){ result.secondMethod += 1; }

            min += 1;
        }
        result.method = happy1 >= happy2 ? 1 : 2;
        return result;
    }
    return false;
}
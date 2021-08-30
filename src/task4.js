let number = 12734;

export const task4 = (num) => {
    if(num == undefined){
        return false;
    }if(typeof(num) != 'number'){
        return false;
    }else if(num > 10){
        let result = num + '';
        let reverse = String(num).split('').reverse().join('');

        for(let i = result.length; i > 1; i -= 1){
            let res = result;
            let rev = reverse;
            for(let j = res.length; j > 1; j -= 1){
                if(res == rev){
                    return res;
                }
                rev = rev.substring(1);
                res = res.slice(0, -1);
            }
            result = result.substring(1);
            reverse = reverse.slice(0, -1);
        }     
    }
    return 0;
}
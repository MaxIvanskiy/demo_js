let rowLen = 10;
let minPow = 25;

export const task6 = (len, pow) => {
    if(len == undefined || pow == undefined){
        return false;
    }if(typeof(len) != 'number' || typeof(pow) != 'number'){
        return false;
    }else{
        let result = '';
        let row = [];
        let start = 1;

        while(row.length < len){
            let sq = start * start;
            if(sq >= pow){
                row.push(start);
            }
            start += 1;
        }
        result = row.join(',');
        
        return result;
    }
}
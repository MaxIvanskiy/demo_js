const triangles = [ 
    { vertices : 'ABC', a : 40, b : 40, c : 40 }, 
    { vertices : 'XYZ', x : 20, y : 20, z : 20 },
    { vertices : 'UPG', u : 10, p : 50, g : 50 } 
];

export const task3 = (triangles) => {
    const result = [];
    if(triangles == undefined){
        return false;
    }else if(!Array.isArray(triangles)){
        return false;
    }else{        
        let trCopy = triangles.slice();

        for(let i = 0; i < trCopy.length; i += 1){            
            if(typeof(trCopy[i]) != 'object'){
                return false;
            }
            const sides = [];
            for(let key in trCopy[i]){
                if(key != 'vertices'){
                    if(trCopy[i][key] <= 0 || trCopy[i][key] > 65536){
                        return false;
                    }
                    sides.push(trCopy[i][key]);
                }
            }
            let p = (sides[0] + sides[1] + sides[2])/2;
            trCopy[i].square = Math.round(Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2])));
        }
        trCopy.sort(function(a, b){
            if(a.square < b.square) return 1; 
            if(a.square > b.square) return -1;
            return 0;
        })
        for(let i = 0; i < trCopy.length; i += 1){
            result.push(trCopy[i].vertices);
        }
        return result;
    }
}
task3(triangles);
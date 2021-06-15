let la = [0, 3, 99, 44, -1]

let lb = [4, 6, 9, 10, -349]

let lc = [1, 1, 1, 99, 37]

let ld = [...la, ...lb, ...lc]

ld.sort (function(n1,n2) {

    return n2 - n1;
})

console.log(ld)

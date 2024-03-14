let n1 = +prompt('son kriting')

while(isNaN(n1) || n1 == 0){
    n1 = +prompt('son kritishingiz kerak')
}

let box =  1
for(let i = 1; i <= n1; i++){
    box = i * box
}
console.log(box);

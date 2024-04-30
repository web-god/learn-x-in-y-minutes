let count = 0;
let name = () => {
    console.log(count);
    count++;
}

setInterval(name,1000);
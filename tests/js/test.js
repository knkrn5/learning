const sleep = (ms) => new Promise((resolve => {
    console.log("hiii")
    setTimeout(resolve, ms);
}));

sleep();

console.dir(sleep);
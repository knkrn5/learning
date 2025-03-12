const sleep = () => new Promise(((res, rej, next) => {
    res("hiii")
    rej("err")
    next("test")
    console.log(res, rej, next)
}));

sleep();





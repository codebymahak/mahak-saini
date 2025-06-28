//async->this is a type of js code which is executed along with other code simultaneously ,bina program ko rokke
//three ways of handling asyc //callback // promises//async-await

//for example:
// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },2000);
// console.log("3");//this is because settimeout is  asynchronous so 2 is executed after 2 second that why 1 and 3 is print before 2 


//1.)callback-> pass function as an argument.here the problem with callback is that nested callbacks  
// function greet(name,cb){
//     console.log('hi',name);
//     cb()
// }
// function bye(){
//     console.log('bye');
// }
// greet('mehak',bye)

//web api's
//setinterval,settimount

// let timer=setTimeout(()=>{   //it will execute after a particular time,it is executed only once
//     console.log('hello')
// },2000);
// clearTimeout(timer);

// let timer=setInterval(()=>{    //it is execute after a given delay to infinity if we dont's use clear interval
//     console.log('hii from interval');
// },1000)
// clearInterval(timer);    //this will stop the further execution


//setinterval(cb,millsecond )

//make a function that console table of parameter that is passed each entry after each second
// function printtable(num,times){
//     let count=0;
//     let interval=setInterval(()=>{
//         count++;
//         console.log(num*count);
// if(count==times){
//     clearInterval(interval);
// }
//     },1000);
// }
// printtable(12,10)

// function fetchData(cb){
//     setTimeout(()=>{
//         console.log('data fetched')//api calling 
//         cb()
//     },2000)
// }
// function processData(){
//     console.log('processed')
// }
// fetchData(processData)


// function fn1(cb){
//     setTimeout(()=>{
//         console.log('step1')
//         cb()
//     },1000)
// }
// function fn2(cb){
//     setTimeout(()=>{
//         console.log('step2')
//         cb()
//     },1000)
// }
// function fn3(cb){
//     setTimeout(()=>{
//         console.log('step3')
//         cb()
//     },1000)
// }
// fn1(()=>{
//     fn2(()=>{
//         fn3(()=>{
//             console.log('all done')
//         })
//     })
// })

//settimeout()
//questions1.)print "hello world" after 2 seconds
// let timer=setTimeout(()=>{
//     console.log("hello world")
// },2000);

//questions 2.) print numbers 1 to 7 ,each after 1 second delay

// let count=0;
// let timer=setInterval(()=>{
//     console.log(count);
//         count++;
//     if(count==8){
//         clearInterval(timer)
//     }
// },1000);

// question3.)create countdowndown from 5 to 1
// let count=5;
// let timer=setInterval(()=>{
//     console.log(count);
//         count--;
//     if(count==0){
//         clearInterval(timer)
//     }
// },1000);


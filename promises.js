//promises// these two parameter resolve||reject//kam ho gya ya nhi huya //data update in an database use it 
//states:->pending,fulfilled,rejected

// let promise=new Promise((resolve,reject)=>{//resolve and reject are also functions
//      let dataUpdated=true
//      if(dataUpdated){
//         resolve('your credit is received')
//      }else{
//         reject('he didnt gave my money back')
//      }
// }).then((msg)=>{    //then handles success one by one
//     console.log(msg)
// }).catch((err)=>{    //handles errors
//     console.log(err)
// }).finally(()=>{
//     console.log('work ids done')
// })

//then ,catch,finally bikul default ki tarah work krta h 
//resolve vala then m milta h or reject vala catch m //dono ek sath kabhi work nhi krti h 
// promise.then((msg)=>{
//     console.log('message',msg)
// })
// promise.catch((err)=>{
//     console.log('error',err)
// })

// function getData(){
//     fetch(url)//make http request,returns promises
//     .then((response)=> response.json())
//     .then((data)=>console.log(data)).
// catch((err)=>console.log(err))
// }
// getData()


//question1.)create a promise and check the number is odd or even
// function checkisevenorodd(a){
// let promise=new Promise((resolve,reject)=>{
//     if(a%2==0){
//        resolve("even")
//     }else{
//         reject("odd")
//     }
// }).then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })
// }
// checkisevenorodd(23)

//question2.)create a promise that returns a number,then chain.then() to multiply by 2,then by 3

// let promise=new Promise((resolve, reject) => {
//     resolve(6)
// }
// ).then((num)=>{
//     console.log(num);
// })
// .then((msg)=>{
  //  return num*2;
//     console.log(msg*2)
// }).then((result)=>{
    //     return msg*3;
//     console.log(result)
// })

//question3.)check username and password with a promise
// function checkuserandpass(name,pass){
// let promise=new Promise((resolve, reject) => {
//     const Username="ishurulhan";
//     let correctpassword='123@';
//     setTimeout(()=>{
//     if(Username==name && correctpassword==pass){
//         resolve("correct")
//     }else{
//         reject("incorrect")
//     }},1000);
// }).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err)
// })
// }
// checkuserandpass('ishurulhan','123@')
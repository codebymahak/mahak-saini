//strings
// let str="mahak saini";
// console.log(str);
// console.log(str.length);
// console.log(str[4]);//k

//string methods
//uppercase,lowercase,trim,replace,slice,concat,charAt
// let str="mahaksaini";
// let str2=str.toUpperCase();
// console.log(str);
// console.log(str2);

//lowercase
// let str="mahaksaini";
// let str2=str.toLowerCase();
// console.log(str);
// console.log(str2);

//trim method remove the starting and ending space but don't remove between space in a string
// let str="      mehak    saini     ";
// console.log(str.trim());

//slice
// let str="mahaksaini";
// let str2=str.slice(2,5);//hak
// console.log(str2);
// let str3=str.slice(2);//haksaini
// console.log(str3);
// console.log(str);

//includes
// let str="mahaksaini";
// console.log(str.includes(3));


//split
// let str="mahaksaini";
// let newstr=str.split('a');
// let newstr2=str.split('');
// console.log(newstr);
// console.log(newstr2);

//join method
// let fruits=["apple","orange","pineapple"];
// const fruitString=fruits.join();
// console.log(fruitString);
// const fruitString1=fruits.join("");
// console.log(fruitString1);
// const fruitString2=fruits.join('o');
// console.log(fruitString2);


// let str="mahaksaini";
// console.log(str.indexOf("a"));


//replace method
// let str="novemcontrols";
// console.log(str.replace("novem","city"));
//  let str="novemcontrols";
// console.log(str.replaceAll("o","c"));

//homework


const fruits = [
    { Name: "Apple", count: 4},
    { Name: "Banana", count: 6 },
    { Name: "Mango", count: 6},
     {Name:"Apple",count:1}]
console.log("Simple Array :", fruits)

function addfruits(FruitAdd) {
    const fruitfind = fruits.find(item => item.Name === FruitAdd.Name);
    if (fruitfind) {
        fruitfind.count += 1
    }
    else {
        fruits.push(FruitAdd)
    }
}
addfruits({ Name: "Cherry", count: 1 })
addfruits({ Name: "Watermelon", count: 1 })
addfruits({ Name: "Apple", count: 1 })
addfruits({ Name: "Banana", count: 1 })
console.log( fruits)
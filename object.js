//in javascript object.assign() is a type of built -in method which is used to copy or merge the object
//syntax:
// Object.assign(Target,source)//target:in which the properties is copied and sources:all the sources which is in the object whose properties is copied.

// const target={a:1};
// const source={b:2};
// const source1={c:3};
// Object.assign(target,source,source1);
// console.log(target);//this is also modify

//overwriting by later source 
// const target={name:"mahak",age:25};
// const source={age:20};
// const source1={name:"saini"};
// Object.assign(target,source,source1);
// console.log(target);

//object.entries() is also built in method hai jo kisi object ke [key:value] pairs ka array return karta hai
// const student={
//     name:"mahak",
//     age:22,
//     course:"javascript"
// };
// const entries=Object.entries(student);
// const values=Object.values(student);//this is only return the values of the key
// console.log(entries);
// console.log(values);

//object.freeze()and object.is frozen()both are used to make object unchangeable and also check the freeze state
//object.freeze() is used to freeze the object->1.)properties add,delete,or modify not possible. 2.)object still exist ,but no chnages are allowed
// const user={
//     name:"mahak",
//     age:22
// };
// Object.freeze(user);
// user.age=25;
// user.name="mahak";
// console.log(user);

//object.isfrozen() is used to check the object is freeze or not
// const obj={x:10};
// console.log(Object.isFrozen(obj));
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));

//freeze is shallow
// const obj={
//     user:{name:"mahak"}
// };
// Object.freeze(obj);
// obj.user.name="saini"; //allowed (nested object not freeze)
// console.log(obj.user.name);

//object.seal() which is used to seal the object//new properties  not be added//existing properties is not deleted//but existing properties values are changes
// const user={
//     name:"mahak",
//     age:23
// };
// Object.seal(user);
// user.age=24;//you can update values here
// user.city="delhi";//not added
// delete user.name;//not deleted
// console.log(user);
// console.log(Object.isSealed(user));

//object.groupby()is used to group array elements by a specific condition and return an object
// const words=['one','two','three','four','five'];
// const group=Object.groupBy(words,word=>word.length);
// console.log(group);

// const people=[
//     {name:"mahak",age:23},
//     {name:"ravi",age:20},
//     {name:'saini',age:23}
// ];
// const grouped=Object.groupBy(people,people=>people.age);
// console.log(grouped);
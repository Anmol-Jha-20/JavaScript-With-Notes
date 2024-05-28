//Dates in JS

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //output: object

let myCreatedData1 = new Date(2024, 0, 23); //new Date(year,month,date)
console.log(myCreatedData1.toDateString());

let myCreatedData2 = new Date(2024, 0, 23, 6, 4);
console.log(myCreatedData2.toLocaleString()); //output: 23/1/2024, 6:04:00 am

let myCreatedData3 = new Date("2024-01-14");
console.log(myCreatedData3.toLocaleString()); //output: 14/1/2024, 5:30:00 am

let myCreatedData = new Date("01-14-2023");
console.log(myCreatedData.toLocaleString()); //output: 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); //output: 1716900935894 in millisecond from 1 jan 1970
console.log(myCreatedData.getTime());
console.log(Math.floor(Date.now() / 1000)); //used to convert milliseconds into seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //it starts from 0(means january)
console.log(newDate.getMonth() + 1); //to start from 1
console.log(newDate.getDay()); //it starts from 1(means monday)

// newDate.toLocaleString("default", {
//   weekday: "long",
// });

// [2024-8-1, 2024-6-6,2024-7-5];


const data = [new Date(2024, 7, 1, 0, 0, 0,),
    new Date(2024, 5, 6, 0, 0, 0,),
    new Date(2024, 6, 5, 0, 0, 0,),
    new Date(2024, 1, 1, 0, 0, 0,),

];

data.map((item) => {
    console.log(item.toLocaleString());
});
console.log("=================");
const sortedData = data.toSorted((a, b) => {
    console.log(a.toLocaleString(), b.toLocaleString());
    return a - b;
});

console.log("=================");
sortedData.map((item) => {
    console.log(item.toLocaleString());
});
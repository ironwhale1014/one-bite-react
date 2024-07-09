console.log(10 / 1.5);

let num = 9;

if (num >= 10) {
    console.log("num은 10 이상 입니다.");
} else if (num >= 5) {
    console.log("num은 5 이상 입니다.")
} else {
    console.log("num은 10이하 입니다.")
}

let animal = "owl";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }

    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    default:{
        console.log("그런 동물은 모릅니다.")
    }
}
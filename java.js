
let ism = prompt("Ismingizni kiriting");

let hozirgi = prompt("Hozirgi yilni kiriting");
let tugilgan = prompt("Tug'ilgan yilingizni kiriting");

function age(hozirgi, tugilgan) {
    return hozirgi - tugilgan;
}

let yosh = age(hozirgi, tugilgan);
console.log("Ismingiz: " + ism + ", sizning yoshingiz: " + yosh);


let fullName = "Rama Krishna Narayan";


let nameParts = fullName.trim().split(" ");

let shortName = "";
for (let i = 0; i < nameParts.length - 1; i++) {
    shortName += nameParts[i].charAt(0) + ". ";
}
shortName += nameParts[nameParts.length - 1]; 


console.log(shortName); 

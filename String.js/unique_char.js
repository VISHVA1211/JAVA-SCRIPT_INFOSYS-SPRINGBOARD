function getUniqueChars(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {  // Check if char is already added
            unique += str[i];
        }
    }
    return unique;
}

// Example usage
let input = "thequickbrownfoxjumpsoverthelazydog";
let output = getUniqueChars(input);
console.log(output); // thequickbrownfxjmpsvlazydg

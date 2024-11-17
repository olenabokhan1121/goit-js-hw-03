function slugify(title) {
    let normalizedArray = [];
    const array1 = title.split(" ");
  
    for (let i = 0; i < array1.length; i++) { normalizedArray.push(array1[i].toLowerCase()); }
    const slug = normalizedArray.join("-");
        
    return slug;
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
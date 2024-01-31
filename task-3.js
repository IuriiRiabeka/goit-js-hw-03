//function filterArray(numbers, value) {
//let newArray = [];
//for (const number of numbers) {
//if (number > value) { newArray.push(number) }
//else { newArray.push() }

//}
//return (newArray);
//};


//console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
//console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
//console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
//console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
//console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[-1];
console.log(apartment.tags[apartment.tags.length - 1]);
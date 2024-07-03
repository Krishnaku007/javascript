const marvel_heros=["Thor", "ironman","Thanos"]
const dc_heroes=["flash", "superman", "batman"]

// marvel_heros.push(dc_heroes)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const allheros= marvel_heros.concat(dc_heroes)
// console.log(allheros);

// const all_new_heros=[...marvel_heros,...dc_heroes]//...spread op
// console.log(all_new_heros);

// const another_array=[1,2,3,4,[4,5,6],6,[8,6,5,4,[3,4,6]]]

// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);.

console.log(Array.isArray("Krishna"));
console.log(Array.from("krishna"));

console.log(Array.from({name:"Krishna"})); //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));




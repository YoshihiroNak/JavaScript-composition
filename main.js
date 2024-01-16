// Import the RPG module (assuming it's in the same directory)
const rpg = require('./rpg.js'); // Replace './rpg' with the correct path to the module

// Create instances of characters
const aragorn = new rpg.Ranger('Aragorn', 'Human', 100, 50);
const galadriel = new rpg.Mage('Galadriel', 'Elf', 120, 75);
const frodo = new rpg.Burglar('Frodo', 'Hobbit', 50, 25);
const saruman = new rpg.Wizard('Saruman', 'Human', 80, 100);

// Set currency for Frodo
frodo.inv.setCurrency(10, 5, 0);

// Print Frodo's currency
console.log(frodo.inv.getCurrency());

// Print Frodo's inventory details
console.log(frodo.inv);

// Create a chest instance
const chest = new rpg.Chest(['Longsword', 'Iron Helm'], 2, 25, 50);

// Perform battles
saruman.battle(aragorn);
galadriel.battle(aragorn);

// Print details of Galadriel
console.log(galadriel);

// Uncomment the following lines if you want to test loot transfer
// frodo.inv.transfer(chest.inv);
// console.log(frodo.inv);
// console.log(frodo.inv.get_currency());
// console.log(chest.inv);



    class Character {
        constructor(name, race, health, attack) {
            this.name = name
            this.race = race
            this.health = health
            this.attack = attack
            this.copper = 0
            this.inv = new Inventory([], 0, 0, 0)
        }

    battle(other) {
        console.log(`${this.name} attachs ${other.name}`)
    }
}
class Ranger extends Character {
    battle(other) {
        console.log(`${this.name} launches a brutal melee attack on ${other.name}`)
}
    recuitUndead() {

    }
}


class Mage extends Character {
    constructor(name, race, health, attack) {
        // Call the superclass constructor
            super(name, race, health, attack) 
            this.mana = 100
        }

    battle(other) {
        console.log(`${this.name} casts a wicked spell at ${other.name}`)
        this.mana -= 20
    }
}
class Burglar extends Character {
    battle(other) {
        console.log(`${this.name} sneaks in a stealth attack on ${other.name}`)
    }
}

class Wizard extends Character {
    battle(other) {
        console.log(`${this.name} summons an minion, which attacks ${other.name}`)
    }
}


class Chest {
    constructor(items, gold, silver, copper) {
        this.inv = new Inventory(items, gold, silver, copper)
    }
}
class Inventory {
    constructor(items, gold, silver, copper) {
        this.items = items // list
        this.setCurrency(gold, silver, copper) // Delegation
        // self.gold = gold
        // self.silver = silver
        // self.copper = copper
    }

    // from_inv and to_inv are instances of Inventory
    transfer(to_inv) {
        // Add all the items from from_inv to to_inv
        to_inv.items.push(this.items)
        // dellete all the items from from_inv
        this.items = []
        // Add the currency from from_inv to to_inv
        to_inv.copper += this.copper
        // Set currency of from_inv to 0
        this.copper = 0
    }

        // setter
    setCurrency(gold, silver, copper) {
        this.copper = gold * 10000 + silver * 100 + copper
}
    // getter
    getCurrency() {
        const gold = Math.floor(this.copper / 10000)
        const silver = Math.floor((this.copper % 10000) / 100)
        const copper = this.copper % 100
        return gold, silver, copper
}
}

// Create instances of characters
const aragorn = new Ranger('Aragorn', 'Human', 100, 50);
const galadriel = new Mage('Galadriel', 'Elf', 120, 75);
const frodo = new Burglar('Frodo', 'Hobbit', 50, 25);
const saruman = new Wizard('Saruman', 'Human', 80, 100);

// Set currency for Frodo
frodo.inv.setCurrency(10, 5, 0);

// Print Frodo's currency
console.log(frodo.inv.getCurrency());

// Print Frodo's inventory details
console.log(frodo.inv);

// Create a chest instance
const chest = new Chest(['Longsword', 'Iron Helm'], 2, 25, 50);

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


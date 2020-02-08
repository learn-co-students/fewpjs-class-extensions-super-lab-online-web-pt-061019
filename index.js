// // Write your classes here

class Tree {
    constructor(species) {
        this.species = species
    }

    static definition() {
        return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`;
    }
}

class Deciduous extends Tree {
    constructor (species, name) {
    super(species);
    this.name = name
    }

    static definition() {
        return super.definition() + ` Deciduous trees shed their leaves annually.`
    }
}

class Evergreen extends Tree {
    constructor (species, name) {
    super(species);
    this.name = name
    }

    static definition() {
        return super.definition() + ` Evergreens keep their leaves all year round.`
    }
}
// class Pet {
//     constructor(name) {
//       this._name = name;
//       this._owner = null;
//     }
   
//     get name() {
//       return this._name;
//     }
   
//     get owner() {
//       return this._owner;
//     }
   
//     set owner(owner) {
//       this._owner = owner;
//     }
   
//     get speak() {
//       return `${this.name} speaks.`;
//     }
//   }
   
//   // Inherits from Pet
//   class Dog extends Pet {
//     constructor(name, breed) {
//       super(name); /* new */
//       this.breed = breed;
//     }
//   }
   
//   let creature = new Pet('The Thing');
//   let dog = new Dog('Spot', 'Foxhound');
   
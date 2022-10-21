const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals(){
    for(let i = 0; i < this.lifeGoals.length; i++){
      console.log(`${this.name} likes to ${this.lifeGoals[i]}`);
    }
  }
  
  helpsPeople(){
    return `${this.name} helps their friend ${this.friend}`;
  }
}

module.exports = FriendlyDragon;
const Dragon = require('./dragon');

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings = [], nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }



  dontInviteThemOverForDinner() {
    for (let i = 0; i < this.evilDoings.length; i++) {
        console.log(`${this.name} will ${this.evilDoings[i]}`);
    }
}
burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
}



}
module.exports = EvilDragon;
const FriendlyDragon = require('./classes/friendly-dragon');
const EvilDragon = require('./classes/evil-dragon');
const Dragon = require('./classes/dragon');
// const Dragon = require('./dragon');





const falkor = new FriendlyDragon('Falkor', 'white', ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"], 'Bastian' )

const smaug = new EvilDragon('Smaug', 'black', ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], 'Dwarf King' )

const allDragons = Dragon.getDragons(smaug, falkor)





/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = {
    falkor,
    smaug,
    allDragons
  };
} catch {
  module.exports = null;
}
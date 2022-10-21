const FriendlyDragon = require('./classes/friendly-dragon');
const EvilDragon = require('./classes/evil-dragon');
const Dragon = require('./classes/dragon');
// const Dragon = require('./dragon');





const falkor = new FriendlyDragon('Falkor', 'white', ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"], 'Bastian' )

const smaug = new EvilDragon('Smaug', 'black', ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], 'Dwarf King' )

const allDragons = Dragon.getDragons(smaug, falkor)






/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

// try {
// <<<<<<< HEAD
//   module.exports = {
//     falkor,
//     smaug,
//     allDragons
//   };
// =======
//   module.exports.falkor = falkor
//   module.exports.smaug = smaug
// >>>>>>> e7bd3170c540f6350fee46b39dbc2c63f1f5dc1d
// } catch {
//   module.exports = null;
// }
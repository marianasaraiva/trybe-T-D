import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _character1: Fighter;
  private _character2: Fighter;

  constructor(
    character1: Fighter,
    character2: Fighter,
  ) {
    super(character1);
    this._character1 = character1;
    this._character2 = character2;
  }

  fight(): number {
    this._character1.attack(this._character2);
    this._character2.attack(this._character1);
    // console.log(super.fight()); // retorna 1 ou -1 
    return super.fight();
  }
}

export default PVP;
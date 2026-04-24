
import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../dragonball/character-app/character-add";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: `./dragonball-super-page.component.html`,
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
  //imports: [NgClass]
})

export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);


}

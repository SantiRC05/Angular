
import { Component, inject} from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../dragonball/character-add/character-add";
import { DragonBallService } from "../../services/dragonball.service";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: `./dragonball-super-page.component.html`,
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
})

export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonBallService);
  }

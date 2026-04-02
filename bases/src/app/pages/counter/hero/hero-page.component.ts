import { ChangeDetectionStrategy, Component, signal} from "@angular/core";

@Component({
  selector: 'app-hero-page',
  templateUrl: `./hero-page.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroPageComponent {}


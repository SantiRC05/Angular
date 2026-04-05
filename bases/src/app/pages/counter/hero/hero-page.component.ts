import { ChangeDetectionStrategy, Component, signal} from "@angular/core";

@Component({
  selector: 'app-hero-page',
  templateUrl: `./hero-page.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {
  name: string = 'Spiderman';
  age: number = 25;

  get nameUpper(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 25;
  }
}


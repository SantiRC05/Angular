import { Component, signal } from "@angular/core";

@Component({
  templateUrl: `./hero-page.component.html`,
})

export class HeroPageComponent {

name = signal('Iron Man')
age = signal(40)


getHeroDescription() {
return `${this.name()} is ${this.age()}`
}
changeHero() {
this.name.set('Spiderman');
this.age.set(22);
}

changeAge() {
this.age.set(60);
}

resetForm() {
this.name.set('Iron Man');
this.age.set(40);
}
}


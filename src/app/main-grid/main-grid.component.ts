import {Component} from '@angular/core';

export interface AnimalData {
  name: string,
  size: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrl: './main-grid.component.css'
})
export class MainGridComponent {

  animals: AnimalData[] = [
    {
      name: "Shiba Inu",
      size: "Small",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      name: "American Bully",
      size: "Small",
      description: `The American Bully is a modern breed of dog that was developed as a companion dog, and originally
       standardized and recognized as a breed in 2004 by the American Bully Kennel Club (ABKC).`,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Champion_Charlie_Muscles_%282%29.jpg"
    },
    {
      name: "Carpathian Shepherd Dog",
      size: "Big",
      description: `Historically livestock guardian dogs were used by Romanian farmers, each farmer would breed the dog to his own need and there was no standard.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Carpatin.jpg"
    },
    {
      name: "Havanese",
      size: "Small",
      description: `The Havanese, a bichon-type dog, is the national dog of Cuba, developed from the now extinct Blanquito de la Habana ("little white dog of Havana"). The Blanquito descended from the also now-extinct Bichón Tenerife.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_Havanese_judging.jpg/440px-A_Havanese_judging.jpg"
    }
  ]

}

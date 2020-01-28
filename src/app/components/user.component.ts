import { Component } from "@angular/core";

@Component({
  selector: "user",
  template: `
    <p><strong>Name</strong> : {{ name }}</p>
    <p><strong>Email</strong> : {{ email }}</p>
    <p>
      <strong>Address</strong> : {{ address.street }},{{ address.city }},{{
        address.state
      }}
    </p>
    <button (click)="toggleHobbies()">
      {{ showHobbies ? "Hide Hobbies" : "Show Hobbies" }}
    </button>
    <div *ngIf="showHobbies">
      <h3>Hobbies :</h3>
      <ol>
        <li *ngFor="let hobby of hobbies">{{ hobby }}</li>
      </ol>
    </div>
  `
})
export class userComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  constructor() {
    this.name = "Govardhan AB";
    this.email = "goabala88@gmail.com";
    this.address = {
      street: "10/11,Node Street",
      city: "Chennai",
      state: "TamilNadu."
    };
    this.hobbies = ["Reading Books", "Cooking", "Movies"];
    this.showHobbies = false;
  }
  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

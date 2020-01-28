"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var userComponent = (function () {
    function userComponent() {
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
    userComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    return userComponent;
}());
userComponent = __decorate([
    core_1.Component({
        selector: "user",
        template: "\n    <p><strong>Name</strong> : {{ name }}</p>\n    <p><strong>Email</strong> : {{ email }}</p>\n    <p>\n      <strong>Address</strong> : {{ address.street }},{{ address.city }},{{\n        address.state\n      }}\n    </p>\n    <button (click)=\"toggleHobbies()\">\n      {{ showHobbies ? \"Hide Hobbies\" : \"Show Hobbies\" }}\n    </button>\n    <div *ngIf=\"showHobbies\">\n      <h3>Hobbies :</h3>\n      <ol>\n        <li *ngFor=\"let hobby of hobbies\">{{ hobby }}</li>\n      </ol>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], userComponent);
exports.userComponent = userComponent;
//# sourceMappingURL=user.component.js.map
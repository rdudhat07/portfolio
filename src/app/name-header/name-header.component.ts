import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-header',
  templateUrl: './name-header.component.html',
  styleUrls: ['./name-header.component.css']
})
export class NameHeaderComponent {

@Input({required: true}) headerInput =""

@Input() headerDiscription =""

}

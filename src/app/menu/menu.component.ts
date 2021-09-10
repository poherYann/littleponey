import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username : string = '';
  askCon: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.askCon){
      sessionStorage.setItem('userId', this.username);
      this.askCon = false;
    } else {
      sessionStorage.removeItem('userId');
      this.username="";
      this.askCon = true;
    }
  }

}

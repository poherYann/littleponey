import {Component, OnInit} from '@angular/core';
import {PONIES} from "../mock-ponies";
import {Pony} from "../pony";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {PonyService} from "../pony.service";

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  ponyForm = this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    age: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private router:Router,
              private ponyService: PonyService) {
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    let res: Pony = this.ponyForm.value;
    // PONIES.push(res);
    this.ponyService.addPony(res);
    this.router.navigate(['']);
  }
  /*newPony: Pony = new Pony();
  add: boolean = true;*/

  /*constructor(private router: Router, private route: ActivatedRoute) {
  }*/

  /*ngOnInit(): void {
    // test url
    if (this.route.snapshot.paramMap.get('id') == null) {
      this.add = true;
    } else {
      this.add = false;
      let s = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "0" : s, 0)
      // spécial mock
      for (let i = 0; i < PONIES.length; i++) {
        if (PONIES[i].id === id) {
          this.newPony = PONIES[i];
          break;
        }
      }
    }
  }*/

 /* onSubmit(): void {
    if (this.add) {
      this.newPony.id = PONIES.length;
      PONIES.push(this.newPony);
      // avec les mocks casser le pointeur qui fait que tous les poney ajoutés sont le
      this.newPony = new Pony();
    }
    this.router.navigate(['']);
  }*/

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import { Router} from "@angular/router";
import { PONIES} from "../mock-ponies";
import { Pony } from "../pony";


@Component({
  selector: 'app-update-pony-react',
  templateUrl: './update-pony-react.component.html',
  styleUrls: ['./update-pony-react.component.css']
})
export class UpdatePonyReactComponent implements OnInit {

  ponyForm = this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    age: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() : void{
    let res: Pony = this.ponyForm.value;
    PONIES.push(res);
    this.router.navigate(['']);
  }

}

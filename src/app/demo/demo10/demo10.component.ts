import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  public myForm!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      file: [null, [Validators.required]],
      filesource: [null, [Validators.required]]
    });
  }

  public onSubmit() {
    console.log(this.myForm);
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.myForm.patchValue({
        filesource: file
      });
    }
  }

}

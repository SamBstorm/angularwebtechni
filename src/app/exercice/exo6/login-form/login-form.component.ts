import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _session: SessionService, private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }
  public onSubmit() {
    if (!this.loginForm.valid) return;
    this._session.saveUser({
      email: this.loginForm.controls?.['email'].value,
      password: this.loginForm.controls?.['password'].value
    });

    this._router.navigateByUrl('/');
  }

}

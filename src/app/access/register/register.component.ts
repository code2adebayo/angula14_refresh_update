import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // imports: [CommonModule, MaterialModule, FormsModule],
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {

  constructor(private route: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.route.navigate(['login']);
  }

  reactiveForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required),
  })

  addStaticData(data: any): void {
    return {
      ...data,
      "lastName":"Stephen", 
      "dob": "2020-08-24", 
    }
  };

  saveUser() {
    console.warn('saveUser', this.reactiveForm.value);
    if (this.reactiveForm.valid) {
        const serverData: any = this.addStaticData(this.reactiveForm.value);
        this.service.initiateRegister(serverData).subscribe({
          next: (data: any) => {
            console.warn(data);
            
          },
          error: (error: any) =>{},
          complete: () => console.info('complete') 
        }) 
    }
  }


}
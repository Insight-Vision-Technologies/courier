import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  panelOpenState = false;
  @Input() errorMsg!: string;
  @Input() displayError!: boolean;
  constructor(private router: Router, private toster: ToastrService,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]],
      message: [null, Validators.required],

    });
     }

  ngOnInit(): void {

  }
  faq: any[] = [
    {
      question: 'Why does it think the jQuery plugin is missing?',
      answer: 'Remember: load jQuery before AngularJS if you are using jQuery plugins!'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    }
  ];
  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
  onSubmit(data: any) {
    if (this.form.valid) {
      console.log(data.name, data.email, data.mobile, data.message)
      this.toster.success('Enquiry Saved successfully', 'succes', { timeOut: 2000, closeButton: true, progressBar: true })
    } else {
      this.validateAllFormFields(this.form);
    }

  }

}

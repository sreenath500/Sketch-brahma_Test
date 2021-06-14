import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NutritionService } from './services/nutrition/nutrition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nutritionApp';
  nutritionData: any = [];
  contactForm: any = FormGroup;
  postResponse: any;
  Posturl: any;

  constructor(private nutritionService: NutritionService, private formBuilder: FormBuilder) {
    this.getNutritionData();
    this.contactForm = this.formBuilder.group({
      message: ['']
    });
  }


  getNutritionData(): any {
    this.nutritionService.getData().subscribe(
      (res) => {
        console.log("res", res)
        this.nutritionData = res;
      },
      (err) => { console.log("err", err) },
    );
  }

  onSubmit() {
    console.log('This button is clicked!')
    console.log('This button is clicked! with this value', this.contactForm.value['message'])
    this.nutritionService.postData(this.contactForm.value['message']).subscribe(
      (res) => {
        console.log("res", res);
        this.Posturl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.contactForm.value['message']}`
        this.postResponse = res;
      },
      (err) => { console.log("err", err) },
    );
  }
}

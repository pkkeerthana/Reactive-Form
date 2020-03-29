import { Component,OnInit ,ViewChild} from '@angular/core';
import { FormService } from './form.service';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paragraph:String='english';
  constructor(private formservice:FormService, private fb:FormBuilder){
   
  }
  language=['Malayalam','English','Hindi'];
  title="knowledge graph";
  client_id:string;
  KGForm:FormGroup;
  attribute_weights:FormGroup;
  action_weights:FormGroup;
  kg_weights:FormGroup;
  Action_keys:any;
  Action_values:any;
  Kg_keys:any;
  Kg_values:any;
  flag:string;
  formready=0;
  
  getClientDetails(){
    
    this.formservice.getdata(this.client_id).subscribe(data=>{    
     
      this.Action_keys= Object.keys(data.attribute_weights.action_weights);
      this.Action_values= Object.values(data.attribute_weights.action_weights);
      this.Kg_keys= Object.keys(data.attribute_weights.kg_weights);
      this.Kg_values= Object.values(data.attribute_weights.kg_weights);
      
      for(let i=0;i<this.Action_keys.length;i++){
        this.action_weights.addControl(this.Action_keys[i],new FormControl(this.Action_values[i]));
      }
      for(let i=0;i<this.Kg_keys.length;i++){
        this.kg_weights.addControl(this.Kg_keys[i],new FormControl(this.Kg_values[i]));
      }
      this.attribute_weights.addControl('action_weights', new FormGroup(this.action_weights.controls));
      this.attribute_weights.addControl('kg_weights',new FormGroup(this.kg_weights.controls));
      this.KGForm.addControl('attribute_weights',new FormGroup(this.attribute_weights.controls));
     
      this.formready=1;
    });
      
  }
  postClientDetails(){
    console.log(this.KGForm.value);
  }

  changeLanguage(e){
    console.log(e);
    this.flag=e.target.value;
  }
  ngOnInit(){

    this.kg_weights=this.fb.group({});
    this.action_weights=this.fb.group({});
    this.attribute_weights=this.fb.group({});
    this.KGForm=this.fb.group({});
    
    
  }
  

 


}

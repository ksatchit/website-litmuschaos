import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public copyText1:string = "Copy";
  public copyText2:string = "Copy";
  public copyText3:string = "Copy";
  public helmCommand:string = ` helm repo add litmuschaos https://litmuschaos.github.io/chaos-charts \
  helm repo update \
  helm install litmuschaos/litmusInfra --namespace=litmus \
  `
  constructor() { }

  ngOnInit() {

  }
  public CopyButton1(){
    this.copyText1="Copied"
  }
  public CopyButton2(){
    this.copyText2="Copied"
  }
  public CopyButton3(){
    this.copyText3="Copied"
  }

}

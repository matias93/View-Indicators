import { Component, OnInit } from '@angular/core';
import { IndicatorService } from '../../service/indicator.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dolar-intercambio',
  templateUrl: './dolar-intercambio.component.html',
  styleUrls: ['./dolar-intercambio.component.scss']
})
export class DolarIntercambioComponent implements OnInit {

  public indicator:any
  public chartIvp:any;
  public nombre:any
  public showTable = false;
  public displayStyle = "none";
  public valor:any[] =[];
  public fecha:any[] =[];
  public infoTable:any[] =[];
  

  constructor(private _service : IndicatorService) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
  try {
      this._service.getDolarIntercambio().subscribe((res:any) => {
        this.nombre = res.nombre;
        let data = res['serie'];
        this.infoTable = data.slice(0,10);
        this.valor = data.map((r:any) => r.valor);
        this.fecha = data.map((r:any) => r.fecha.substr(0,10));
        this.chartIvp = new Chart('canvas',{
          type: 'line',
          data:{
            labels: this.fecha,
            datasets: [{
              label: this.nombre,
              data:this.valor,
              borderWidth:3,
              fill:false,
              backgroundColor: 'rgba(93,175,89,0.1)',
              borderColor: '#3e95cd'
            }]
          },
        })
      })
      
    } catch (error) {
      console.error(error);
    }
  }
 
  openModalTable() {
    this.displayStyle = "block";
  }
  closeModalTable() {
    this.displayStyle = "none";
  }
  
}

 
  
    


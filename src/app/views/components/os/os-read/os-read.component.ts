import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { oservice } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {

  lista:OS[]=[];
  displayedColumns: string[] = ['abertura', 'fechamento', 'observação','prioridade','status','tecnico','cliente','action'];
  dataSource = new MatTableDataSource<OS>(this.lista);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   constructor(private service:oservice,
    private router:Router){

   }
  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
  this.service.findAll().subscribe((resposta)=>{
  this.lista = resposta;
  this.dataSource = new MatTableDataSource<OS>(this.lista);
  this.dataSource.paginator = this.paginator;
  })
  }
  navigateToCreate():void{
  this.router.navigate(['os/create'])
  }
}





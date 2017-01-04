import { Component } from '@angular/core';
import {DocumentsService } from './DocumentsService';

@Component({
  moduleId    : module.id,
  templateUrl : 'home.html'
})
export class HomeView { 
  title = 'documents'; 

 constructor(
        private documentsService: DocumentsService
        ) { }



}

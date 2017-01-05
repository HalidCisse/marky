import { Component } from '@angular/core';

@Component({
  selector: 'marky-app',
    template: `
    <header class="site-header">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a href="/" class="navbar-brand">markdown^</a>
          </div>
          <ul class="nav navbar-nav navbar-right text-capitalize">
            <li><a [routerLink]="['/documents']">browse documents</a></li>
            <li><a [routerLink]="['/login']" class="btn btn-primary">login</a></li>
          </ul>
        </div>
      </nav>
    </header>
    
    <div>       
        <div >
            <router-outlet></router-outlet>
        </div>

       <footer class="site-footer container-fluid text-center">
         <p>made with <i class="fa fa-heart-o"></i> by folks at <a href="">Hidden Founders</a></p>
       </footer>
     </div>
     `,
})
export class MarkyApp {
  pageTitle: string = 'Marky';

}

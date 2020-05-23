import { Component, Renderer2, Injector ,HostListener,ElementRef} from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMobile: any = false;
  public previousUrl: string;
  public isLogin: boolean;
  public currentRoute: any;
  public notAllowedSideBar: any = ['/', '/auth'];
  constructor(private renderer: Renderer2, private router: Router,  private injector: Injector,private elementRef:ElementRef) {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };

    this.applyStickyHeader();


  }
  title = 'yudiz';





getIsMobile(): boolean {
  const w = document.documentElement.clientWidth;
  const breakpoint = 992;
  if (w < breakpoint) {
    return true;
  } else {
    return false;
  }
}

applyStickyHeader(){
  if(!this.isMobile)
  {this.renderer.listen(this.elementRef.nativeElement.parentNode, 
    'scroll', (event) => {
       
  var navbar = document.getElementById("sticky-header");
  // var sticky = navbar.offsetTop;
  var img = document.getElementById("my_image");
   if (event.target.scrollTop >= 60 && navbar && img) {
      navbar.classList.add("sticky")
      img.setAttribute('src','assets/images/logo.svg');
    } else {
     if(navbar && img){ navbar.classList.remove("sticky");
      img.setAttribute('src','assets/images/logo.svg');}
    }
  
   });}
}


ngAfterViewChecked(): void {

}



}

import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {
  @Input('appDemo') myobj={bgcolor:"",fgcolor:"",tAlign:""};

  constructor(private myelement:ElementRef) {
    // console.log('efuwiiiiiiiiiiiiioo')
    // console.log(myelement);
    myelement.nativeElement.style.backgroundColor="black";
    myelement.nativeElement.style.color="red";
    myelement.nativeElement.style.textAlign="right";
   }
   @HostListener('click')oncheng(){
    this.myelement.nativeElement.style.backgroundColor=this.myobj.bgcolor;
    this.myelement.nativeElement.style.color=this.myobj.fgcolor;
    this.myelement.nativeElement.style.textAlign=this.myobj.tAlign;
   }

}

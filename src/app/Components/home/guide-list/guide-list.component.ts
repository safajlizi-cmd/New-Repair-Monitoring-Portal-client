import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CardAction, ActionsLayout } from '@progress/kendo-angular-layout';
@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent {
  constructor(private sanitizer: DomSanitizer) {}
  categories = [
    {
      title: 'New Repair',
      cards:[{
        description:
          "Overview",
          des:"Dossier Overview ",
        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/HL4jX2CaCgo"
        ),
      },
      {
        description:
          "Dossier InTake",
          des:"Dossier Creation  ",
        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/3OcbvT1bhoA"
        ),
      }
    ]
    },
    {
      title: 'Functional',
      cards:[
        {
          description:
            "Clients",
            des:"Clients Settings Guide",
          actionButtons: [{ text: "View details!", flat: true, primary: true }],
          actionsLayout: "start",
          videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
            "https://www.youtube.com/embed/YSTZLe22jhM"
          ),
        },
        {
        description:
          "Repairers",
          des:"Repairers Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/WGxEGb_xDB8"
        ),
      },
      {
        description:
          "Expertise companies",
          des:"Expertise companies Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/QO1sdv8rpaI"
        ),
      },
      {
        description:
          "Datatables Repair",
          des:"Datatables Repair Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/QO1sdv8rpaI"
        ),
      },
      {
        description:
          "Audit Trail",
          des:"Audit Trail Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/15UDob7Pt68"
        ),
      },
      {
        description:
          "Configuration",
          des:"Configuration Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/F13NGaf41Eo"
        ),
      },
    ]
    
    },
    {
      title: 'Accounts',
      cards:[{
        description:
          "Accounts",
          des:"Accounts management Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/QO1sdv8rpaI"
        ),
      },
     ]
    
    }
  ];
  goto(){
    window.open(' Guide/Item','_blank')
  }
  navigateToVideoPage(url :any){

  }
}

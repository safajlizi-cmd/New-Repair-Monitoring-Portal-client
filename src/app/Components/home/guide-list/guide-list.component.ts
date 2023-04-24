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
          des:"Dossier Creation Overview ",
        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
     
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
            "https://www.youtube.com/embed/tgbNymZ7vqY"
          ),
        },
        {
        description:
          "Repairers",
          des:"Repairers Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
      {
        description:
          "Expertise companies",
          des:"Expertise companies Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
      {
        description:
          "Datatables Repair",
          des:"Datatables Repair Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
      {
        description:
          "Audit Trail",
          des:"Audit Trail Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
      {
        description:
          "PDC Portal",
          des:"PDC Portal Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
      {
        description:
          "Configuration",
          des:"Configuration Settings Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
        ),
      },
    ]
    
    },
    {
      title: 'Configuration',
      cards:[{
        description:
          "Accounts",
          des:"Accounts management Guide",

        actionButtons: [{ text: "View details!", flat: true, primary: true }],
        actionsLayout: "start",
        videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://www.youtube.com/embed/tgbNymZ7vqY"
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

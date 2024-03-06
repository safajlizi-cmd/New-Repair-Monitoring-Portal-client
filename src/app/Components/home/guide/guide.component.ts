import { Component ,ViewEncapsulation} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CardAction, ActionsLayout } from "@progress/kendo-angular-layout";
interface MyMediaCard {
  description: string;
  actionButtons: Array<CardAction>;
  actionsLayout: ActionsLayout;
  videoSrc?: SafeResourceUrl;
  imageSrc?: string;
}
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  public mediaCards: Array<MyMediaCard> = [
    {
      description:
        "The Muppets Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!",
      actionButtons: [{ text: "Add to favourites", flat: true, primary: true }],
      actionsLayout: "start",
      videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/tgbNymZ7vqY"
      ),
    },
    {
      imageSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg",
      description:
        "The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.",
      actionButtons: [
        { text: "Read more", flat: true, primary: false },
        { text: "Add", flat: true, primary: true },
      ],
      actionsLayout: "start",
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}
}

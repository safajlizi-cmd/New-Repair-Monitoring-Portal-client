import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonFillMode } from '@progress/kendo-angular-buttons';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { saveAs } from '@progress/kendo-file-saver';
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { tabs } from '../../tabs';
import { clockIcon } from '@progress/kendo-svg-icons';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-assignment-act',
  templateUrl: './assignment-act.component.html',
  styleUrls: ['./assignment-act.component.css','./../../../../../../../assets/sharedCss/SharedStyle.scss']
})
export class AssignmentActComponent implements OnInit {
   id :any;
   public alignment: TabAlignment = "start";
   public icons = { trash: clockIcon }
   public selected = 1;
   notes:any
  public items = tabs;
  public fillMode: ButtonFillMode = "flat";
  fileInfos?: any;
  selectedFiles?: FileList;
  currentFile?: File;
  deleteID:any
  progress = 0;
  message = '';
  openedDelete=false 

   constructor(private route:ActivatedRoute 
            , private api :GenericService ,
            private notificationService :NotificationService,
             private fb:FormBuilder,
             private uploadService : DocumentService ,
             private userStore:UserStoreService){}


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  openfile(item:any){
         var src = "data:application/" + item.documentType + ";base64," + item.fileContent;
         var blob = this.dataURLtoBlob(src);
         var imageUrl = URL.createObjectURL(blob);
         var newWindow = window.open();
         var newDocument = newWindow!.document;
          newDocument.write("<html><body><img src='" + imageUrl + "' /></body></html>");
         newDocument.title = item.fileName.split("/").pop();
   }

  dataURLtoBlob(dataURL:any) {
         var parts = dataURL.split(';base64,');
         var contentType = parts[0].split(':')[1];
         var byteString = atob(parts[1]);
         var arrayBuffer = new ArrayBuffer(byteString.length);
         var uint8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
            }
          return new Blob([arrayBuffer], { type: contentType });
  }

  saveByteArray(item:any) {
           var src= "data:application/"+item.documentType+";base64," +item.fileContent;
           saveAs(src, item.fileName.split("/").pop());
  }

  upload(): void {
          if (this.selectedFiles) {
                   const file: File | null = this.selectedFiles.item(0);
                  if (file) {
                       this.currentFile = file;
                       this.uploadService.addDocument("Documents/upload",this.currentFile,'assignment',this.id,this.userStore.getDossierId()).subscribe({
                  next: (event: any) => {
                        this.getDocuments()
                        this.message = "documment added successfully"
                  },
                  error: (err: any) => {
                       if (err.error && err.error.message) {
                             this.message = err.error.message;
                       } else {
                              this.message = 'Could not upload the file!';
                        }
                  this.currentFile = undefined;
                  }
              });
             }
           this.selectedFiles = undefined;
         }
      }

  getDocuments() {
         this.uploadService.getByAssignment( this.id).subscribe({
          next: (res) => { this.fileInfos = res;  },
          error: (err) => {  this.notificationService.show({
            content: "Error occurred while geeting Documents",
            animation: {
              type: "slide",
              duration: 500,
            },
            type: { style: "error" },
          });
          }, 
          });
     }
  delete(id:any){
            this.deleteID = id;
            this.openedDelete=true    
    } 

  deleteDocument() {
         this.uploadService.delete( this.deleteID).subscribe({
         next: (res) => {  
                this.notificationService.show({
          content:"file deleted successfully",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "success" },
        });
  
               this.openedDelete =false
               this.getDocuments()
          },
          error: (err) => {
                this.notificationService.show({
                  content: "Error occurred while deleting document",
                  animation: {
                    type: "slide",
                    duration: 500,
                  },
                  type: { style: "error" },
                });
              }, 
              });
         }
  getNotes() {
    this.api.getById("Note/Assignment", this.id).subscribe({
      next: (res) => {
        this.notes = res },
      error: (err) => {

       this.notificationService.show({
          content: "Error occurred while geeting notes",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "error" },
        });
        },
    });
  }
 close(){ this.openedDelete=false }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['Id'];
    }); 
    this.getDocuments() ;
    this.getNotes();
  }
}


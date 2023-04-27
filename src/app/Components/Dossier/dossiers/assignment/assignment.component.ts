import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  public treeNodes: any[] = [
    {
      categoryName: "Storage",
      subCategories: [
        { subCategoryName: "Wall Shelving" },
        { subCategoryName: "Floor Shelving" },
        { subCategoryName: "Kids Storage" },
      ],
    },
    {
      categoryName: "Lights",
      subCategories: [
        { subCategoryName: "Ceiling" },
        { subCategoryName: "Table" },
        { subCategoryName: "Floor" },
      ],
    },
  ];
}
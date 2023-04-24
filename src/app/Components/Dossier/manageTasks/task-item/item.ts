import { DialogRef } from "@progress/kendo-angular-dialog";

 interface TaskItemDialogRef<T> extends DialogRef {
    data: T;
  }
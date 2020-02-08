import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-memo",
  templateUrl: "./memo.component.html",
  styleUrls: ["./memo.component.scss"]
})
export class MemoComponent implements OnInit {
  memoText: string;
  isInEditMode = false;
  isMemoTextEmpty: boolean;

  constructor() {
    this.memoText = this.getMemo();
    this.isMemoTextEmpty = !this.memoText ? true : false;
  }

  ngOnInit() {}

  getMemo() {
    return localStorage.getItem("memo-text");
  }

  handleEditMode() {
    this.isInEditMode = true;
  }

  handleMemoDeletion() {
    this.memoText = "";
    this.isMemoTextEmpty = true;
    return localStorage.removeItem("memo-text");
  }

  handleEditedMemo(val) {
    this.isInEditMode = false;

    if (val !== null) {
      this.isMemoTextEmpty = false;
      return localStorage.setItem("memo-text", val);
    } else {
      this.isMemoTextEmpty = true;
      return;
    }
  }
}

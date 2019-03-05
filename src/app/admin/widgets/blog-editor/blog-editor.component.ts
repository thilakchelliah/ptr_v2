import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  @Input() functionType: string;
  @Input() postId: string;
  tagArray = [];
  buttonText: string;
  constructor() { }

  ngOnInit() {
    this.buttonText = this.functionType === "add" ? "Add New " : "Update ";
    $(document).ready(function () {
      $('#summernote').summernote({
        dialogsInBody: true,
        height: 300,
        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Abel'],
        fontNamesIgnoreCheck: ['Abel']
      });
    });
  }

}

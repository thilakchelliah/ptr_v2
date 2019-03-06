import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
declare var $:any;

=======
>>>>>>> 80194f2577328d45e94a8e5e0968a77646fb5715
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
      // $('#summernote').summernote({
      //   dialogsInBody: true,
      //   height: 300,
      //   fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Abel'],
      //   fontNamesIgnoreCheck: ['Abel']
      // });
   });
  }

}

import { Component, OnInit, Input } from '@angular/core';

declare var $:any;


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
  addOrUpdatePost(event: any){
    var tokenObj = $localStorage.currentUser;
                var content = $("#summernote").summernote('code');
                var data = {
                    title: $scope.title,
                    htmlContent: content,
                    userId: tokenObj.userId,
                    tagData: $scope.tagArray.join(','),
                    previewText: $scope.previewText
                };
                var saveDialog = bootbox.dialog({
                    title: 'Please Wait!',
                    message: '<p><i class="fa fa-spin fa-spinner"></i> processing...</p>',
                    closeButton: false,
                    buttons: {
                        ok: {
                            label: "Ok",
                            className: 'btn-info',
                            callback: function() {
                                $('#summernote').summernote('reset');
                            }
                        }
                    }
                });
                blogManagerService.CreateBlogPost(data).then(
                    function(resp) {
                        saveDialog.find('.bootbox-body').html('Blog Successfully Created/Updated');
                        $scope.title = "";
                        $scope.previewText = "";
                        $scope.$broadcast('deleteAllTags');
                        var dtable = $("#blogGrid").DataTable();
                        sharedService.callGetUrlTofetch('/apiS/Blog/FetchAll').then(function(resp) {
                            dtable.clear();
                            dtable.rows.add(resp.data);
                            dtable.draw();
                        });

                    },
                    function(err) {
                        saveDialog.find('.bootbox-body').html('Error Happened');
                    });
            };
  }

}

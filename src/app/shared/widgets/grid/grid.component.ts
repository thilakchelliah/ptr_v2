import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { ApiCallerService } from '../../service/api-caller.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    @Input() gdId: string;
    @Input() gridData: string;
    @Input() gdType: string;
    @Input() coloumnData: string;
    @Input() ver: string;
    datatable: any;
    globalColData: any = {
        userGrid: [{ 'title': 'User Name', 'data': 'username' }, { 'title': 'Email', 'data': 'email' }],
        blogGrid: [{ 'title': 'Post Title', 'data': 'title' }, { 'title': 'Preview', 'data': 'previewText' }, { 'title': 'Related Tags', 'data': 'tagData' },
        {
            'title': 'Preview',
            'data': 'urlId',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;blogGridPreview&quot;,&quot;' + data + '&quot;)">Preview</Button>';
            }
        },
        {
            'title': 'Delete',
            'data': '_id',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;blogRowDelete&quot;,&quot;' + data + '&quot;)">Delete</Button>';
            }
        }
        ],
        tutorialGrid: [{ 'title': 'Tutorial Title', 'data': 'title' }, { 'title': 'Tutorial Link', 'data': 'tutorialLink' },
        { 'title': 'URL ID', 'data': 'urlFriendlyTitle' },
        { 'title': 'Tags', 'data': 'tags' },
        {
            'title': 'Preview',
            'data': 'urlFriendlyTitle',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;tutorialGridPreview&quot;,&quot;' + data + '&quot;)">Preview</Button>';
            }
        },
        {
            'title': 'Delete',
            'data': '_id',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;tutorialRowDelete&quot;,&quot;' + data + '&quot;)">Delete</Button>';
            }
        }
        ]
    };

    constructor(private apiCallerService: ApiCallerService) { }

    ngOnInit(){}

    ngAfterContentInit() {
        var temp = $(".display");
        temp.attr('id', this.gdId);
        if (this.gdType == "URL") {
            this.apiCallerService.callGetUrlTofetch(this.gridData)
                .subscribe((response: any) => {
                    var temp = this;
                    // this.datatable = $("#" + this.gdId).DataTable({
                    //     data: response.data,
                    //     columns: this.globalColData[this.coloumnData]
                    //     // createdRow: function (row, data, dataIndex) {
                    //     //     $compile(angular.element(row).contents())($scope);
                    //     // }
                    // });
                }
                    , error => {
                        console.log(error);// Error getting the data
                    })
        }
        // then(function (resp) {

        //     this.datatable = $("#" + this.gdId).DataTable({
        //         data: resp.data,
        //         columns: this.globalColData[this.coloumnData],
        //         createdRow: function (row, data, dataIndex) {
        //             $compile(angular.element(row).contents())($scope);
        //         }
        //     });
        //     debugger;
        //     sharedService.toggleLoader(false);
        // },
        //     function (error) { });


    }

}


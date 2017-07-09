import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';

declare var tinymce: any;

var tinymceIdGlobal = 0;

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {


  @Input() value: String;
  @Output() change = new EventEmitter();

  editor;
  tinymceId : string;

  constructor() { 
  }

  ngOnInit(){
    this.tinymceId = "tinymce" + tinymceIdGlobal;
    tinymceIdGlobal++;
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.tinymceId,
      plugins: [''],
      skin_url: './assets/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.change.emit(content);
        });
        editor.on("init",
          ()=> {
            editor.setContent(this.value);
          }
        );
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

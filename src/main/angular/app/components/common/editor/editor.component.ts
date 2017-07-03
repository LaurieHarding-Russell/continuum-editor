import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output } from '@angular/core';
import { EventEmitter } from "events";

import 'tinymce';
import 'tinymce/themes/modern';

declare var tinymce: any;

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit, OnDestroy {

  @Input() value: Observable<String>;
  @Output() onEditorContentChange = new EventEmitter();

  editor;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#tinymce',
      plugins: [''],
      skin_url: './assets/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
        editor.on("init",
          ()=> {
            this.value.subscribe(
              text => {
                editor.setContent(text);
              }
            )
          }
        );
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, AfterViewInit, OnDestroy, Input, Output, OnChanges, ViewEncapsulation } from '@angular/core';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;

var editorContainerIdGlobal = 0;

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class EditorComponent {

  @Input() value: String;

  @Output() change = new EventEmitter();

  editorContainer : string;

  constructor() {
    this.editorContainer = `editor-container` + editorContainerIdGlobal;
    editorContainerIdGlobal++;
    this.editorContainer = "editor-container";
  }

  ngAfterViewInit() {
    var quill = new Quill(`#${this.editorContainer}`, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          []
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
    });
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as monaco from 'monaco-editor';

import ITextModel = monaco.editor.ITextModel;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;
  editorInstance!: monaco.editor.IStandaloneCodeEditor;

  ngOnInit() {
    this.editorInstance = monaco.editor.create(this._editorContainer.nativeElement, {
      theme: 'vs',
      wordWrap: 'on',
      wrappingIndent: 'indent',
      minimap: {enabled: false},
      language: 'typescript',
      automaticLayout: true,
    });

    this.editorInstance.setValue(
      'const a = 22;\n' +
      '\n' +
      'const b = a + 1;'
    );

    const model = this.editorInstance.getModel() as ITextModel;
    const markerData = {
      startLineNumber: 1,
      startColumn: 3,
      endLineNumber: 1,
      endColumn: 5,
      message: "a message1",
      severity: monaco.MarkerSeverity.Error,
    }

    monaco.editor.setModelMarkers(model, '', [markerData])
  }
}

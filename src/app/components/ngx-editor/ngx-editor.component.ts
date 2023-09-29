import { Component } from '@angular/core';
import * as monaco from 'monaco-editor';
import ITextModel = monaco.editor.ITextModel;

@Component({
  selector: 'app-ngx-editor',
  templateUrl: './ngx-editor.component.html',
})
export class NgxEditorComponent {
  editorOptions = {theme: 'vs-dark', language: 'typescript'};
  code: string= 'function x() {\n  console.log("Hello world!");\n}';

  initEditor(editor: monaco.editor.IStandaloneCodeEditor): void {
    const mEditor = (<any>window).monaco.editor;

    const model = editor.getModel() as ITextModel;
    const marker = {
      startLineNumber: 1,
      startColumn: 3,
      endLineNumber: 1,
      endColumn: 5,
      message: "a message2",
      severity: monaco.MarkerSeverity.Error,
    }

    mEditor.setModelMarkers(model, '', [marker]);
  }
}

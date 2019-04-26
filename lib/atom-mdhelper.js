'use babel';

import AtomMdhelperView from './atom-mdhelper-view';
import { CompositeDisposable, File } from 'atom';
import clipboard from 'clipboard';

BlockQuote = `\`\`\`javascript
\`\`\``

Table = `Head 1 | Head 2
------ | ------
Cell 1 | Cell 2
Cell 3 | Cell 4
`

Link = `![alttext]()`

export default {

  atomMdhelperView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomMdhelperView = new AtomMdhelperView(state.atomMdhelperViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomMdhelperView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-mdhelper:toggle': () => this.toggle(),
      'atom-mdhelper:table': () => this.table(),
      'atom-mdhelper:link': () => this.link()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomMdhelperView.destroy();
  },

  serialize() {
    return {
      atomMdhelperViewState: this.atomMdhelperView.serialize()
    };
  },

  toggle() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let grammarInstance = editor.getGrammar()
      const fileTypes = grammarInstance.fileTypes
      const fileTypesSet = new Set(fileTypes)
      if (!fileTypesSet.has('md')) return

      editor.insertText(BlockQuote)
      editor.moveToBeginningOfLine()
    }
  },

  table() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let grammarInstance = editor.getGrammar()
      const fileTypes = grammarInstance.fileTypes
      const fileTypesSet = new Set(fileTypes)
      if (!fileTypesSet.has('md')) return

      editor.insertText(Table)
      editor.moveToBeginningOfLine()
    }
  },

  link() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let grammarInstance = editor.getGrammar()
      const fileTypes = grammarInstance.fileTypes
      const fileTypesSet = new Set(fileTypes)
      if (!fileTypesSet.has('md')) return

      Text = clipboard.readText()

      if(Text.includes('.jpg') || Text.includes('.png') || Text.includes('.gif')
      || Text.includes('.jpeg') || Text.includes('.svg')){
        editor.insertText(Link)
        editor.moveLeft(1)
        editor.insertText(Text)
        return
      }

      editor.insertText(Link)
      editor.moveLeft(1)
    }
  }

};

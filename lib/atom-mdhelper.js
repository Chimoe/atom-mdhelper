'use babel';

import AtomMdhelperView from './atom-mdhelper-view';
import { CompositeDisposable, File } from 'atom';

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
      'atom-mdhelper:toggle': () => this.toggle()
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

      editor.insertText('1145141919810')
      editor.moveToEndOfLine()
    }
  }

};

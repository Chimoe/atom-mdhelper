import * as TAGS from 'element-helper-json/element-tags.json';
import * as ATTRS from 'element-helper-json/element-attributes.json';

const provider = {
  selector: '.text.md',
  disableForSelector: '.text.md .comment',
  filterSuggestions: true,
  attrReg: /\s+[:@]*([a-zA-Z][-a-zA-Z]*)\s*=\s*$/,
  tagReg: /<([a-zA-Z][-a-zA-Z]*)(?:\s|$)/,
  bindReg: /\s+:$/,
  methodReg: /^\s+@$/,
}

<template>
  <hot-table :settings="hotSettings"></hot-table>
</template>
<script>
  import { HotTable } from '@handsontable/vue';
  import Handsontable from 'handsontable';

  class CustomEditor extends Handsontable.editors.TextEditor {
    constructor(props) {
      super(props);
    }

    createElements() {
      super.createElements();

      this.TEXTAREA = document.createElement('input');
      this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
      this.TEXTAREA.className = 'handsontableInput';
      this.textareaStyle = this.TEXTAREA.style;
      Handsontable.dom.empty(this.TEXTAREA_PARENT);
      this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    }
  }
  export default {
    data: function() {
      return {
        hotSettings: {
          licenseKey: 'non-commercial-and-evaluation',
          data: Handsontable.helper.createSpreadsheetData(10, 26),
          //定义表结构
          colHeaders:[],
          rowHeaders:[],
          colWidths: 49,
          dropdownMenu: true,
          autoRowSize: true,
          autoColumnSize: true,
          highlightedRows:[],
          contextMenu: {
            items: {
              'row_above': {
                name: '在上面插入一行'
              },
              'row_below': {
                name: '在下面插入一行'
              },
              'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
              'clear_custom': {
                name: '清空所有单元格数据',
                callback: function () {
                  this.clear()
                }
              }
            }
          }
        },

      };
    },
    components: {
      HotTable
    }
  }
</script>
<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>

<template>
  <div>
    <hot-table :settings="hotSettings"></hot-table>
  </div>
</template>
<script>
  import {HotTable} from '@handsontable/vue';
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
    data: function () {
      let self = this
      return {
        hotSettings: self.$store.state.setting,
      };
    },
    components: {
      HotTable
    },
    methods: {
    }
  }
</script>
<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style>
  .handsontable th {
    background:#F63470;
    color:#fff;
  }
  .handsontable td {
    background:#EDEDED;
  }
  .handsontable tr:first-child th, .handsontable tr:first-child td {
    border-top: 1px solid #05A6BF;
  }
  .handsontable th:first-child, .handsontable th:nth-child(2), .handsontable td:first-of-type, .handsontable .htNoFrame + th, .handsontable .htNoFrame + td {
    border-left: 1px solid #05A6BF;
  }
  .handsontable th:last-child {
    border-right: 1px solid #05A6BF;
    border-bottom: 1px solid #05A6BF;
  }
  .handsontable tbody th.ht__highlight, .handsontable thead th.ht__highlight {
    background-color: #05A6BF;
  }
  .handsontable .changeType {
    background: #F8A1A4;
    border: 1px solid #F8A1A4;
    color: #f40;
  }
</style>

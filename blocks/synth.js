Blockly.Blocks['synth_play_note'] = {
  init: function() {
    this.appendValueInput("pitch")
        .setCheck("Number")
        .appendField("play note");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
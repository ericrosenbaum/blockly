Blockly.Blocks.synth = {};
Blockly.Blocks.synth.HUE = 290;

Blockly.Blocks['synth_play_note'] = {
  init: function() {
    this.appendValueInput("pitch")
        .setCheck("Number")
        .appendField("play note");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("for");
    this.appendDummyInput()
        .appendField("beats");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['synth_voice'] = {
  init: function() {
    this.appendStatementInput("VOICE")
        .setCheck(null)
        .appendField("start voice");
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
Blockly.Blocks['synth_every_bar'] = {
  init: function() {
    this.appendStatementInput("on every bar")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["every bar", "ONEBAR"], ["every 2 bars", "TWOBARS"], ["every 4 bars", "FOURBARS"]]), "INTERVAL");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/
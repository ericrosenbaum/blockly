Blockly.Blocks.synth = {};
Blockly.Blocks.synth.HUE = 190;

Blockly.Blocks['synth_play_freq'] = {
  init: function() {
    this.appendValueInput("freq")
        .setCheck("Number")
        .appendField("play frequency");
    this.appendDummyInput()
        .appendField("Hz");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("for");
    this.appendDummyInput()
        .appendField("ticks");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['synth_play_note'] = {
  init: function() {
    this.appendValueInput("pitch")
        .setCheck("Number")
        .appendField("play note");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("for");
    this.appendDummyInput()
        .appendField("ticks");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['synth_rest'] = {
  init: function() {
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("rest for");
    this.appendDummyInput()
        .appendField("ticks");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['synth_play_drum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play drum")
        .appendField(new Blockly.FieldDropdown([["snare", "SNARE"], ["kick", "KICK"], ["hi-hat", "HIHAT"], ["scratch", "SCRATCH"]]), "NAME");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("for");
    this.appendDummyInput()
        .appendField("ticks");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['synth_set_instrument'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set instrument")
        .appendField(new Blockly.FieldDropdown([["organ", "ORGAN"], ["synth", "SYNTH"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.synth.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

/*
Blockly.Blocks['math_random'] = {
  init: function() {
    this.appendValueInput("MIN")
        .setCheck("Number")
        .appendField("pick random");
    this.appendValueInput("MAX")
        .setCheck("Number")
        .appendField("to");
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
*/

/*
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
*/

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
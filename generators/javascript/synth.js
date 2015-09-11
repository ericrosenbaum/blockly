Blockly.JavaScript['synth_play_note'] = function(block) {

	var value_pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC);
	var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);

	value_pitch = value_pitch ? value_pitch : 'null';
	value_duration = value_duration ? value_duration : 'null';

	code = 'playNote(' + value_pitch + ', ' + value_duration + ', ' + block.id + ');\n';

	return code;
}

Blockly.JavaScript['synth_voice'] = function(block) {
  var statements_voice = Blockly.JavaScript.statementToCode(block, 'VOICE');
  var code = 'setTime(0);\n';
  code += statements_voice;
  return code;
};

/*
Blockly.JavaScript['synth_every_bar'] = function(block) {
  var dropdown_interval = block.getFieldValue('INTERVAL');
  var statements_on_every_bar = Blockly.JavaScript.statementToCode(block, 'on every bar');
  var code = '{\n';
  code += statements_on_every_bar;
  code += '}\n';
  return code;
};
*/

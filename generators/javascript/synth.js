Blockly.JavaScript['synth_play_freq'] = function(block) {

	var value_freq = Blockly.JavaScript.valueToCode(block, 'freq', Blockly.JavaScript.ORDER_ATOMIC);
	var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);

	value_freq = value_freq ? value_freq : 'null';
	value_duration = value_duration ? value_duration : 'null';

	code = 'playFreq(' + value_freq + ', ' + value_duration + ', ' + block.id + ');\n';

	return code;
}

Blockly.JavaScript['synth_play_note'] = function(block) {

	var value_pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC);
	var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);

	value_pitch = value_pitch ? value_pitch : 'null';
	value_duration = value_duration ? value_duration : 'null';

	code = 'playNote(' + value_pitch + ', ' + value_duration + ', ' + block.id + ');\n';

	return code;
}


Blockly.JavaScript['synth_rest'] = function(block) {

	var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);

	value_duration = value_duration ? value_duration : 'null';

	code = 'rest(' + value_duration + ', ' + block.id + ');\n';

	return code;
}


Blockly.JavaScript['synth_play_drum'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);

  value_duration = value_duration ? value_duration : 'null';
  
  var code = 'playDrum(\'' + dropdown_name + '\', ' + value_duration + ', ' + block.id + ');\n';
  
  return code;
};

Blockly.JavaScript['synth_set_instrument'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  dropdown_name = dropdown_name ? dropdown_name : 'null';
  
  // var code = 'setInstrument(\'' + dropdown_name + '\', ' + block.id + ');\n';
  
  var code = 'setInstrument(\'' + dropdown_name + '\');\n';

  return code;
};

/*
Blockly.JavaScript['math_random'] = function(block) {

	var value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
	var value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);

	value_min = value_min ? value_min : 'null';
	value_max = value_max ? value_max : 'null';

	code = 'pickRandom(' + value_min + ', ' + value_max + ')';

	return code;
}
*/

/*
Blockly.JavaScript['synth_voice'] = function(block) {
  var statements_voice = Blockly.JavaScript.statementToCode(block, 'VOICE');
  var code = 'setTime(0);\n';
  code += statements_voice;
  return code;
};
*/

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

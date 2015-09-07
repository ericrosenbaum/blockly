Blockly.JavaScript['synth_play_note'] = function(block) {

	var value_pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC);
	
	code = 'playNote(' + value_pitch + ');\n';

	return code;
}


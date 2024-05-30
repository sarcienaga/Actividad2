Blockly.Blocks["f_move"] = {
init: function() {
this.appendDummyInput()
   .appendField("mover")
   .appendField(new Blockly.FieldNumber(0), "pasos");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("Help");
this.setHelpUrl("");
}};
Blockly.Blocks["f_xira"] = {
init: function() {
this.appendDummyInput()
   .appendField("Girar")
   .appendField(new Blockly.FieldDropdown([["Izquierda","E"], ["Derecha","D"]]), "direccion");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};

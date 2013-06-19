
importPackage(Packages.java.util.logging);
importPackage(Packages.javax.swing);


/****************************************************
 * Set "blnDisplayDebugWindow" to true/false
 * to enable/disable the debug window
 ***************************************************/
blnDisplayDebugWindow = true;
GLOBAL_VARIABLE_NAME = "jfDebugWindow";
JFRAME_WINDOW_NAME = "Debug Window";
JTEXT_AREA_NUM_OF_ROWS = 20;
JTEXT_AREA_NUM_OF_COLS = 100;
JSCROLL_UNIT_INCREMENT = 5;
JFRAME_WIDTH = 400;
JFRAME_HEIGHT = 400;

/*****************************************************
 * Name: 		logToDebugWindow
 * Description: Quick and dirty way of displaying a debug 
 * 				messages to a Window in eclipse using Swing.
 * 				Uses global variable so all function calls
 * 				print to same window
 * Parameters:  strMessage - message to display
 * Returns:  	void
 ****************************************************/
function logToDebugWindow(strMessage) {
	
	// can turn on/off using this variable
	if(!blnDisplayDebugWindow) { return; }
	
	// current JTextArea - global parameter
	var currJTextArea = reportContext.getGlobalVariable(GLOBAL_VARIABLE_NAME);
	
	// if null, then create and store as global variable
	if(currJTextArea == null) {
		
		// Create JFrame
		var jFrame = new JFrame(JFRAME_WINDOW_NAME); 
		
		// Create JTextArea - append message and new-line
		var jTextArea = new JTextArea(JTEXT_AREA_NUM_OF_ROWS, JTEXT_AREA_NUM_OF_COLS);
		jTextArea.append(strMessage);
		jTextArea.append("\n");					
		
		//Create a JPanel
		var jPanel = new JPanel();
		// add text area to scroll pane
		jPanel.add(jTextArea);
		
		//Create a vert and horiz scroll bar using JScrollPane 
		var jScrollPane = new JScrollPane(jPanel, JScrollPane.VERTICAL_SCROLLBAR_ALWAYS, JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS);
		jScrollPane.getHorizontalScrollBar().setUnitIncrement(JSCROLL_UNIT_INCREMENT);
		jScrollPane.getVerticalScrollBar().setUnitIncrement(JSCROLL_UNIT_INCREMENT);
		
		//Add JScrollPane into JFrame
		jFrame.add(jScrollPane);
		jFrame.setSize(JFRAME_WIDTH, JFRAME_HEIGHT); 
		jFrame.show();
		
		// set JTextArea as a Global Parameter for future reference
		reportContext.setGlobalVariable(GLOBAL_VARIABLE_NAME, jTextArea);
	} else {
		// Print to Global Reference of the JTextArea
		currJTextArea.append(strMessage);
		currJTextArea.append("\n");
	}
}
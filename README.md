BIRTJSDebugWindow
=================

Javascript Debug Window For BIRT


It’s easy to become frustrated when debugging JavaScript code in BIRT report designs. One little typo can mess up your whole function or event handler. Luckily, the exception messages have steadily improved in BIRT, giving the developers a better clue as to where to look for the problem.

Recently, a JavaScript debugger was included with BIRT, and that can help in some situations. However, I found it a little too buggy to work with sometimes. It doesn’t really work well with external js files and doesn’t always recognize global variables.

Logging continues to be the best way to output variable values and other messages during runtime. However, sometimes, it’s a little tiresome to switch back and forth between the designer and your text editor to view the log file. Not to mention having to search the log file for the messages you outputted for that particular time of running. Also, depending on how you implemented your logging, a new log file might be created each time you run the report, which will require you to open a new file every time.
(Don’t get me wrong, logging should be a part of every report design.)

I discovered a way to create a "Debug Window" in Eclipse that the report can "output" to while running. This is a quick and easy way to display messages inside the Designer using a JavaScript function call. This function will open a “JFrame” inside of Eclipse and print a message to it.

See full write-up at:

http://lebirtexpert.com/wordpress/2010/03/02/using-a-popup-debug-window/


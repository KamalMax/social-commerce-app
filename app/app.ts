import application = require("application");
import navigationModule = require("./shared/navigation");


application.mainModule = navigationModule.getStartingPage();
application.cssFile = "styles/app.css";
application.start();

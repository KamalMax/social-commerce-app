"use strict";
var application = require("application");
var navigationModule = require("./shared/navigation");
application.mainModule = navigationModule.getStartingPage();
application.cssFile = "styles/app.css";
application.start();
//# sourceMappingURL=app.js.map
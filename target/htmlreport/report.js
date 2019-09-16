$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollection/Login2.Feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: AshishKumar"
    },
    {
      "line": 2,
      "value": "#Feature: Login feature"
    },
    {
      "line": 3,
      "value": "#Date: 11-09-2019"
    }
  ],
  "line": 6,
  "name": "Login feature",
  "description": "       Verify Login feature of Mercury Tours application",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@smokeTest"
    }
  ]
});
formatter.before({
  "duration": 1027939,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User access Login screen of Mercury Tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters application url \"http://www.newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user waits \"15\" seconds to load login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user maximizes chrome browser",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is on login screen of Mercury Tours application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "LoginSteps.openBrowser(String)"
});
formatter.result({
  "duration": 4733706101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.newtours.demoaut.com/mercurywelcome.php",
      "offset": 29
    }
  ],
  "location": "LoginSteps.enterApplicationURL(String)"
});
formatter.result({
  "duration": 3208859748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    }
  ],
  "location": "LoginSteps.waittillLoginpageloaded(int)"
});
formatter.result({
  "duration": 18434376,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.maximizeBrowser()"
});
formatter.result({
  "duration": 1187425681,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginpage()"
});
formatter.result({
  "duration": 39881203,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify that valid user able to login into Mercury Tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user access login screen of Mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enters \"Suvidyap1\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"P@ssword1\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user is on Flight Finder screen",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user is on Signon screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginimg()"
});
formatter.result({
  "duration": 180672476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap1",
      "offset": 13
    }
  ],
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "duration": 190210332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword1",
      "offset": 13
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 160810328,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickonSignin()"
});
formatter.result({
  "duration": 15286236391,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d75.0.3770.80)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PC\u0027, ip: \u0027192.168.0.122\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.80, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\CHAITA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49679}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 229b9bbc0f6311fd01bcf12ca81d6810\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Com.mt.steps.LoginSteps.clickonSignin(LoginSteps.java:94)\r\n\tat ✽.And user clicks on Signin button(src/test/resources/FeatureCollection/Login2.Feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.verifyFlightFinderimg()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clickonSignoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.verifySignOn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 162579,
  "status": "passed"
});
formatter.before({
  "duration": 577536,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User access Login screen of Mercury Tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters application url \"http://www.newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user waits \"15\" seconds to load login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user maximizes chrome browser",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is on login screen of Mercury Tours application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "LoginSteps.openBrowser(String)"
});
formatter.result({
  "duration": 2499563775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.newtours.demoaut.com/mercurywelcome.php",
      "offset": 29
    }
  ],
  "location": "LoginSteps.enterApplicationURL(String)"
});
formatter.result({
  "duration": 3375534292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 12
    }
  ],
  "location": "LoginSteps.waittillLoginpageloaded(int)"
});
formatter.result({
  "duration": 10182033,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.maximizeBrowser()"
});
formatter.result({
  "duration": 1162053780,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginpage()"
});
formatter.result({
  "duration": 15335907,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that invalid user able to login into Mercury Tours application by using invalid username and password",
  "description": "",
  "id": "login-feature;verify-that-invalid-user-able-to-login-into-mercury-tours-application-by-using-invalid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user access login screen of Mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enters \"Suvidyap\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"Password1\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user is on Flight Finder screen",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on Signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user is on Signon screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginimg()"
});
formatter.result({
  "duration": 104905089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap",
      "offset": 13
    }
  ],
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "duration": 197367153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1",
      "offset": 13
    }
  ],
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "duration": 184360768,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickonSignin()"
});
formatter.result({
  "duration": 4137701783,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyFlightFinderimg()"
});
formatter.result({
  "duration": 66882684,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@src\u003d\u0027/images/masts/mast_flightfinder.gif\u0027]\"}\n  (Session info: chrome\u003d75.0.3770.80)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PC\u0027, ip: \u0027192.168.0.122\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.80, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\CHAITA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49700}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b18b518f0e75a650fa2d1ed0cdd223fa\n*** Element info: {Using\u003dxpath, value\u003d//img[@src\u003d\u0027/images/masts/mast_flightfinder.gif\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Com.mt.steps.LoginSteps.verifyFlightFinderimg(LoginSteps.java:100)\r\n\tat ✽.Then user is on Flight Finder screen(src/test/resources/FeatureCollection/Login2.Feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.clickonSignoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.verifySignOn()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 108229,
  "status": "passed"
});
});
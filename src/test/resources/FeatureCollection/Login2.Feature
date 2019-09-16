#Author: AshishKumar
#Feature: Login feature
#Date: 11-09-2019

@smokeTest
Feature: Login feature       
         Verify Login feature of Mercury Tours application
Background: User access Login screen of Mercury Tours application              
          When user opens "chrome" browser     
          And user enters application url "http://www.newtours.demoaut.com/mercurywelcome.php"        
          And user waits "15" seconds to load login page          
          And user maximizes chrome browser          
          Then user is on login screen of Mercury Tours application
@smokeTest
Scenario: Verify that valid user able to login into Mercury Tours application by using valid username and password
       Given user access login screen of Mercury Tours application   
       When user enters "Suvidyap1" as username       
       And user enters "P@ssword1" as password
       And user clicks on Signin button
       Then user is on Flight Finder screen
       When user clicks on Signoff link
       Then user is on Signon screen
    
 @smokeTest
Scenario: Verify that invalid user able to login into Mercury Tours application by using invalid username and password
       Given user access login screen of Mercury Tours application   
       When user enters "Suvidyap" as username       
       And user enters "Password1" as password
       And user clicks on Signin button
       Then user is on Flight Finder screen
       When user clicks on Signoff link
       Then user is on Signon screen
    
 
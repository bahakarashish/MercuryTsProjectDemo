package Com.mt.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import Com.mt.config.Config;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps 
{
@When ("^user opens \"(.*)\" browser$")
public void openBrowser(String browsernm)
{
if(browsernm.equalsIgnoreCase("chrome"))
{
System.out.println("Chrome browser");
System.setProperty("webdriver.chrome.driver", "E:\\selenium 29-06-2019\\chromedriver.exe");
Config.driver = new ChromeDriver();
System.out.println("Chrome browser is opened successfully");
}else if(browsernm.equalsIgnoreCase("ie"))
{
System.out.println("IE browser");
System.setProperty("webdriver.ie.driver","E:\\selenium 29-06-2019\\IEDriverServer.exe");
Config.driver =new InternetExplorerDriver();
System.out.println("IE browser is opened succesfully");
}else
{
System.out.println("Firefox browser");
System.setProperty("webdriver.gecko.driver","E:\\selenium 29-06-2019\\geckodriver.exe");
Config.driver = new FirefoxDriver();
System.out.println("Firefox browser is opened successfully");
}
}
@And ("^user enters application url \"(.*)\"$")
public void enterApplicationURL(String url)
{
Config.driver.get(url);
System.out.println("Application URL is entered successfully");
}

@And ("^user waits \"(.*)\" seconds to load login page$")
public void waittillLoginpageloaded(int seconds)
{
Config.driver.manage().timeouts().pageLoadTimeout(seconds, TimeUnit.SECONDS);
		
}
	
@And ("^user maximizes chrome browser$")
public void maximizeBrowser()
{
Config.driver.manage().window().maximize();
}
	
@Then ("^user is on login screen of Mercury Tours application$")
public void verifyLoginpage()
{
String act_title=Config.driver.getTitle();
System.out.println("Title of Welcome screen is:"+act_title);
String exp_title="Welcome: Mercury Tours";
Assert.assertEquals(exp_title, act_title);			
}
	
@Given ("^user access login screen of Mercury Tours application$")
public void verifyLoginimg()
{
boolean act_flag=Config.driver.findElement(By.xpath("//img[@src='/images/featured_destination.gif']")).isDisplayed();
System.out.println("ARUBA image is displayed"+act_flag);
boolean exp_flag=true;
Assert.assertEquals(exp_flag, act_flag);
}
@When ("^user enters \"(.*)\" as username$")
public void enterUsername(String username)
{
Config.driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(username);
}
	
	
@And ("^user enters \"(.*)\" as password$")
public void enterPassword(String passwd)
{
Config.driver.findElement(By.xpath("//input[@name='password']")).sendKeys(passwd);
}
@And ("^user clicks on Signin button$")
public void clickonSignin()
{
Config.driver.findElement(By.xpath("//input[@name='login']")).click();
}
	
@Then ("^user is on Flight Finder screen$")
public void verifyFlightFinderimg()
{
boolean act_flag1=Config.driver.findElement(By.xpath("//img[@src='/images/masts/mast_flightfinder.gif']")).isDisplayed();
System.out.println("Flight finder image is displayed: "+act_flag1);
boolean exp_flag=true;
Assert.assertEquals(exp_flag, act_flag1);
}
	
@When ("^user clicks on Signoff link$")
public void clickonSignoff()
{
Config.driver.findElement(By.linkText("SIGN-OFF")).click();
}
	
@Then ("^user is on Signon screen$")
public void verifySignOn()
{
boolean act_flag2=Config.driver.findElement(By.xpath("//img[@src='/images/masts/mast_signon.gif']")).isDisplayed();
System.out.println("SignOn image is displayed: "+act_flag2);
boolean exp_flag2=true;
Assert.assertEquals(exp_flag2, act_flag2);
}	
}


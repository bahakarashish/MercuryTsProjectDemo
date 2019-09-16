package Com.mt.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","html:target/cucumberreport","html:target/htmlreport"},
features={"src//test//resources//FeatureCollection//Login2.Feature"},
glue={"Com.mt.steps"})

public class TestRunner2 
{
}

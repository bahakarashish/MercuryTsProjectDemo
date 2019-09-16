package Com.mt.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks 
{
@Before
public void before()
{
System.out.println("before method under before Method under Hooks class");
		
}
	
@After
public void after()
{
System.out.println("after method under After under Hooks class");
}

}


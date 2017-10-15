
# Weather-Application
Application to show the weather in Bonnyrigg

The solution was build on Visual Studio 2015 Professional

To run the solution clone the repo inside visual studio and run the project (F5)
This will open the application and should be presented with the Single page application, displaying
the weather for the town of Bonnyrigg, Midlothian, Scotland.

The tests are Typescript Jasmine tests and will run using the spec runner within the same project inside a folder 
called Unit Tests and a file called SpecRunner.html, just open this file in a browser from its current location.

I have hosted the site on www.waverleymarket.com 

There is a lot more that could be done if there was more time. Its pretty much a text based solution and on a fixed location (Bonnyrig)

User Experience
1. It would be better to be a fully interactive experience for the user.

      It would be nice to give the user a choice of the location of the forecast
      
      It would also be good to use the weather icons that openweathermap.org use and supply names within the JSON
      
      It would be good to also display the map of the forecast location alongside the weather and maybe overlay the weather icons on the map, openweathermap.org also supply this as a API cal.

Architecture
1. it would be better to change the Typescript Angular service to use the IResponse resource rather that an HTTP call to the API

Unit Test
1. It would be good to change the unit test to use the $HttpBackEnd and inject the data






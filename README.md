# Rest Client as Chrome Extension

This project is created for coding challenge. Project is basic Rest Client to make HTTP Get, Post, Put and Delete requests to a particular URL.

## Getting Started

**Clone the repository**

1. Click the Clone button.

2. Copy the clone command (either the SSH format or the HTTPS).

3. you are using the SSH protocol, ensure your public key is in Bitbucket and loaded on the local system to which you are cloning.

4. Launch a terminal window.

5. Change to the local directory where you want to clone your repository.

6. Paste the command you copied from Bitbucket, for example:

```
#!terminal

$ git clone https://PrateekR@bitbucket.org/PrateekR/rest-client-app.git
```


**Then Load extension into Chrome**

To load extension in Chrome, open up 
```
#!url

chrome://extensions/
```
 in your chrome browser and click “Developer mode” in the top right. Now click “Load unpacked extension…” and select the directory you have cloned the bitbucket project. 
You should now see Rest Client extension in the list. You can open it by clicking on the icon ![icon.png](https://bitbucket.org/repo/5apLgx/images/3846976592-icon.png)


## Prerequisities

You need Google Chrome Browser in order to use the extension. You can download Google Chrome from [here](https://www.google.com/chrome/)


## About the Code

**Requirement**

Write a chrome extension - Rest Client to make HTTP Get, Post, Put and Delete requests to a particular URL. One should also be able to add parameters.

**Deployment**

Made a Chrome Extension using AngularJS. A Rest Client Application which uses ngResource to communicate with Rest API. 

* HomePage and particular movie view shows listing using GET method

* Adding new Movie shows use of POST method

* Editing a particular movie shows use of PUT method

* Deleting a particular movie shows use of DELETE method 

## Built With
* AngularJS
* HTML5, CSS, Javascript
* [MaterializeCSS](http://materializecss.com/)

## Contributions

Used Rest API provided by sitepointdemos.com
*http://movieapp-sitepointdemos.rhcloud.com/api/*
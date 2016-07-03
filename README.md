# Rest Client as Chrome Extension

This project is created for coding challenge give by Cause Code as in 2nd Round of interview process. Project works as basic Rest Client to make HTTP Get, Post, Put and Delete requests to a particular URL.

## Getting Started

**Clone the repository**
1. Click the Clone button.
1. Copy the clone command (either the SSH format or the HTTPS).
1. you are using the SSH protocol, ensure your public key is in Bitbucket and loaded on the local system to which you are cloning.
1. Launch a terminal window.
1. Change to the local directory where you want to clone your repository.
1. Paste the command you copied from Bitbucket, for example:

```
#!terminal

$ git clone ssh://git@bitbucket.example.com:7999/PROJ/repo.git
```

**Load extension into Chrome**

To load extension in Chrome, open up 
```
#!url

chrome://extensions/
```
 in your chrome browser and click “Developer mode” in the top right. Now click “Load unpacked extension…” and select the directory you have cloned the bitbucket project. You should now see Rest Client extension in the list.


## Prerequisities

You need Google Chrome Browser in order to use the extension. You can download it from here
[link](https://www.google.com/chrome/)


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
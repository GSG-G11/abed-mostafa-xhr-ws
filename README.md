# XHR workshop

In this workshop we will build a small web app that allows users to search for GIFs by a word or phrase and gets a list of GIFs. We will use:

- an HTTP GET request
- DOM manipulation.

When the user has typed in a word or phrase they should be able to trigger the API call to Giphy by pressing the _Search_ button.

## Giphy API

We're going to explore the [Giphy API](https://developers.giphy.com/) (Giphy is an animated GIF search engine) and learn how to read API documentation.

Most good APIs have detailed docs which you should read to find out exactly what information is available to you. Docs should also help you find out how to build your queries and will often provide sample requests and response objects.

## Tools

[JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is a Chrome extension that will automatically make JSON data much more readable in Chrome.

## Getting started

1. Clone this repo and open it in your text editor.

2. Open the API Documentation and follow the **Steps**.

You can find the API Documentation [here](https://developers.giphy.com/docs/api).

## Steps

### 1. Have a look at documentation

- Find the endpoint we need

  > The endpoint is the URL that can be reached by client-side applications

- Check if you need an API key (if yes where to add it)

- Build your URL

- Check your response (via the URL) - see what your JSON looks like

- You can access an API in your web browser by popping the url into the address bar.

### 2. Open index.js

- We will need to pass the phrase to Giphy, so we need to extract it from the input text box.

- Make a request to Giphy with the user input as your search parameter.

### 3. Bonus

- Style your website (follow BEM conventions)

- Is there a way to return more/less GIFs? If so, try to implement it!

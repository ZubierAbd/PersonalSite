---
path: "post-three"
date: "16-02-2020"
title: "Creating a simple Angular App"
author: "Zubier Abdullah"
type: "article"
icon: "angular"
summary: "A simple Angular Tutorial written when I was just learning the language"
---

![unsplash](https://miro.medium.com/max/6000/0*Au3XXEWgCpkswvsU)

Thought I would try writing a tutorial for Angular as a way to deepen my understanding of the framework as well as share my knowledge with whoever finds this. Hopefully this helps :)

So we will be building basic Angular app and I will be taking you from start to finish. Hopefully by the end of it you (and I will understand) things a bit better.

-Note — I am assuming that you are familiar with JS, HTML and CSS but have never touched Angular. We will be using Angular 7 in this tutorial but I know it will soon be superseded by Angular 8.

This is what we will be building

![splash](https://miro.medium.com/max/1311/1*sleHtlJrowxVwwC_g01JiQ.png)

The first thing you will need to do is have NodeJs installed. This can be found here. Installing node will also install the node package manager (npm) which is very important for web development.

Install node and open up the terminal and type

`npm install -g @angular/cli`

This will install the Angular CLI (command line interface) which will allow you to create angular apps and components from the command line.

#What is Angular?

Put simply Angular is a components based framework for Javascript which lets create and reuse components to simply build fast and responsive applications. It is very similar to React in a lot of ways so if you have familiarity with that, this will seem simple to you.

Moving on, after the CLI has been installed navigate to a new folder (i.e. where you want your project to be housed) and type the following code

`ng new app-name`

This will generate the new app. You will be asked if you want angular routing and what kind of css you will be using. Say ‘Yes’ and ‘CSS’

After that is done, navigate to the app folder using

`cd app-name`

**cd stands for change directory**

So we have our generated app. Any time we want to load up our webpage we will use the following command.

`ng serve --open`

By default it will open the application on localhost 4200. If you want it to open somewhere else or you want to have multiple applications running at the same time use

`ng serve --open --port`

#Time to start coding

Every component in Angular, including the main component itself (the app component) is comprised of four parts

1.component.html
2.component.ts
3.component.scss/css
4.component.spec.ts

Open up app.component.html and you will see a bunch of code. Delete it all and we can start coding.

In our app.component.html file insert the following lines of code. I will explain what each line does in the following section as well as comments throughout the code

##HTML

```
<link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />/// We are importing two google fonts here - this is optional and not necessary /////

<header><img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" /><h1>The Chuck Norris Quote App</h1>
</header>///

Creating a header section which contains an image and an h1<div class="quote"><p>{{ this.quote }}</p><input type="image" src="{{ this.iconUrl }}" (click)="getQuote()" /></div>

<div style="padding-top: 30px"><app-footer></app-footer></div>
```

Now we have the basic skeleton of our code base given. This is what it will look like now

Note — don’t worry if you are only getting the image and none of the text beneath the title. That will be coming from our typescript file

##Let’s make it Stylish

Lets style it up a bit. We will add both some global styles and some local styles .

For global styles, we open up styles.css and add the following bit of code.

````body
{background: #222222;
color: #dedede;
margin: 0 auto;
text-align: center;
font-family: "Indie Flower", cursive;}```

and for the specific component (app.component.css) we add the following lines of code

````

```
p
{font-size: 24px;}
input {box-shadow: 1pc white;}
header img {height: 200px;width: auto;}
h1 {font-family: "Anton", sans-serif;font-size: 48px;}
.quote {border: 2px dashed white;width: 80%;margin: 0 auto;padding: 20px;}

```

##Typescript

Lets explain the HTML properly, particularly the bolded sections.

`{{ this.quote }}`

In Angular, it is very easy to reference values stored in variables through using the {{}} format. So what this line of code does is look inside the app.component.ts file and finds out what value is stored in the quote variable

```
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Chuck Norris App";
  quote = "";
  iconUrl = "";
  url = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) {}
  getQuote() {
    return this.http.get(this.url).subscribe(res => {
      this.quote = res["value"];
      this.iconUrl = res["icon_url"];
    });
  }

  ngOnInit() {
    this.getQuote();
  }
}
```

A lot of things are happening here so we will go through it one by one.

Firstly, we import the HttpClient which will allow us to make requests. We import the HttpClient and create an instance of it in our constructor function.

```
import { HttpClient } from "@angular/common/http";
constructor(private http: HttpClient);

```

We also have to make the following changes in our appmodule.ts. We import the HttpClientModule which will allow us to us our HttpClient

```
imports: [BrowserModule, AppRoutingModule, HttpClientModule]
```

After that we are declaring a few variables.

```
title = "Chuck Norris App";
quote = "";
iconUrl = "";
url = "https://api.chucknorris.io/jokes/random";
```

The url is the endpoint of the chucknorris jokes API. Anytime we make a request to that endpoint, we will get a response in the form of a JSON (Javascript Object Notation)

This is what the response will look like

```
{

"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",

"id" : "h2le0vpkstise9oetsodmw",

"url" : ""

"value" : "Newton's Third Law
is wrong: Although it states that for each action, there is an equal and
 opposite reaction, there is no force equal in reaction to a Chuck
Norris roundhouse kick."
            }
```

We will be using some of the values from the response and ignoring the others.

We will make the following getQuote() function.

```
getQuote() {
    return this.http.get(this.url).subscribe(res => {
      this.quote = res["value"];
      this.iconUrl = res["icon_url"];
    });
  }
```

We use the HttpClient that we defined in our constructor and create a GET request to the URL that we have. We must also have a subscribe method afterwards otherwise we will not be able to use the response which we receive.

Now the rest of the code is straight forward. We assign the values to the variables which we have declared previously using the this keyword. This will bind it to the variables of our app component.

Now if we look at our HTML code once more we can see that the variables which we have bound to it will only display once we get a response from this method.

The final piece of the puzzle comes from inclusion of NgOnInit(). NgOnInit() is one of the Angular Lifecycle hooks detailed here

<https://angular.io/guide/lifecycle-hooks>

Essentially what it does is it will load the function getQuote() which will run once when the component is loaded.

Finally we look into the input element in app.component.html

`<input type="image" src="{{ this.iconUrl }}" (click)="getQuote()" />`

we add a (click) to our input. This is similar to an onClick event handler in plain JS. We make sure that our function name is given in double quotes after (click)

Clicking the input will generate a new get request and hence a new joke will be populating the display.

##And there you have it

We have created an Angular app starting from scratch making a call to a restful API, getting the response and displaying that response.

If you found this useful, leave a clap. As I am just starting out writing tutorials like this, would love any feedback you would give me.

Have a nice day :)

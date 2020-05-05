---
path: "flex"
date: "04-05-2020"
title: "CSS Flexbox Reference"
author: "Zubier Abdullah"
type: "article"
icon: "CSS"
summary: "A bunch of examples and references for CSS flexbox"
---

For many developers like myself, CSS can be frustrating. I know you’ve had the experience of stumbling through the morass of CSS code, wondering why things aren’t moving the way that you would like them to move. I think, especially compared to the other core technologies involved in web development, CSS is the one that seems like it’s the hardest to master. You learn the basics and you move on because you don’t really need to find out more. At points it seems so simple and at other points it seems maddeningly obtuse.

So I thought I would write a small reference for CSS flexbox and maybe expand upon this idea as time goes on.

###Moving things horizontally

| Property        |    Options    |                                    What it does |
| --------------- | :-----------: | ----------------------------------------------: |
| Justify-content |  flex start   |              Moves it to left side of container |
|                 |   Flex-end    |                               moves it to right |
|                 |    centers    |                 moves it to center of container |
|                 | space-between |   moves it with equal spacing between the items |
|                 | space-around  | moves items with equal spacing around the items |
|                 | space-evenly  |                             mix of the last two |

While the first three properties are super self explanatory, I would like to draw your attention to the last three. Specifically the difference between space-evenly, space-around and space-between. For space-between, the style maximizes the distance between the objects. Space around maximizes the distance around the objects and away from the sides and space-evenly combines both with an even distance between sides of the viewport and the objects themselves.

###Moving Things vertically

| Property    |  Options   |                    What it does |
| ----------- | :--------: | ------------------------------: |
| align items | flex start |                Top of container |
|             |  Flex-end  |             Bottom of container |
|             |   center   | moves it to center of container |
|             |  baseline  |         Set at initial baseline |
|             |  stretch   |      Stretches to fit container |

###Changing the direction

| Property       |    Options     |                             What it does |
| -------------- | :------------: | ---------------------------------------: |
| Flex-direction |      row       | Sets it in orientation it was written in |
|                |  row-reverse   |                              Reverses it |
|                |     column     |                      Aligns it by column |
|                | column-reverse |             reverses it in column format |

###Order

Order allows us to change the default orientation and order of individual elements. Orders can be any integer both positive and negative.

###Align self

Just as we can set the align-items to move the items in a container vertically, we can use align self to do the same for individual items in that container.

```
<div class="container">
<button id="A"> Press me </button>
<button > B </button>
<button> C </button>
</div>
```

```
.container{
    align-items: flex-end;
}

#A{
align-self: center;
}
```

The above code allows us to move the A button individually in relative to other ones.

###Wrap God

Flex wrap allows us to get our content to wrap around one line to the next.

| Property  |   Options    |                       What it does |
| --------- | :----------: | ---------------------------------: |
| Flex-wrap |   no wrap    | Default way - there is no wrapping |
|           |     wrap     |   Wraps without changing direction |
|           | wrap-reverse |        Wraps and changes direction |

Align Content

This works the same as justify content but on the vertical axis

| Property      |    Options    |                                    What it does |
| ------------- | :-----------: | ----------------------------------------------: |
| align-content |  flex start   |              Moves it to left side of container |
|               |   Flex-end    |                               moves it to right |
|               |    centers    |                 moves it to center of container |
|               | space-between |   moves it with equal spacing between the items |
|               | space-around  | moves items with equal spacing around the items |
|               | space-evenly  |                             mix of the last two |

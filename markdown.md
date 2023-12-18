# Writing a README for GitHub

Markdown is an easy-to-read, easy-to-write language for formatting plain text. You can use Markdown syntax, along with some additional HTML tags, to format your writing on GitHub, in places like repository READMEs and comments on pull requests and issues.

A well-crafted README is crucial for any GitHub repository. It serves as the first point of contact for potential contributors and users. Follow these guidelines to create an effective and visually appealing README using Markdown.

---
# Basics of Markdown


 <!-- 1.Headings -->

# Heading 1
## Heading 2
### Heading 3

<!-- 2. Styling Text -->

**Bold** or __Bold__

*Italic* or _Italic_

~~Strikethrough~~

***All Bold and Italic***

this is <sub>Subscript</sub> text

this is <sup>Superscript</sup> text

<!-- 3.Quote -->

>quote

<!-- 4.Quoting Code -->

```javascript
//Quoting Code
let x ="string1";
console.log(x);
```
<!-- 5.Color -->

The background color is `#ffffff` for light mode and `#000000` for dark mode.

<!-- 6.Links -->

Click on the [Yahoo](https://yahoo.com)

<!-- 7.Images -->

![alt](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KVhIQ4jMwYWBk1MQH9RXvceSd5wO0axKxg&usqp=CAU)

<!-- 8.Lists -->

- ul1
* ul2
+ ul3

1. ol1
1. ol2
1. ol3

100. Nested List
     - first nested list item
       - Second nested list item
         
<!-- 9. Task lists -->

- [x] Task 1 
- [ ] Task 2 
- [ ] Task 3

<!-- If a task list item description begins with a parenthesis, you'll need to escape it with \: -->

- [ ] \(Optional) Task 4

<!-- 10. Mentioning people and teams -->
@web_god What do think think?

<!-- 11. Emogi -->

[Emogi Link](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#hand-fingers-open)

:+1: :bone: :mermaid: :bird:

<!-- 12.Paragraph -->
You can create a new paragraph by leaving a blank line between lines of text.

<!-- 13.Footnotes -->

Here is a simple footnote[^1].

<!-- 14. Alerts -->

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

<!-- 15.Hiding content with comments -->

<!-- comment -->

<!-- 16.Ignoring Markdown formatting -->

Let's rename \*our-new-project\* to \*our-old-project\*.

<!-- 17.Table -->

 First Header | Second Header 
 ------------ | ------------- 
 Content Cell | Content Cell 
 Content Cell | Content Cell  
 
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

a |
--|
b |

| Command | Description |
| ---     | ---         |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |

<!-- 18.Collapse Section  -->

<details>
<summary>Collapse Section</summary>

### Header

You can add text within a collapsed section. 

You can add an image or a code block, too.

```javascript
   console.log("Hello World);
```

</details>


## HEADERS

```
# This is a H1 tag
## H2
### H3
#### H4
##### H5
###### H6
```

# This is a H1 tag
## H2
### H3
#### H4
##### H5
###### H6

## EMPHASIS

```
*This text will be emphasis, aka italic.*
_This will also be emphasis._
**This text will be strong emphasis, aka bold.**
__This will also be strong emphasis.__
*You **can** combine italic and bold.*
```

*This text will be emphasis, aka italic.*  
_This will also be emphasis._  
**This text will be strong emphasis, aka bold.**  
__This will also be strong emphasis.__  
*You **can** combine italic and bold.*  

```
GitHub Flavored Markdown also have ~~Strikethrough~~.
```
GitHub Flavored Markdown also have ~~Strikethrough~~.


## BLOCKQUOTES

```
> He is also very good at Scrabble and crossword puzzles.  
> And his favorite cereal is Cocoa Puffs (with Trix as a close second).
```

> He is also very good at Scrabble and crossword puzzles.  
> And his favorite cereal is Cocoa Puffs (with Trix as a close second).

## LISTS

```
Unordered list
* Entry A
* Entry B
  * Entry B1
  * Entry B2
```
Unordered list
* Entry A
* Entry B
  * Entry B1
  * Entry B2

```
Ordered list
1. Entry 1
2. Entry 2
   1. Entry 2a
   2. Entry 2b
```
Ordered list
1. Entry 1  
2. Entry 2  
   1. Entry 2a  
   2. Entry 2b  


```
List with indented paragraph
1. Entry 1

   Rensselaer is re-inventing higher education in science, technology, engineering, and math.   
   We are the oldest technological research university in the U.S. and the next wave of new.   

2. Entry 2
```
List with indented paragraph
1. Entry 1

   Rensselaer is re-inventing higher education in science, technology, engineering, and math.   
   We are the oldest technological research university in the U.S. and the next wave of new.   

2. Entry 2

### Note that we will need leading and trailing spaces for list to work.  

## IMAGES

You can hover to see the image text.

```
![RCOS Logo](https://github.com/rcos/rcos-branding/blob/master/img/lockup-red.png "This is the red one")

![RCOS Logo][black logo]

[black logo]: https://github.com/rcos/rcos-branding/blob/master/img/lockup-black.png "This is the black one"
```

![RCOS Logo](https://github.com/rcos/rcos-branding/blob/master/img/lockup-red.png "This is the red one")

![RCOS Logo][black logo]

[black logo]: https://github.com/rcos/rcos-branding/blob/master/img/lockup-black.png "This is the black one"


## LINKS

```
https://www.rcos.io - automatic

[Inline-style link](https://www.rcos.io)

[Inline-style link with text](https://www.rcos.io "Rensselaer Center for Open Source")

[Reference-style link][Achievements]

[Relative reference to a repository file](../master/LICENSE)

[Numbered reference-style link(s)][1]

And you can give [link] in the text.

[Achievements]: https://rcos.io/achievements
[1]: https://rcos.io/projects
[link]: https://rcos.io/sponsors
```

https://www.rcos.io - automatic

[Inline-style link](https://www.rcos.io)

[Inline-style link with text](https://www.rcos.io "Rensselaer Center for Open Source")

[Reference-style link][Achievements]

[Relative reference to a repository file](../master/LICENSE)

[Numbered reference-style link(s)][1]

And you can give [link] in the text.

[Achievements]: https://rcos.io/achievements
[1]: https://rcos.io/projects
[link]: https://rcos.io/sponsors

## BACKSLASH ESCAPES

Markdown provides backslash escapes for the following characters:

```
\\backslash\\  
\`backtick\`  
\*asterisk\*  
\_underscore\_  
\{\}curly braces\{\}  
\[\]square brackets\[\]  
\(\)parentheses\(\)  
\#hash mark\#  
\+plus sign\+  
\-minus sign (aka hyphen)\-  
\.dot\.  
\!exclamation mark\!  
```
\\backslash\\  
\`backtick\`  
\*asterisk\*  
\_underscore\_  
\{\}curly braces\{\}  
\[\]square brackets\[\]  
\(\)parentheses\(\)  
\#hash mark\#  
\+plus sign\+  
\-minus sign (aka hyphen)\-  
\.dot\.  
\!exclamation mark\!  

## TABLES

```
Table Head 1 | Table Head 2
------------ | -------------
Table cell 1 | Table cell 2
Table cell 3 | Table cell 4
```


Table Head 1 | Table Head 2
------------ | -------------
Table cell 1 | Table cell 2
Table cell 3 | Table cell 4


## USERNAME @MENTIONS

Typing an @ symbol, followed by
a username, will notify that person
to come and view the comment.  
This is called an “@mention”,
because you’re mentioning the
individual.  
You can also @mention
teams within an organization.


## ISSUE REFERENCES

Any number that refers to an Issue or
Pull Request will be automatically
converted into a link.

#1  
rcos-status-updates#1  
rcos/rcos-status-updates#1  


## EMOJI

Github supports emojis in markdown.

```
:syringe::de::cow::beer:  
:tongue::dog::tongue::hocho::lips::monkey_face::one::u7121::lock::u6709:
```
:syringe::de::cow::beer:  
:tongue::dog::tongue::hocho::lips::monkey_face::one::u7121::lock::u6709:


Check out this [link](https://www.webfx.com/tools/emoji-cheat-sheet/) to see the complete list of supported emojis.


##  TASK LISTS  

```
- [x] complete item
- [ ] incomplete item
- [x] list syntax required (any
unordered or ordered list
supported)
   - [x] New complete item
   - [ ] New incomplete item
- [ ] Continue...   
```

- [x] A complete item
- [ ] An incomplete item
- [x] list syntax required (any
unordered or ordered list
supported)
   - [x] Another complete item
   - [ ] Another incomplete item
- [ ] Continue...


## QUOTING CODE AND FENCED CODE BLOCKS

```
Use `git status` to list all new or modified files that haven't yet been committed.
```

Use `git status` to list all new or modified files that haven't yet been committed.


<pre lang="no-highlight"><code>```python
def test() {
  print("Hello RCOS");
}
```
</code></pre>
```python
def test() {
  print("Hello RCOS");
}
```

<pre lang="no-highlight"><code>```javascript
function test() {
  console.log("Hello RCOS");
}
```
</code></pre>
```javascript
function test() {
  console.log("Hello RCOS");
}
```


License: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

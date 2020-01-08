# Contribution Guidelines

In this file you can find all the rules about contributing to the project.

This guide assumes that you are using *git* through the command-line although there are some GUI alternatives which you are free to use instead.

If you have any questions, you can contact me at my [school email](mailto:eiribarev@codingburgas.bg).

---
## Writing code

You can use whichever text editor you prefer as long as it has support for a **.editorconfig** file. You can see a full list of the supported editors at the [EditorConfig project](https://editorconfig.org)'s page.
***Note**: Please do not forget to install the appropriate plugin if your editor of choice requires one.*

### HTML Conventions

Below are some rules you should follow when editing HTML code.

- All child elements should be indented.
- Empty lines should be placed between elements of the same level which have different meanings.

Example:
```html
<!DOCTYPE html>

<html>
	<head>
		<title>Title</title>
	</head>

	<body>
		<h1>A heading</h1>
		<p>
			A paragraph.
		</p>
		<p>
			A second paragraph connected to the first one.
		</p>

		<h1>A second heading</h1>
		<p>
			A completely different paragraph.
		</p>
	</body>
</html>
```
instead of
```html
<!DOCTYPE html>
<html>
<head>
<title>Title</title>
</head>
<body>
<h1>A heading</h1>
<p>
A paragraph.
</p>
<p>
A second paragraph connected to the first one.
</p>
<h1>A second heading</h1>
<p>
A completely different paragraph.
</p>
</body>
</html>
```

### CSS Conventions
Below are some rules you should follow when editing CSS code.

- There should be a space between any CSS selector and the opening bracket.
- The closing bracket shoould be on a new line.
- A `;` should be put after **every** line of code
- There should be a space between the `:` after the property name and its value

Example:
```css
p {
	margin: 0px;
	color: #ff0000;
}
```
instead of
```css
p{
margin:0px;
color:#ff0000}
```

## Working with *git*

***Important**: If you don't know how to work with *git* from the command line, it is recommended that you find and use a GUI client instead.*

To make changes to the project you will need to download and install [git](https://git-scm.com) if you haven't done so already. If you need help, there are many guides online which cover the process.

After you have *git* installed on your system, you need to clone the repository by navigating to the parent directory in which you want the repository to be stored on your system and running `git clone`.

When you are ready to start work, open a new branch by running `git branch` and `git checkout`. Commit your changes often and in an orderly manner and write meaningful commit messages. When you are ready to share your changes, run `git pull` and then `git push`. When you think that the changes in your branch are ready to be merged into the *master* branch, open a *pull request*.
***Important**: **Always** run `git pull` before `git push`!*

For every operation you wish to do on the remote repository (`git clone`, `git pull`, `git push` etc.) you will probably be asked to provide your *github* login credentials.

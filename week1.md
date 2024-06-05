# Exercise 0: Mandatory Tutorial

## Objectives

This project will introduce you to Godot Engine as well as the norms of the class.

## Procedure

### 1. Preliminaries

Complete the account registration form that linked from Canvas.
This will get you access to the class' private GitHub organization,
which is required to complete later steps of this project.

Install [Microsoft Visual Studio Code](https://code.visualstudio.com/download) (&ldquo;VSCode&rdquo; for short).

Configure git as follows:
1. Make sure you can run `git` from the command line. Windows users will use Git Bash, which is
part of the [the git installation for Windows](https://www.git-scm.com/download/win).

1. Set up your identity [following the setup instructions](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

1. Configure VSCode as your text editor [following the instructions from GitHub](https://docs.github.com/en/get-started/getting-started-with-git/associating-text-editors-with-git).


### 2. Tutorial
Work through the [Your first 2D game tutorial](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html) using GDScript.

### 3. Version Control

You should have previous experience with distributed version control from the prerequisite courses.
This semester's work builds upon that experience
with more professional techniques.

Start by reading [Chris Beams' article, &ldquo;How to Write a Git Commit
Message.&rdquo;](https://cbea.ms/git-commit/) This will help you understand not
just _how_ to write a good commit message but, more importantly, _why_. We will
hold ourselves accountable to Beams' seven rules this semester.


Set up a git repository for your project. For example, you can use the command line to navigate to your project folder and then issue the command `git init`.

Godot Engine will create appropriate `.gitignore` and `.gitattributes` files for you by default.
These tell git what files to ignore and how to deal with different kinds of files, respectively.
Take a look at the `.gitignore` file, then look at your filesystem.
You should see that `.gitignore` is ignoring a folder called `.godot`, and that this folder
contains all manner of gobbledygook.
Godot Engine uses that folder to hold its generated
content&mdash;the files it needs to edit and build your project. Since it is generated
content, it should not be tracked in version control. Three cheers for Godot Engine's
helpful default git configuration files!

If you are using Mac OS, you need to add an extra entry to `.gitignore` so that it ignores the `.DS_Store` files created by your operating system.
This means that, once you are done, your `.gitignore` will look something like the following.

```
# Godot 4+ specific ignores
.godot/

# Mac OS ignores
.DS_Store
```

Use `git status` at any time to see what is currently being tracked by git.

From the project directory, you can add all the non-ignored files with the following command.
That is, this tells git to stage these files for commit.
```
git add -A
```
This would be a good time to do `git status` and compare the previous results to these.

With your files staged for commit, you can commit using the `git commit` command. I think the easiest way to
do this is to tell git to commit all the staged files (specified with the `-a` flag) and also to give the commit message
on the command line (specified with the `-m` flag, which is combined with the previous into one string, `-am`).
```
git commit -am "Complete the tutorial"
```
Once again, `git status` can be instructive here. It never hurts to run that command to make sure
that your mental model matches git's state. This is also a good time to try `git log`.

With your local repository ready, it's tile to make a remote repository to which you can push your changes.
Create a repository in our course organization on GitHub, naming it `E0-xyz`, where _xyz_ is your BSU username or your surname. This identifies the repository as being yours and corresponding to Exercise 0. You need to ensure that, before the deadline, this repository contains your final submission. Notice that, after you create the repository on GitHub, it will show you the command-line instructions on how to set your remote origin and push your changes. Follow those instructions to push your changes to GitHub. Renaming the default branch is optional.

Confirm that you have handled these steps properly by cloning your remote repository to a new location on your workstation.
On GitHub, click the &ldquo;Code&rdquo; button to get the HTTPS URL to your repository. It should look something like
`https://github.com/bsu-cs315/E0-myname`.
From your terminal, go to any convenient location in your filesystem and clone the repository using the `git clone` command, like this:
```
git clone https://github.com/bsu-cs315/E0-myname
```
This will get you an exact copy of what is on GitHub. You can open it up and confirm that everything is working as intended.

### 4. Your README file and report

It is common practice for a software project to have a top-level
&ldquo;README&rdquo; file that explains it, and we will follow that practice for
our work. Create a `README.md` file at the root of your project. This Markdown
file must contain your name, the name of the project, acknowledgement of those
besides the professor who assisted you, and the licenses under which third-party
assets are used. It is also where you will place your activity report, the
requirements for which are explained below.

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a [plain text
format](https://en.wikipedia.org/wiki/Plain_text). This means—perhaps
unsurprisingly—that you edit it with [a plain text
editor](https://en.wikipedia.org/wiki/Text_editor). If you are not already
conversant with [GNU Emacs](https://www.gnu.org/software/emacs/) or
[Vim](https://www.vim.org/), then you will be using
[VSCode](https://code.visualstudio.com/), which is free, open source, and
cross-platform. VSCode makes it easy to verify that your Markdown files are
correct: the preview pane that shows the file's HTML rendering can be opened
with `Ctrl-K,V` (that is, hit `Control` and `K` together, release both, and then tap
`V`).

The _activity report_ is an important part of your `README.md` file. The primary
purpose of the project report is to facilitate self-evaluation and reflection
about the project. The report belongs in its own eponymous subsection of the
README.md.

The report describes which essential and auxiliary evaluation goals are met. The
writing and presentation of the report should be clear, precise, and concise. It
is a technical document and not an essay, and as such, there is no need to
&ldquo;fluff up&rdquo; the report with extra prose. Where appropriate, it should
link directly to the relevant source files. For example, if you have
demonstrated how to make a character jump in a file called
`project/character.gd`, then you can add a link to that file in your Markdown as
&ldquo;\[the Character script\](project/character.gd)&rdquo;.

Remember to include in your `README.md` file the licenses of
third-party assets that you have used in the tutorial. Curiously, the tutorial
actually violates the terms of one of the licenses: an attribution-licensed loop
is used, but no attribution is given to the creator within the game. We will
talk more about that later in the semester, and we will ensure that all of our
work moving forward follows better practices


## Evaluation

A satisfactory submission will demonstrate all essential goals.

### Essential goals:

- **Version control management**: The repository is in the course organization. It has a top-level `README.md` file that identifies the author and exercise. There are no unnecessary files in the repository, and in particular, it does not contain `.godot` nor `.DS_Store`. All the commit messages follow Beams' rules.

- **Tutorial**: The tutorial has been completed and is in the aforementioned repository.

- **Licenses**: The licenses of third-party assets are correctly included in the `README.md` file.

- **Report**: The project report is complete.
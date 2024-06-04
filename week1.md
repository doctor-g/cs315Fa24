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

TBD

## Evaluation

A satisfactory submission will demonstrate all essential goals.

Essential goals:

- The repository is in the course organization. It has a top-level `README.md` file that identifies the author and exercise. 
There are no unnecessary files in the repository, and in particular, it does not contain `.godot` nor `.DS_Store`.

- The tutorial has been completed and is in the aforementioned repository.

Auxiliary goals:

- All of your commit messages follow [Chris Beams' rules](https://cbea.ms/git-commit/)
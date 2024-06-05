# Project 1.3: Titles and Animation

## New Features

In this final iteration, you will pull all the pieces together to make something that feels like a finished game. We are also going to step up the quality of our implementations to match the richness of our understanding.

## Title Screen

A common amateur's mistake is to create a game in the same order that a player experiences it. For example, a novice may start by making a title screen or main menu because that's what the player sees first. If you look back on the steps of this project, you will notice that we did not do it that way: instead, we created features in the order of increasing _value_. This is an important perspective that is informed by [the spirit of Agile software development](http://agilemanifesto.org/).

Now it is time to add some of those conventional niceties. To wit, it is time to add a title screen that establishes the name of the game, which in turn sets up the expectations for the player. I recommend keeping your title screen in a separate scene from the rest of the game. This gives it isolation from other scenes, breaking potential dependencies that could cause headaches later. A straightforward way to approach this is to create a new scene and drop the logo for your game in as a `Sprite`. Give a prompt to the user about what button to press to start the game, write a script that listens for that, and then [replace the title scene with the game scene](https://docs.godotengine.org/en/stable/tutorials/misc/change_scenes_manually.html).

### Animated Logo

Two common ways to create animated items within Godot Engine are [`AnimationPlayer`](https://docs.godotengine.org/en/3.2/classes/class_animationplayer.html) and [`Tween`](https://docs.godotengine.org/en/3.2/classes/class_tween.html) nodes. It's good to get familiar with them both since they are similar but are deployed in different circumstances. For this project, I recommend using `AnimationPlayer` to create a fly-in animation for your game's logo.

### Style

I appreciate the sentiment behind a pair of quotations of noted Unreal Engine consultant [Michael Allar](https://allarsblog.com/) when [he writes](https://github.com/Allar/ue4-style-guide), &ldquo;If you see someone working either against a style guide or no style guide, try to correct them,&rdquo; and

> When joining an Unreal Engine 4 team, one of your first questions should be “Do you have a style guide?” If the answer is no, you should be skeptical about their ability to work as a team.

His advice is not limited to Unreal Engine, of course. We can apply it just as readily to Godot Engine or, really, any programming team. Your CS222 senses should be tingling.

The official documentation for Godot Engine includes [a style guide for GDScript](https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_styleguide.html) that is required reading. We will be adopting an extension (and slight alteration) of that: the [GDScript Guidelines](https://gdquest.gitbook.io/gdquests-guidelines/godot-gdscript-guidelines) from [GDQuest.com](https://www.gdquest.com/). Read that guide and make any necessary changes to bring your code into compliance.

## Evaluation

A satisfactory submission will meet all of the essential goals.

### Essential goals

- **Core Loop**: The game starts with a title screen, transitions on player
  command to a gameplay screen, then returns to the title screen at the end of
  the game.

- **Pop**: The title screen includes an animated element using `AnimationPlayer`.

- **Style**: Your project complies with our style guide's recommendations.

- **Clean**: Generate neither warnings nor errors at runtime

- **Licenses**: You have a clear legal right to use all incorporated
assets, the licenses for all third-party assets are
tracked in the repository, and you have satisfied
all license requirements.

- **Version control**: The repository is properly configured, including an
appropriate `.gitignore`, no unnecessary files tracked, a single mainline branch
called `master` or `main`, and in the course organization. Commits follow Beams'
rules.

- **Release Management**: You have made a release on GitHub and tagged it using semantic versioning.

- **Report**: The report is complete as described in the first week's exercise.
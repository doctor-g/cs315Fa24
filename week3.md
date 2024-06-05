# Exercise 1.2: Game Logic, Graphics, and Sound

## Overview

This builds on last week's exercise.
Now that you have the core gameplay in place, it's time to add some features to make it more playable. You will limit the number of projectiles that the player can fire, and you will incorporate appropriate graphics and sound effects.

## Graphics

If you didn't already do so, it's time to add images in all the appropriate places. This minimally includes the projectile, the target, the background, and the ground.

## Sounds

Never underestimate the power of good audio to improve the player experience. At a minimum, we want to have some kind of sound when the player launches the projectile. You can make your own sound effects, and there are plenty of places on the Web where you can find public domain and attribution-licensed assets. Personally, I am fond of [freesound](https://freesound.org/), which makes it easy to filter searches by license. For homemade sounds, I like the old-school sounds generated through the [sfxr](https://www.drpetter.se/project_sfxr.html) plugin in to [LMMS](https://lmms.io/). There's an online sfxr port called [jsfxr](https://sfxr.me/). [Chiptone](https://sfbgames.itch.io/chiptone) is also popular, although I have not used it much myself.

The `AudioStreamPlayer` node provides an easy way to play sound effects. You can specify the audio asset to play in the Inspector and then call `play` when you want it to play. Sound effects should be `.wav` files. If you want to incorporate music, those audio files should be `.ogg` (Ogg Vorbis), and you will probably want to set them to looping in the import settings. (This happened by default in older version of Godot Engine.)

## Limited Projectiles

One of the goals for this iteration is to ensure the player is only launching one projectile at a time. A problem you may run into here is determining when a projectile stops rolling after hitting the ground. Depending on your implementation, one approach is to listen for the `RigidBody`'s `sleeping_state_changed` signal. A physics body &ldquo;sleeps&rdquo; when no forces are acting on it. This saves the engine the trouble of processing that object each frame. You can intercept the `sleeping_state_changed` signal to determine when a physics body has gone to sleep and use this in your game logic.

What happens if your projectile falls off the end of your world? If it falls forever, it will never change its sleeping state. A common solution to this problem is to set a &ldquo;kill&rdquo; line: if any object falls below that line, it is destroyed. This can be done by checking the Y coordinate of the projectile in the `_physics_process` method. Another approach is to add something like an `Area2D` to the level that can watch for overlapping projectiles and handle them appropriately.

To successfully complete this iteration, you need to be able to spawn multiple projectiles, one at a time, in succession. 
Defining the projectile in its own scene is an important step here. Remember: a Godot Engine scene is like a class in other languages, and once you have a scene (class) defined, you can make as many instances (objects) as you need.
If you create projectiles programmatically, you will also need to connect their signals programmatically. 

You might consider a flow of logic like the following.

1. At the start of the game, the main level's script instantiates `projectile.tscn` at the spawn point.
2. When the projectile is fired, the main level script listens for its `sleeping_state_changed` signal or for it to be killed by passing the kill line.
3. When the signal is received, as long as there are projectiles remaining in the inventory, instantiate a new one at the spawn point and decrement the inventory.

Keep in mind that there are two ways to listen for signals. One is to use the Node dock within the editor, and the other is via scripting. Read more about this in [the signals documentation](https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html).

### HUD

The Heads-Up Display (HUD) is a trope of video game design through which the internal state of the game is exposed to the player. You have already done some work with Godot's UI system in the first exercise. I encourage you to read about [sizes and anchors](https://docs.godotengine.org/en/stable/tutorials/ui/size_and_anchors.html) and about [containers](https://docs.godotengine.org/en/stable/tutorials/ui/gui_containers.html) so that you understand the fundamentals of Godot's UI system.

For this project, your HUD does not have to be fancy: simple, static labels are sufficient. The main idea for now is to move anything that the player needs to know away from print statements and into the HUD. Your HUD should show how many projectiles the player has remaining. You might also use it to show a score, firing angle, or firing power.

## Evaluation

A satisfactory submission will meet all essential goals.

### Essential goals

- **Graphics**: The game uses imported graphics for the projectile, target, background, and ground.

- **Sounds**: The game plays a sound (`.wav`) when the projectile is launched.

- **One at a time**: The player has a limited inventory of projectiles, and only one can be launched and active at a time.

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
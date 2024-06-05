# Exercise 1.1: 2D Physics-Based Gameplay

## Overview
This is the first of a multi-part project in which you will build a 2D
physics-based action game along the lines of _Angry Birds_. This first part
focuses on core physics-based gameplay. Future parts will build upon this to
improve the player experience.

You have creative freedom to choose a theme for your game. In my sample
solution, I have been inspired by the [Kenney's Physics Assets pack](https://www.kenney.nl/assets/physics-assets).

## Features
The first iteration is all about getting the core gameplay working. In the
previous project, you controlled the location sprites manually using GDScript.
In this project, you will use the 2D physics system built in to Godot Engine. By
the end of the first iteration, you will have a projectile that the player can
launch across the screen at a target. You will be able to play this tech demo on
the Web. That's essentially it for the first iteration: the other niceties can
wait for the next iteration.

_Angry Birds_ uses a cleverly-designed touch interaction to launch birds from a
slingshot. It is sufficient for us—and a lot simpler—to use keyboard controls.
If you were pursuing this as a final project, you might aim a bit higher, but
keyboard input is perfectly appropriate for now.

For this first iteration, you can get away without using any images or textures.
It is possible to make nodes draw themselves by overriding the `_draw` method in
GDScript. That said, in some ways, it is easier to bring in images as you did in
the previous project than it is to make self-drawing sprites. Either approach is
fine for the first iteration.

I recommend that you try to get as far as you can using the official
documentation and your experience in the previous project. This will help you
think about the extents of your current understanding. I have a [video from Fall
2020 that shows the first few steps of the
project](https://www.youtube.com/watch?v=LuIOFrkKLH0), but it's a safety net,
not a tutorial. Also, the video uses an older version of Godot Engine. Keep in
mind that there are always more than one way to approach game programming
problems.

## Intellectual Property and Licensing
As you develop the concept and theme for the game, keep in mind that you need to
have a clear legal right to all the assets you incorporate, and you must abide
by the licensing terms of those assets. You cannot just take the _Angry Birds_
sprite images and use those because they are property of Rovio. Even if you use
an asset from the public domain—which means, by definition, that there are no
licensing restrictions—you should still track where you found it in your
`README.md`. You can use the example from the previous project's `README.md` to
help you present your list of third-party assets.

## Iterative Development and Releases
This project involves multiple iterations, and so you will be [managing releases
via
GitHub](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository).
We will use [semantic versioning](https://semver.org/) with a major release number of zero, minor
version of your iteration number, and patch version for changes to the minor
version. For example, your release of this first iteration would be tagged
0.1.0. If you discover a problem after tagging but before the deadline, you can
make a new release called 0.1.1.

I strongly recommend managing your tags and releases entirely from GitHub. Git's
tagging feature [can be a bit
confusing](https://stackoverflow.com/questions/11514075/what-is-the-difference-between-an-annotated-and-unannotated-tag),
and GitHub's release feature provides exactly what we need. Name your releases
the same as your tags; for example, release &ldquo;0.1.0&rdquo; should be for the version
tagged `0.1.0`.

## Helpful Links
- [Physics Introduction at GodotEngine.org](https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html)
- High-quality public domain assets from [Kenney.nl](https://www.kenney.nl/assets).

## Suggestions
The projectile should be a `RigidBody2D` since it will be controlled by the
physics system. It will have a child which is a `CollisionShape2D`. If you are
using sprite images, then it will also have a child which is a `Sprite`.

Use `apply_impulse` to give a one-time boost of force to the projectile.

One way to make the ground is with a `StaticBody2D`, and I recommend that as a
first step. Another approach is to use a `TileMap`. If you go this way,
make sure you set a collision box around the tile to prevent the projectile from
falling through it. 

In order to get notification of a physics collision, you need to set the
`contact_monitor` property and non-zero `contacts_reported` property of a
`RigidBody2D`, as explained in [the Godot Engine physics
introduction](https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html).
Only then will the `body_entered` signal be emitted.

I find that some of the most useful mathematical functions in game development
are
[`clamp`](https://docs.godotengine.org/en/stable/classes/class_@globalscope.html#class-globalscope-method-clamp),
[`lerp`](https://docs.godotengine.org/en/stable/classes/class_@globalscope.html#class-globalscope-method-lerp),
and
[`remap`](https://docs.godotengine.org/en/stable/classes/class_@globalscope.html#class-globalscope-method-remap).
If you find yourself writing some ugly mathematical transformations, see if
perhaps one of these three methods expresses your need more cleanly.

## Evaluation

A satisfactory submission will meet all essential goals and at least two auxiliary goals.

### Essential goals

- **Controls**: The player can control the angle at which
the projectile is fired and can fire it,
the projectile's path is affected by the physics
engine's gravity, and there is a ground that stops
the projectile's falling.

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

### Auxiliary goals

- Instructions for playing the game are given either
  in the game and/or the `README.md` file.

- The projectile's angle is clamped between 0&deg; and 180&deg;.

- There is a non-ground target that the player can hit, and there is some
  feedback for hitting it.

- The player can modify the strength of the projectile's firing.
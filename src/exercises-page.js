import {html,css} from './lit-core.min.js';
import {SitePage} from './site-page.js';
import './table-of-contents.js';

class ExercisesPage extends SitePage {
  static styles = [
    SitePage.styles,
    css`
      code {
        background-color: whitesmoke;
      }
    `
  ]

  render() {
    return html`
      ${this.renderHeader("Exercises")}
      ${this.renderSection('e0', 'Exercise 0: Mandatory Tutorial', html`
<h3 id="objectives">Objectives</h3>
<p>This project will introduce you to Godot Engine as well as the norms of the class.</p>
<h3 id="procedure">Procedure</h3>
<h4 id="preliminaries">1. Preliminaries</h4>
<p>Complete the account registration form that linked from Canvas. This will get you access to the class' private GitHub organization, which is required to complete later steps of this project.</p>
<p>Install <a href="https://code.visualstudio.com/download">Microsoft Visual Studio Code</a> (&ldquo;VSCode&rdquo; for short).</p>
<p>Configure git as follows: 1. Make sure you can run <code>git</code> from the command line. Windows users will use Git Bash, which is part of the <a href="https://www.git-scm.com/download/win">the git installation for Windows</a>.</p>
<ol type="1">
<li><p>Set up your identity <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">following the setup instructions</a>.</p></li>
<li><p>Configure VSCode as your text editor <a href="https://docs.github.com/en/get-started/getting-started-with-git/associating-text-editors-with-git">following the instructions from GitHub</a>.</p></li>
</ol>
<h4 id="tutorial">2. Tutorial</h4>
<p>Work through the <a href="https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html">Your first 2D game tutorial</a> using GDScript.</p>
<h4 id="version-control">3. Version Control</h4>
<p>You should have previous experience with distributed version control from the prerequisite courses. This semester's work builds upon that experience with more professional techniques.</p>
<p>Start by reading <a href="https://cbea.ms/git-commit/">Chris Beams' article, &ldquo;How to Write a Git Commit Message.&rdquo;</a> This will help you understand not just <em>how</em> to write a good commit message but, more importantly, <em>why</em>. We will hold ourselves accountable to Beams' seven rules this semester.</p>
<p>Set up a git repository for your project. For example, you can use the command line to navigate to your project folder and then issue the command <code>git init</code>.</p>
<p>Godot Engine will create appropriate <code>.gitignore</code> and <code>.gitattributes</code> files for you by default. These tell git what files to ignore and how to deal with different kinds of files, respectively. Take a look at the <code>.gitignore</code> file, then look at your filesystem. You should see that <code>.gitignore</code> is ignoring a folder called <code>.godot</code>, and that this folder contains all manner of gobbledygook. Godot Engine uses that folder to hold its generated content—the files it needs to edit and build your project. Since it is generated content, it should not be tracked in version control. Three cheers for Godot Engine's helpful default git configuration files!</p>
<p>If you are using Mac OS, you need to add an extra entry to <code>.gitignore</code> so that it ignores the <code>.DS_Store</code> files created by your operating system. This means that, once you are done, your <code>.gitignore</code> will look something like the following.</p>
<pre># Godot 4+ specific ignores
.godot/

# Mac OS ignores
.DS_Store</pre>
<p>Use <code>git status</code> at any time to see what is currently being tracked by git.</p>
<p>From the project directory, you can add all the non-ignored files with the following command. That is, this tells git to stage these files for commit.</p>
<pre>git add -A</pre>
<p>This would be a good time to do <code>git status</code> and compare the previous results to these.</p>
<p>With your files staged for commit, you can commit using the <code>git commit</code> command. I think the easiest way to do this is to tell git to commit all the staged files (specified with the <code>-a</code> flag) and also to give the commit message on the command line (specified with the <code>-m</code> flag, which is combined with the previous into one string, <code>-am</code>).</p>
<pre>git commit -am &quot;Complete the tutorial&quot;</pre>
<p>Once again, <code>git status</code> can be instructive here. It never hurts to run that command to make sure that your mental model matches git's state. This is also a good time to try <code>git log</code>.</p>
<p>With your local repository ready, it's tile to make a remote repository to which you can push your changes. Create a repository in our course organization on GitHub, naming it <code>E0-xyz</code>, where <em>xyz</em> is your BSU username or your surname. This identifies the repository as being yours and corresponding to Exercise 0. You need to ensure that, before the deadline, this repository contains your final submission. Notice that, after you create the repository on GitHub, it will show you the command-line instructions on how to set your remote origin and push your changes. Follow those instructions to push your changes to GitHub. Renaming the default branch is optional.</p>
<p>Confirm that you have handled these steps properly by cloning your remote repository to a new location on your workstation. On GitHub, click the &ldquo;Code&rdquo; button to get the HTTPS URL to your repository. It should look something like <code>https://github.com/bsu-cs315/E0-myname</code>. From your terminal, go to any convenient location in your filesystem and clone the repository using the <code>git clone</code> command, like this:</p>
<pre>git clone https://github.com/bsu-cs315/E0-myname</pre>
<p>This will get you an exact copy of what is on GitHub. You can open it up and confirm that everything is working as intended.</p>
<h4 id="your-readme-file-and-report">4. Your README file and report</h4>
<p>It is common practice for a software project to have a top-level &ldquo;README&rdquo; file that explains it, and we will follow that practice for our work. Create a <code>README.md</code> file at the root of your project. This Markdown file must contain your name, the name of the project, acknowledgement of those besides the professor who assisted you, and the licenses under which third-party assets are used. It is also where you will place your activity report, the requirements for which are explained below.</p>
<p><a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> is a <a href="https://en.wikipedia.org/wiki/Plain_text">plain text format</a>. This means—perhaps unsurprisingly—that you edit it with <a href="https://en.wikipedia.org/wiki/Text_editor">a plain text editor</a>. If you are not already conversant with <a href="https://www.gnu.org/software/emacs/">GNU Emacs</a> or <a href="https://www.vim.org/">Vim</a>, then you will be using <a href="https://code.visualstudio.com/">VSCode</a>, which is free, open source, and cross-platform. VSCode makes it easy to verify that your Markdown files are correct: the preview pane that shows the file's HTML rendering can be opened with <code>Ctrl-K,V</code> (that is, hit <code>Control</code> and <code>K</code> together, release both, and then tap <code>V</code>).</p>
<p>The <em>activity report</em> is an important part of your <code>README.md</code> file. The primary purpose of the project report is to facilitate self-evaluation and reflection about the project. The report belongs in its own eponymous subsection of the README.md.</p>
<p>The report describes which essential and auxiliary evaluation goals are met. The writing and presentation of the report should be clear, precise, and concise. It is a technical document and not an essay, and as such, there is no need to &ldquo;fluff up&rdquo; the report with extra prose. Where appropriate, it should link directly to the relevant source files. For example, if you have demonstrated how to make a character jump in a file called <code>project/character.gd</code>, then you can add a link to that file in your Markdown as &ldquo;[the Character script](project/character.gd)&rdquo;.</p>
<p>Remember to include in your <code>README.md</code> file the licenses of third-party assets that you have used in the tutorial. Curiously, the tutorial actually violates the terms of one of the licenses: an attribution-licensed loop is used, but no attribution is given to the creator within the game. We will talk more about that later in the semester, and we will ensure that all of our work moving forward follows better practices</p>
<h3 id="evaluation">Evaluation</h3>
<p>A satisfactory submission will meet all essential goals.</p>
<h4 id="essential-goals">Essential goals:</h4>
<ul>
<li><p><strong>Version control management</strong>: The repository is in the course organization. It has a top-level <code>README.md</code> file that identifies the author and exercise. There are no unnecessary files in the repository, and in particular, it does not contain <code>.godot</code> nor <code>.DS_Store</code>. All the commit messages follow Beams' rules.</p></li>
<li><p><strong>Tutorial</strong>: The tutorial has been completed and is in the aforementioned repository.</p></li>
<li><p><strong>Licenses</strong>: The licenses of third-party assets are correctly included in the <code>README.md</code> file.</p></li>
<li><p><strong>Report</strong>: The project report is complete.</p></li>
</ul>

      `)}

      ${this.renderSection('e1_1', 'Exercise 1.1: 2D Physics-Based Gameplay', html`
<h3 id="overview">Overview</h3>
<p>This is the first of a multi-part project in which you will build a 2D physics-based action game along the lines of <em>Angry Birds</em>. This first part focuses on core physics-based gameplay. Future parts will build upon this to improve the player experience.</p>
<p>You have creative freedom to choose a theme for your game. In my sample solution, I have been inspired by the <a href="https://www.kenney.nl/assets/physics-assets">Kenney's Physics Assets pack</a>.</p>
<h3 id="features">Features</h3>
<p>The first iteration is all about getting the core gameplay working. In the previous project, you controlled the location sprites manually using GDScript. In this project, you will use the 2D physics system built in to Godot Engine. By the end of the first iteration, you will have a projectile that the player can launch across the screen at a target. You will be able to play this tech demo on the Web. That's essentially it for the first iteration: the other niceties can wait for the next iteration.</p>
<p><em>Angry Birds</em> uses a cleverly-designed touch interaction to launch birds from a slingshot. It is sufficient for us—and a lot simpler—to use keyboard controls. If you were pursuing this as a final project, you might aim a bit higher, but keyboard input is perfectly appropriate for now.</p>
<p>For this first iteration, you can get away without using any images or textures. It is possible to make nodes draw themselves by overriding the <code>_draw</code> method in GDScript. That said, in some ways, it is easier to bring in images as you did in the previous project than it is to make self-drawing sprites. Either approach is fine for the first iteration.</p>
<p>I recommend that you try to get as far as you can using the official documentation and your experience in the previous project. This will help you think about the extents of your current understanding. I have a <a href="https://www.youtube.com/watch?v=LuIOFrkKLH0">video from Fall 2020 that shows the first few steps of the project</a>, but it's a safety net, not a tutorial. Also, the video uses an older version of Godot Engine. Keep in mind that there are always more than one way to approach game programming problems.</p>
<h3 id="intellectual-property-and-licensing">Intellectual Property and Licensing</h3>
<p>As you develop the concept and theme for the game, keep in mind that you need to have a clear legal right to all the assets you incorporate, and you must abide by the licensing terms of those assets. You cannot just take the <em>Angry Birds</em> sprite images and use those because they are property of Rovio. Even if you use an asset from the public domain—which means, by definition, that there are no licensing restrictions—you should still track where you found it in your <code>README.md</code>. You can use the example from the previous project's <code>README.md</code> to help you present your list of third-party assets.</p>
<h3 id="iterative-development-and-releases">Iterative Development and Releases</h3>
<p>This project involves multiple iterations, and so you will be <a href="https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository">managing releases via GitHub</a>. We will use <a href="https://semver.org/">semantic versioning</a> with a major release number of zero, minor version of your iteration number, and patch version for changes to the minor version. For example, your release of this first iteration would be tagged 0.1.0. If you discover a problem after tagging but before the deadline, you can make a new release called 0.1.1.</p>
<p>I strongly recommend managing your tags and releases entirely from GitHub. Git's tagging feature <a href="https://stackoverflow.com/questions/11514075/what-is-the-difference-between-an-annotated-and-unannotated-tag">can be a bit confusing</a>, and GitHub's release feature provides exactly what we need. Name your releases the same as your tags; for example, release &ldquo;0.1.0&rdquo; should be for the version tagged <code>0.1.0</code>.</p>
<h3 id="helpful-links">Helpful Links</h3>
<ul>
<li><a href="https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html">Physics Introduction at GodotEngine.org</a></li>
<li>High-quality public domain assets from <a href="https://www.kenney.nl/assets">Kenney.nl</a>.</li>
</ul>
<h3 id="suggestions">Suggestions</h3>
<p>The projectile should be a <code>RigidBody2D</code> since it will be controlled by the physics system. It will have a child which is a <code>CollisionShape2D</code>. If you are using sprite images, then it will also have a child which is a <code>Sprite</code>.</p>
<p>Use <code>apply_impulse</code> to give a one-time boost of force to the projectile.</p>
<p>One way to make the ground is with a <code>StaticBody2D</code>, and I recommend that as a first step. Another approach is to use a <code>TileMap</code>. If you go this way, make sure you set a collision box around the tile to prevent the projectile from falling through it.</p>
<p>In order to get notification of a physics collision, you need to set the <code>contact_monitor</code> property and non-zero <code>contacts_reported</code> property of a <code>RigidBody2D</code>, as explained in <a href="https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html">the Godot Engine physics introduction</a>. Only then will the <code>body_entered</code> signal be emitted.</p>
<p>I find that some of the most useful mathematical functions in game development are <a href="https://docs.godotengine.org/en/stable/classes/class_@globalscope.html#class-globalscope-method-clamp"><code>clamp</code></a>, <a href="https://docs.godotengine.org/en/stable/classes/class_@globalscope.html#class-globalscope-method-lerp"><code>lerp</code></a>, and <a href="https://docs.godotengine.org/en/stable/classes/class_@globalscope.html#class-globalscope-method-remap"><code>remap</code></a>. If you find yourself writing some ugly mathematical transformations, see if perhaps one of these three methods expresses your need more cleanly.</p>
<h3 id="evaluation">Evaluation</h3>
<p>A satisfactory submission will meet all essential goals and at least two auxiliary goals.</p>
<h4 id="essential-goals">Essential goals</h4>
<ul>
<li><p><strong>Controls</strong>: The player can control the angle at which the projectile is fired and can fire it, the projectile's path is affected by the physics engine's gravity, and there is a ground that stops the projectile's falling.</p></li>
<li><p><strong>Licenses</strong>: You have a clear legal right to use all incorporated assets, the licenses for all third-party assets are tracked in the repository, and you have satisfied all license requirements.</p></li>
<li><p><strong>Version control</strong>: The repository is properly configured, including an appropriate <code>.gitignore</code>, no unnecessary files tracked, a single mainline branch called <code>master</code> or <code>main</code>, and in the course organization. Commits follow Beams' rules.</p></li>
<li><p><strong>Release Management</strong>: You have made a release on GitHub and tagged it using semantic versioning.</p></li>
<li><p><strong>Report</strong>: The report is complete as described in the first week's exercise.</p></li>
</ul>
<h4 id="auxiliary-goals">Auxiliary goals</h4>
<ul>
<li><p>Instructions for playing the game are given either in the game and/or the <code>README.md</code> file.</p></li>
<li><p>The projectile's angle is clamped between 0° and 180°.</p></li>
<li><p>There is a non-ground target that the player can hit, and there is some feedback for hitting it.</p></li>
<li><p>The player can modify the strength of the projectile's firing.</p></li>
</ul>
      `)}

      ${this.renderSection('e1_2', 'Exercise 1.2: Game Logic, Graphics, and Sound', html`
<h3 id="overview">Overview</h3>
<p>This builds on last week's exercise. Now that you have the core gameplay in place, it's time to add some features to make it more playable. You will limit the number of projectiles that the player can fire, and you will incorporate appropriate graphics and sound effects.</p>
<h3 id="graphics">Graphics</h3>
<p>If you didn't already do so, it's time to add images in all the appropriate places. This minimally includes the projectile, the target, the background, and the ground.</p>
<h3 id="sounds">Sounds</h3>
<p>Never underestimate the power of good audio to improve the player experience. At a minimum, we want to have some kind of sound when the player launches the projectile. You can make your own sound effects, and there are plenty of places on the Web where you can find public domain and attribution-licensed assets. Personally, I am fond of <a href="https://freesound.org/">freesound</a>, which makes it easy to filter searches by license. For homemade sounds, I like the old-school sounds generated through the <a href="https://www.drpetter.se/project_sfxr.html">sfxr</a> plugin in to <a href="https://lmms.io/">LMMS</a>. There's an online sfxr port called <a href="https://sfxr.me/">jsfxr</a>. <a href="https://sfbgames.itch.io/chiptone">Chiptone</a> is also popular, although I have not used it much myself.</p>
<p>The <code>AudioStreamPlayer</code> node provides an easy way to play sound effects. You can specify the audio asset to play in the Inspector and then call <code>play</code> when you want it to play. Sound effects should be <code>.wav</code> files. If you want to incorporate music, those audio files should be <code>.ogg</code> (Ogg Vorbis), and you will probably want to set them to looping in the import settings. (This happened by default in older version of Godot Engine.)</p>
<h3 id="limited-projectiles">Limited Projectiles</h3>
<p>One of the goals for this iteration is to ensure the player is only launching one projectile at a time. A problem you may run into here is determining when a projectile stops rolling after hitting the ground. Depending on your implementation, one approach is to listen for the <code>RigidBody</code>'s <code>sleeping_state_changed</code> signal. A physics body &ldquo;sleeps&rdquo; when no forces are acting on it. This saves the engine the trouble of processing that object each frame. You can intercept the <code>sleeping_state_changed</code> signal to determine when a physics body has gone to sleep and use this in your game logic.</p>
<p>What happens if your projectile falls off the end of your world? If it falls forever, it will never change its sleeping state. A common solution to this problem is to set a &ldquo;kill&rdquo; line: if any object falls below that line, it is destroyed. This can be done by checking the Y coordinate of the projectile in the <code>_physics_process</code> method. Another approach is to add something like an <code>Area2D</code> to the level that can watch for overlapping projectiles and handle them appropriately.</p>
<p>To successfully complete this iteration, you need to be able to spawn multiple projectiles, one at a time, in succession. Defining the projectile in its own scene is an important step here. Remember: a Godot Engine scene is like a class in other languages, and once you have a scene (class) defined, you can make as many instances (objects) as you need. If you create projectiles programmatically, you will also need to connect their signals programmatically.</p>
<p>You might consider a flow of logic like the following.</p>
<ol type="1">
<li>At the start of the game, the main level's script instantiates <code>projectile.tscn</code> at the spawn point.</li>
<li>When the projectile is fired, the main level script listens for its <code>sleeping_state_changed</code> signal or for it to be killed by passing the kill line.</li>
<li>When the signal is received, as long as there are projectiles remaining in the inventory, instantiate a new one at the spawn point and decrement the inventory.</li>
</ol>
<p>Keep in mind that there are two ways to listen for signals. One is to use the Node dock within the editor, and the other is via scripting. Read more about this in <a href="https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html">the signals documentation</a>.</p>
<h4 id="hud">HUD</h4>
<p>The Heads-Up Display (HUD) is a trope of video game design through which the internal state of the game is exposed to the player. You have already done some work with Godot's UI system in the first exercise. I encourage you to read about <a href="https://docs.godotengine.org/en/stable/tutorials/ui/size_and_anchors.html">sizes and anchors</a> and about <a href="https://docs.godotengine.org/en/stable/tutorials/ui/gui_containers.html">containers</a> so that you understand the fundamentals of Godot's UI system.</p>
<p>For this project, your HUD does not have to be fancy: simple, static labels are sufficient. The main idea for now is to move anything that the player needs to know away from print statements and into the HUD. Your HUD should show how many projectiles the player has remaining. You might also use it to show a score, firing angle, or firing power.</p>
<h3 id="evaluation">Evaluation</h3>
<p>A satisfactory submission will meet all essential goals.</p>
<h4 id="essential-goals">Essential goals</h4>
<ul>
<li><p><strong>Graphics</strong>: The game uses imported graphics for the projectile, target, background, and ground.</p></li>
<li><p><strong>Sounds</strong>: The game plays a sound (<code>.wav</code>) when the projectile is launched.</p></li>
<li><p><strong>One at a time</strong>: The player has a limited inventory of projectiles, and only one can be launched and active at a time.</p></li>
<li><p><strong>Licenses</strong>: You have a clear legal right to use all incorporated assets, the licenses for all third-party assets are tracked in the repository, and you have satisfied all license requirements.</p></li>
<li><p><strong>Version control</strong>: The repository is properly configured, including an appropriate <code>.gitignore</code>, no unnecessary files tracked, a single mainline branch called <code>master</code> or <code>main</code>, and in the course organization. Commits follow Beams' rules.</p></li>
<li><p><strong>Release Management</strong>: You have made a release on GitHub and tagged it using semantic versioning.</p></li>
<li><p><strong>Report</strong>: The report is complete as described in the first week's exercise.</p></li>
</ul>
        `)}

        ${this.renderSection('e1_3', 'Exercise 1.3: Titles and Animation', html`
<h3 id="new-features">New Features</h3>
<p>In this final iteration, you will pull all the pieces together to make something that feels like a finished game. We are also going to step up the quality of our implementations to match the richness of our understanding.</p>
<h3 id="title-screen">Title Screen</h3>
<p>A common amateur's mistake is to create a game in the same order that a player experiences it. For example, a novice may start by making a title screen or main menu because that's what the player sees first. If you look back on the steps of this project, you will notice that we did not do it that way: instead, we created features in the order of increasing <em>value</em>. This is an important perspective that is informed by <a href="http://agilemanifesto.org/">the spirit of Agile software development</a>.</p>
<p>Now it is time to add some of those conventional niceties. To wit, it is time to add a title screen that establishes the name of the game, which in turn sets up the expectations for the player. I recommend keeping your title screen in a separate scene from the rest of the game. This gives it isolation from other scenes, breaking potential dependencies that could cause headaches later. A straightforward way to approach this is to create a new scene and drop the logo for your game in as a <code>Sprite</code>. Give a prompt to the user about what button to press to start the game, write a script that listens for that, and then <a href="https://docs.godotengine.org/en/stable/tutorials/misc/change_scenes_manually.html">replace the title scene with the game scene</a>.</p>
<h4 id="animated-logo">Animated Logo</h4>
<p>Two common ways to create animated items within Godot Engine are <a href="https://docs.godotengine.org/en/3.2/classes/class_animationplayer.html"><code>AnimationPlayer</code></a> and <a href="https://docs.godotengine.org/en/3.2/classes/class_tween.html"><code>Tween</code></a> nodes. It's good to get familiar with them both since they are similar but are deployed in different circumstances. For this project, I recommend using <code>AnimationPlayer</code> to create a fly-in animation for your game's logo.</p>
<h4 id="style">Style</h4>
<p>I appreciate the sentiment behind a pair of quotations of noted Unreal Engine consultant <a href="https://allarsblog.com/">Michael Allar</a> when <a href="https://github.com/Allar/ue4-style-guide">he writes</a>, &ldquo;If you see someone working either against a style guide or no style guide, try to correct them,&rdquo; and</p>
<blockquote>
<p>When joining an Unreal Engine 4 team, one of your first questions should be &ldquo;Do you have a style guide?&rdquo; If the answer is no, you should be skeptical about their ability to work as a team.</p>
</blockquote>
<p>His advice is not limited to Unreal Engine, of course. We can apply it just as readily to Godot Engine or, really, any programming team. Your CS222 senses should be tingling.</p>
<p>The official documentation for Godot Engine includes <a href="https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_styleguide.html">a style guide for GDScript</a> that is required reading. We will be adopting an extension (and slight alteration) of that: the <a href="https://gdquest.gitbook.io/gdquests-guidelines/godot-gdscript-guidelines">GDScript Guidelines</a> from <a href="https://www.gdquest.com/">GDQuest.com</a>. Read that guide and make any necessary changes to bring your code into compliance.</p>
<h3 id="evaluation">Evaluation</h3>
<p>A satisfactory submission will meet all of the essential goals.</p>
<h4 id="essential-goals">Essential goals</h4>
<ul>
<li><p><strong>Core Loop</strong>: The game starts with a title screen, transitions on player command to a gameplay screen, then returns to the title screen at the end of the game.</p></li>
<li><p><strong>Pop</strong>: The title screen includes an animated element using <code>AnimationPlayer</code>.</p></li>
<li><p><strong>Style</strong>: Your project complies with our style guide's recommendations.</p></li>
<li><p><strong>Clean</strong>: Generate neither warnings nor errors at runtime</p></li>
<li><p><strong>Licenses</strong>: You have a clear legal right to use all incorporated assets, the licenses for all third-party assets are tracked in the repository, and you have satisfied all license requirements.</p></li>
<li><p><strong>Version control</strong>: The repository is properly configured, including an appropriate <code>.gitignore</code>, no unnecessary files tracked, a single mainline branch called <code>master</code> or <code>main</code>, and in the course organization. Commits follow Beams' rules.</p></li>
<li><p><strong>Release Management</strong>: You have made a release on GitHub and tagged it using semantic versioning.</p></li>
<li><p><strong>Report</strong>: The report is complete as described in the first week's exercise.</p></li>
</ul>

        `)}
      ${this.renderFooter()}
    `;
  }
}

customElements.define('exercises-page', ExercisesPage);
# Course Overview

## Section information

- Prerequisites: CS222
- Meetings: 2:00&ndash;3:30 in RB353
- Instructor: [Paul Gestwicki](https://www.cs.bsu.edu/~pvgestwicki)

The course catalog provides this short description:

> The course serves as an introduction to game programming. Topics include working with a game engine, input processing, collision detection and processing, audio playback, deployment, and applications of artificial intelligence.

### Background

It is good to start with a distinction between &ldquo;game design&rdquo; and &ldquo;game programming.&rdquo; Briefly, game design determines _what is made_ and game programming determines _how it is made_ as software. We will only touch on the former in that it helps us succeed at the latter. If you are interested in game design, there are many excellent free and commercial resources available. You could also take CS215 Introduction to Game Design, which is also being taught this semester. That course complements this one with little redundancy.

One semester of game programming is just enough to get your feet wet. I have designed this course to be a springboard into any areas of game development that interest you. That is, by succeeding in this course, you should be well positioned to explore new areas in game development. I value game development because of the joy of the craft, and this is reflected in the course design. That said, it is important to understand that one course in game programming will grant neither success nor even entry into this hyper-competitive profession. Indeed, there are endemic problems in the profession that warrant serious consideration before one decides to pursue it. In any case, I hope that we can work together to give you the expressive tools to be able to breathe life into your own creations. What you do from there is your choice.

### Learning Outcomes

The Computer Science Department has identified the following learning outcomes for this course.

- Develop an original video game that includes: input processing using keyboard+mouse, gamepad, touchscreen, or similar; appropriate graphics features such as 2D kinematic animation or 3D model rendering; audio processing of music and sound effects; and applied AI using standard techniques such as pathfinding, behavior trees, and rule-based systems.
- Apply modern tools and techniques of software development to game programming, including: game engines and/or integrated development environments; version control systems; and programming standards or style guides.
- Manage technical communication and project organizational requirements of a small game development project including written and oral communication, collaborative design and analysis, and articulation and prioritization of features.

A different way to put all that is this: if you succeed in this class, I want you to be able to enjoy the art of making games in events like [Global Game Jam](https://globalgamejam.org) and [Ludum Dare](https://ldjam.com) without the programming and technology being insurmountable hurdles.

### Commitment

This is a three credit-hour class, and you are expected to invest nine hours of effort per week into it. This value is not arbitrary: it comes from federal student loan legislation. In a sense, it defines what you pay for—or what you commit to doing—with federally-backed student loans. Hence, it represents the standard for all of higher education in the United States.

It is worth thinking about the implications of this level of commitment. First, consider that taking 15 credit-hours of courses at Ball State translates into an expected commitment of 45 hours per week. That's significantly more than &ldquo;full-time&rdquo; since you don't have a union that negotiates meal and coffee breaks. Second, consider that this is expected to be focused effort, not to be confused with text-messaging, Instagram-checking, Netflix-streaming, browser-tab-switching effort. Maintaining this level of effort is challenging and requires discipline. Training yourself to consistently perform at this level of focus is a desirable outcome of a quality higher education. It prepares you to contribute to your community at peak levels after you graduate. Put another way, this work is formative, and the effort is moral.

This course is designed so that someone with no prior experience in game programming who succeeded in the prerequisite courses, and who commits nine hours of focused attention per week, can emerge with significant and measurable skills in this area. Remember that you can always talk to me if you feel like you're not learning or working at your peak capacity. I am happy to help with course content and with learning strategies.

## Resources

We will focus our learning around [Godot Engine](https://godotengine.org)—a popular [free](https://www.gnu.org/philosophy/free-sw.en.html) and [open source](https://opensource.com/resources/what-open-source) game engine. It supports both 2D and 3D graphics, and games can be deployed for desktop, mobile, and the Web. Godot Engine's scripting language—GDScript—is very similar to Python and should be easy for you to pick up. [This video from GDQuest](https://www.youtube.com/watch?v=KjX5llYZ5eQ) gives a five-minute overview of the engine.

We will use [git](https://git-scm.org/) and [GitHub](https://github.com) for version control. You probably already have the necessary accounts and software installations from CS222 or other CS coursework. You will need to complete the account registration form on Canvas as soon as possible so that you will gain access to our GitHub organization.

We will manage some required elements of the course through Canvas, especially confidential items such as submission, feedback, and discussion. Log on to https://bsu.instructure.com to access our Canvas site.

The example used on the first day of class can be found at https://github.com/doctor-g/Godot-Collector-Tutorial.

## Schedule

We will spend roughly the first half of the semester learning fundamentals of game programming in Godot Engine. This will be done through a series of small projects that expose you to important ideas of game programming. After this, you will have the freedom to develop your own original final project to demonstrate what you have learned this semester. 

## Attendance and Decorum

Your learning is commensurate to your participation, and so attendance is expected. You are responsible for your learning regardless of attendance. If you miss a class meeting, you should consult with trusted classmates to ensure you are caught up.

Always have paper and a writing implement on hand during meetings so that you are ready to take notes or record questions. The most frequent lie that we tell ourselves is, “I will remember this.” Transcribing your notes after the meeting is an excellent way to study, if not the best way. Doing this will help you structure your experience and strengthen your understanding. If you want to do your transcription on a computer rather than on paper, that's up to you. Be careful, though, not to delude yourself into thinking that your distraction machine is an appropriate replacement for a notebook.

We will begin our meetings on time, which means you should arrive a few minutes beforehand. This gives you adequate time to get situated and exchange greetings with your classmates. Recognize that it is inconsiderate to miss or be late to a meeting. Should you be in a position where tardiness or absence is inevitable, consider bringing treats to a future meeting by way of apology: your classmates will not forget this show of respect.

Stow your phone in silent mode for the duration of meetings. If you anticipate receipt of a communiqué so critical as to merit interrupting a meeting, it is certainly better not to be in that meeting at all. Remember that online meetings are meetings, too.

Listen actively. Assume the speaker knows something you do not. Listening this way means you are not simply waiting for your chance to speak. More often, you are asking probing questions in order to build a better understanding of the other person's experience.

Most of our face-to-face communication is non-verbal; a corollary is that it is easy to misread someone's intention in text. Keep in mind _The Rule of Three Interpretations_. If you read something that rankles you—whether it appears to be bull-headed, offensive, or just plain wrong—pause for a moment. Think of three different possible interpretations of the text. The odds are that the most charitable one is correct.


## Grading

Individual grades will be reported confidentially via Canvas. Be aware that
Canvas is incapable of managing the grading system described here, so do not put
any stock in aggregate or computed grades that it provides. Use only the
policies presented on this page.

### Evaluation Criteria and Resubmission

Each specification for submittable work will tell you what criteria are used
for grading. For example, one criterion from [the first exercise](week1.md) is 
to complete a popular Godot Engine tutorial.
Each criterion will be evaluated according to the following scale:
- Successful
- Minor revisions needed
- New attempt required
- Incomplete

A _successful_ attempt meets the criterion for a satisfactory submission.

_Minor revisions needed_ means that the work is mostly right but has some
amendable flaw. You have three business days from the evaluation to
address the mistake and resubmit it along with a revision report.
The revision report must clearly address two things:
- An explanation of the mistake from the original submission, why it was
a mistake, and the thinking process that led to it.
- An explanation of the fix, including how your understanding has improved 
by making the revision.

If the revision and its corresponding report meet these requirements, then the 
evaluation of the original work becomes _Successful_. If not, it is treated
as _New attempt required_.

_New attempt required_ indicates that you have made progress, but there is a
critical flaw in your submission. In order to successfully show that you can
meet the criterion, you will need to explore the objective in a new context. The
evaluation should give you more contextual information about how to do this. 

_Incomplete_ means that there is not an indication of clear progress
toward the goals. 

If you have incomplete submissions or new attempts required, you can resubmit
the corresponding exercise for a new evaluation. 
You may resubmit at most one item per week,
reckoning from the first class meeting day of that week
(usually 2PM on Tuesdays). The start of final exams marks the end of resubmission
opportunities.

(This policy is inspired by [Joshua Bowman's work at Pepperdine University,
a case study at _Grading for Growth_](https://gradingforgrowth.com/p/case-study-how-joshua-bowman-uses).)

### Course grade
          
Your final grade will be determined based on the specifications in the following
table. You earn the highest grade for which you have satisfied every row.
Failure to meet the lowest criteria earns an `F`. A
&ldquo;plus&rdquo; grade is earned if you satisfy all but two criteria in the
next higher grade, and a &ldquo;minus&rdquo; grade of the next higher rank is
earned by satisfying all but one criterion of the next higher rank. For example,
if you have completed the criteria to earn a `C`,
and you have also
completed all but one criterion of the next higher row, then you have earned a `B-`. The lesson behind the +/- policy is _don't give up_.

| Grade | Interpretation | Incomplete exercises | Final exam |
|---|---|---|---|
| `A` | Excellent | None | Satisfactory
| `B` | Good | At most one | Satisfactory
| `C` | Average | At most two | Satisfactory
| `D` | Poor | At most three | Unsatisfactory

More details will be provided about the role of the final project later in the semester. Expect the relative weight of every week of the semester to be equal.

## Communication

### Names

Your instructor has a Ph.D. in Computer Science and Engineering, and so it is appropriate to refer to him as “Dr. Gestwicki” or “Dr. G.” Since he is a professor, you could alternatively call him “Professor Gestwicki.”

If you prefer to use a name that is different from the one on the class roster, simply email the professor to let him know.

### Consulting with the Professor
I am glad to talk to you about your work and your plans. You are welcome to email me any time with questions, and I will almost always respond to such emails with two working days—usually much faster.

If you want to discuss something one-on-one, simply email me some times you are free along with a summary of what you want to discuss. We will settle on a time and modality (face-to-face, Zoom) that works for both of us. As above, we can almost always set this up within two working days.

### Email
All email communication to the instructor should be from a BSU-affiliated address. This policy ensures that senders can be correctly identified and protects your privacy. Email sent from other domains may not be answered.

You are expected to process your email at least daily.

The instructor may access email through services not affiliated with the University. Please note that such messages necessarily pass through the campus firewall in an unencrypted format, and they may be stored on servers not owned or managed by Ball State University. It is therefore advisable to restrict confidential information to office hours or appointments.

Please do not use Canvas inbox system to contact me. I recognize that some faculty have the opposite recommendation, and I apologize for the confusion this may cause. Canvas' embedded, proprietary email substitute to be awkward at best.

### Telephone
Although my office telephone number is listed on my Web site, it is not a reliable way to reach me. Email, face-to-face communication, or online meetings are strongly preferred. I will respond to every student email I receive; I may not respond to telephone messages.

## Miscellany

### YouTube and Advertisements
I have [a large collection of tutorial videos on YouTube](https://youtube.com/paulgestwicki). When I started posting content there, non-commercial content like mine would show ad-free. However, between when I started my channel and now, YouTube changed their licensing scheme so that they could run ads on any video, not just for monetized channels. I apologize that the video tutorials now include ads. However, bandwidth is not free, and ads are the cost of keeping the content available to you and others. Should I receive enough views to be eligible for YouTube's partner program, such that I would earn a portion of the advertising revenue myself, I intend to donate that money to local charities.

### Academic Integrity
Students and faculty are bound by [the Student Academic Ethics Policy of the Code of Student Rights and Responsibilities](https://www.bsu.edu/about/administrativeoffices/student-conduct). This means, among other things, that putting your name onto work and submitting it indicates that this is your original work. Any exceptions are to be clearly identified, such as through citation or in the README file that accompanies project work.

### Intellectual Property
It behooves you to be familiar with fundamentals of copyright law and [the university's intellectual property policies for student-created work](https://ballstate.navexone.com/content/dotNet/documents/?docid=1676&public=true), including the fact that, as of this
writing, the official version linked above is different from [the adaption publicized on the Web](https://www.bsu.edu/about/administrativeoffices/student-conduct/policiesandprocedures/intellectual-property).
We will discuss these topics during the semester.

### The Writing Center
Want extra feedback on your papers? The Writing Center is a community of Ball State students and faculty who value writing. Come and collaborate with one of our trained peer tutors on any project for any major. The Writing Center is a comfortable, supportive environment for writers from all communities and backgrounds. It is located in Robert Bell 295. To make an appointment, go to https://ballstate.mywconline.com.

### Notice for Students with Disabilities
If you need course adaptations or accommodations because of a disability, please contact me as soon as possible. The Office of Disability Services coordinates services for students with disabilities; documentation of a disability needs to be on file in that office before any accommodations can be provided. Disability Services can be contacted at 765-285-5293 or dsd@bsu.edu.

### Statement on Diversity
The university governance system passed a resolution mandating that the following (or a mild variation) be included on all course plans:

> Ball State University aspires to be a university that attracts and retains a diverse faculty, staff, and student body. We are committed to ensuring that all members of the community are welcome, through valuing the various experiences and worldviews represented at Ball State and among those we serve. We promote a culture of respect and civil discourse as expressed in our Beneficence Pledge and through university resources found here.

Mandates should never be taken uncritically. You are encouraged to consider the following:

- Who speaks for Ball State University and its aspirations?
- Is it appropriate to value all worldviews?
- What philosophies espouse mandated statements of aspiration?

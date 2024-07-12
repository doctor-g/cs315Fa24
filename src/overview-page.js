import { html } from './lit-core.min.js';
import { SitePage } from './site-page.js';
import './table-of-contents.js';

class OverviewPage extends SitePage {

  render() {
    return html`
      ${this.renderHeader("Course Overview")}
      ${this.renderSection("section-info", "Section Information", html`
<ul>
<li>Prerequisites: CS222</li>
<li>Meetings: 2:00&ndash;3:30 in RB353</li>
<li>Instructor: <a href="https://www.cs.bsu.edu/~pvgestwicki">Paul Gestwicki</a></li>
</ul>
<p>The course catalog provides this short description:</p>
<blockquote>
<p>The course serves as an introduction to game programming. Topics include working with a game engine, input processing, collision detection and processing, audio playback, deployment, and applications of artificial intelligence.</p>
</blockquote>
<h3 id="background">Background</h3>
<p>It is good to start with a distinction between &ldquo;game design&rdquo; and &ldquo;game programming.&rdquo; Briefly, game design determines <em>what is made</em> and game programming determines <em>how it is made</em> as software. We will only touch on the former in that it helps us succeed at the latter. If you are interested in game design, there are many excellent free and commercial resources available. You could also take CS215 Introduction to Game Design, which is also being taught this semester. That course complements this one with little redundancy.</p>
<p>One semester of game programming is just enough to get your feet wet. I have designed this course to be a springboard into any areas of game development that interest you. That is, by succeeding in this course, you should be well positioned to explore new areas in game development. I value game development because of the joy of the craft, and this is reflected in the course design. That said, it is important to understand that one course in game programming will grant neither success nor even entry into this hyper-competitive profession. Indeed, there are endemic problems in the profession that warrant serious consideration before one decides to pursue it. In any case, I hope that we can work together to give you the expressive tools to be able to breathe life into your own creations. What you do from there is your choice.</p>
<h3 id="learning-outcomes">Learning Outcomes</h3>
<p>The Computer Science Department has identified the following learning outcomes for this course.</p>
<ul>
<li>Develop an original video game that includes: input processing using keyboard+mouse, gamepad, touchscreen, or similar; appropriate graphics features such as 2D kinematic animation or 3D model rendering; audio processing of music and sound effects; and applied AI using standard techniques such as pathfinding, behavior trees, and rule-based systems.</li>
<li>Apply modern tools and techniques of software development to game programming, including: game engines and/or integrated development environments; version control systems; and programming standards or style guides.</li>
<li>Manage technical communication and project organizational requirements of a small game development project including written and oral communication, collaborative design and analysis, and articulation and prioritization of features.</li>
</ul>
<p>A different way to put all that is this: if you succeed in this class, I want you to be able to enjoy the art of making games in events like <a href="https://globalgamejam.org">Global Game Jam</a> and <a href="https://ldjam.com">Ludum Dare</a> without the programming and technology being insurmountable hurdles.</p>
<h3 id="commitment">Commitment</h3>
<p>This is a three credit-hour class, and you are expected to invest nine hours of effort per week into it. This value is not arbitrary: it comes from federal student loan legislation. In a sense, it defines what you pay for—or what you commit to doing—with federally-backed student loans. Hence, it represents the standard for all of higher education in the United States.</p>
<p>It is worth thinking about the implications of this level of commitment. First, consider that taking 15 credit-hours of courses at Ball State translates into an expected commitment of 45 hours per week. That's significantly more than &ldquo;full-time&rdquo; since you don't have a union that negotiates meal and coffee breaks. Second, consider that this is expected to be focused effort, not to be confused with text-messaging, Instagram-checking, Netflix-streaming, browser-tab-switching effort. Maintaining this level of effort is challenging and requires discipline. Training yourself to consistently perform at this level of focus is a desirable outcome of a quality higher education. It prepares you to contribute to your community at peak levels after you graduate. Put another way, this work is formative, and the effort is moral.</p>
<p>This course is designed so that someone with no prior experience in game programming who succeeded in the prerequisite courses, and who commits nine hours of focused attention per week, can emerge with significant and measurable skills in this area. Remember that you can always talk to me if you feel like you're not learning or working at your peak capacity. I am happy to help with course content and with learning strategies.</p>
      `)}
      ${this.renderSection("resources", "Resources", html`
<h2 id="resources">Resources</h2>
<p>We will focus our learning around <a href="https://godotengine.org">Godot Engine</a>—a popular <a href="https://www.gnu.org/philosophy/free-sw.en.html">free</a> and <a href="https://opensource.com/resources/what-open-source">open source</a> game engine. It supports both 2D and 3D graphics, and games can be deployed for desktop, mobile, and the Web. Godot Engine's scripting language—GDScript—is very similar to Python and should be easy for you to pick up. <a href="https://www.youtube.com/watch?v=KjX5llYZ5eQ">This video from GDQuest</a> gives a five-minute overview of the engine.</p>
<p>We will use <a href="https://git-scm.org/">git</a> and <a href="https://github.com">GitHub</a> for version control. You probably already have the necessary accounts and software installations from CS222 or other CS coursework. You will need to complete the account registration form on Canvas as soon as possible so that you will gain access to our GitHub organization.</p>
<p>We will manage some required elements of the course through Canvas, especially confidential items such as submission, feedback, and discussion. Log on to <a href="https://bsu.instructure.com">https://bsu.instructure.com</a> to access our Canvas site.</p>
<p>The example used on the first day of class can be found at <a href="https://github.com/doctor-g/Godot-Collector-Tutorial">https://github.com/doctor-g/Godot-Collector-Tutorial</a>.</p>
      `)}

      ${this.renderSection("schedule", "Schedule", html`
<h2 id="schedule">Schedule</h2>
<p>We will spend roughly the first half of the semester learning fundamentals of game programming in Godot Engine. This will be done through a series of small projects that expose you to important ideas of game programming. After this, you will have the freedom to develop your own original final project to demonstrate what you have learned this semester.</p>
      `)}

        ${this.renderSection("decorum", "Attendance and Decorum", html`
<p>Your learning is commensurate to your participation, and so attendance is expected. You are responsible for your learning regardless of attendance. If you miss a class meeting, you should consult with trusted classmates to ensure you are caught up.</p>
<p>Always have paper and a writing implement on hand during meetings so that you are ready to take notes or record questions. The most frequent lie that we tell ourselves is, &ldquo;I will remember this.&rdquo; Transcribing your notes after the meeting is an excellent way to study, if not the best way. Doing this will help you structure your experience and strengthen your understanding. If you want to do your transcription on a computer rather than on paper, that's up to you. Be careful, though, not to delude yourself into thinking that your distraction machine is an appropriate replacement for a notebook.</p>
<p>We will begin our meetings on time, which means you should arrive a few minutes beforehand. This gives you adequate time to get situated and exchange greetings with your classmates. Recognize that it is inconsiderate to miss or be late to a meeting. Should you be in a position where tardiness or absence is inevitable, consider bringing treats to a future meeting by way of apology: your classmates will not forget this show of respect.</p>
<p>Stow your phone in silent mode for the duration of meetings. If you anticipate receipt of a communiqué so critical as to merit interrupting a meeting, it is certainly better not to be in that meeting at all. Remember that online meetings are meetings, too.</p>
<p>Listen actively. Assume the speaker knows something you do not. Listening this way means you are not simply waiting for your chance to speak. More often, you are asking probing questions in order to build a better understanding of the other person's experience.</p>
<p>Most of our face-to-face communication is non-verbal; a corollary is that it is easy to misread someone's intention in text. Keep in mind <em>The Rule of Three Interpretations</em>. If you read something that rankles you—whether it appears to be bull-headed, offensive, or just plain wrong—pause for a moment. Think of three different possible interpretations of the text. The odds are that the most charitable one is correct.</p>
      `)}

      ${this.renderSection("grading", "Grading", html`
<p>Individual grades will be reported confidentially via Canvas. Be aware that Canvas is incapable of managing the grading system described here, so do not put any stock in aggregate or computed grades that it provides. Use only the policies presented on this page.</p>
<h3 id="evaluation-criteria-and-resubmission">Evaluation Criteria and Resubmission</h3>
<p>Each specification for submittable work will tell you what criteria are used for grading. For example, one criterion from <a href="week1.md">the first exercise</a> is to complete a popular Godot Engine tutorial. Each criterion will be evaluated according to the following scale: - Successful - Minor revisions needed - New attempt required - Incomplete</p>
<p>A <em>successful</em> attempt meets the criterion for a satisfactory submission.</p>
<p><em>Minor revisions needed</em> means that the work is mostly right but has some amendable flaw. You have three business days from the evaluation to address the mistake and resubmit it along with a revision report. The revision report must clearly address two things: - An explanation of the mistake from the original submission, why it was a mistake, and the thinking process that led to it. - An explanation of the fix, including how your understanding has improved by making the revision.</p>
<p>If the revision and its corresponding report meet these requirements, then the evaluation of the original work becomes <em>Successful</em>. If not, it is treated as <em>New attempt required</em>.</p>
<p><em>New attempt required</em> indicates that you have made progress, but there is a critical flaw in your submission. In order to successfully show that you can meet the criterion, you will need to explore the objective in a new context. The evaluation should give you more contextual information about how to do this.</p>
<p><em>Incomplete</em> means that there is not an indication of clear progress toward the goals.</p>
<p>If you have incomplete submissions or new attempts required, you can resubmit the corresponding exercise for a new evaluation. You may do this at most once per week, reckoning from the first class meeting day of that week (usually 2PM on Tuesdays).</p>
<p>(This policy is inspired by <a href="https://gradingforgrowth.com/p/case-study-how-joshua-bowman-uses">Joshua Bowman's work at Pepperdine University, a case study at <em>Grading for Growth</em></a>.)</p>
<h3 id="course-grade">Course grade</h3>
<p>Your final grade will be determined based on the specifications in the following table. You earn the highest grade for which you have satisfied every row. Failure to meet the lowest criteria earns an <code>F</code>. A &ldquo;plus&rdquo; grade is earned if you satisfy all but two criteria in the next higher grade, and a &ldquo;minus&rdquo; grade of the next higher rank is earned by satisfying all but one criterion of the next higher rank. For example, if you have completed the criteria to earn a <code>C</code>, and you have also completed all but one criterion of the next higher row, then you have earned a <code>B-</code>. The lesson behind the +/- policy is <em>don't give up</em>.</p>
<table>
<thead>
<tr class="header">
<th>Grade</th>
<th>Interpretation</th>
<th>Incomplete exercises</th>
<th>Final exam</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>A</code></td>
<td>Excellent</td>
<td>None</td>
<td>Satisfactory</td>
</tr>
<tr class="even">
<td><code>B</code></td>
<td>Good</td>
<td>At most one</td>
<td>Satisfactory</td>
</tr>
<tr class="odd">
<td><code>C</code></td>
<td>Average</td>
<td>At most two</td>
<td>Satisfactory</td>
</tr>
<tr class="even">
<td><code>D</code></td>
<td>Poor</td>
<td>At most three</td>
<td>Unsatisfactory</td>
</tr>
</tbody>
</table>
<p>More details will be provided about the role of the final project later in the semester. Expect the relative weight of every week of the semester to be equal.</p>
      `)}

      ${this.renderSection("communication", "Communication", html`
<h3 id="names">Names</h3>
<p>Your instructor has a Ph.D. in Computer Science and Engineering, and so it is appropriate to refer to him as &ldquo;Dr. Gestwicki&rdquo; or &ldquo;Dr. G.&rdquo; Since he is a professor, you could alternatively call him &ldquo;Professor Gestwicki.&rdquo;</p>
<p>If you prefer to use a name that is different from the one on the class roster, simply email the professor to let him know.</p>
<h3 id="consulting-with-the-professor">Consulting with the Professor</h3>
<p>I am glad to talk to you about your work and your plans. You are welcome to email me any time with questions, and I will almost always respond to such emails with two working days—usually much faster.</p>
<p>If you want to discuss something one-on-one, simply email me some times you are free along with a summary of what you want to discuss. We will settle on a time and modality (face-to-face, Zoom) that works for both of us. As above, we can almost always set this up within two working days.</p>
<h3 id="email">Email</h3>
<p>All email communication to the instructor should be from a BSU-affiliated address. This policy ensures that senders can be correctly identified and protects your privacy. Email sent from other domains may not be answered.</p>
<p>You are expected to process your email at least daily.</p>
<p>The instructor may access email through services not affiliated with the University. Please note that such messages necessarily pass through the campus firewall in an unencrypted format, and they may be stored on servers not owned or managed by Ball State University. It is therefore advisable to restrict confidential information to office hours or appointments.</p>
<p>Please do not use Canvas inbox system to contact me. I recognize that some faculty have the opposite recommendation, and I apologize for the confusion this may cause. Canvas' embedded, proprietary email substitute to be awkward at best.</p>
<h3 id="telephone">Telephone</h3>
<p>Although my office telephone number is listed on my Web site, it is not a reliable way to reach me. Email, face-to-face communication, or online meetings are strongly preferred. I will respond to every student email I receive; I may not respond to telephone messages.</p>
      `)}

      ${this.renderSection("misc", "Miscellany", html`
<h3 id="youtube-and-advertisements">YouTube and Advertisements</h3>
<p>I have <a href="https://youtube.com/paulgestwicki">a large collection of tutorial videos on YouTube</a>. When I started posting content there, non-commercial content like mine would show ad-free. However, between when I started my channel and now, YouTube changed their licensing scheme so that they could run ads on any video, not just for monetized channels. I apologize that the video tutorials now include ads. However, bandwidth is not free, and ads are the cost of keeping the content available to you and others. Should I receive enough views to be eligible for YouTube's partner program, such that I would earn a portion of the advertising revenue myself, I intend to donate that money to local charities.</p>
<h3 id="academic-integrity">Academic Integrity</h3>
<p>Students and faculty are bound by <a href="https://www.bsu.edu/about/administrativeoffices/student-conduct">the Student Academic Ethics Policy of the Code of Student Rights and Responsibilities</a>. This means, among other things, that putting your name onto work and submitting it indicates that this is your original work. Any exceptions are to be clearly identified, such as through citation or in the README file that accompanies project work.</p>
<h3 id="intellectual-property">Intellectual Property</h3>
<p>It behooves you to be familiar with fundamentals of copyright law and <a href="https://ballstate.navexone.com/content/dotNet/documents/?docid=1676&amp;public=true">the university's intellectual property policies for student-created work</a>, including the fact that, as of this writing, the official version linked above is different from <a href="https://www.bsu.edu/about/administrativeoffices/student-conduct/policiesandprocedures/intellectual-property">the adaption publicized on the Web</a>. We will discuss these topics during the semester.</p>
<h3 id="the-writing-center">The Writing Center</h3>
<p>Want extra feedback on your papers? The Writing Center is a community of Ball State students and faculty who value writing. Come and collaborate with one of our trained peer tutors on any project for any major. The Writing Center is a comfortable, supportive environment for writers from all communities and backgrounds. It is located in Robert Bell 295. To make an appointment, go to <a href="https://ballstate.mywconline.com">https://ballstate.mywconline.com</a>.</p>
<h3 id="notice-for-students-with-disabilities">Notice for Students with Disabilities</h3>
<p>If you need course adaptations or accommodations because of a disability, please contact me as soon as possible. The Office of Disability Services coordinates services for students with disabilities; documentation of a disability needs to be on file in that office before any accommodations can be provided. Disability Services can be contacted at 765-285-5293 or dsd@bsu.edu.</p>
<h3 id="statement-on-diversity">Statement on Diversity</h3>
<p>The university governance system passed a resolution mandating that the following (or a mild variation) be included on all course plans:</p>
<blockquote>
<p>Ball State University aspires to be a university that attracts and retains a diverse faculty, staff, and student body. We are committed to ensuring that all members of the community are welcome, through valuing the various experiences and worldviews represented at Ball State and among those we serve. We promote a culture of respect and civil discourse as expressed in our Beneficence Pledge and through university resources found here.</p>
</blockquote>
<p>Mandates should never be taken uncritically. You are encouraged to consider the following:</p>
<ul>
<li>Who speaks for Ball State University and its aspirations?</li>
<li>Is it appropriate to value all worldviews?</li>
<li>What philosophies espouse mandated statements of aspiration?</li>
</ul>
      `)}
    `;
  }
}

customElements.define('overview-page', OverviewPage);
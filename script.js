const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

const learning = {
    topic: "JS",
    learningGoals: [
        "Understand programming fundamentals",
        "Have Fun",
        "Build JS programs"
    ],
    category: "Front End Development",
    topicImportance: "high",
    hoursThisWeek: 2,
    weeklyHourGoal: 7,
    achievedStudyGoal: false,
    addStudyTime: function (hours) {
        this.hoursThisWeek += hours;
        if (this.hoursThisWeek >= this.weeklyHourGoal) {
            this.achievedStudyGoal = true;
            this.celebrate();
        }
    },
    celebrate: function() {
        body.classList.add("celebrate");
        success.classList.remove("hide");
        dance.classList.remove("hide");
    }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");10

learning.addStudyTime(10);

/* 
Call Methods

Inside the addStudyTime method’s if statement, call the celebrate() method. Hint: Don’t forget the this keyword!
At the bottom of the script.js file, call learning.addStudyTime(). As an argument, pass the method a number that will make the value of hoursThisWeek greater than the weeklyHourGoal. This will trigger celebrate() to run.
When complete, submit your link below and celebrate your hard work! 🎉🥳
*/
const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";
learning.learningGoals = ["Build programs", "Learn Interaction", "something", "more something"];
learning.category = "Front End Development";
learning.topicImportance = "High";

console.log(learning);

learning.topic = "javaScript";
console.log(learning);

learning.learningGoals.splice(1,1);


topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");
console.log(topicElement);

countElement.innerText = `I have ${learning.learningGoals.length} learning goals`;
countElement.classList.remove("hide");


/*
Set the innerText of the countElement to the string “I have <number> learning goals.” Substitute <number> with the length of the learningGoals property array.
Remove the class “hide” that’s given to countElement. 
Reload the browser window to see the changes.
When finished, submit a link to your sandbox below!

*/
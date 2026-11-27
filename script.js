// Store the required core skills for each career role in a simple object
const roleSkills = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
  "Backend Developer": ["Node.js", "Python", "SQL", "REST APIs", "Git"],
  "Data Analyst": ["Python", "SQL", "Excel", "Statistics", "Data Visualization"],
  "Full Stack Developer": ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
  "Cybersecurity Analyst": ["Networking", "Linux", "Python", "Cybersecurity Basics", "SQL"],
  "Cloud Engineer": ["Linux", "Networking", "Cloud Basics", "Docker", "Git"],
  "DevOps Engineer": ["Linux", "Git", "Docker", "CI/CD", "Networking"],
  "Machine Learning Engineer": ["Python", "Statistics", "Machine Learning", "SQL", "Data Visualization"],
  "Mobile App Developer": ["JavaScript", "Responsive Design", "REST APIs", "UI/UX Design", "Git"],
  "UI/UX Designer": ["HTML", "CSS", "Responsive Design", "UI/UX Design", "Figma"]
};

// Get references to the form, reset button, and result card elements
const analyzerForm = document.getElementById("analyzer-form");
const resetBtn = document.getElementById("reset-btn");
const resultCard = document.getElementById("result-card");

// Listen for form submission ("Analyze Gap") and Reset button clicks
analyzerForm.addEventListener("submit", analyzeSkillGap);
resetBtn.addEventListener("click", resetAnalyzer);

// Main function to compare ticked checkboxes against required role skills
function analyzeSkillGap(event) {
  event.preventDefault(); // Stop the page from reloading

  // Read the student's name and selected career role
  const studentName = document.getElementById("student-name").value;
  const selectedRole = document.getElementById("role-select").value;
  const requiredList = roleSkills[selectedRole];

  // Loop through all skill checkboxes and collect the ticked ones
  const checkboxes = document.querySelectorAll(".skill-checkbox");
  const studentSkills = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      studentSkills.push(checkboxes[i].value);
    }
  }

  // Separate required skills into matched and missing arrays
  const matchedSkills = [];
  const missingSkills = [];
  for (let i = 0; i < requiredList.length; i++) {
    const skill = requiredList[i];
    if (studentSkills.includes(skill)) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  }

  // Calculate the readiness percentage score
  const score = Math.round((matchedSkills.length / requiredList.length) * 100);

  // Update the result card text and CSS progress bar width
  document.getElementById("result-name").textContent = studentName;
  document.getElementById("result-role").textContent = selectedRole;
  document.getElementById("score-value").textContent = score + "%";
  document.getElementById("progress-bar-fill").style.width = score + "%";

  // Display green tags for matched skills and amber tags for missing skills
  renderSkillTags("have-skills-list", matchedSkills, "tag-have", "No matching skills selected yet.");
  renderSkillTags("need-skills-list", missingSkills, "tag-need", "None! You know every core skill for this role.");

  // Set a short feedback message based on the score using if/else
  const feedbackMessage = document.getElementById("feedback-message");
  if (score >= 80) {
    feedbackMessage.textContent = "Ready: Great job! You know most core skills and are ready to build projects.";
  } else if (score >= 50) {
    feedbackMessage.textContent = "Almost There: Good foundation! Practice the remaining skills listed below.";
  } else {
    feedbackMessage.textContent = "Keep Learning: Pick one missing skill below and start with the free resources.";
  }

  // Reveal the completed result card
  resultCard.hidden = false;
}

// Helper function to create HTML list tags for a group of skills
function renderSkillTags(listId, skillsArray, tagClass, emptyText) {
  const listElement = document.getElementById(listId);
  if (skillsArray.length === 0) {
    listElement.innerHTML = '<li class="empty-note">' + emptyText + '</li>';
    return;
  }
  let htmlContent = "";
  for (let i = 0; i < skillsArray.length; i++) {
    htmlContent = htmlContent + '<li class="skill-tag ' + tagClass + '">' + skillsArray[i] + '</li>';
  }
  listElement.innerHTML = htmlContent;
}

// Function to hide the result card when Reset is clicked
function resetAnalyzer() {
  resultCard.hidden = true;
}

// Toggle between Dark Mode and Light Mode when the navbar button is clicked
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Light Mode";
  } else {
    themeToggleBtn.textContent = "Dark Mode";
  }
}

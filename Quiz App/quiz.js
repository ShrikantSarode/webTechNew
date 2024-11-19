const api = "CJiRCP3XdF4CvfTfw2PpZIXngJsUJ9l4o5qs1HQM";
const url = `https://quizapi.io/api/v1/questions?apiKey=${api}&category=sql&difficulty=Medium&limit=10&tags=MySQL`;

let questionsData = [];

async function quiz() {
  try {
    const response = await fetch(url);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    questionsData = data;

    // Get the container where we will display the questions
    const questionsContainer = document.querySelector("#questions-container");

    let questionsHTML = "";

    // Iterate over each question and render without answers initially
    data.forEach(function (question, index) {
      questionsHTML += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Q${index + 1}.</h5>
            <p class="card-text">${question.question}</p>
          </div>
          <ul class="list-group list-group-flush" id="answers-${index}">
            <!-- Answers will be revealed on submit -->
          </ul>
        </div>
      `;
    });

    // Insert the question HTML into the container
    questionsContainer.innerHTML = questionsHTML;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
  }
}

// Function to handle the submission of the quiz
function submitTest() {
  // Get all the answer lists
  questionsData.forEach(function (question, index) {
    const answersContainer = document.getElementById(`answers-${index}`);

    // Use getAnswerList function to generate answers
    answersContainer.innerHTML = getAnswerList(question);
  });

  // Disable the Submit button after submission
  document.getElementById("submit-btn").disabled = true;
}

// Helper function to format answers
function getAnswerList(question) {
  const answers = [];
  const answerKeys = [
    "answer_a",
    "answer_b",
    "answer_c",
    "answer_d",
    "answer_e",
    "answer_f",
  ];
  const correctAnswers = question.correct_answers;

  answerKeys.forEach((answerKey) => {
    const answerText = question.answers[answerKey];

    if (answerText) {
      const isCorrect = correctAnswers[`${answerKey}_correct`] === "true";
      const answerClass = isCorrect
        ? "list-group-item list-group-item-success"
        : "list-group-item";

      answers.push(`
        <li class="${answerClass}">
          ${answerText} ${isCorrect ? "(Correct)" : "(Incorrect)"}
        </li>
      `);
    }
  });

  return answers.join(""); // Return the list of answers as a single HTML string
}

// Call the function to fetch and display questions
quiz();

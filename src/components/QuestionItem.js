import React from "react";

function QuestionItem({ question,onAnswerChange,onDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;
  function handleAnswerChange(event) {
    onAnswerChange(id, parseInt(event.target.value));
  }
  function handleDeleteClick() {
    onDeleteClick(id);
  }
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
        <select onChange={handleAnswerChange}></select>
      </label>
      <button onClick={ handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

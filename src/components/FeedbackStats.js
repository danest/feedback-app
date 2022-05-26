import React from "react";
import { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // calculate ratings average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1)

  return(
    <div className="feedback-stats">
      <h2>{feedback.length} Reviews </h2>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
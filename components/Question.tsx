'use client'

import React from 'react'
import { useState } from 'react'
import { QuestionArray } from '@/components/SurveyForm'

interface QuestionComponent extends QuestionArray {
  handleAnswer: (answer: number) => void
}

function Question({ question, options, handleAnswer }: QuestionComponent) {
  const [selectedAnswer, setSelectedAnswer] = useState<number>()

  const handleOptionClick = (option: number) => {
    setSelectedAnswer(option)
    handleAnswer(option)
  }

  return (
    <div className="mb-4">
      <p className="font-bold">{question}</p>
      <div className="flex mt-2">
        {options.map(option => (
          <button
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className={`mr-4 px-4 py-2 rounded ${
              selectedAnswer === option.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question

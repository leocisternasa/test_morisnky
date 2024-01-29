'use client'

import React from 'react'
import { useState } from 'react'
import Question from './Question'

export interface Option {
  label: string
  value: number
}

export interface QuestionArray {
  question: string
  options: Option[]
}

function SurveyForm() {
  const [answers, setAnswers] = useState<number[]>([])
  const questions: QuestionArray[] = [
    {
      question:
        '¿Se le olvida alguna vez tomar la medicina para su enfermedad crónica?',
      options: [
        { label: 'Sí', value: 0 },
        { label: 'No', value: 1 }
      ]
    },
    {
      question:
        'A algunas personas se les pasa tomarse sus medicinas por otras razones y no un simple olvido. Si recuerda las últimas dos semanas, ¿hubo algún día en el que se le olvidó tomar la medicina para su enfermedad crónica?',
      options: [
        { label: 'Sí', value: 0 },
        { label: 'No', value: 1 }
      ]
    },
    {
      question:
        '¿Alguna vez ha reducido la dosis o directamente dejado de tomar la medicina sin decírselo a su médico porque se sentía peor al tomarla?',
      options: [
        { label: 'Sí', value: 0 },
        { label: 'No', value: 1 }
      ]
    },
    {
      question:
        'Cuando viaja o está fuera del hogar, ¿se le olvida llevar la medicina para su enfermedad crónica alguna vez?',
      options: [
        { label: 'Sí', value: 0 },
        { label: 'No', value: 1 }
      ]
    },
    {
      question: '¿Tomó la medicina para su enfermedad crónica ayer?',
      options: [
        { label: 'Sí', value: 1 },
        { label: 'No', value: 0 }
      ]
    },
    {
      question:
        'Cuando siente que su enfermedad crónica está bajo control, ¿deja a veces de tomar su medicina?',
      options: [
        { label: 'Sí', value: 0 },
        { label: 'No', value: 1 }
      ]
    },
    {
      question:
        'Tomar medicamentos cada día puede ser un problema para muchas personas. ¿Se siente alguna vez presionado por seguir el tratamiento médico para su enfermedad crónica?',
      options: [
        { label: 'Sí', value: 0 },
        { label: 'No', value: 1 }
      ]
    },
    {
      question:
        '¿Con qué frecuencia tiene dificultades para recordar tomar todas sus medicinas?',
      options: [
        { label: 'Nunca/Casi nunca', value: 1 },
        { label: 'Rara vez', value: 0.75 },
        { label: 'Algunas veces', value: 0.5 },
        { label: 'Habitualmente', value: 0.25 },
        { label: 'Siempre', value: 0 }
      ]
    }
  ]

  const handleAnswer = (answer: number) => {
    setAnswers(prevAnswers => [...prevAnswers, answer])
  }

  const handleSubmit = () => {
    const result = answers.reduce((total, answer) => total + answer, 0)
    console.log('Resultado del test:', result)

    setAnswers([])
  }
  return (
    <div className="max-w-[600px] mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">
        Test de Moroinsky de 8 preguntas
      </h1>
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          handleAnswer={handleAnswer}
        />
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Enviar Respuestas
      </button>
    </div>
  )
}

export default SurveyForm

'use client'

import React from 'react'
import { useCallback, useState, useRef } from 'react'
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

const surveyJson = {
  pages: [
    {
      elements: [
        {
          type: 'html',
          html: '<h4>Obtenga su indice oficial de adherencia a su tratamiento y sepa como mejorar su salud gracias al Test de Morinsky</h4>'
        }
      ]
    },
    {
      elements: [
        {
          name: '¿Se le olvida alguna vez tomar la medicina para su enfermedad crónica?',
          title:
            '¿Se le olvida alguna vez tomar la medicina para su enfermedad crónica?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 0 },
            { text: 'No', value: 1 }
          ],
          isRequired: true
        },

        {
          name: 'A algunas personas se les pasa tomarse sus medicinas por otras razones y no un simple olvido. Si recuerda las últimas dos semanas, ¿hubo algún día en el que se le olvidó tomar la medicina para su enfermedad crónica?',
          title:
            'A algunas personas se les pasa tomarse sus medicinas por otras razones y no un simple olvido. Si recuerda las últimas dos semanas, ¿hubo algún día en el que se le olvidó tomar la medicina para su enfermedad crónica?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 0 },
            { text: 'No', value: 1 }
          ],
          isRequired: true
        },
        {
          name: '¿Alguna vez ha reducido la dosis o directamente dejado de tomar la medicina sin decírselo a su médico porque se sentía peor al tomarla?',
          title:
            '¿Alguna vez ha reducido la dosis o directamente dejado de tomar la medicina sin decírselo a su médico porque se sentía peor al tomarla?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 0 },
            { text: 'No', value: 1 }
          ],
          isRequired: true
        },
        {
          name: 'Cuando viaja o está fuera del hogar, ¿se le olvida llevar la medicina para su enfermedad crónica alguna vez?',
          title:
            'Cuando viaja o está fuera del hogar, ¿se le olvida llevar la medicina para su enfermedad crónica alguna vez?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 0 },
            { text: 'No', value: 1 }
          ],
          isRequired: true
        },
        {
          name: '¿Tomó la medicina para su enfermedad crónica ayer?',
          title: '¿Tomó la medicina para su enfermedad crónica ayer?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 1 },
            { text: 'No', value: 0 }
          ],
          isRequired: true
        },
        {
          name: 'Cuando siente que su enfermedad crónica está bajo control, ¿deja a veces de tomar su medicina?',
          title:
            'Cuando siente que su enfermedad crónica está bajo control, ¿deja a veces de tomar su medicina?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 0 },
            { text: 'No', value: 1 }
          ],
          isRequired: true
        },
        {
          name: 'Tomar medicamentos cada día puede ser un problema para muchas personas. ¿Se siente alguna vez presionado por seguir el tratamiento médico para su enfermedad crónica?',
          title:
            'Tomar medicamentos cada día puede ser un problema para muchas personas. ¿Se siente alguna vez presionado por seguir el tratamiento médico para su enfermedad crónica?',
          type: 'radiogroup',
          choices: [
            { text: 'Sí', value: 0 },
            { text: 'No', value: 1 }
          ],
          isRequired: true
        },
        {
          name: '¿Con qué frecuencia tiene dificultades para recordar tomar todas sus medicinas?',
          title:
            '¿Con qué frecuencia tiene dificultades para recordar tomar todas sus medicinas?',
          type: 'radiogroup',
          choices: [
            { text: 'Nunca/Casi nunca', value: 1 },
            { text: 'Rara vez', value: 0.75 },
            { text: 'Algunas veces', value: 0.5 },
            { text: 'Habitualmente', value: 0.25 },
            { text: 'Siempre', value: 0 }
          ],
          isRequired: true
        }
      ]
    }
  ],
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: 'Take the Survey',
  completeText: 'Terminar y Enviar',
  completedHtml: 'Thank you for your feedback!',
  showPreviewBeforeComplete: 'showAnsweredQuestions',
  previewText: 'Terminar y Revisar Respuestas'
}

function SurveyJs() {
  const survey = useRef(new Model(surveyJson)).current
  const [surveyResults, setSurveyResults] = useState<number>()
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false)

  const displayResults = useCallback((survey: any) => {
    const morinskyArray: number[] = Object.values(survey.data)
    const morinskyResult: number = morinskyArray.reduce(
      (total, value) => (total += value),
      0
    )
    setSurveyResults(morinskyResult)
    setIsSurveyCompleted(true)
  }, [])

  survey.onComplete.add(displayResults)

  return (
    <>
      {isSurveyCompleted ? (
        <>
          <p>Result Morinsky Test:</p>
          <code style={{ whiteSpace: 'pre' }}>{surveyResults}</code>
        </>
      ) : (
        <Survey model={survey} />
      )}
    </>
  )
}

export default SurveyJs

import React from 'react'
import { ChatIcon, DeleteIcon, DetailIcon, FunctionalitiesContainers } from './styles'

const functionalitiesIcons = {
  detail: <DetailIcon src="/images/detail.svg" alt="Detalhes" />,
  chat: <ChatIcon src="/images/chat.svg" alt="Chat de conversa" />,
  delete: <DeleteIcon src="/images/delete.svg" alt="Deletar" />,
}

export const Functionalities = () => {
  return (
    <FunctionalitiesContainers>
      {Object.keys(functionalitiesIcons).map(function (key, index) {
        return functionalitiesIcons[key]
      })}
    </FunctionalitiesContainers>
  )
}

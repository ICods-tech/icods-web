import { useRouter } from 'next/router'
import React from 'react'
import { PATH_LIST_LOTS } from '../../constants/urls'
import { ChatIcon, DeleteIcon, DetailIcon, FunctionalitiesContainers } from './styles'

interface FunctionalitiesProps {
  type: 'functionalitiesClients' | 'functionalitiesLots' 
}

export const Functionalities = ({ type }: FunctionalitiesProps) => {
  const router = useRouter()
  
  const functionalitiesTypes = {
    functionalitiesClients: () => ( {
      detail: <DetailIcon src="/images/detail.svg" onClick={()=>router.push(PATH_LIST_LOTS)}  alt="Detalhes" />,
      chat: <ChatIcon src="/images/chat.svg" alt="Chat de conversa" />,
      delete: <DeleteIcon src="/images/delete.svg" alt="Deletar" />,
    }),
    functionalitiesLots: () => ( {
      detail: <DetailIcon src="/images/detail.svg" onClick={()=>router.push(PATH_LIST_LOTS)}  alt="Detalhes" />,
      chat: <ChatIcon src="/images/imprimir.svg" alt="Imprimir" />,
      delete: <DeleteIcon src="/images/delete.svg" alt="Deletar" />
    })
  }
  
  return (
    <FunctionalitiesContainers>
      {Object.keys(functionalitiesTypes[type]()).map(function (key, index) {
        return functionalitiesTypes[type]()[key]
      })}
    </FunctionalitiesContainers>
  )
}

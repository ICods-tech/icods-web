import { useRouter } from 'next/router'
import React from 'react'
import { PATH_LIST_LOTS, PATH_LIST_QRCODES } from '../../constants/urls'
import { ChatIcon, DeleteIcon, DetailIcon, FunctionalitiesContainers, PrinterIcon } from './styles'

interface FunctionalitiesProps {
  type: 'clients' | 'lots' | 'qrcodes'
  functions: any
}

export const Functionalities = ({ type , functions}: FunctionalitiesProps) => {
  const router = useRouter()
  
  const functionalitiesTypes = {
    clients: () => ( {
      detail: <DetailIcon src="/images/detail.svg" onClick={functions.detail}  alt="Detalhes" />,
      chat: <ChatIcon src="/images/chat.svg" alt="Chat de conversa" onClick={functions.chat}/>,
      delete: <DeleteIcon src="/images/delete.svg" alt="Deletar" onClick={functions.delete}/>,
    }),
    lots: () => ( {
      detail: <DetailIcon src="/images/detail.svg" onClick={()=>router.push(PATH_LIST_QRCODES)}  alt="Detalhes" />,
      chat: <PrinterIcon src="/images/imprimir.svg" alt="Imprimir" />,
      delete: <DeleteIcon src="/images/delete.svg" alt="Deletar" />
    }),
    qrcodes: () => ( {
      chat: <PrinterIcon src="/images/imprimir.svg" alt="Imprimir" />,
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

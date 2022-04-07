import { ActiveIcon, StatusContainer, StatusText} from './styles'

export interface IStatus {
  type: 'ACTIVE' | 'INACTIVE' | 'IN_PROGRESS'
}

const Status = ({ type }: IStatus) => {

  const statusText = {
    ACTIVE: ()=> {
      return (
        <>
          <StatusText status={type}>Ativo</StatusText>
          <ActiveIcon src="/images/enterprise/shields/active.svg" alt="Icone de ativo" />
        </>
      )
    },
    INACTIVE:()=> {
      return (
        <>
          <StatusText status={type}>Inativo</StatusText>
          <ActiveIcon src="/images/enterprise/shields/inactive.svg" alt="Icone de inativo" />
        </>
      )
    },
    IN_PROGRESS:()=> {
      return (
        <>
          <StatusText status={type}>Em processamento</StatusText>
          <ActiveIcon src="/images/enterprise/shields/in-progress.svg" alt="Icone de em progresso" />
        </>
      )
    },
  }


  return (
    <StatusContainer>
      {statusText[type]()}
    </StatusContainer>

  )
}

export default Status;
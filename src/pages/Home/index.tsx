import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  Taskinput,
} from './styles'

const newCycleFormValitionSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValitionSchema),
  })

  function handleCreatNewCycle(data: any) {
    console.log(data)
  }
  const task = watch('task')
  const isSubmitDisble = !task
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreatNewCycle)} action="">
        <FormContainer>
          {' '}
          <label htmlFor="task"> Vou trabalhar em</label>
          <Taskinput
            type="text"
            id="task"
            list="task-sugestions"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
          />
          <datalist id="task-sugestions">
            <option value="Sugestão 01" />
            <option value="Sugestão 02" />
            <option value="Sugestão 03" />
            <option value="Sugestão 04" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            placeholder="00"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton disabled={isSubmitDisble} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}

import { FormContainer, MinutesAmountInput, Taskinput } from './styles'
import { useContext } from 'react'
import { CycleContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      {' '}
      <label htmlFor="task"> Vou trabalhar em</label>
      <Taskinput
        type="text"
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}

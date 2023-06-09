import React, {
  createContext, forwardRef, type RefObject,
  useContext, useRef, useState, type FormEvent, useMemo
} from 'react'
  
  interface FormProps {
    children: React.ReactNode
  }
  
  interface FormContextType {
    form: any
    setForm: React.Dispatch<React.SetStateAction<HTMLFormElement>>
    ref: RefObject<HTMLFormElement> | any
  }
  
  interface FormSubmitProps {
    children: React.ReactNode
    onSubmit: any
  }
  
  interface FormFieldProps {
    type: string
    name: string
  }
  
  interface FormTextAreaProps {
    name: string
  }
  
const FormContext = createContext<FormContextType>({
  form: {},
  setForm: () => null,
  ref: null
})
  
const useForm = (): FormContextType => {
  const value = useContext(FormContext)
  return useMemo(() => value, [value])
}
const InnerForm = forwardRef<HTMLFormElement, FormSubmitProps>(function Form ({ children, onSubmit },
  ref): JSX.Element {
  const { form } = useForm()
  const submit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault()
    onSubmit(form)
  }
  return <form onSubmit={submit} ref={ref} className="flex flex-col gap-2 bg-slate-300 p-4 rounded">
    {children}
  </form>
})
  

export const Form = ({ children, onSubmit }: FormSubmitProps): JSX.Element => {
  const [form, setForm] = useState({})
  const ref = useRef <HTMLFormElement>(null)
  return (
    <FormContext.Provider value={{ form, setForm, ref }}>
      <InnerForm onSubmit={onSubmit} ref={ref}>
        {children}
      </InnerForm>
    </FormContext.Provider>
  )
}
  
export const Label = ({ children }: FormProps): JSX.Element => {
  return (
    <label className="block text-left uppercase tracking-wide text-slate-900 text-xs font-bold mb-2" 
      htmlFor="grid-first-name">{children}</label>
  )
}
  
const useField = (name: string): any => {
  const { form, setForm } = useForm()
  
  const setValue = (value: string): void => {
    setForm({ ...form, [name]: value })
  }
  
  return [form[name] ?? '', setValue]
}

export const Textarea = ({name}: FormTextAreaProps) : JSX.Element => {
  const [value, setValue] = useField(name)
  return (
    <textarea value={value} name={name} onChange={(e)=> { setValue(e.currentTarget.value)}} />
  )
}
  
export const Field = ({ type, name }: FormFieldProps): JSX.Element => {
  const [value, setValue] = useField(name)
  return (
    <input
      value={value}
      onChange={(ev) => { setValue(ev.currentTarget.value) }}
      type={type}
      className="mb-2 text-sm font-medium w-full" required />
  
  )
}
  
export const Submit = ({ children }: any ): JSX.Element => {
  return <input type="submit" value={children} className="bg-green-500 text-slate-50 w-1/4  cursor-pointer" />
}
  
import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group px-4 h-12 bg-grey-800 border rounded-xl flex items-center gap-2 focus-within:border-grey-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="h-5 w-5 text-grey-400 group-focus-within:text-grey-100 group-[&:not(:has(input:placeholder-shown))]:text-grey-100  group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return (
    <input className="h-6 flex-1 outline-0 placeholder-grey-400" {...props} />
  )
}

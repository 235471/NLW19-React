import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'px-1.5 bg-grey-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-grey-900',
        className
      )}
      type="button"
      {...props}
    />
  )
}

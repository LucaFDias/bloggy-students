import { cn } from '@/lib/utils';

import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from 'react-hook-form';

interface InputFormProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  id,
  type,
  placeholder,
  required,
  register,
  errors,
  disabled
}) => {
  return (
    <div>
      <label 
        className='
          block
          text-sm
          font-medium
          leading-6
          text-gray-900
          dark:text-gray-400
        '
        htmlFor={id}>
          {label}
      </label>
      <div className='mt-2'>
        <input 
          id={id}
          type={type} 
          autoComplete={id}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id, { required })}
          className={cn(`
            form-input
            block
            w-full 
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-500
            sm:text-sm
            sm:leading-6`, 
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  )
}

export default InputForm
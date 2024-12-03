'use client';
import { useRef } from 'react';
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form';
import styles from './custom-textarea.module.css';
import classNames from 'classnames';

interface CustomTextareaProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  name,
  label,
  value,
  onChange,
  error: propError,
}) => {
  let formContext;
  try {
    formContext = useFormContext();
  } catch {
    formContext = null;
  }

  const register = formContext?.register;
  const contextError = formContext?.formState?.errors?.[name]?.message?.toString();
  const error = propError || contextError;
  const hasError = !!error;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const borderEffect = hasError
    ? 'border border-red-600'
    : 'border border-[var(--champions-blue)] hover:border-[var(--champions-green)] focus:border-[var(--champions-green)] duration-300 ease-in-out';

  const paddingTop = label.length > 35 ? 'pt-16' : 'pt-8';

  const borderClassName = classNames(
    'peer block w-full appearance-none bg-[#000] pb-3 pl-5 text-[clamp(18px,1.85vw,20px)] text-white focus:outline-none focus:ring-0 resize-none appearance-none overflow-y-hidden',
    borderEffect,
    paddingTop
  );

  const registerProps = register ? (register(name) as UseFormRegisterReturn) : {};
  const textareaProps = register
    ? {
        ...registerProps,
        ref: (e: HTMLTextAreaElement | null) => {
          textareaRef.current = e;
          if ('ref' in registerProps) {
            (registerProps.ref as (instance: HTMLTextAreaElement | null) => void)(e);
          }
        },
        value,
        onChange,
      }
    : {
        ref: textareaRef,
        name,
        value,
        onChange,
      };

  return (
    <div className={styles.textareaContainer}>
      <div className={styles.relativeContainer}>
        <textarea
          {...textareaProps}
          onInput={adjustHeight}
          className={borderClassName}
          placeholder=' '
          rows={5}
        />
        <label className='uppercase scale-75 peer-focus:scale-75 pointer-events-none absolute left-5 top-8 z-10 origin-[0] transform text-[clamp(16px,2.5vw,20px)] text-white text-opacity-60 peer-focus:text-opacity-100 duration-300  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 -translate-y-1 peer-focus:-translate-y-1 text-base'>
          {label}
        </label>
      </div>
      {hasError && (
        <p className={styles.errorText}>{error}</p>
      )}
    </div>
  );
};

export default CustomTextarea;

'use client';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './custom-textarea.module.css';
import classNames from 'classnames';

interface CustomTextareaProps {
  name: string;
  label: string;
  // isRequired?: boolean;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  name,
  label,
  // isRequired = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name]?.message;

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

  return (
    <div className={styles.textareaContainer}>
      <div className={styles.relativeContainer}>
        <textarea
          {...register(name)}
          ref={(e) => {
            textareaRef.current = e;
            register(name).ref(e);
          }}
          onInput={adjustHeight}
          className={borderClassName}
          placeholder=' '
          rows={5}
        />
        <label className='uppercase scale-75 peer-focus:scale-75 pointer-events-none absolute left-5 top-8 z-10 origin-[0] transform text-[clamp(16px,2.5vw,20px)] text-white text-opacity-60 peer-focus:text-opacity-100 duration-300  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 -translate-y-1 peer-focus:-translate-y-1 text-base'>
          {label}
          {/* {isRequired && <span className="text-red-600">*</span>} */}
        </label>
      </div>
      {hasError && (
        <p className={styles.errorText}>{errors[name]?.message?.toString()}</p>
      )}
    </div>
  );
};

export default CustomTextarea;

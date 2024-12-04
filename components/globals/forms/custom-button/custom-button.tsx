import React from 'react';
import styles from './custom-button.module.css';
import classNames from 'classnames';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'green' | 'blue';
  className?: string;
}

export default function CustomButton({
  children,
  className,
  size = 'medium',
  color = 'green',
  ...props
}: CustomButtonProps) {
  const buttonSize =
    size === 'small'
      ? styles.sizeSmall
      : size === 'large'
        ? styles.sizeLarge
        : styles.sizeMedium;

  return (
    <button
      {...props}
      className={classNames(
        styles.buttonBase,
        styles[color],
        buttonSize,
        className
      )}
    >
      {children}
    </button>
  );
}

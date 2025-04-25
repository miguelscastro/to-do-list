import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
    return (
        <input
            {...rest}
            className={styles.input}
            placeholder='Adicione uma nova tarefa'
        />
    );
}
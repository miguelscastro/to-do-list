import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { ITask } from '../../App';

interface TaskProps {
    data: ITask,
    removeTask: (id: number) => void,
    toogleTask: ({ id, value }: { id: number, value: boolean }) => void,

}

export function Task({ data, removeTask, toogleTask }: TaskProps) {

    function handleRemove() {
        removeTask(data.id);
    }

    function handleToogle() {
        toogleTask({ id: data.id, value: !data.isChecked });
    }

    const isCheckboxChecked = data.isChecked ? styles['checkboxChecked'] : styles['checkboxUnchecked'];
    const isParagraphChecked = data.isChecked ? styles['paragraphChecked'] : '';

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleToogle}>
                    <input readOnly type="checkbox" />
                    <span className={`${styles.checkbox} ${isCheckboxChecked}`}>
                        {data.isChecked && <Check size={16} />}
                    </span>

                    <p className={`${styles.paragraph} ${isParagraphChecked}`}>
                        {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={24} />
            </button>
        </div>
    );
}
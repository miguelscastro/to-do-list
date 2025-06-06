import styles from './Empty.module.css';
import image from '../../assets/clipboard.png';

export function Empty() {
    return (
        <div className={styles.container}>
            <img src={image} alt="ícone de prancheta" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}
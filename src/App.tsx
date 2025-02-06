import { PlusCircle } from "phosphor-react";

import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';

import { Header as ListHeader } from './components/List/Header';
import './global.css';
// import { Empty } from "./components/List/Empty";
import { Task } from "./components/List/Task";
import { ChangeEvent, useState } from "react";

export interface ITask {
    id: number;
    text: string;
    isChecked: boolean;
}

export function App() {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [inputValue, setInputValue] = useState("");

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleAddNewTask() {
        if (!inputValue) {
            return
        }

        const newTask: ITask = {
            id: new Date().getTime(),
            text: inputValue,
            isChecked: false
        }

        setTasks((state) => [...state, newTask])
        setInputValue('');
    }

    function handleRemoveTask(id: number) {
        const remainingTasks = tasks.filter((task) => task.id !== id);

        if (!confirm('Deseja mesmo apagar essa tarefa?')) {
            return
        }
        setTasks(remainingTasks)

    }

    function handleToogleTask({ id, value }: { id: number, value: boolean }) {
        const updateTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isChecked: value };
            }
            return { ...task };
        })
        setTasks(updateTasks);
    }

    const checkedTasksCounter = tasks.reduce((value, currentTask) => {
        if (currentTask.isChecked) {
            return value + 1;
        }
        return value
    }, 0)

    return (
        <main>
            <Header />
            <section className={styles.content}>
                <div className={styles.newTaskContainer}>
                    <Input
                        onChange={handleNewTaskChange}
                        value={inputValue}
                    />
                    <Button onClick={handleAddNewTask}>
                        Criar
                        <PlusCircle size={16} color="#F2F2F2" weight='bold' />
                    </Button>
                </div>
                <div className={styles.tasksList}>
                    <ListHeader
                        tasksCounter={tasks.length}
                        checkedTasksCounter={checkedTasksCounter}
                    />
                    {tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                data={task}
                                removeTask={handleRemoveTask}
                                toogleTask={handleToogleTask}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    );
}
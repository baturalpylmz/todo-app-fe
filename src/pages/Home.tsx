import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import {
    useDeleteApiTodoId,
    useGetApiTodo,
    usePostApiTodo,
    usePutApiTodoId,
} from '@/api/gen/todo/todo';
import type { Todo } from '@/api/gen/index.schemas';

type TodoList = {
    id: number;
    text?: string;
    completed: boolean;
};

export default function Home() {
    const { data: todos, refetch } = useGetApiTodo();

    const { mutate: postMutate } = usePostApiTodo({
        mutation: {
            onSuccess: data => {
                console.log('Todo added:', data);
                refetch();
            },
        },
    });

    const { mutate: deleteMutate } = useDeleteApiTodoId({
        mutation: {
            onSuccess: data => {
                console.log('Todo deleted:', data);
                refetch();
            },
        },
    });

    const { mutate: updateMutate } = usePutApiTodoId({
        mutation: {
            onSuccess: data => {
                console.log('Todo updated:', data);
                refetch();
            },
        },
    });

    const [input, setInput] = useState<string>('');

    const list: TodoList[] = useMemo(() => {
        return (
            todos?.data?.map((todo: Todo) => ({
                id: todo.id,
                text: todo.name,
                completed: todo.isCompleted,
            })) ?? []
        );
    }, [todos]);

    const removeInput = () => setInput('');

    const addTodo = () => {
        if (input.trim() === '') return;
        postMutate({ data: { name: input, isCompleted: false } });
        removeInput();
    };

    const toggleCompleted = (id: number) => {
        const todo = list.find(todo => todo.id === id);
        if (!todo) return;
        updateMutate({
            id,
            data: { id, name: todo.text, isCompleted: !todo.completed },
        });
    };

    const removeTodo = (id: number) => {
        if (!confirm('Are you sure you want to delete this todo?')) return;
        deleteMutate({ id });
    };

    return (
        <div className="bg-background flex min-h-screen flex-col items-center gap-6 p-6">
            <div className="flex w-full max-w-md gap-2">
                <Input
                    placeholder="Add a task..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addTodo()}
                    className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2 transition-all outline-none focus:border-neutral-900 focus:shadow-lg focus:ring-2 focus:ring-neutral-300"
                />
                <Button
                    onClick={addTodo}
                    variant="default"
                    className="hover:bg-primary/80 cursor-pointer"
                >
                    Add
                </Button>
                <Button
                    onClick={removeInput}
                    variant="destructive"
                    className="hover:bg-destructive/70 cursor-pointer"
                >
                    Clear
                </Button>
            </div>

            <div className="flex w-full max-w-md flex-col gap-3">
                {list.map(todo => (
                    <Card
                        key={todo.id}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/10 p-4 shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20"
                    >
                        <div className="flex w-full items-center gap-3">
                            <Checkbox
                                checked={todo.completed}
                                onCheckedChange={() => toggleCompleted(todo.id)}
                                className="cursor-pointer"
                            />
                            <span
                                className={`text-card-foreground flex-1 text-lg ${
                                    todo.completed
                                        ? 'line-through decoration-red-500 decoration-2'
                                        : ''
                                }`}
                            >
                                {todo.text}
                            </span>
                            <Button
                                variant="outline"
                                className="text-destructive hover:text-destructive/70 cursor-pointer"
                                onClick={() => removeTodo(todo.id)}
                            >
                                &times;
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

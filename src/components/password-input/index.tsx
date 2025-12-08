import { forwardRef, useState } from 'react';
import { Input } from '../ui/input';
import { Eye, EyeOff } from 'lucide-react';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, ...props }, ref) => {
        const [visible, setVisible] = useState(false);

        return (
            <div className="relative">
                <Input
                    ref={ref}
                    type={visible ? 'text' : 'password'}
                    className={`pr-10 ${className ?? ''}`}
                    {...props}
                />

                <button
                    type="button"
                    onClick={() => setVisible(v => !v)}
                    className="absolute inset-y-0 right-0 flex items-center pr-2"
                    aria-label={visible ? 'Hide password' : 'Show password'}
                    tabIndex={-1} // opsiyonel: buton focus almasın istersen
                >
                    {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
            </div>
        );
    }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;

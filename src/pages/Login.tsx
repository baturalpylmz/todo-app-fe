import PasswordInput from '@/components/password-input';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
            <Card className="flex w-full max-w-md flex-col gap-8 p-6">
                <h1 className="from-primary bg-gradient-to-r to-purple-600 bg-clip-text text-center text-4xl font-bold text-transparent">
                    Welcome to Todo App
                </h1>
                <div className="flex flex-col gap-4">
                    <Input type="text" placeholder="Username or Email" />
                    <PasswordInput placeholder="Password" />
                </div>
                <div>
                    <button className="w-full cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Login
                    </button>
                    <div className="flex justify-end">
                        <p className="mt-4 flex items-center gap-1 text-sm text-gray-600">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                            >
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

import { useSession } from "../hooks/useSession";

export default function Login() {
  const { login } = useSession();

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => login({})}>Login</button>
        </div>
    );
}
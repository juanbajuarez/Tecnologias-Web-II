import AdminPanel from "../admin/AdminPanel";
import LoginForm from "../auth/LoginForm";


export default function Login() {
    let isLoggedIn = true;
    let content;
    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }
    return (
        <div>
            {content}
        </div>
    );
}
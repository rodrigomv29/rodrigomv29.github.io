import React, {useState} from "react";

interface LoginProps {
    onLogin: (email: string, password: string) => void
}
const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    if(!email || !password){
        setError("Both fields are required");
        return;
    }
    setError('')

    onLogin(email, password)

    setEmail('')
    setPassword('')

    return (
        <div style={styles.container}>
          <h2>Login</h2>
          {error && <p style={styles.error}>{error}</p>}
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      );
    };
    
    // Define inline styles for simple styling
    const styles = {
      container: {
        width: '300px',
        margin: '0 auto',
        textAlign: 'center',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      formGroup: {
        marginBottom: '15px',
      },
      input: {
        padding: '8px',
        fontSize: '16px',
        width: '100%',
      },
      button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
      },
      error: {
        color: 'red',
        marginBottom: '10px',
      },
    } as const;
    

 export default LoginPage
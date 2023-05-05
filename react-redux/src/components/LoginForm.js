import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { autoLogin, login } from "../store/login";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  /*   const { data } = useSelector((state) => state.login.user);
   */
  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input
        id="username"
        type="text"
        className={styles.input}
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input
        id="password"
        type="password"
        className={styles.input}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={styles.btn}>Enviar</button>
    </form>
  );
};

export default LoginForm;

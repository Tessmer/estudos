import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counter";
import { open, close } from "../store/modal";

const IncrementDecrement = () => {
  /* useSelector -> utilizado para ter acesso ao estado do Redux globalmente */
  const { counter, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {modal && <h1>Total: {counter}</h1>}
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(open())}>Abrir</button>
      <button onClick={() => dispatch(close())}>Fechar</button>
    </div>
  );
};

export default IncrementDecrement;

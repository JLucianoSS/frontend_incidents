import { Link } from "wouter";

export const LoginPage = () => {
  return (
    <>
      <div>LoginPage</div>

      <Link to="/home">

        <button className="btn btn-primary">Entrar</button>
      </Link>
    </>
  );
};

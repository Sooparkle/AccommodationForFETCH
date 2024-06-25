
import { LoginForm } from "../components/LoginForm"
import { Header } from "../components/Header"

export const Login = () => {


  
  return(
    <main className="main">
      <section className="login-page-wrap">
        <LoginForm />
        <Header />
      </section>
    </main>
  )

}
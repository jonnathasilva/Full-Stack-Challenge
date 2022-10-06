import { Icon, Input } from "~/components";

export function Login() {
  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <img src="/imgs/logo.svg" alt="logo" className="w-32 md:w-40" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form className="p-4 space-y-6">
          <Input
            type="text"
            placeholder="Digite seu e-mail"
            labal="Seu e-mail"
            name="email"
          />

          <Input
            type="password"
            placeholder="Digite seu senha"
            labal="Sua senha"
            name="password"
          />

          <a
            href="/dashboard"
            className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl"
          >
            Entrar
          </a>
        </form>
      </main>
    </div>
  );
}

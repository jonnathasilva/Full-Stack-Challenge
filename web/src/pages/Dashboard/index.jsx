import { Icon, Cart, DateSelect } from "~/components";

export const Dashboard = () => (
  <>
    <header className="bg-red-500 text-white p-4 ">
      <div className="container max-w-3xl flex justify-between">
        <img
          src="/imgs/logo-vermelho.svg"
          alt="logo"
          className="w-28 md:w-40"
        />
        <a href="/profile">
          <Icon name="profile" className="w-10" />
        </a>
      </div>
    </header>

    <main className="space-y-6">
      <section id="header" className=" bg-red-500 text-white">
        <div className="container max-w-3xl space-y-2 p-4">
          <span>Olá Jonnathan!</span>
          <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
        </div>
      </section>

      <section id="content" className="container max-w-3xl p-4 space-y-4">
        <DateSelect />

        <div className="container max-w-3xl p-4 space-y-4">
          <Cart
            timaA={{ slug: "sui" }}
            timaB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          />

          <Cart
            timaA={{ slug: "uru" }}
            timaB={{ slug: "cor" }}
            match={{ time: "10:00" }}
          />
        </div>
      </section>
    </main>
  </>
);

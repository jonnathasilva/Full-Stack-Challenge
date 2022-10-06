export const Cart = ({ timaA, timaB, match }) => (
  <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
    <span className="text-sm md:text-base text-gray-700 font-bold">
      {match.time}
    </span>

    <div className="flex space-x-4 justify-center items-center">
      <span className="uppercase">{timaA.slug}</span>
      <img src={`/imgs/flags/${timaA.slug}.png`} alt={timaA.slug} />

      <input
        type="number"
        className="bg-red-700/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
      />

      <span className="text-red-500 font-bold">X</span>

      <input
        type="number"
        className="bg-red-700/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
      />

      <span className="uppercase">{timaB.slug}</span>
      <img src={`/imgs/flags/${timaB.slug}.png`} alt={timaB.slug} />
    </div>
  </div>
);

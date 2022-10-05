export const Input = ({ name, labal, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm font-bold text-gray-500 " htmlFor={name}>
      {labal}
    </label>
    <input
      className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"
      name={name}
      id={name}
      {...props}
    />
  </div>
);

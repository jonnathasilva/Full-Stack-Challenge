import { useState } from "react";
import { format, subDays, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Icon } from "~/components/Icon";

export const DateSelect = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date("2022-11-20T00:00:00Z")
  );

  const prevDay = () => {
    const newDate = subDays(currentDate, 1);
    setCurrentDate(newDate);
  };

  const nextDay = () => {
    const newDate = addDays(currentDate, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="p-4 flex space-x-4 justify-center items-center">
      <Icon name="arrowLeft" className="w-6 text-red-500" onClick={prevDay} />
      <span className="font-bold">
        {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
      </span>
      <Icon name="arrowRight" className="w-6 text-red-500" onClick={nextDay} />
    </div>
  );
};

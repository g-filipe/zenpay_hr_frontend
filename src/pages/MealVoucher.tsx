import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";

const MealVoucher = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    setPeriods(getPeriodsByYear(year));
  }, [year]);

  return (
    <div>
      <Header />
      <h1>Gerenciamento de Vales Alimentação</h1>
      <DatePicker
        value={new Date(year, 0, 1)}
        style={{
          width: "70px",
          padding: "2px 2px 1px 1px",
          color: "blueviolet",
        }}
        onlyYearPicker
        type="button"
        onChange={(selectedDate) => {
          setYear(selectedDate!.year);
        }}
      ></DatePicker>
      {periods.map((period) => {
        return (
          <div>
            <div>{period.period}</div>
            <div>{period.employees.map((employee)=> {
              return <div>{JSON.stringify(employee)}</div>
            })}</div>
          </div>
        );
      })}
    </div>
  );
};

function getPeriodsByYear(year: number) {
  return [
    {
      period: `01/${year}`,
      totalMealVoucher: "R$35.789,23",
      employees: [
        {
          name: "João das Neves",
          department: "TI",
          mealVoucher: "944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHoliday: [12],
          workedWeekend: [5, 19, 27],
        },

        {
          name: "Amelia Silveira",
          department: "TI",
          mealVoucher: "944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHoliday: [12],
          workedWeekend: [5, 19, 27],
        },
      ],
    },
    {
      period: `02/${year}`,
      totalMealVoucher: "R$39.555,99",
      employees: [
        {
          name: "João das Neves",
          department: "TI",
          mealVoucher: "1944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHoliday: [12],
          workedWeekend: [5, 19, 27],
        },

        {
          name: "Amelia Silveira",
          department: "TI",
          mealVoucher: "2944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHoliday: [],
          workedWeekend: [5, 12, 19, 27],
        },
      ],
    },
  ];
}

export default MealVoucher;

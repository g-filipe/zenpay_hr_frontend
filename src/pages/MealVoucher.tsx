import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";
import "../styles/MealVoucher.css";

const MealVoucher = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    setPeriods(getPeriodsByYear(year));
  }, [year]);

  return (
    <>
      <Header />
      <h1>Gerenciamento de Vales Alimentação</h1>
      <DatePicker
        value={new Date(year, 0, 1)}
        onlyYearPicker
        type="button"
        onChange={(selectedDate) => {
          setYear(selectedDate!.year);
        }}
      ></DatePicker>
      <div className="meal-voucher-period-box">
        <div>
          {periods.map((period) => {
            return (
              <div>
                <div>{period.period}</div>
                <div>
                  {period.employees.map((employee) => {
                    return <div className="meal-voucher-info-employee">
                      <p><strong>Colaborador:</strong> {employee.name}</p>
                      <p><strong>Setor:</strong> {employee.department}</p>
                      <p><strong>VA/VR:</strong> {employee.mealVoucher}</p>
                      <p><strong>Diária - 6h:</strong> {employee.voucher6h}</p>
                      <p><strong>Diária - 8h:</strong> {employee.voucher8h}</p>
                      <p><strong>Escalas Fim de Semana:</strong> {employee.workedWeekends?.length ? employee.workedWeekends.join(",") : 0}</p>
                      <p><strong>Escala de Feriados: </strong>{employee.workedHolidays?.length ? employee.workedHolidays.join(",") : 0}</p>
                      <p><strong>Faltas Injustificadas competência atual: </strong>{employee.unjustifiedAbsences?.length ? employee.unjustifiedAbsences.join(",") : 0}</p>
                      <p><strong>Faltas Injustificadas competência anterior: </strong>{ employee.unjustifiedAbsencesPreviousMonth?.length ? employee.unjustifiedAbsencesPreviousMonth?.join(",") : 0}</p>
                      <hr />
                      </div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
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
          department: "Vendas",
          mealVoucher: "944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHolidays:[12],
          workedWeekends: [5, 19, 27],
        },

        {
          name: "Amelia Silveira",
          department: "Suporte",
          mealVoucher: "944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHolidays: [12],
          workedWeekends: [5, 19, 27],
        },
      ],
    },
    {
      period: `02/${year}`,
      totalMealVoucher: "R$39.555,99",
      employees: [
        {
          name: "João das Neves",
          department: "Vendas",
          mealVoucher: "1944.40",
          voucher6h: 3,
          voucher8h: 24,
          workedHolidays: [12],
          workedWeekends: [5, 19, 27],
        },

        {
          name: "Amelia Silveira",
          department: "Suporte",
          mealVoucher: "2944.40",
          voucher6h: 4,
          voucher8h: 24,
          workedHolidays: [],
          workedWeekends: [5, 13, 19, 27],
        },
      ],
    },
  ];
}

export default MealVoucher;

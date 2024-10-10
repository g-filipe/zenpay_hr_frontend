export interface MealVoucherInfo {
  name?: string;
  cpf?: string;
  department?: string;
  period?: string;
  workedHolidays?: number[];
  workedWeekend?: number[];
  unjustifiedAbsences?: number[];
  unjustifiedAbsencesPreviousMonth?: number[];
}

export type Period = {
  period: string,
  totalMealVoucher: string,
  employees: MealVoucherInfo[]
}
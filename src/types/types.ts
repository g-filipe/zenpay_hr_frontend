export interface MealVoucherInfo {
  name: string;
  // cpf?: string;
  department: string;
  // period?: string;
  workedHolidays: number[];
  workedWeekends: number[];
  unjustifiedAbsences: number[];
  unjustifiedAbsencesPreviousMonth: number[];
  mealVoucher: number;
  voucher6h: number;
  voucher8h: number;
}

export type Period = {
  period: string,
  totalMealVoucher: string,
  employees: MealVoucherInfo[]
}
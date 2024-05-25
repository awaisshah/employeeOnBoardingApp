import * as Yup from "yup";

export const DailySpendingSchema = Yup.object().shape({
  dailySpendingLimit: Yup.number().min(0, "Must be a positive number"),
});

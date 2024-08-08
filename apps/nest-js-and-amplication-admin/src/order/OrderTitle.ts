import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderNumber";

export const OrderTitle = (record: TOrder): string => {
  return record.orderNumber?.toString() || String(record.id);
};

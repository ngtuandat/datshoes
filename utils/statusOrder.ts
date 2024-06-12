import { OrderStatus } from "../lib/enum";

export const getStatusColor = (status: string) => {
  console.log({ OrderStatus: OrderStatus.Pending });
  switch (status) {
    case OrderStatus.Pending:
      return "bg-yellow-500 text-white";
    case OrderStatus.Processing:
      return "bg-blue-500 text-white";
    case OrderStatus.Shipped:
      return "bg-purple-500 text-white";
    case OrderStatus.Delivered:
      return "bg-green-500 text-white";
    case OrderStatus.Cancelled:
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export const getOrderStatusInVietnamese = (status: string) => {
  switch (status) {
    case OrderStatus.Pending:
      return "Đang chờ";
    case OrderStatus.Processing:
      return "Đang xử lý";
    case OrderStatus.Shipped:
      return "Đã giao hàng";
    case OrderStatus.Delivered:
      return "Đã giao thành công";
    case OrderStatus.Cancelled:
      return "Đã hủy";
    default:
      return status;
  }
};

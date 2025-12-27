import { prisma } from "../libs/prisma.js"
import { CreateOrderDetailPayload, CreateOrderItemPayload } from "../types/order.type.js"

export const createOrderDetailService = (payload: CreateOrderDetailPayload) => {
  return prisma.orderDetail.create({
    data: {
      trxId: payload.trxId,
      grossAmount: payload.grossAmount,
      destination: payload.destination,
      userId: payload.userId
    }
  })
}

export const createOrderItem = (payload: CreateOrderItemPayload) => {
  return prisma.orderItem.create({
    data: {
      itemId: payload.itemId,
      orderDetailId: payload.orderDetailId,
    }
  })
}

export const getOrderDetailByTrxId = (trxId: string) => {
  return prisma.orderDetail.findUnique({
    where: { trxId }
  })
}

export const updateOrderDetailByTrxId = (trxId: string, paymentType: string, status: "paid" | "pending" | "expired" | "failed") => {
  return prisma.orderDetail.update({
    where: { trxId },
    data: {
      status,
      paymentType
    }
  })
}
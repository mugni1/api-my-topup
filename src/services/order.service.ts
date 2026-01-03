import { prisma } from "../libs/prisma.js"
import { CreateOrderDetailPayload, CreateOrderItemPayload } from "../types/order.type.js"
import { QueryParams } from "../types/param.type.js"

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

export const getOrdersService = (params: QueryParams) => {
  return prisma.orderDetail.findMany({
    where: {
      OR: [
        { destination: { contains: params.search, mode: 'insensitive' } },
        { paymentType: { contains: params.search, mode: 'insensitive' } },
        {
          user: {
            OR: [
              { name: { contains: params.search, mode: 'insensitive' } },
              { email: { contains: params.search, mode: 'insensitive' } }
            ],
          }
        },
      ]
    },
    orderBy: {
      [params.orderBy]: params.sortBy
    },
    skip: params.offset,
    take: params.limit,
    include: {
      user: {
        select: { name: true, email: true }
      },
    }
  })
}

export const countOrderBySearchService = (search: string) => {
  return prisma.orderDetail.count({
    where: {
      OR: [
        { destination: { contains: search, mode: 'insensitive' } },
        { paymentType: { contains: search, mode: 'insensitive' } },
        {
          user: {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { email: { contains: search, mode: 'insensitive' } }
            ],
          }
        },
      ]
    },
  })
}
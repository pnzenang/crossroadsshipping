// 'use client';

// import * as React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaRegEye } from 'react-icons/fa6'
import { fetchAdminOrders } from '@/utils/actions'
import { formatCurrency, formatDate } from '@/utils/format'
import { FaEllipsis, FaPencil, FaTrashCan } from 'react-icons/fa6'
import Link from 'next/link'

async function SalesPage() {
  // const [position, setPosition] = React.useState('bottom');
  const orders = await fetchAdminOrders()

  return (
    <Table>
      <TableCaption>Total Orders : {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Reference Code</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Order Total</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Pickup fee</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Sender Telephone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const {
            products,
            orderTotal,
            tax,
            pickupFee,
            createdAt,
            email,
            packageReferenceCode,
            senderNumber,
          } = order

          return (
            <TableRow key={order.id}>
              <TableCell>{email}</TableCell>
              <TableCell>{packageReferenceCode}</TableCell>
              <TableCell>{products}</TableCell>
              <TableCell>{formatCurrency(orderTotal)}</TableCell>
              <TableCell>{formatCurrency(tax)}</TableCell>
              <TableCell>{formatCurrency(pickupFee)}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
              <TableCell>{senderNumber}</TableCell>
              <TableCell>
                <Link href='/order'>
                  <FaRegEye />
                </Link>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
export default SalesPage

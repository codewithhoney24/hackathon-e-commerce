export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'userId',
            type: 'string',
            title: 'User ID',
        },
        {
            name: 'customerName',
            type: 'string',
            title: 'Customer Name',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'totalPrice',
            type: 'number',
            title: 'Total Price',
        },
        {
            name: 'items',
            type: 'array',
            title: 'Items',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'productId', type: 'string' },
                        { name: 'name', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'imageUrl', type: 'string' },
                        { name: 'selectedColor', type: 'string' }
                    ]
                }
            ]
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Processing', value: 'processing' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' }
                ]
            },
            initialValue: 'pending'
        },
        {
            name: 'createdAt',
            type: 'datetime',
            title: 'Created At',
            initialValue: (new Date()).toISOString()
        }
    ]
}
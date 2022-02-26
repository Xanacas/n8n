import {
    INodeProperties,
    INodePropertyOptions,
    INodePropertyCollection

} from 'n8n-workflow';


export const productOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'product',
				],
			},
		},
		options: [
			{
				name: 'Create Product',
				value: 'create',
				description: 'Create new Product',
            },
            {
                name: 'Update Product',
                value: 'update',
                description: 'Create new Product',
            }, {
                name: 'List Products',
                value: 'list'
            }, {
                name: 'Get Product',
                value: 'get'
            }, {
                name: 'Delete / Archive Product',
                value: 'delete'
            } 
		],
		default: 'create',
		description: 'The operation to perform.',
	},
];

export const productFields: INodeProperties[] = [


	{
        displayName: 'ProductId',
        name: 'productId',
        type: 'string',
        required: true,
		displayOptions: {
			show: {
				resource: [
					'product',
				],
				operation: [
					'update', 'get'
				],
			},
		},
		default: '',
		description: `Enter Hubspot ProductId.`,
    }, {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    }, {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    },
    {
        displayName: 'Price',
        name: 'price',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    },
    {
        displayName: 'Recurring Billing Frequency',
        name: 'recurringbillingfrequency',
        type: 'options',
        options: [
            { name: 'Monthly', value: 'monthly' },
            { name: 'annually', value: 'annually' },
            { name: 'quarterly', value: 'quarterly' },
            { name: 'per_six_months', value: 'per_six_months' },
            { name: 'per_two_years', value: 'per_two_years' },
            { name: 'per_three_years', value: 'per_three_years' },

        ],
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    },
	{
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['list'],
            }
        },
        default: 10
    },
    {
        displayName: 'Paging.Next.After',
        name: 'after',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['list'],
            }
        },
        default: ''
    },
];

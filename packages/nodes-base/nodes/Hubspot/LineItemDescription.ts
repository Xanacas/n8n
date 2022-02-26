import {
    INodeProperties,
    INodePropertyOptions,
    INodePropertyCollection

} from 'n8n-workflow';


export const lineItemOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'lineItem',
				],
			},
		},
		options: [
			{
				name: 'Create LineItem',
				value: 'create',
				description: 'Create new LineItem',
            },
            {
                name: 'Update LineItem',
                value: 'update',
                description: 'Create new LineItem',
            }, {
                name: 'List LineItems',
                value: 'list'
            }, {
                name: 'Get LineItem',
                value: 'get'
            }, 
		],
		default: 'create',
		description: 'The operation to perform.',
	},
];

export const lineItemFields: INodeProperties[] = [

	/* -------------------------------------------------------------------------- */
	/*                                form:submit                                 */
	/* -------------------------------------------------------------------------- */
	{
        displayName: 'LineItemId',
        name: 'lineItemId',
        type: 'string',
        required: true,
		displayOptions: {
			show: {
				resource: [
					'lineItem',
				],
				operation: [
					'update', 'get'
				],
			},
		},
		default: '',
		description: `Enter Hubspot LineItemId.`,
    }, {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['lineItem'],
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
                resource: ['lineItem'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    },
    {
        displayName: 'Quantity',
        name: 'quantity',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['lineItem'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    },
    {
        displayName: 'ProductId',
        name: 'hs_product_id',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getProducts',
        },
        displayOptions: {
            show: {
                resource: ['lineItem'],
                operation: ['create', 'update'],
            }
        },
        default: ''
    },
    {
        displayName: 'Recurring Billing Period',
        name: 'hs_recurring_billing_period',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['lineItem'],
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
                resource: ['lineItem'],
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
                resource: ['lineItem'],
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
                resource: ['lineItem'],
                operation: ['list'],
            }
        },
        default: ''
    },
];

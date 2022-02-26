import {
    INodeProperties,
    INodePropertyOptions,
    INodePropertyCollection

} from 'n8n-workflow';

export const objectTypes: Array<INodePropertyOptions> = [{
        name: 'Contact',
        value: 'contact',
    },
    {
        name: 'Deal',
        value: 'deal',
    },
    {
        name: 'Company',
        value: 'company',
    },
    {
        name: 'Product',
        value: 'product',
    },
    {
        name: 'Ticket',
        value: 'ticket',
    },
    {
        name: 'Line Item',
        value: 'line_item'
    },
]

export const associationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'association',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create new association',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
];

export const associationFields: INodeProperties[] = [

	/* -------------------------------------------------------------------------- */
	/*                                form:submit                                 */
	/* -------------------------------------------------------------------------- */
	{
        displayName: 'fromObjectType',
        name: 'fromObjectType',
        type: 'options',
        options: objectTypes,
		required: true,
		displayOptions: {
			show: {
				resource: [
					'association',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: `Chose first ObjectType.`,
    },
    {
        displayName: 'ObjectId1',
        name: 'objectId1',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'association',
                ],
                operation: [
                    'create',
                ],
            },
        },
        default: '',
        description: `Enter first ObjectId.`,
    },
    {
        displayName: 'toObjectType',
        name: 'toObjectType',
        type: 'options',
        options: objectTypes,
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'association',
                ],
                operation: [
                    'create',
                ],
            },
        },
        default: '',
        description: `Chose second ObjectType.`,
    },
    {
        displayName: 'ObjectId2',
        name: 'objectId2',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'association',
                ],
                operation: [
                    'create',
                ],
            },
        },
        default: '',
        description: `Enter second ObjectId.`,
    },

    {
        displayName: 'Association Type',
        name: 'associationType',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getAssociations',
            loadOptionsDependsOn: ['fromObjectType', 'toObjectType'],
        },
        displayOptions: {
            show: {
                resource: [
                    'association',
                ],
                operation: [
                    'create',
                ],
                fromObjectType: objectTypes.map(o => o.value),
                toObjectType: objectTypes.map(o => o.value)
                
            },
        },
        default: '',

    },
	
];

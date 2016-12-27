module.exports = {
	/**
	 * Accounts
	 */
	getBalance: {
		method: 'GET',
		path: '/api/accounts/getBalance',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getPublicKey: {
		method: 'GET',
		path: '/api/accounts/getPublicKey',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getAccount: {
		method: 'GET',
		path: '/api/accounts',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getDelegatesByAddress: {
		method: 'GET',
		path: '/api/accounts/delegates',
		params: {
			address: { type: 'string' }
		},
		paginated: true
	},
	/**
	 * Loader
	 */
	getLoadingStatus: {
		method: 'GET',
		path: '/api/loader/status',
		params: {},
		paginated: false
	},
	getSyncStatus: {
		method: 'GET',
		path: '/api/loader/status/sync',
		params: {},
		paginated: false
	},
	getBlockReceiptStatus: {
		method: 'GET',
		path: '/api/loader/status/ping',
		params: {},
		paginated: false
	},
	/**
	 * Transactions
	 */
	getTransactions: {
		method: 'GET',
		path: '/api/transactions',
		params: {
			blockId: { type: 'string' },
			senderId: { type: 'string' },
			recipientId: { type: 'string' }
		},
		paginated: true,
        paginatedResult: 'transactions'
	},
	getTransaction: {
		method: 'GET',
		path: '/api/transactions/get',
		params: {
            id: { type: 'String' }
        },
		paginated: false
	},
	/**
	 * Peers
	 */
	getPeersList: {
		method: 'GET',
		path: '/api/peers',
		params: {},
		paginated: true
	},
};
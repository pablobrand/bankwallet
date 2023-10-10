import {
	EthersAdapter,
	SafeAccountConfig,
	SafeFactory
} from '@safe-global/protocol-kit'

import {
	ethers
} from 'ethers'

import {
	useAccount,
	useProvider,
	useSigner
} from 'wagmi';

export const getSafeSdk = async () => {
	const {
		data: signer
	} = useSigner();
	const provider = useProvider();
	const {
		address
	} = useAccount();

	if (!address) {
		return;
	}

	const ethAdapter = new EthersAdapter({
		ethers,
		signerOrProvider: signer ? signer : provider
	});

	const safeFactory = await SafeFactory.create({
		ethAdapter
	})

	const safeAccountConfig: SafeAccountConfig = {
		owners: [address],
		threshold: 1,
	}

	const safeSdk = await safeFactory.deploySafe({
		safeAccountConfig
	})

	return safeSdk;
}
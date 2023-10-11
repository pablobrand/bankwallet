import {EthersAdapter,SafeAccountConfig,SafeFactory} from '@safe-global/protocol-kit'
import {ethers} from 'ethers';

let safeSdk = null;

export const getSafeSdk = async (provider,signer,address) => {
	if (!address || !signer) {
		return;
	}
	if(safeSdk){
		return safeSdk;
	}

	const ethAdapter = new EthersAdapter({
		ethers,
		signerOrProvider: signer ? signer : provider
	});

	const safeFactory = await SafeFactory.create({
		ethAdapter
	})

	const safeAccountConfig:SafeAccountConfig = {
		owners: [address],
		threshold: 1,
	}

	safeSdk = await safeFactory.deploySafe({
		safeAccountConfig
	})

	return safeSdk;
}
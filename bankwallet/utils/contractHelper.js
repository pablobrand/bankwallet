import {
	getSafeSdk
} from "../safeWalletLogic/safeInit";

export const onConnect = async () => {
	let signer = null;
	let provider;
	let addr;
	try {
		if (window.ethereum == null) {
			console.log("MetaMask not installed; using read-only defaults");
			return;
		}
		provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);
		signer = provider.getSigner();
		addr = await signer.getAddress();
		console.log(addr);
		let sdk = await getSafeSdk(provider, signer, addr);
		console.log('Connection Successful! ... SDK : ',sdk);
	} catch (error) {
		console.log(error);
	}
	return addr;
};

export const getProvider = async () => {
	let provider;
	if (window.ethereum == null) {
		console.log("MetaMask not installed; using read-only defaults");
		return;
	}
	provider = new ethers.providers.Web3Provider(window.ethereum);
	return provider;
};

export const getSigner = async () => {
	let signer = null;
	let provider = await getProvider();
	try {
		await provider.send("eth_requestAccounts", []);
		signer = provider.getSigner();
	} catch (error) {
		console.log(error);
	}
	return signer;
};

// export const getContractWithProvider = async (contractAddress, contractABI) => {
// 	const provider = await getProvider();
// 	let contract = new ethers.Contract(contractAddress, contractABI, provider);
// 	return contract;
// };

// export const getContractWithSigner = async () => {
// 	const signer = await getSigner();
// 	let contract = new Contract(contractAddress, contractABI, signer);
// 	return contract;
// };
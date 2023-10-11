import { atom } from 'recoil';

export const walletAddrAtom = atom({
    key: 'walletAddr', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
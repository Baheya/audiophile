import Head from 'next/head';
import Image from 'next/image';
import { RadioButton } from '../components/RadioButton';

export default function Home() {
  return (
    <>
      <RadioButton
        label="e-Money"
        htmlFor="eMoney"
        id="eMoney"
        name="payment"
      />
      <RadioButton label="Wallet" htmlFor="wallet" id="wallet" name="payment" />
    </>
  );
}

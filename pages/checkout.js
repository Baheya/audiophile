import styled from 'styled-components';

import { ClientOnly } from '@components/ClientOnly';
import { ProductSummary } from '@components/ProductSummary';

export default function Checkout() {
  return (
    <PageWrapper>
      <Card>
        <CheckoutTitle>Checkout</CheckoutTitle>
        <Section>
          <SectionTitle>Billing Details</SectionTitle>
          <Field>
            <Label>Name</Label>
            <Input placeholder="Alexei Ward" />
          </Field>
          <Field>
            <Label>Email Address</Label>
            <Input placeholder="alexei@mail.com" />
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Input placeholder="+1 202-555-0136" />
          </Field>
        </Section>
        <Section>
          <SectionTitle>Shipping Info</SectionTitle>
          <Field>
            <Label>Your Address</Label>
            <Input placeholder="1137 Williams Avenue" />
          </Field>
          <Field>
            <Label>ZIP Code</Label>
            <Input placeholder="10001" />
          </Field>
          <Field>
            <Label>City</Label>
            <Input placeholder="New York" />
          </Field>
          <Field>
            <Label>Country</Label>
            <Input placeholder="United States" />
          </Field>
        </Section>
        <Section>
          <SectionTitle>Payment Details</SectionTitle>
          <Label as="p">Payment Method</Label>
          <RadioInputWrapper>
            <Input value="e-Money" type="radio" name="payment" id="digital" />
            <Label htmlFor="e-Money">e-Money</Label>
          </RadioInputWrapper>

          <RadioInputWrapper>
            <Input
              value="Cash on Delivery"
              type="radio"
              name="payment"
              id="cash"
            />
            <Label htmlFor="cash">Cash on Delivery</Label>
          </RadioInputWrapper>

          <Field>
            <Label>e-Money Number</Label>
            <Input placeholder="238521993" />
          </Field>
          <Field>
            <Label>e-Money Pin</Label>
            <Input placeholder="6891" />
          </Field>
        </Section>
      </Card>
      <ClientOnly>
        <ProductSummary />
      </ClientOnly>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  display: grid;
  grid-template-columns: clamp(1.5rem, 8%, 18rem) 1fr clamp(1.5rem, 8%, 18rem);
  gap: 25px 0;
  background-color: #f2f2f2;

  & > * {
    grid-column: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-template-columns: clamp(1.5rem, 8%, 18rem) 1fr 1fr clamp(
        1.5rem,
        8%,
        18rem
      );
    gap: 2rem;

    & > :nth-child(1) {
      grid-column: 2 / 3;
    }
    & > :nth-child(2) {
      grid-column: 3 / 4;
    }
  }
`;

const Card = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 7px;
  background-color: #fff;
  padding: 1.5rem;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  display: block;

  color: #000000;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  value: props.value,
  type: props.type,
  name: props.name,
  id: props.id,
}))`
  border: 1px solid var(--grey-400, #cfcfcf);
  border-radius: 8px;
  height: 56px;
  padding: 0 1.5rem;
  accent-color: var(--orange-200, #d87d4a);
  width: ${(props) => (props.type === 'radio' ? 'auto' : '100%')};
`;

const CheckoutTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;

const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;

  color: var(--orange-200, #d87d4a);
  grid-column: 1 / -1;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &:nth-child(3) > :nth-child(2),
    &:nth-child(4) > :nth-child(2) {
      grid-column: 1 / -1;
    }
  }
`;

const RadioInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: start;
  gap: 0.4rem;
  border: 1px solid var(--grey-400, #cfcfcf);
  border-radius: 8px;
  height: 56px;
  padding: 0 1.5rem;
  accent-color: var(--orange-200, #d87d4a);
`;

const Field = styled.div``;

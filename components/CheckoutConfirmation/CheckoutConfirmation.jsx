import { CartItem } from '@components/Cart/CartItem/CartItem';
import { Modal } from '@components/Modal';
import { Price } from '@components/Price';
import { ProductButton } from '@components/ProductButton';
import { useStickyState } from 'hooks';
import Link from 'next/link';
import styled from 'styled-components';

export function CheckoutConfirmation({
  onClose,
  cartPreview,
  cartLength,
  total,
}) {
  return (
    <Modal className="confirmation" isOpen onClose={onClose} isDismissable>
      <Title>Thank you for your order</Title>
      <p>You will receive an e-mail confirmation shortly</p>
      <Card>
        <CardBody>
          <CartItem
            name={cartPreview.name}
            price={cartPreview.price}
            quantity={cartPreview.quantity}
            image={cartPreview.thumbnail}
            readOnly
          />
          {cartLength > 1 && (
            <>
              <Divider />
              <FooterText>
                and {cartLength - 1} other item{cartLength === 1 ? 's' : ''}{' '}
              </FooterText>
            </>
          )}
        </CardBody>
        <CardFooter className="card-footer">
          <PriceLabel>Grand Total</PriceLabel>
          <Price amount={total} />
        </CardFooter>
      </Card>
      <BackButton variant="primary">Back to Home</BackButton>
    </Modal>
  );
}

const Title = styled.h2`
  font-size: 32px;
  line-height: 36px;
  /* or 112% */

  letter-spacing: 1.14286px;
  text-transform: uppercase;

  color: #000000;
`;

const Card = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const CardBody = styled.div`
  background-color: var(--grey-300, #f1f1f1);
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 1.5rem;

  @media (min-width: 768px) {
    width: 70%;
    border-bottom-left-radius: inherit;
    border-top-right-radius: 0;
  }
`;

const FooterText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  text-align: center;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const CardFooter = styled.div`
  background-color: #000;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 1.5rem;

  @media (min-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: inherit;
  }
`;

const Divider = styled.hr`
  height: 1px;
  width: 100%;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.3;
  margin: 0.5rem 0;
`;

const PriceLabel = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-transform: uppercase;
  /* identical to box height, or 167% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const BackButton = styled(ProductButton)`
  width: 100%;
`;

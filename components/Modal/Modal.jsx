import { useOverlayTriggerState } from '@react-stately/overlays';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useButton } from '@react-aria/button';
import { useRef } from 'react';
import styled from 'styled-components';

export function Modal(props) {
  let { title, action, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = useRef();
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      className={props.className}
      style={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)',
      }}
      {...underlayProps}
    >
      <FocusScope contain restoreFocus autoFocus>
        <Overlay {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
          {action ? (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 {...titleProps} style={{ marginTop: 0 }}>
                {title}
              </h3>
              {action}
            </div>
          ) : (
            <h3 {...titleProps} style={{ marginTop: 0 }}>
              {title}
            </h3>
          )}

          {children}
        </Overlay>
      </FocusScope>
    </div>
  );
}

export const Overlay = styled.div`
  background: white;
  color: black;
  padding: 30px;
  border-radius: 7px;

  .cart & {
    min-width: 330px;
    max-width: 380px;
    width: 100%;
    margin-left: auto;
    margin-right: clamp(1.5rem, 8%, 18rem);
    margin-top: 15%;

    @media (min-width: 768px) {
      margin-top: 5%;
    }
  }
`;

import styled from 'styled-components';

import { Icon } from '../Icon';

const ChevronRightStyles = styled(Icon)`
  width: 20px;
  height: auto;
`;

export const ChevronRight = ({ className }) => {
  return (
    <ChevronRightStyles className={className} viewBox="0 0 100 125">
      <path
        fill="currentColor"
        d="M68.232233,61.767767 C69.2085438,62.7440777 70.7914562,62.7440777 71.767767,61.767767 C72.7440777,60.7914562 72.7440777,59.2085438 71.767767,58.232233 L51.767767,38.232233 C50.7914562,37.2559223 49.2085438,37.2559223 48.232233,38.232233 L28.232233,58.232233 C27.2559223,59.2085438 27.2559223,60.7914562 28.232233,61.767767 C29.2085438,62.7440777 30.7914562,62.7440777 31.767767,61.767767 L49.9997921,43.5357418 L68.232233,61.767767 Z"
        transform="translate(50.000000, 50.000000) rotate(90.000000) translate(-50.000000, -50.000000) "
      />
    </ChevronRightStyles>
  );
};

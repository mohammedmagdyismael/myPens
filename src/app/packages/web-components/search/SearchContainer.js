import { Flex } from 'grid-styled';

import { COLORS, COLORS_VALUES } from '../base/Colors';

const SearchContainer = Flex.extend`
  border-radius: 4px;
  background-color: ${COLORS_VALUES[COLORS.PAGE_BACKGROUND]};
  height: 34px;
  ${props => (props.extendSearchStyle ? props.extendSearchStyle : '')};
`;

export default SearchContainer;

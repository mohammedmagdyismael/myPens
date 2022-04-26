import styled from 'styled-components';

export const FieldContainer = styled.div`
  border: ${props => (props.isValid ? '1px solid #e3e6ea' : '1px solid #db3226')};
  width: 100%;
  // height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 16px;
  // margin: 4px 0px;
  cursor: pointer;
  border-radius: 8px;
  ${props => (props.extendDropDownStyle ? props.extendDropDownStyle : '')};
`;

export const FieldLabel = styled.div`
  color: #9c9c9c;
  font-size: ${props => (props.isFocused ? '12px' : '16px')};
  line-height: ${props => (props.isFocused ? '18px' : '40px')};
`;
export const FieldValue = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #484848;
`;

export const SearchInput = styled.textarea`
  width: 100%;
  border: unset;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 8px;
  resize: none;
  height: 70px;
  &:focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9c9c9c;
    border-radius: 15px;
  }
`;

export const FieldTag = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #484848;
`;

export const ValueTagContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ValueTagContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 10px;
  ${props => props.preview && 'justify-content: start;'};
`;

export const DisableOverLay = styled.div`
  ${props => (props.extendDropDownStyle ? props.extendDropDownStyle : '')};
  width: 100%;
  min-height: 56px;
  border: 1px solid #e3e6ea;
  border-radius: 8px;
  background-color: #f1f4f69c;
  position: absolute;
  display: ${props => (!props.isDisabled ? 'none' : 'block')};
`;

export const IsRequiredNote = styled.p`
  display: inline-flex;
  margin: 0px 3px;
  color: #db3226;
`;

export const ImagePreview = styled.img`
  object-fit: cover;
  width: 30px;
  height: 30px;
`;

export const Text = styled.p`
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
`;

export const FileViewOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: rgba(11, 11, 11, 0.8);
  display: ${props => (props.isFileViewOverlay ? 'flex' : 'none')};
`;

export const CancelIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  &:before {
    content: 'X';
    font-size: 21px;
    color: #fff;
  }
  cursor: pointer;
`;

export const FileViewItem = styled.img`
  width: 100%;
  max-width: 900px;
  max-height: 700px;
`;

export const AttatchContainer = styled.div`
  display: 'flex';
  align-items: 'unset';
`;

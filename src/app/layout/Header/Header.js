import React from 'react';
import { Container, Wrapper, HeaderTitleContainer, HeaderTitleWrapper, Title, extendContactButtonStyle } from './Header.style';
import Tabs from './Tabs';

const Header = ({ ...props }) => {
    return (
        <Container>
            <Wrapper>
                <HeaderTitleContainer>
                    <HeaderTitleWrapper>
                        <Title>
                            Mohammed Magdy Ismael
                        </Title>
                    </HeaderTitleWrapper>
                </HeaderTitleContainer>
                <Tabs { ...props } />
                <div style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Header;

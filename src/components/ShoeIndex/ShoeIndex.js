import React from "react"
import styled from "styled-components/macro"

import { WEIGHTS } from "../../constants"

import Breadcrumbs from "../Breadcrumbs"
import Select from "../Select"
import Spacer from "../Spacer"
import ShoeSidebar from "../ShoeSidebar"
import ShoeGrid from "../ShoeGrid"

const ShoeIndex = ({ sortId, setSortId }) => {
    return (
        <Wrapper>
            <MainColumn>
                <Header>
                    <Title>Running</Title>
                    <Select label="Sort" value={sortId} onChange={(ev) => setSortId(ev.target.value)}>
                        <option value="newest">Newest Releases</option>
                        <option value="price">Price</option>
                    </Select>
                </Header>
                <Spacer size={34} />
                <ShoeGrid />
            </MainColumn>
            <LeftColumn>
                <Breadcrumbs>
                    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
                </Breadcrumbs>
                <Spacer size={42} />
                <ShoeSidebar />
            </LeftColumn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    gap: 32px;
    width: 1378px;
    height: 876px;
`

const LeftColumn = styled.div``

const MainColumn = styled.div``

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-right: 37px;
`

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.medium};
`

export default ShoeIndex
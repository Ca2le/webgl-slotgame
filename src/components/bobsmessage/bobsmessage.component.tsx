import React from 'react'
import { Coin, ContentContainer, FancyButton, Header, Img, ImgContainer, MSG_Container, P, PContainer, SymbolValueContainer, Value, ValuesContainer } from './bobsmessage.styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/reducer.types'
import paylines from '/assets/PAYLINES.png'
import img1 from '/assets/TEN__.png'
import img2 from '/assets/J__.png'
import img3 from '/assets/Q__.png'
import img4 from '/assets/K__.png'
import img5 from '/assets/A__.png'
import img6 from '/assets/WILD__.png'
import img7 from '/assets/BONUS.png'
import coin from '/assets/GOLD.png'

export function BobsMessage() {
    const { toggle } = useSelector((state: RootState) => state.bobsMsg)
    const dispatch = useDispatch()
    const symbols = [{ img: img1, price: "0.5" }, { img: img2, price: "1" }, { img: img3, price: "1.5" }, { img: img4, price: "2" }, { img: img5, price: "2.5" }, { img: img6, price: "9" }, { img: img7, price: "0" }]
    return (
        <MSG_Container toggle={toggle}>
            <Header>Welcome to Bob's Blacksmith Video Slot Quest</Header>
            <ContentContainer>
                <PContainer>
                    <P>🔸 This game features 9 paylines that determine potential winning combinations.</P>
                    <P>🔸 To win, you must land matching symbols on a payline from left to right.</P>
                    <P>🔸 Only the highest win on each payline will count towards your payout.</P>
                    <P>🔸 To collect a prize on each line, you'll need to have at least 3 of the same symbol.</P>
                </PContainer>
                <ImgContainer>
                    <img style={{ width: "100%" }} src={paylines} alt="paylines" />
                </ImgContainer>
            </ContentContainer>
            <ContentContainer>
                <PContainer>
                    <P>🔸 The minimum bet is 1 coin and the maximum bet is 2 coins.</P>
                    <P>🔸 Each symbol has diffrent values, see below.</P>
                </PContainer>
                <ValuesContainer>
                    {symbols.map((e, i) => {
                        return (
                            <SymbolValueContainer>
                                <Img src={e.img} />
                                <Value>{`= ${e.price}`}</Value>
                                <Coin src={coin} />
                            </SymbolValueContainer>
                        )
                    })}
                </ValuesContainer>
            </ContentContainer>
            <ContentContainer>
                <PContainer>
                    <P>🔸 A 'Wild' symbol is a special symbol that can substitute for any other symbol to form a winning payline.<br />🔸 If a payline only contains 'Wild' symbols, it will generate a payout based on the 'Wild' symbol value.</P>
                </PContainer>
                <img src={img6} />
            </ContentContainer>
            <ContentContainer>
                <PContainer>
                    <P>Good luck and have fun!</P>
                </PContainer>
            </ContentContainer>
            <FancyButton onClick={(e) => {
                dispatch({ type: "TURN_OFF_BOBSMSG" })
            }}>Let's Play!</FancyButton>

        </MSG_Container>
    )
}

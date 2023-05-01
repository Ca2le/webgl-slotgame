import { useSelector } from "react-redux"
import { Icons } from "../../types/icon.types"
import { Icon } from "../icon/icon.component"
import { BalanceBoard, BalanceInfo, ControlBarContainer, GameConfig, Signature } from "./controlbar.styles"
import { RootState } from "../../types/reducer.types"

export function ControlBar() {
    const { win, coinValue, coins, bet } = useSelector((state: RootState) => state.gameEconomy)
    return (
        <ControlBarContainer >
            <GameConfig>
                <Icon id="config_icon" path={Icons.config} />
                <Icon id="audio_on_icon" path={Icons.audio_on} />
                <Icon id="info_icon" path={Icons.info} />
            </GameConfig>
            <BalanceBoard>
                <BalanceInfo>{`Balance: $${coins}`}</BalanceInfo>
                <BalanceInfo>{`Bet: $${bet}`}</BalanceInfo>
                <BalanceInfo>{`Win: $${win}`}</BalanceInfo>
            </BalanceBoard>
            <Signature>Created by Ca2le</Signature>
        </ControlBarContainer>
    )
}

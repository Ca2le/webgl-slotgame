import { Icons } from "../../types/icon.types"
import { Icon } from "../icon/icon.component"
import { BalanceBoard, BalanceInfo, ControlBarContainer, GameConfig, Signature } from "./controlbar.styles"

export function ControlBar() {

    const balance = "1,000.00"
    const bet = "0.2"
    const win = "0.00"
    return (
        <ControlBarContainer >
            <GameConfig>
                <Icon id="config_icon" path={Icons.config} />
                <Icon id="audio_on_icon" path={Icons.audio_on} />
                <Icon id="info_icon" path={Icons.info} />
            </GameConfig>
            <BalanceBoard>
               <BalanceInfo>{`Balance: $${balance}`}</BalanceInfo>
                <BalanceInfo>{`Bet: $${bet}`}</BalanceInfo>
                <BalanceInfo>{`Win: $${win}`}</BalanceInfo>
            </BalanceBoard>
            <Signature>Created by Ca2le</Signature>
        </ControlBarContainer>
    )
}

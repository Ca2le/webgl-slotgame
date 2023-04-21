import { Assets, Texture } from 'pixi.js';

import asset_1_img from "../../assets/10.png"
import asset_2_img from "../../assets/J.png"
import asset_3_img from "../../assets/Q.png"
import asset_4_img from "../../assets/K.png"
import asset_5_img from "../../assets/A.png"
import asset_6_img from "../../assets/SCATTER.png"
import asset_7_img from "../../assets/WILD.png"
import asset_8_img from "../../assets/BONUS.png"
import asset_9_img from "../../assets/BUTTON.png"


export async function loadAssets() {
   try {
      await Assets.load<Texture>(asset_1_img);
      await Assets.load<Texture>(asset_2_img);
      await Assets.load<Texture>(asset_3_img);
      await Assets.load<Texture>(asset_4_img);
      await Assets.load<Texture>(asset_5_img);
      await Assets.load<Texture>(asset_6_img);
      await Assets.load<Texture>(asset_7_img);
      await Assets.load<Texture>(asset_8_img);
      await Assets.load<Texture>(asset_9_img);
      return true

   } catch (err) {
      console.error("🧟Failed to load assets: ", err);
   }
}

import { Assets, Texture } from 'pixi.js';

import asset_1_img from "../../assets/asset_1.png"
import asset_2_img from "../../assets/asset_2.png"
import asset_3_img from "../../assets/asset_3.png"
import asset_4_img from "../../assets/asset_4.png"
import asset_5_img from "../../assets/asset_5.png"
import asset_6_img from "../../assets/asset_6.png"
import asset_7_img from "../../assets/asset_7.png"
import asset_8_img from "../../assets/asset_8.png"


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
      return true

   } catch (err) {
      console.error("🧟Failed to load assets: ", err);
   }
}

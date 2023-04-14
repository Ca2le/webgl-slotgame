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
      const asset_1 = await Assets.load<Texture>(asset_1_img);
      const asset_2 = await Assets.load<Texture>(asset_2_img);
      const asset_3 = await Assets.load<Texture>(asset_3_img);
      const asset_4 = await Assets.load<Texture>(asset_4_img);
      const asset_5 = await Assets.load<Texture>(asset_5_img);
      const asset_6 = await Assets.load<Texture>(asset_6_img);
      const asset_7 = await Assets.load<Texture>(asset_7_img);
      const asset_8 = await Assets.load<Texture>(asset_8_img);

      const assets = [asset_1, asset_2, asset_3, asset_4, asset_5, asset_6, asset_7, asset_8,]

      return assets
   } catch (err) {
      console.error("🧟Failed to load assets: ", err);
   }
}

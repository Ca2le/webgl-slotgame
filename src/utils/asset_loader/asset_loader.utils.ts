import { Assets, BitmapFont, Loader, Texture } from 'pixi.js';

import asset_1_img from "../../assets/TEN.png"
import asset_2_img from "../../assets/J.png"
import asset_3_img from "../../assets/Q.png"
import asset_4_img from "../../assets/K.png"
import asset_5_img from "../../assets/A.png"
import asset_6_img from "../../assets/SCATTER.png"
import asset_7_img from "../../assets/WILD.png"
import asset_8_img from "../../assets/BONUS.png"
import asset_10_img from "../../assets/TEN__.png"
import asset_11_img from "../../assets/J__.png"
import asset_12_img from "../../assets/Q__.png"
import asset_13_img from "../../assets/K__.png"
import asset_14_img from "../../assets/A__.png"
import asset_15_img from "../../assets/WILD__.png"
import asset_16_img from "../../assets/BONUS__.png"
import asset_17_img from "../../assets/SCATTER__.png"
import asset_18_img from "../../assets/RADIANCE.png"
import asset_19_img from "../../assets/ANVIL_1.png"
import asset_20_img from "../../assets/ANVIL_2.png"
import asset_21_img from "../../assets/SHIELD.png"
import asset_22_img from "../../assets/BOARD.png"
import asset_23_img from "../../assets/DISPLAY.png"
import asset_24_img from "../../assets/SETTINGSDISPLAY.png"
import asset_25_img from "../../assets/INCREMENT.png"
import asset_26_img from "../../assets/DECREMENT.png"
import asset_27_img from "../../assets/GOLD.png"
import asset_28_img from "../../assets/BACKGROUND.png"




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
      await Assets.load<Texture>(asset_10_img);
      await Assets.load<Texture>(asset_11_img);
      await Assets.load<Texture>(asset_12_img);
      await Assets.load<Texture>(asset_13_img);
      await Assets.load<Texture>(asset_14_img);
      await Assets.load<Texture>(asset_15_img);
      await Assets.load<Texture>(asset_16_img);
      await Assets.load<Texture>(asset_17_img);
      await Assets.load<Texture>(asset_18_img);
      await Assets.load<Texture>(asset_19_img);
      await Assets.load<Texture>(asset_20_img);
      await Assets.load<Texture>(asset_21_img);
      await Assets.load<Texture>(asset_22_img);
      await Assets.load<Texture>(asset_23_img);
      await Assets.load<Texture>(asset_24_img);
      await Assets.load<Texture>(asset_25_img);
      await Assets.load<Texture>(asset_26_img);
      await Assets.load<Texture>(asset_27_img);
      await Assets.load<Texture>(asset_28_img);
      return true

   } catch (err) {
      console.error("🧟Failed to load assets: ", err);
   }
}

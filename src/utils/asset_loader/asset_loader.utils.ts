import { Assets, BitmapFont, Loader, Texture } from 'pixi.js';
import App from '../../App';
import { fontLoader } from './font_loader';

// import asset_1_img from "../../assets/TEN.png"
// import asset_2_img from "../../assets/J.png"
// import asset_3_img from "../../assets/Q.png"
// import asset_4_img from "../../assets/K.png"
// import asset_5_img from "../../assets/A.png"
// import asset_6_img from "../../assets/SCATTER.png"
// import asset_7_img from "../../assets/WILD.png"
// import asset_8_img from "../../assets/BONUS.png"
// import asset_10_img from "../../assets/TEN__.png"
// import asset_11_img from "../../assets/J__.png"
// import asset_12_img from "../../assets/Q__.png"
// import asset_13_img from "../../assets/K__.png"
// import asset_14_img from "../../assets/A__.png"
// import asset_15_img from "../../assets/WILD__.png"
// import asset_16_img from "../../assets/BONUS__.png"
// import asset_17_img from "../../assets/SCATTER__.png"
// import asset_18_img from "../../assets/RADIANCE.png"
// import asset_19_img from "../../assets/ANVIL_1.png"
// import asset_20_img from "../../assets/ANVIL_2.png"
// import asset_21_img from "../../assets/SHIELD.png"
// import asset_23_img from "../../assets/DISPLAY.png"
// import asset_24_img from "../../assets/SETTINGSDISPLAY.png"
// import asset_25_img from "../../assets/INCREMENT.png"
// import asset_26_img from "../../assets/DECREMENT.png"
// import asset_27_img from "../../assets/GOLD.png"
// import asset_28_img from "../../assets/BACKGROUND.png"

export async function loadAssets() {

   const asset_1_img = "./assets/TEN.png"
   const asset_2_img = "./assets/J.png"
   const asset_3_img = "./assets/Q.png"
   const asset_4_img = "./assets/K.png"
   const asset_5_img = "./assets/A.png"
   const asset_6_img = "./assets/SCATTER.png"
   const asset_7_img = "./assets/WILD.png"
   const asset_8_img = "./assets/TEN__.png"
   const asset_27_img = "./assets/BONUS.png"
   const asset_9_img = "./assets/J__.png"
   const asset_10_img = "./assets/Q__.png"
   const asset_11_img = "./assets/K__.png"
   const asset_12_img = "./assets/A__.png"
   const asset_13_img = "./assets/WILD__.png"
   const asset_14_img = "./assets/SCATTER__.png"
   const asset_15_img = "./assets/BONUS__.png"
   const asset_16_img = "./assets/RADIANCE.png"
   const asset_17_img = "./assets/ANVIL_1.png"
   const asset_18_img = "./assets/ANVIL_2.png"
   const asset_19_img = "./assets/SHIELD.png"
   const asset_20_img = "./assets/DISPLAY.png"
   const asset_21_img = "./assets/SETTINGSDISPLAY.png"
   const asset_23_img = "./assets/INCREMENT.png"
   const asset_24_img = "./assets/DECREMENT.png"
   const asset_25_img = "./assets/GOLD.png"
   const asset_26_img = "./assets/BACKGROUND.png"
   const asset_28_img = "./assets/HAMMER.png"
   const asset_29_img = "./assets/GOLD_0.png"
   const asset_30_img = "./assets/GOLD_1.png"
   const asset_31_img = "./assets/GOLD_2.png"
   const asset_32_img = "./assets/GOLD_3.png"
   const asset_33_img = "./assets/GOLD_4.png"
   const asset_34_img = "./assets/GOLD_5.png"
   const asset_35_img = "./assets/GOLD_6.png"
   const asset_36_img = "./assets/GOLD_7.png"
   const asset_37_img = "./assets/GOLD_8.png"
   const asset_38_img = "./assets/GOLD_9.png"
   const asset_39_img = "./assets/GLASS.png"
   const asset_40_img = "./assets/IRONFRAME.png"
   const asset_41_img = "./assets/LAVA.png"

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
      await Assets.load<Texture>(asset_23_img);
      await Assets.load<Texture>(asset_24_img);
      await Assets.load<Texture>(asset_25_img);
      await Assets.load<Texture>(asset_26_img);
      await Assets.load<Texture>(asset_27_img);
      await Assets.load<Texture>(asset_28_img);
      await Assets.load<Texture>(asset_29_img);
      await Assets.load<Texture>(asset_30_img);
      await Assets.load<Texture>(asset_31_img);
      await Assets.load<Texture>(asset_32_img);
      await Assets.load<Texture>(asset_33_img);
      await Assets.load<Texture>(asset_34_img);
      await Assets.load<Texture>(asset_35_img);
      await Assets.load<Texture>(asset_36_img);
      await Assets.load<Texture>(asset_37_img);
      await Assets.load<Texture>(asset_38_img);
      await Assets.load<Texture>(asset_39_img);
      await Assets.load<Texture>(asset_40_img);
      await Assets.load<Texture>(asset_41_img);
      return true

   } catch (err) {
      console.error("🧟Failed to load assets: ", err);
   }
}






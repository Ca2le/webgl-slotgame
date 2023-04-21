import { Result } from "../types/global.types";
import { GameStatus, generateResult } from "./slot_simulator";

export class NetworkHandler {
    private static networkDelay = 600

    public static getData(): Promise<GameStatus> {
        return NetworkHandler.makePromise(generateResult());
    }

    private static makePromise<T>(data: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            setTimeout(() => {
                if(data){
                    resolve(data)
                } else {
                    reject(new Error("404"))
                }
               
            }, NetworkHandler.networkDelay)
        });
    }
}

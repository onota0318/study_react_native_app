/**
 * AppConfig
 * 
 * @package Config
 * @since XXXX/XX/XX
 */
import Config, { NativeConfig } from "react-native-config";
import firebase from "@react-native-firebase/app";

/**
 * AppEnvironment
 * 環境変数
 */
export type AppEnvironment = "unittest" | "debud" | "staging" | "production";

/**
 * AppConfig
 * ※めんどいけど /config/XXX.config のpropertyを手動追加していく。
 * （react-native-configの型がanyなので、ここで型付けする）
 */
class AppConfig {

    ////////// ↓↓↓ここに追加↓↓↓ //////////

    /** @property {AppEnvironment} ENV 環境変数 */
    public readonly ENV: AppEnvironment = this.config.ENV;
    
    /** @property {string} Firebase Firebaseの設定周り */
    public readonly FIREBASE_APP_ID: string = this.config.FIREBASE_APP_ID;
    public readonly FIREBASE_API_KEY: string = this.config.FIREBASE_API_KEY;
    public readonly FIREBASE_PROJECT_ID: string = this.config.FIREBASE_PROJECT_ID;
    public readonly FIREBASE_AUTH_DOMAIN: string = this.config.FIREBASE_AUTH_DOMAIN;
    public readonly FIREBASE_DATABASE_URL: string = this.config.FIREBASE_DATABASE_URL;
    public readonly FIREBASE_STORAGE_BUCKET: string = this.config.FIREBASE_STORAGE_BUCKET;
    public readonly FIREBASE_MESSAGING_SENDER_ID: string = this.config.FIREBASE_MESSAGING_SENDER_ID;

    ////////// ↑↑↑ここに追加↑↑↑ //////////

    /**
     * constructor
     * 
     * @param {NativeConfig} config config
     */
    public constructor(private config: NativeConfig) {}

    /**
     * initializeする
     * @returns {void}
     */
    public initialize(): void {

        // firebase
        firebase.initializeApp({
            appId: this.FIREBASE_APP_ID,
            apiKey: this.FIREBASE_API_KEY,
            projectId: this.FIREBASE_PROJECT_ID,
            authDomain: this.FIREBASE_AUTH_DOMAIN,
            databaseURL: this.FIREBASE_DATABASE_URL,
            storageBucket: this.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: this.FIREBASE_MESSAGING_SENDER_ID,
        });
    }
}

// singleton
export default new AppConfig(Config);

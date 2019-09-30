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
    public readonly firebaseConfig = {
        appId: this.config.FIREBASE_APP_ID,
        apiKey: this.config.FIREBASE_API_KEY,
        projectId: this.config.FIREBASE_PROJECT_ID,
        authDomain: this.config.FIREBASE_AUTH_DOMAIN,
        databaseURL: this.config.FIREBASE_DATABASE_URL,
        storageBucket: this.config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: this.config.FIREBASE_MESSAGING_SENDER_ID,
    };

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
        // Androidの場合、Firebase App named '[DEFAULT]' already exists になる（なぜだ・・・）
        // next.jsのissue https://github.com/zeit/next.js/issues/1999
        if (firebase.apps.length <= 0) {
            firebase.initializeApp(this.firebaseConfig);
        }
    }
}

// singleton
export default new AppConfig(Config);

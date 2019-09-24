/**
 * ErrorBoundary
 * エラー共通
 * ただ子render内での例外を捕捉してloggingするだけの予定
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";

/**
 * ErrorBoundary
 */
class ErrorBoundary extends React.Component<any, {}> {

    /**
     * 捕捉する
     * 
     * @param error 
     * @param errorInfo 
     */
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // report error的ななにかを仕込む
        // console.log(JSON.stringify(errorInfo));
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        // 描画を崩したくないので子を返す
        return this.props.children;
    }
}

export default ErrorBoundary;

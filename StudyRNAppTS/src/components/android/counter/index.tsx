/**
 * iOS TOP Component
 * 
 * @since 2019/XX/XX
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "@Types/dispatch";
import { CounterValue } from "@Component/ios/counter/Value";
import { CounterButton } from "@Component/ios/counter/Button";
import { RootState } from "@Store/RootState";
import { addCountAction, resetCountAction } from "@Store/counter/CounterAction";

/**
 * props
 * 
 * @author hoge
 */
export interface CounterProps {
    /** 
     * {number} value
     */
    value: number;

    /** (Function) addCount 加算 */
    addCount?: (val: number) => void;

    /** (Function) reset リセット */
    reset?: () => void;

    dispatchAddCount: (value: number) => any;

    dispatchResetCount: () => any;
}

/**
 * カウンター
 * 
 * @param props CounterProps
 */
class Counter extends React.Component<CounterProps> {

    /**
     * shouldComponentUpdate
     * 
     * @param nextProps 
     * @param nextState 
     * @param nextContext 
     * 
     * @returns {boolean}
     */
    public shouldComponentUpdate(
        nextProps: Readonly<CounterProps>, 
        nextState: Readonly<{}>, 
        nextContext: any): boolean {
        
        // props.valueに変更がある時だけ更新
        return this.props.value !== nextProps.value;
    }

    /**
     * render
     */
    public render(): React.ReactNode {

        const pressedAddButton = () => {
            return () => {
                this.props.dispatchAddCount(1);
            };
        };
    
        const pressedDelButton = () => {
            return () => {
                this.props.dispatchAddCount(-1);
            };
        };
    
        const pressedResetButton = () => {
            return () => {
                this.props.dispatchResetCount();
            };
        };

        return (
            <View style={styles.container}>
                <CounterValue value={this.props.value} />
                <View style={styles.buttons}>
                    <CounterButton 
                        title="increment"
                        onPressEvent={pressedAddButton()}>
                    </CounterButton>
                    <CounterButton 
                        title="decrement"
                        onPressEvent={pressedDelButton()}>
                    </CounterButton>
                    <CounterButton 
                        title="reset"
                        onPressEvent={pressedResetButton()}>
                    </CounterButton>
                </View>
            </View>
        );        
    }
}

/**
 * style
 */
const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        flex: 0.2,
        flexDirection: "row",
    },
});

/**
 * mapStateToProps
 * @param {RootState} state 
 */
const mapStateToProps = (state: RootState) => ({ 
    ...state.counter,
});

/**
 * mapDispatchToProps
 * @param {Dispatch} dispatch 
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchAddCount(value: number): any {
        dispatch(addCountAction(value));
    },
    dispatchResetCount(): any {
        dispatch(resetCountAction());
    },
});

// 合★体
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

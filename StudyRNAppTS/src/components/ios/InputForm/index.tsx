/**
 * InputForm
 * InputForm
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Container, View, Text } from "native-base";
import { connect } from "react-redux";
import { Dispatch } from "@Types/dispatch";
import { RootState } from "@Store/RootState";
import TextInputParts from "@Component/ios/InputForm/TextInputParts";
import TextAreaParts from "@Component/ios/InputForm/TextAreaParts";
import SubmitButtonParts from "@Component/ios/InputForm/SubmitButtonParts";
import { registerAction } from "@Store/InputForm/InputFormAction";
import { InputFormState } from "@Store/InputForm/InputFormState";

/**
 * InputFormDispatchProps
 */
interface InputFormDispatchProps {
    onRegister: (id: string, imageUrl: string, body: string) => any;
}

/**
 * InputFormProps
 */
type InputFormProps = InputFormDispatchProps & InputFormState;

/**
 * InputForm
 */
class InputForm extends React.Component<InputFormProps> {

    /**
     * @property {} state
     */
    public state = {
        id: "",
        imageUrl: "",
        body: "",
    };

    /**
     * render
     * 
     * @returns {React.ReactNode} 
     */
    public render(): React.ReactNode {

        return (
            <Container style={ styles.container }>
                {/* id */}
                <View style={styles.wrap}>
                    {/* error */}
                    { this.props.errors !== undefined && this.props.errors.id !== undefined
                        ? <Text>{ this.props.errors.id }</Text> 
                        : null
                    }

                    <TextInputParts
                        placeholder="id"
                        value={ this.state.id }
                        onChangeText={ this.handleOnIdChange.bind(this) }
                    />
                </View>

                {/* image url */}
                <View style={styles.wrap}>
                    {/* error */}
                    { this.props.errors !== undefined && this.props.errors.imageUrl !== undefined
                        ? <Text>{ this.props.errors.imageUrl }</Text> 
                        : null
                    }

                    <TextInputParts
                        placeholder="image url"
                        value={ this.state.imageUrl }
                        onChangeText={ this.handleOnImageUrlChange.bind(this) }
                    />
                </View>

                {/* body */}
                <View style={styles.wrap}>
                    {/* error */}
                    { this.props.errors !== undefined && this.props.errors.body !== undefined
                        ? <Text>{ this.props.errors.body }</Text> 
                        : null
                    }

                    <TextAreaParts
                        placeholder="body"
                        value={ this.state.body }
                        onChangeText={ this.handleOnBodyChange.bind(this) }
                    />
                </View>
        
                {/* ボタン表示 or Spinner */}
                <View style={styles.wrap}>
                    { this.showLoadSpinnerOrButton(this.props.isLoading) }
                </View>
            </Container>
        );
    }

    /**
     * ぐるぐるかボタンを返す
     * 
     * @param isLoading 
     */
    private showLoadSpinnerOrButton = (isLoading: boolean = false) => {
        if (isLoading) {
            return <ActivityIndicator size="small" />;
        }
    
        return (
            <SubmitButtonParts 
                displayText={ "送信" }
                onPress={ this.handleOnSubmit.bind(this) }
            />
        );    
    }

    /**
     * onChangeのhandle
     * 
     * @param {string} id id
     */
    private handleOnIdChange(id: string): void {        
        this.setState({ id });
    }

    /**
     * onChangeのhandle
     * 
     * @param {string} imageUrl imageUrl
     */
    private handleOnImageUrlChange(imageUrl: string): void {
        this.setState({ imageUrl });
    }

    /**
     * onChangeのhandle
     * 
     * @param {string} body body
     */
    private handleOnBodyChange(body: string): void {
        this.setState({ body });
    }

    /**
     * submit
     */
    private handleOnSubmit(): void {
        const { id, imageUrl, body } = this.state;
        this.props.onRegister(id, imageUrl, body);
    }
}

/**
 * style
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignContent: "center",
    },
    wrap: {
        padding: 10,
    },
});

/**
 * mapStateToProps
 * @param {RootState} state 
 */
const mapStateToProps = (state: RootState) => ({ 
    ...state.inputForm,
});

/**
 * mapDispatchToProps
 * @param {Dispatch} dispatch 
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
    /**
     * 登録処理
     * @param {string} id id
     * @param {string} imageUrl 画像url
     * @param {string} body 本文
     */
    onRegister(id: string, imageUrl: string, body: string): any {
        dispatch(registerAction(id, imageUrl, body));
    },
});

// redux connect
export default connect(mapStateToProps, mapDispatchToProps)(InputForm);

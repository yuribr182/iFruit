import React, { Component } from "react";
import {
  Text,
  View,
  Alert,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import { Entypo } from "@expo/vector-icons";
import Button from "../../../../components/buttons/Button";
import LinkButton from "../../../../components/buttons/LinkButton";
import UnderlinePasswordInput from "../../../../components/textinputs/UnderlinePasswordInput";
import UnderlineTextInput from "../../../../components/textinputs/UnderlineTextInput";
import * as UserActions from "../../actions";

import styles from "./styles";

import Colors from "../../../../theme/colors";

const PLACEHOLDER_TEXT_COLOR = "rgba(0, 0, 0, 0.4)";
const INPUT_TEXT_COLOR = "rgba(0, 0, 0, 0.87)";
const INPUT_BORDER_COLOR = "rgba(0, 0, 0, 0.2)";
const INPUT_FOCUSED_BORDER_COLOR = "#000";
const IOS = Platform.OS === "ios";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      senha: "",
      emailFocused: false,
      senhaFocused: false,
      secureTextEntry: true,
      modalVisible: false,
      nome: "",
      emailCadastro: "",
      telefone: "",
      senhaIsShow: true,
      senhaconfirm: "",
      senhaconfirmIsShow: true,
    };

    this.auth = this.auth.bind(this);
    this.redirect = this.redirect.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    const { usuario } = this.props;
    if (usuario.hash) return this.props.navigation.replace("Menu");
  }

  isEmailValid = (email) => {
    let pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };

  register() {
    const { nome, emailCadastro, senhaCadastro, senhaconfirm, telefone } =
      this.state;
    const { userRegister } = this.props.userActions;

    if (!nome) return Alert.alert("Informe seu nome");
    if (!emailCadastro) return Alert.alert("Informe seu email");
    if (!this.isEmailValid(emailCadastro))
      return Alert.alert("Informe um email válido");
    if (!telefone) return Alert.alert("Informe seu celular");
    if (telefone.length < 15) return Alert.alert("Informe o celular completo");
    if (!senhaCadastro) return Alert.alert("Informe sua senha");
    if (senhaCadastro != senhaconfirm)
      return Alert.alert("Senhas não conferem");

    userRegister(
      {
        nome: nome,
        email: emailCadastro,
        senha: senhaCadastro,
        telefone: telefone,
      },
      () => {
        this.setState({
          modalVisible: false,
        });
        this.redirect();
      }
    );
  }

  auth() {
    const { userAuth } = this.props.userActions;
    const { email, senha } = this.state;

    if (!email) return Alert.alert("Informe seu e-mail");
    if (!this.isEmailValid(email))
      return Alert.alert("Informe um email válido");
    if (!senha) return Alert.alert("Informe sua senha");

    this.setState(
      {
        emailFocused: false,
        phoneFocused: false,
        passwordFocused: false,
      },
      () => {
        userAuth(
          {
            email: email,
            senha: senha,
          },
          (data) => {
            this.redirect();
          }
        );
      }
    );
  }

  redirect() {
    return this.props.navigation.replace("HomeNavigator");
  }

  emailFocus = () => {
    this.setState({
      emailFocused: true,
      senhaFocused: false,
    });
  };

  senhaFocus = () => {
    this.setState({
      senhaFocused: true,
      emailFocused: false,
    });
  };

  onTogglePress = () => {
    const { secureTextEntry } = this.state;
    this.setState({
      secureTextEntry: !secureTextEntry,
    });
  };

  focusOn = (nextFiled) => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  render() {
    const {
      emailFocused,
      senha,
      senhaFocused,
      secureTextEntry,
      modalVisible,
      nome,
      emailCadastro,
      telefone,
      senhaIsShow,
      senhaconfirmIsShow,
    } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <ScrollView style={styles.contentContainerStyle}>
          <View style={styles.content}>
            <View style={styles.form}>
              <UnderlineTextInput
                onRef={(r) => {
                  this.email = r;
                }}
                onChangeText={(text) => {
                  this.setState({
                    email: text,
                  });
                }}
                onFocus={this.emailFocus}
                inputFocused={emailFocused}
                onSubmitEditing={this.focusOn(this.senha)}
                returnKeyType="next"
                blurOnSubmit={false}
                keyboardType="email-address"
                placeholder="E-mail"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                inputTextColor={INPUT_TEXT_COLOR}
                borderColor={INPUT_BORDER_COLOR}
                focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                inputContainerStyle={styles.inputContainer}
              />

              <UnderlinePasswordInput
                onRef={(r) => {
                  this.senha = r;
                }}
                onChangeText={(text) => {
                  this.setState({
                    senha: text,
                  });
                }}
                onFocus={this.senhaFocus}
                inputFocused={senhaFocused}
                onSubmitEditing={() => {
                  this.auth;
                }}
                returnKeyType="done"
                placeholder="Senha"
                placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                inputTextColor={INPUT_TEXT_COLOR}
                secureTextEntry={secureTextEntry}
                borderColor={INPUT_BORDER_COLOR}
                focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                toggleVisible={senha.length > 0}
                toggleText={secureTextEntry ? "Mostrar" : "Esconder"}
                onTogglePress={this.onTogglePress}
              />

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => {
                    this.auth();
                  }}
                  title={"Entrar".toUpperCase()}
                />
              </View>

              <View style={styles.separator}>
                <View style={styles.line} />
                <Text style={styles.orText}>ou</Text>
                <View style={styles.line} />
              </View>

              <View style={styles.buttonsGroup}>
                <Button
                  color="#3b5998"
                  onPress={() => {
                    this.setState({
                      modalVisible: true,
                    });
                  }}
                  title={"Criar conta".toUpperCase()}
                />
              </View>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <StatusBar backgroundColor={Colors.statusBarColor} />
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({
                    modalVisible: true,
                  });
                }}
              >
                <View style={styles.modalWrapper}>
                  <TouchableWithoutFeedback>
                    <KeyboardAvoidingView behavior="position" enabled={IOS}>
                      <View style={styles.modalContainer}>
                        <Text style={styles.title}>{"CADASTRO"}</Text>

                        <Text style={styles.message}>
                          {"Insira seus dados"}
                        </Text>

                        <View style={styles.form}>
                          <View style={styles.registerFormIptBlock}>
                            <TextInput
                              style={styles.registerFormIpt}
                              placeholder="Informe seu nome"
                              placeholderTextColor="#ced4da"
                              ref="nome"
                              returnKeyType="next"
                              value={nome}
                              underlineColorAndroid="transparent"
                              onChangeText={(text) => {
                                this.setState({
                                  nome: text,
                                });
                              }}
                            />
                          </View>

                          <View style={styles.registerFormIptBlock}>
                            <TextInput
                              style={styles.registerFormIpt}
                              placeholder="Informe seu e-mail"
                              placeholderTextColor="#ced4da"
                              ref="emailCadastro"
                              keyboardType={"email-address"}
                              returnKeyType="next"
                              autoCapitalize="none"
                              value={emailCadastro}
                              underlineColorAndroid="transparent"
                              onChangeText={(text) => {
                                this.setState({
                                  emailCadastro: text,
                                });
                              }}
                            />
                          </View>

                          <View style={styles.registerFormIptBlock}>
                            <TextInputMask
                              style={styles.registerFormIpt}
                              placeholder="Informe seu celular com DDD"
                              placeholderTextColor="#ced4da"
                              type={"cel-phone"}
                              ref="telefone"
                              returnKeyType="next"
                              value={telefone}
                              underlineColorAndroid="transparent"
                              onChangeText={(text) => {
                                this.setState({
                                  telefone: text,
                                });
                              }}
                            />
                          </View>

                          <View style={styles.registerFormIptBlock}>
                            <TextInput
                              style={styles.registerFormIpt}
                              placeholder="Senha"
                              placeholderTextColor="#ced4da"
                              ref="senhaCadastro"
                              returnKeyType="next"
                              secureTextEntry={senhaIsShow}
                              underlineColorAndroid="transparent"
                              onChangeText={(text) => {
                                this.setState({
                                  senhaCadastro: text,
                                });
                              }}
                            />
                            <Entypo
                              onPress={() => {
                                this.setState({
                                  senhaIsShow: !senhaIsShow,
                                });
                              }}
                              name={senhaIsShow ? "eye" : "eye-with-line"}
                              size={20}
                              color={"#777777"}
                            />
                          </View>

                          <View style={styles.registerFormIptBlock}>
                            <TextInput
                              style={styles.registerFormIpt}
                              placeholderTextColor="#ced4da"
                              placeholder="Repita a senha"
                              ref="senhaconfirm"
                              returnKeyType="done"
                              secureTextEntry={senhaconfirmIsShow}
                              underlineColorAndroid="transparent"
                              onSubmitEditing={() => {
                                this.register();
                              }}
                              onChangeText={(text) => {
                                this.setState({
                                  senhaconfirm: text,
                                });
                              }}
                            />
                            <Entypo
                              onPress={() => {
                                this.setState({
                                  senhaconfirmIsShow: !senhaconfirmIsShow,
                                });
                              }}
                              name={
                                senhaconfirmIsShow ? "eye" : "eye-with-line"
                              }
                              size={20}
                              color={"#777777"}
                            />
                          </View>
                        </View>

                        <View style={styles.buttonContainer}>
                          <Button
                            onPress={() => {
                              this.register();
                            }}
                            title={"CADASTRAR"}
                            buttonStyle={styles.button}
                          />
                        </View>

                        <LinkButton
                          onPress={() => {
                            this.setState({
                              modalVisible: false,
                            });
                          }}
                          title={"Fechar".toUpperCase()}
                        />
                      </View>
                    </KeyboardAvoidingView>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default connect(
  (state) => ({
    usuario: state.user.login,
  }),
  (dispatch) => ({
    userActions: bindActionCreators(UserActions, dispatch),
  })
)(Login);

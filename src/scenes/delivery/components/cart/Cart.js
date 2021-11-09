import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  FlatList,
  Image,
  I18nManager,
  Platform,
  BackHandler,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SwipeRow } from "react-native-swipe-list-view";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import * as DeliveryActions from "../../actions";
import Colors from "../../../../theme/colors";
import {helloWorld} from "./components/Order";

const isRTL = I18nManager.isRTL;
const IOS = Platform.OS === "ios";

const MINUS_ICON = IOS ? "ios-remove" : "md-remove";
const PLUS_ICON = IOS ? "ios-add" : "md-add";
const DELETE_ICON = IOS ? "ios-close" : "md-close";
const ICON_SIZE = 22;
const iconSize = IOS ? ICON_SIZE + 2 : ICON_SIZE;

import styles from "./styles";

class Cart extends Component {
  constructor() {
    super();
    this.setQtd = this.setQtd.bind(this);
    this.remItem = this.remItem.bind(this);
  }

  createAndSavePDF = async (html) => {
    try {
      const { uri } = await Print.printToFileAsync({ html });
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
          await Sharing.shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  setQtd(position, qtd) {
    const { qtdProductInCart } = this.props.deliveryActions;

    qtdProductInCart(position, qtd);
  }

  remItem(position) {
    const { remProductInCart } = this.props.deliveryActions;

    Alert.alert(
      "Confirma a remoção do item?",
      "Ápós a confirmação o item sera removido do pedido",

      [
        {
          text: "Sim",
          onPress: () => {
            remProductInCart(position);
          },
        },
        {
          text: "Não",
        },
      ]
    );
  }

  render() {
    const { carrinho } = this.props;
    const { goBack } = this.props.navigation;
    
    const deliveryItens = carrinho.reduce((acc) => {
      acc++;
      return acc;
    }, 0);

    const total = carrinho.reduce((acc, item) => {
      acc += item.quantidade * item.precoindividual;
      return acc;
    }, 0);

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.requestKeyBoardAvoid}
      >
        <View style={styles.request}>
          <FlatList
            keyExtractor={(item, index) => "cart_" + index.toString()}
            data={carrinho.reduce((acc, item) => {
              acc.push(item);
              return acc;
            }, [])}
            ListHeaderComponent={
              <>
              {!deliveryItens ? (
                <View style={styles.requestEmpty}>
                  <MaterialIcons name="mood-bad" size={80} color="#ff2626" />
                  <Text style={styles.requestEmptyText}>
                    Nenhum produto em seu pedido
                  </Text>
                  <TouchableHighlight
                    underlayColor="#000"
                    style={styles.requestEmptyBtn}
                    onPress={() => {
                      goBack();
                    }}
                  >
                    <View style={styles.requestEmptyBtnCt}>
                      <Entypo name="circle-with-plus" size={20} color="#fff" />
                      <Text style={styles.requestEmptyBtnText}>
                        ADICIONAR PRODUTOS
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              ) : null}
              </>
            }
            ItemSeparatorComponent={() => {
              return <View style={styles.deliveryFiltersSprt} />;
            }}
            renderItem={({ item }) => {
              return (
                <SwipeRow
                  disableLeftSwipe={isRTL ? true : false}
                  disableRightSwipe={isRTL ? false : true}
                  directionalDistanceChangeThreshold={16}
                  rightOpenValue={isRTL ? 0 : -88}
                  leftOpenValue={isRTL ? 88 : 0}
                >
                  <View style={styles.cardBack}>
                    <View style={styles.deleteButtonContainer}>
                      <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => {
                          this.remItem(carrinho.indexOf(item));
                        }}
                        style={styles.deleteButton}
                      >
                        <Ionicons
                          name={DELETE_ICON}
                          color={Colors.white}
                          size={26}
                          style={[
                            {
                              height: iconSize,
                              width: iconSize
                            },
                            styles.icon
                          ]}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.bg}>
                    <TouchableOpacity activeOpacity={0.7} useForeground>
                      <View style={styles.container}>
                        <View style={styles.imageContainer}>
                          <Image
                            source={{ uri: item.produto.foto }}
                            style={[styles.image]}
                          />
                        </View>

                        <View style={styles.textContainer}>
                          <View style={styles.firstLine}>
                            <Text numberOfLines={2} style={styles.title}>
                              {item.produto.nome}
                            </Text>
                          </View>

                          <View style={styles.secondLine}>
                            {item.produto.descricao ? (
                              <Text
                                numberOfLines={2}
                                style={styles.descriptionText}
                              >
                                {item.produto.descricao}
                              </Text>
                            ) : null}
                          </View>

                          <View style={styles.thirdLine}>
                            <Text style={styles.priceText}>
                              {`R$ ${(
                                item.quantidade * item.precoindividual
                              ).toFixed(2)}`}
                            </Text>

                            <View style={styles.amountButtonsContainer}>
                              <TouchableOpacity
                                onPress={() => {
                                  if (item.quantidade - 1 <= 0) {
                                    this.remItem(carrinho.indexOf(item));
                                  } else {
                                    this.setQtd(
                                      carrinho.indexOf(item),
                                      item.quantidade--
                                    );
                                  }
                                }}
                                activeOpacity={0.85}
                              >
                                <View style={styles.iconContainer}>
                                  <Ionicons
                                    name={MINUS_ICON}
                                    color={Colors.white}
                                    size={20}
                                    style={[
                                      {
                                        height: iconSize,
                                        width: iconSize
                                      },
                                      styles.icon
                                    ]}
                                  />
                                </View>
                              </TouchableOpacity>

                              <Text style={styles.quantity}>
                                {item.quantidade}
                              </Text>

                              <TouchableOpacity
                                onPress={() => {
                                  this.setQtd(
                                    carrinho.indexOf(item),
                                    item.quantidade + 1
                                  );
                                }}
                                activeOpacity={0.85}
                              >
                                <View style={styles.iconContainer}>
                                  <Ionicons
                                    name={PLUS_ICON}
                                    color={Colors.white}
                                    size={20}
                                    style={[
                                      {
                                        height: iconSize,
                                        width: iconSize
                                      },
                                      styles.icon
                                    ]}
                                  />
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </SwipeRow>
              );
            }}
          />
        </View>

        {deliveryItens ? (
          <View style={styles.requestFooter}>
            <View style={styles.requestFooterLeft}>
              <Text style={styles.requestFooterDesc}>
                {`R$ ${total.toFixed(2)}`}
              </Text>
            </View>
            <View style={styles.requestFooterRight}>
              <TouchableHighlight
                style={styles.requestBtnRqst}
                underlayColor="#28a745"
                onPress={() => {
                  this.createAndSavePDF(helloWorld(carrinho, total));
                }}
              >
                <View style={styles.requestBtnCt}>
                  <Text style={styles.requestBtnText}>Checkout</Text>
                  <MaterialIcons
                    name="navigate-next"
                    size={45}
                    color={"#fff"}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        ) : null}
      </KeyboardAvoidingView>
    );
  }
}

export default connect(
  (state) => ({
    carrinho: state.delivery.carrinho,
  }),
  (dispatch) => ({
    deliveryActions: bindActionCreators(DeliveryActions, dispatch),
  })
)(Cart);

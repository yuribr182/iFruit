import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  BackHandler,
  Image,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as DeliveryActions from "../../actions";
import styles from "./styles";

class Product extends Component {
  constructor() {
    super();

    this.state = {
      quantidade: 1,
    };

    this.getSubtotalPrice = this.getSubtotalPrice.bind(this);
    this.moreQtd = this.moreQtd.bind(this);
    this.lessQtd = this.lessQtd.bind(this);
    this.addProductInCart = this.addProductInCart.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  getSubtotalPrice() {
    const { quantidade } = this.state;
    const { produto } = this.props.route.params;

    let price = produto.valor * quantidade;

    return price;
  }

  moreQtd() {
    const { quantidade } = this.state;

    this.setState({
      quantidade: quantidade + 1,
    });
  }

  lessQtd() {
    const { quantidade } = this.state;

    this.setState({
      quantidade: quantidade - 1 <= 0 ? 1 : quantidade - 1,
    });
  }

  addProductInCart() {
    const { produto } = this.props.route.params;

    const { quantidade } = this.state;

    this.props.deliveryActions.addProductInCart(
      {
        produto: produto,
        quantidade: quantidade,

        precoindividual: produto.valor,
      },
      () => {
        this.props.navigation.goBack();
      }
    );
  }

  render() {
    const { produto } = this.props.route.params;
    const { goBack } = this.props.navigation;
    const { quantidade } = this.state;

    return (
      <View style={styles.product}>
        <ScrollView style={styles.productScroll}>
          <View style={styles.productInfoHeader}>
            <View style={styles.productInfo}></View>
            <TouchableOpacity
              style={styles.productInfoBtn}
              onPress={() => {
                goBack();
              }}
            >
              <Ionicons name="close-circle" size={35} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.businessContent}>
            <View style={styles.businessIc}>
              <Image
                style={styles.businessImg}
                source={{ uri: produto.foto }}
              />
            </View>
          </View>
          <View style={styles.productInfoCont}>
            <Text style={styles.productInfoTextCont}>
              {produto.nome} - {produto.descricao}
            </Text>
          </View>
        </ScrollView>

        <View style={styles.productQtd}>
          <Text style={styles.productQtdRight}>
            <TouchableOpacity
              style={styles.productQtdBtn}
              onPress={() => {
                this.lessQtd();
              }}
            >
              <Entypo name="circle-with-minus" size={22} color="#ff2626" />
            </TouchableOpacity>
            <View style={styles.productQtdTxtBlock}>
              <Text style={styles.productQtdQtdLabel}>{quantidade}</Text>
            </View>
            <TouchableOpacity
              style={styles.productQtdBtn}
              onPress={() => {
                this.moreQtd();
              }}
            >
              <Entypo name="circle-with-plus" size={22} color="#00b279" />
            </TouchableOpacity>
          </Text>
          <View style={styles.productQtdTxt}>
            <TouchableHighlight
              style={styles.productFinish}
              underlayColor="#000"
              onPress={() => {
                this.addProductInCart();
              }}
            >
              <View style={styles.productContentRow}>
                <View style={styles.productLeft}>
                  <Text style={styles.productFinishTxt}>Adicionar</Text>
                </View>
                <View style={styles.productRight}>
                  <Text
                    style={styles.productFinishTxt2}
                  >{`R$ ${this.getSubtotalPrice().toFixed(2)}`}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    deliveryActions: bindActionCreators(DeliveryActions, dispatch),
  })
)(Product);

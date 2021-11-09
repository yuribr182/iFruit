import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground,
  BackHandler,
  ActivityIndicator,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import Colors from "../../../../theme/colors";
import ProductComponent from "./components/productComponent";
import * as DeliveryActions from "../../actions";

class Deliverys extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      loading: false,
    };
    this.fetchProduct = this.fetchProduct.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);
    this.homeLoadContent = this.homeLoadContent.bind(this);
    this.search = this.search.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  homeLoadContent() {
    this.fetchCategory();

    this.fetchProduct();
  }

  fetchProduct() {
    this.setState(
      {
        loading: true,
      },
      () => {
        this.props.deliveryActions.fetchProductCategory(
          {
            busca: this.state.search ? this.state.search : null,
          },
          () => {
            this.setState({
              loading: false,
            });
          }
        );
      }
    );
  }

  fetchCategory() {
    this.props.deliveryActions.fetchCategory();

    return true;
  }

  search() {
    if (!this.state.search) return this.resetSearch();

    this.fetchProduct();
  }

  resetSearch() {
    this.textInput.clear();

    this.setState(
      {
        search: "",
      },
      () => {
        this.fetchProduct();
      }
    );
  }

  fetchCategorySelect(item) {
    this.setState(
      {
        _categoria: item,
      },
      () => {
        this.props.deliveryActions.fetchProductCategory({
          idcategoria: this.state._categoria,
        });
      }
    );

    return true;
  }

  renderCategoryItem = ({ item, index }) => (
    <ImageBackground
      key={index}
      source={{ uri: item.foto }}
      imageStyle={styles.cardImg}
      style={styles.card}
    >
      <View style={styles.cardOverlay}>
        <TouchableOpacity
          onPress={() => this.fetchCategorySelect(item.idcategoria)}
          style={styles.cardContainer}
        >
          <Text style={styles.cardTitle}>{item.nome}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    this.homeLoadContent();
  }

  render() {
    const { search, loading } = this.state;
    const { category, produtosCategory } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.deliverysContainer}>
        <View style={styles.deliverysBlockDestaque}>
          <View style={styles.inputContainer}>
            <TextInput
              ref={(input) => {
                this.textInput = input;
              }}
              placeholder="O que você procura"
              returnKeyType="search"
              maxLength={50}
              style={styles.textInput}
              onSubmitEditing={() => {
                this.search();
              }}
              onChangeText={(text) => {
                this.setState({
                  search: text,
                });
              }}
            />
            {search ? (
              <TouchableOpacity
                onPress={() => {
                  this.resetSearch();
                }}
                style={styles.deliverysSearchCancel}
              >
                <Text style={styles.deliverysSearchCanceTxt}>Limpar</Text>
              </TouchableOpacity>
            ) : null}

            <View style={styles.searchButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.search();
                }}
              >
                <View style={styles.searchButton}>
                  <FontAwesome
                    name="search"
                    size={23}
                    color={Colors.onPrimaryColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.deliverys}>
          <FlatList
            refreshing={!this.state.loading}
            onRefresh={() => this.fetchProduct()}
            ListHeaderComponent={
              <>
                <View style={styles.categoriesContainer}>
                  <FlatList
                    data={category}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={false}
                    keyExtractor={(item, index) =>
                      "cat_" + item.idcategoria.toString()
                    }
                    renderItem={this.renderCategoryItem}
                    contentContainerStyle={styles.categoriesList}
                  />
                </View>
              </>
            }
            data={produtosCategory}
            style={styles.deliverysAllList}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => "prod_" + item.idproduto.toString()}
            renderItem={({ item }) => (
              <ProductComponent
                produto={item}
                key={item.idproduto}
                navigate={navigate}
              />
            )}
            ListFooterComponent={
              <>
                {loading && !Array.isArray(produtosCategory) ? (
                  <View style={styles.cartPreloader}>
                    <ActivityIndicator size="small" color="#f7b648" />
                  </View>
                ) : !Array.isArray(produtosCategory) ? (
                  <View style={styles.guidedelivery}>
                    <Text style={styles.deliverysBlockText} numberOfLines={1}>
                      Nenhum produto cadastrado
                    </Text>
                  </View>
                ) : null}
              </>
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  (state) => ({
    category: state.delivery.category,
    produtosCategory: state.delivery.produtosCategory,
  }),
  (dispatch) => ({
    deliveryActions: bindActionCreators(DeliveryActions, dispatch),
  })
)(Deliverys);

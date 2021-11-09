import React, { Component } from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

class ProductComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const { produto, navigate } = this.props;

    return (
      <View>
        <TouchableOpacity
          key={produto.idproduto}
          onPress={() => {
            navigate("Product", {
              produto: produto,
            });
          }}
          style={styles.singleAllListProduct}
        >
          <View style={styles.singleAllListProductPhoto}>
            {produto.foto ? (
              <View style={styles.businessIc}>
                <Image
                  style={styles.businessImg}
                  source={{ uri: produto.foto }}
                />
              </View>
            ) : null}
          </View>

          <View style={styles.singleAllListProductInfo}>
            <View>
              <Text style={styles.singleAllListProductTitle}>
                {produto.nome}
              </Text>
              {produto.descricao ? (
                <Text style={styles.singleAllListProductDesc}>
                  {produto.descricao}
                </Text>
              ) : null}
              <Text style={styles.singleAllListProductPrice}>
                {`R$ ${produto.valor.toFixed(2)}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />
      </View>
    );
  }
}

export default ProductComponent;

import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { RkCard } from 'react-native-ui-kitten'
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux'

import { getDetailGame, clearState } from '../actions'

class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: { marginTop: 24 }
  }

  componentWillMount() {
    this.props.clearState()
    this.props.getDetailGame(this.props.navigation.state.params.id)
  }

  render() {
    let contentDesc = this.props.gameDetail.description
    if(this.props.gameDetail) {
      content = <ScrollView>
                  <RkCard>
                    <View rkCardHeader>
                      <Text style={styles.header}>{this.props.gameDetail.name}</Text>
                    </View>
                    <View rkCardContent>
                      <HTMLView
                        value={contentDesc}
                      />
                    </View>
                    <View rkCardFooter>
                      <Text>Footer</Text>
                    </View>
                  </RkCard>
                </ScrollView>
    } else {
      content = <ActivityIndicator size="large" color="#0000ff"/>
    }

    return (
      <View style={[styles.container, styles.horizontal]}>
      {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  horizontal: {
    justifyContent: 'space-around',
  },
  header: {
    fontWeight: '900',
    fontSize: 20
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
})

function mapStateToProps(state) {
  return {
    gameDetail: state.DetailReducer.gameDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetailGame: (id) => dispatch(getDetailGame(id)),
    clearState: () => dispatch(clearState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

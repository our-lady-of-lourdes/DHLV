import React from 'react';
import { Text, View, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';
import DetailsView from '../components/DetailsView';

export default class ScheduleListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this._onPressItem = this._onPressItem.bind(this);
  }

  setModalVisible(visible) {
      this.setState({ modalVisible: visible });
  }

  _onPressItem() {
    this.setModalVisible(true);
  }

  render() {
    return (
      <View>
      <View style={styles.container}>
        <SectionList
          sections={scheduleData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index, section}) => 
            <TouchableOpacity onPress={this._onPressItem}>
              <Text key={index} style={styles.item}>{item}</Text>
            </TouchableOpacity>  
          }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
      <View>
          <DetailsView visible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>
      </View>
      </View>
    );
  }
}

const scheduleData = [
  {title: 'Friday', data: ['Giang Thuyet', 'An Toi']},
  {title: 'Saturday', data: ['Cau Nguyen', 'Thanh Le']},
];

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

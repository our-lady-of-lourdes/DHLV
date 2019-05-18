import React from 'react';
import { Text, View, StyleSheet, Image, SectionList, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

export default class DetailsView extends React.Component {
    // state = {
    //     modalVisible: false,
    // };

    // setModalVisible(visible) {
    //     this.setState({ modalVisible: visible });
    // }

    render() {
        return (
            <Modal
                style = {styles.modal}
                animationType="slide"
                // presentationStyle="formSheet"
                transparent={true}
                // visible={this.state.modalVisible}
                visible={this.props.visible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.backgroundView}>
                    <View style={styles.outerView}>
                        <View style={styles.textView}>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    // this.setModalVisible(!this.state.modalVisible);
                                    this.props.setModalVisible(false);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        textAlign: 'center',
        borderWidth: 5,
        opacity: 10,
        // backgroundColor: "#FF0000",
    },
    backgroundView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    outerView: {
        // flex: 1,
        alignItems: 'center',
        // textAlign: 'center',
        marginHorizontal: 50,
        marginVertical: 200,
        borderWidth: 5,
        backgroundColor: "#BB8FCE"
        // opacity: 10,
    },
    textView: {
        textAlign: 'center',
    }
});
import {Image, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import {FONTS} from '../assets';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/OrderListing';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const CONTENT = {
  tableHead: ['PRODUCT', 'FULL', 'HALF', 'QTR'],
  tableTitle: ['BANDIPUR', 'VIRGIN', 'HIGHLAND'],
  tableData: [
    ['100', '150', '400'],
    ['40', '200', '900'],
    ['80', '500', '300'],
  ],
};
export default class FloorList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.floorlisting}>
          <Image
            style={styles.inventoryimg}
            source={require('../assets/cargo-1.png')}></Image>
          <Text style={styles.floorlisitingtxt}>Order Listing</Text>
        </View>
        <View style={styles.storename}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#fff',
              marginLeft: 88,
              marginTop: 5,
            }}>
            Vinayak Store Pvt. Ltd.
          </Text>
        </View>
        <View style={styles.address}>
          <View style={styles.addressdesc}>
            <Text style={styles.addresstxt}>Dhobighat, Lalitpur</Text>
          </View>
          <View style={styles.contactdesc}>
            <Text style={styles.addresstxt}>9841323246</Text>
          </View>
        </View>
        <View style={styles.tableStyle}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#B9B9B9'}}>
            <Row
              data={CONTENT.tableHead}
              flexArr={[1, 1, 1, 1]}
              style={styles.tablehead}
              textStyle={styles.headingtext}
            />
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col
                data={CONTENT.tableTitle}
                style={{}}
                heightArr={[28, 28]}
                textStyle={styles.productdesc}
              />
              <Rows
                data={CONTENT.tableData}
                flexArr={[1, 1, 1]}
                style={{height: 28}}
                textStyle={{
                  textAlign: 'center',
                  color: '#000',
                  fontSize: 12,
                  fontWeight: '600',
                }}
              />
            </TableWrapper>
          </Table>
        </View>

        <View style={styles.storename}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#fff',
              marginLeft: 88,
              marginTop: 5,
            }}>
            Chaudhary Store Pvt. Ltd.{' '}
          </Text>
        </View>
        <View style={styles.address}>
          <View style={styles.addressdesc}>
            <Text style={styles.addresstxt}>Naxal, Kathmandu</Text>
          </View>
          <View style={styles.contactdesc}>
            <Text style={styles.addresstxt}>98413234456</Text>
          </View>
        </View>
        <View style={styles.tableStyle}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#B9B9B9'}}>
            <Row
              data={CONTENT.tableHead}
              flexArr={[1, 1, 1, 1]}
              style={styles.tablehead}
              textStyle={styles.headingtext}
            />
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col
                data={CONTENT.tableTitle}
                style={{}}
                heightArr={[28, 28]}
                textStyle={styles.productdesc}
              />
              <Rows
                data={CONTENT.tableData}
                flexArr={[1, 1, 1]}
                style={{height: 28}}
                textStyle={{
                  textAlign: 'center',
                  color: '#000',
                  fontSize: 12,
                  fontWeight: '600',
                }}
              />
            </TableWrapper>
          </Table>
        </View>

        <View style={styles.storename}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#fff',
              marginLeft: 88,
              marginTop: 5,
            }}>
            Bekha Store Pvt. Ltd.{' '}
          </Text>
        </View>
        <View style={styles.address}>
          <View style={styles.addressdesc}>
            <Text style={styles.addresstxt}>Siddha Pokhari</Text>
          </View>
          <View style={styles.contactdesc}>
            <Text style={styles.addresstxt}>984132887766</Text>
          </View>
        </View>
        <View style={{width: "80%",alignSelf:"center",marginBottom:84}}>
          <Table borderStyle={styles.lastTableStyle}>
            <Row
              data={CONTENT.tableHead}
              flexArr={[1, 1, 1, 1]}
              style={styles.tablehead}
              textStyle={styles.headingtext}
            />
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col
                data={CONTENT.tableTitle}
                style={{}}
                heightArr={[28, 28]}
                textStyle={styles.productdesc}
              />
              <Rows
                data={CONTENT.tableData}
                flexArr={[1, 1, 1]}
                style={{height: 28}}
                textStyle={{
                  textAlign: 'center',
                  color: '#000',
                  fontSize: 12,
                  fontWeight: '600',
                }}
              />
            </TableWrapper>
          </Table>
        </View>
        </ScrollView>
      </View>
    );
  }
}

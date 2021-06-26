import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import EmptyOrder from './../../components/molecules/EmptyOrder/index';
import Header from './../../components/molecules/Header/index';
import OrderTabSection from './../../components/molecules/OrderTabSection/index';

const Order = () => {
   const [isEmpty] = useState(false);
   return (
      <View style={styles.page}>
         {isEmpty ? (
            <EmptyOrder />
         ) : (
            <View style={styles.content}>
               <Header title="your order" subTitle="wait for the best meal" />
               <View style={styles.tabContainer}>
                  <OrderTabSection />
               </View>
            </View>
         )}
      </View>
   );
};

export default Order;

const styles = StyleSheet.create({
   page: {flex: 1},
   content: {flex: 1},
   tabContainer: {flex: 1, marginTop: 24},
});

import WooCommerceAPI from 'react-native-woocommerce-api';

var WooAPI = new WooCommerceAPI({
  url: 'https//www.360vitalis.com', // Your store URL
  ssl: false,
  consumerKey: 'ck_xxxxxx', // Your consumer secret
  consumerSecret: 'cs_xxxxxx', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3', // WooCommerce WP REST API version
  queryStringAuth: true

});

export default WooCommerceAPI = {
  WooAPI,
};

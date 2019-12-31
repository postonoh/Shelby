import WooCommerceAPI from 'react-native-woocommerce-api';

var WooCommerceAPI = new WooCommerceAPI({
  url: 'https//www.360vitalis.com', // Your store URL
  ssl: false,
  consumerKey: 'ck_f6a0ca72b3e35875d7321a0ca0ed43ec7f41fa2a', // Your consumer secret
  consumerSecret: 'cs_0784a0e0c7533ac7b96f57a0d343e9cd64826929', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3', // WooCommerce WP REST API version
  queryStringAuth: true
  
});
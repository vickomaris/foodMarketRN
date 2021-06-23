module.exports = {
   root: true,
   plugins: ['prettier'],
   extends: '@react-native-community',
   rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
   //bisa juga ditambahkan pretier : 0 di rules nya
   'prettier/prettier': [
      'error',
      {
         printWidth: 1,
      },
   ],
}

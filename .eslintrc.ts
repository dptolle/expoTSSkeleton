module.exports = {
    root: true,
    plugins: ["import"],
    extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
    parserOptions: {
        project: "./tsconfig.json"
    },
};

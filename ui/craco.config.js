module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "zlib": require.resolve("browserify-zlib"),
          "stream": require.resolve("stream-browserify") // Add this line
        }
      }
    }
  }
};
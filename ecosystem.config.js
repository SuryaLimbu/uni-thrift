module.exports = {
    apps: [
      {
        name: "uni-thrift",
        script: "./node_modules/.bin/next",
        args: "start -p " + (process.env.PORT || 3000),
        watch: false,
        autorestart: true,
      },
    ],
    };
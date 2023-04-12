module.exports = {
    // ...
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "extensionsToTreatAsEsm": [".ts"],
    "esModuleInterop": true,
    "resolve": {
      "extensions": [".ts", ".js"]
    }
  };
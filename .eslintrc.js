module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": [
            "error"
        ],
        "eqeqeq": [
            "error", 
            "smart"
        ],
        "no-unused-vars": [
            "error"
        ],
        "no-console": [
            "error"
        ],
        "comma-dangle": [
            "error", 
            "never"
        ],
        "max-len": [
            "error", 
            80, 
            2,
            {"ignoreUrls": true}
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "space-in-brackets": [
            "error", 
            "always"
        ],
        "newline-before-return": [
            "error"
        ]
    }
};
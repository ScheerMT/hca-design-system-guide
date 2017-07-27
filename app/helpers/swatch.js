module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('swatch', function(color, prop)  {
    var jsonData = {
      "colors": {
        "asphalt": {
          "title": "Asphalt",
          "hex": "#1f2532",
          "rgb": "31, 37, 50"
        },
        "cadet": {
          "title": "Cadet",
          "hex": "#465561",
          "rgb": "70, 85, 97"
        },
        "slate": {
          "title": "Slate",
          "hex": "#7f94a2",
          "rgb": "127, 148, 162"
        },
        "Geyser": {
          "title": "Geyser",
          "hex": "#d8dde6",
          "rgb": "216, 221, 230"
        },
        "steam": {
          "title": "Steam",
          "hex": "#f5f7f9",
          "rgb": "245, 247, 249"
        },
        "white": {
          "title": "White",
          "hex": "#ffffff",
          "rgb": "255, 255, 255"
        },
        "night": {
          "title": "Night",
          "hex": "#063d7a",
          "rgb": "6, 61, 122"
        },
        "evening": {
          "title": "Evening",
          "hex": "#1e71cd",
          "rgb": "30, 113, 205"
        },
        "noon": {
          "title": "Noon",
          "hex": "#268af9",
          "rgb": "38, 138, 249"
        },
        "morning": {
          "title": "Morning",
          "hex": "#e9f3fe",
          "rgb": "233, 243, 254"
        },
        "pine": {
          "title": "Pine",
          "hex": "#10572f",
          "rgb": "16, 87, 47"
        },
        "ivy": {
          "title": "Ivy",
          "hex": "#208052",
          "rgb": "32, 128, 82"
        },
        "grass": {
          "title": "Grass",
          "hex": "#26cc6d",
          "rgb": "38, 204, 109"
        },
        "mint": {
          "title": "Mint",
          "hex": "#e9f9f0",
          "rgb": "233, 249, 240"
        },
        "mocha": {
          "title": "Mocha",
          "hex": "#6f4704",
          "rgb": "111, 71, 5"
        },
        "hazelnut": {
          "title": "Hazelnut",
          "hex": "#966c24",
          "rgb": "150, 108, 36"
        },
        "butterscotch": {
          "title": "Butterscotch",
          "hex": "#ffb63d",
          "rgb": "255, 182, 61"
        },
        "vanilla": {
          "title": "Vanilla",
          "hex": "#fff4e2",
          "rgb": "255, 244, 226"
        },
        "cranberry": {
          "title": "Cranberry",
          "hex": "#990112",
          "rgb": "153, 1, 18"
        },
        "cherry": {
          "title": "Cherry",
          "hex": "#c83426",
          "rgb": "216, 66, 53"
        },
        "strawberry": {
          "title": "Strawberry",
          "hex": "#f55d50",
          "rgb": "245, 93, 80"
        },
        "watermelon": {
          "title": "Watermelon",
          "hex": "#fee7e5",
          "rgb": "254, 231, 229"
        },
      }
    }

    if (prop === 'hex') {
      return jsonData.colors[color].hex;
    }

    if (prop === 'rgb') {
      return jsonData.colors[color].rgb;
    }

    return jsonData.colors[color].title;
  });
};

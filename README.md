# 📸 Minyatur Slider

[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![GitHub](https://img.shields.io/badge/View_on_GitHub-blue?logo=github)](https://github.com/edukah/minyatur)
[![Live Demo](https://img.shields.io/badge/Demo-View%20Live-orange?logo=google-chrome)](https://edukah.github.io/minyatur/)

Lightweight, modular slider 🧩 with HTML-based config, responsive support 📱 and smart features like zoom 🔎 & fullscreen 🖥️.

Minyatur is a modern, modular, and lightweight slider component built for web projects. It supports both HTML attribute and JavaScript configuration methods, and includes optional modules.

---

## 🚀 Features

- 🔌 Modular architecture (thumbnail, fullscreen, zoom, message, control, mouse)
- 🧠 Smart configuration via HTML `data-*` attributes or JS config
- 🧩 Plug-and-play module system
- 🎯 Minimal dependencies and high compatibility
- 🔍 Interactive Help (`Minyatur.manual()`)
- 🌓 **Dark/Light Mode Support** (via CSS class)

---

## ⚙️ Installation & Initialization

> **Note:** The `target` parameter is required and must be a valid DOM element or selector. All other options are optional.

### Include in your HTML `<head>`

Make sure to include the stylesheet and the script:

```html
<head>
  <link rel="stylesheet" href="dist/minyatur.min.css" />
  <script type="text/javascript" src="dist/minyatur.min.js"></script>
</head>
```

### Understanding HTML Structure

Minyatur also allows configuring behavior using `data-*` attributes directly in HTML. This is ideal for simple use-cases without writing JavaScript.

**Example:**

```html
<div id="slider"
     data-minyatur-aspect-ratio="16:9"
     data-minyatur-module="thumbnail,fullscreen,message,zoom"
     data-minyatur-thumbnail-type="slider"
     data-minaytur-thumbnail-id="thumbs">
  <img src="1.jpg" data-message="First image" />
  <img src="2.jpg" data-message="Second image" />
  <img src="3.jpg" data-message="Third image" />
</div>
```

### Dark Mode Integration

Add `.dark-mode` class to `<body>` to activate dark theme:

```html
<body class="dark-mode">
  <div class="slider">...</div>
</body>
```

### Method 1: JavaScript Initialization

```js
new Minyatur({
  target: '#slider',
  loop: true,
  languageCode: 'en',
  aspectRatio: '16:9',
  module: ['thumbnail', 'fullscreen', 'message', 'control', 'mouse', 'zoom'],
  thumbnail: {
    type: 'slider',
    id: 'thumbs'
  },
  zoom: {
    expandedZoom: true
  }
});
```

### Method 2: HTML Attribute Configuration

```html
<div id="slider"
     data-minyatur-module="thumbnail,fullscreen,message,zoom"
     data-minyatur-thumbnail-type="slider"
     data-minyatur-thumbnail-id="thumbs">
  <!-- slider items here -->
</div>
```

> ✅ You can mix HTML and JavaScript configuration. JS values override HTML attributes if both are provided.

---

## 🔧 Available Configuration Options

| Key                 | Type             | Default      | Description |
|---------------------|------------------|--------------|-------------|
| `aspectRatio`       | `string`         | `'16:9'`     | Slider display ratio (`width:height`) or DSL rules (see below) |
| `maxWidth`          | `string \| null` | `null`       | Maximum width of the slider container |
| `maxHeight`         | `string \| null` | `null`       | Maximum height of the slider container |
| `contentWidthLimit` | `string`         | `'1250px'`   | Width limit for button container |
| `loop`              | `boolean`        | `false`      | Enables infinite sliding |
| `startIndex`        | `number`         | `1`          | Index of the initial visible item (starting from 1) |
| `styleAutoload`     | `boolean`        | `true`       | Injects default styles automatically |
| `languageCode`      | `string`         | `'en'`       | Language code (e.g. `'en'`, `'tr'`) |
| `module`            | `string[]`       | `[...]`      | List of module names to activate |


---

### 🔧 Module-Specific Options

| Key                   | Type     | Default | Description |
|------------------------|----------|---------|-------------|
| `thumbnail.type`       | `string`         | `'dot'` | Type of thumbnail: `'dot'`, `'slider'`, or `'basic'` |
| `thumbnail.id`         | `string \| null` | `null`    | ID of external container for custom thumbnail rendering |
| `zoom.expandedZoom`    | `boolean`        | `false` | Enables extended zoom coverage |

---

## 🧱 Modules

| Module       | Description |
|--------------|-------------|
| `thumbnail`  | Displays preview thumbnails (types: dot, slider, basic) |
| `fullscreen` | Expands selected item into fullscreen view |
| `message`    | Displays overlay text using `data-message` attribute |
| `control`    | Adds left/right navigation buttons |
| `mouse`      | Enables drag and swipe interaction |
| `zoom`       | Adds magnifier effect on hover |

---

## 🔬 Responsive Aspect Ratio DSL

Minyatur supports smart aspect ratio management via a compact DSL (Domain Specific Language) string.

### Syntax Overview:

```text
[ratio]<[breakpoint]
[breakpoint]<[ratio]
[min]<[ratio]<[max]
```

### Examples:

```js
new Minyatur({
  target: '#slider',
  aspectRatio: '1:1<800,16:9',
  module: ['fullscreen', 'zoom']
});
```

```html
<!-- 1:1 for <800px, 16:9 for others -->
<div data-minyatur-aspect-ratio="1:1<800,16:9"></div>

<!-- 4:3 only above 1200px, 1:1 otherwise -->
<div data-minyatur-aspect-ratio="1200<4:3,1:1"></div>

<!-- Full range setup -->
<div data-minyatur-aspect-ratio="1:1<800,800<16:9<1200,1200<3:1"></div>
```

### Parsing & Behavior:
- All DSL strings are parsed once at initialization.
- If no fallback ratio is defined, `1:1` is used and a warning is shown.
- The final DSL rule (pure ratio) is always treated as `fixed`, and used when no media queries match.

---

## 📝 Notes

- JavaScript values override any HTML `data-*` attributes.
- All options are optional unless required by an enabled module.
- Use `module` to control which features are activated.

---

## 📚 Console Manual

You can access a built-in console reference using:

```js
Minyatur.manual();
```

This will display a styled, interactive configuration guide in the browser console.

---

## 👨‍💻 Contribution & Development

Minyatur is built with extensibility in mind. You can create custom modules or extend existing ones with minimal effort.

---

## 📄 License

MIT License — free to use, modify, and distribute.

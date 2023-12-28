
# EnergySaver.js Library

## Overview

EnergySaver.js is a lightweight, easy-to-integrate JavaScript library designed to provide real-time energy consumption estimates based on the theme (dark or light) used on a website. It visually represents the estimated energy savings of using a dark theme over a light theme, enhancing user awareness about energy-efficient practices in digital environments.

## Features

- **Real-Time Energy Consumption Estimates**: Continuously displays the estimated energy consumption savings when using a dark theme.
- **Automatic Theme Detection**: Adjusts calculations based on the current theme (dark or light).
- **Easy Integration**: Simple to add to any existing website with minimal setup.
- **Customizable**: Easily adjustable parameters for different power consumption values or display settings.

## How to Set Up

### Step 1: Include the Library

First, include `EnergySaver.js` in your HTML file. Place the script tag in the `<head>` or at the end of the `<body>`:

```html
<script src="/EnergySaver.js"></script>
```

### Step 2: Initialize the Library

Create an instance of the `EnergySaver` class, passing the ID of your theme toggle checkbox:

```html
<script>
    const energySaver = new EnergySaver('your-checkbox-id');
</script>
```

Replace `'your-checkbox-id'` with the actual ID of your theme toggle checkbox element.

### Step 3: Add the Checkbox

Ensure you have a checkbox for theme toggling:

```html
<label class="theme-switch" for="theme-checkbox">
    <input type="checkbox" id="theme-checkbox" />
    <div class="slider round"></div>
</label>
```

### Step 4: Style as Needed

Customize the appearance of the energy consumption display using CSS.

## Benefits

- **Enhances User Engagement**: By displaying real-time data, it keeps users engaged and informed about their energy usage.
- **Promotes Energy Efficiency**: Encourages the use of dark themes, which can be more energy-efficient on certain types of screens.
- **Easy to Understand**: Provides a simple and clear visual representation of energy consumption, making it accessible to all users.
- **Customizable**: Can be easily tailored to fit the design and energy parameters of any website.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author and Contact

- **GitHub**: [mobilerast](https://github.com/mobilerast)
- **Email**: [mehmet.alp@rastmobile.com](mailto:mehmet.alp@rastmobile.com), [contact@rastmobile.com](mailto:contact@rastmobile.com)

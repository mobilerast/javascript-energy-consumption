class EnergySaver {
    constructor(checkboxId) {
        this.checkbox = document.getElementById(checkboxId);
        this.powerConsumptionLightTheme = 15; // Default value for light theme
        this.powerConsumptionDarkTheme = 10;  // Default value for dark theme
        this.isDarkMode = this.checkbox.checked;
        this.energyInterval = null;
        this.initUI();
        this.setupCheckboxListener();
        this.startTimer();
    }

    initUI() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.bottom = '10px';
        container.style.right = '10px';
        container.style.backgroundColor = 'rgba(0,0,0,0.6)';
        container.style.color = 'white';
        container.style.padding = '10px';
        container.style.borderRadius = '5px';
        container.style.fontSize = '0.9em';
        container.style.zIndex = '1000';

        const energyMessage = document.createElement('p');
        energyMessage.id = 'energy-message';
        energyMessage.textContent = 'Initializing...';

        const energyDisplay = document.createElement('span');
        energyDisplay.id = 'energy-display';
        energyDisplay.textContent = '0.00';

        container.appendChild(energyMessage);
        container.appendChild(energyDisplay);
        container.appendChild(document.createTextNode(' watt-hours'));

        document.body.appendChild(container);
    }

    setupCheckboxListener() {
        if (!this.checkbox) {
            console.error('Checkbox with provided ID not found.');
            return;
        }

        this.checkbox.addEventListener('change', () => {
            this.toggleTheme(this.checkbox.checked);
        });
    }

    toggleTheme(isDark) {
        this.isDarkMode = isDark;
        const message = this.isDarkMode ? 'Saving energy in dark mode.' : 'Using more energy in light mode.';
        document.getElementById('energy-message').textContent = message;

        if (this.isDarkMode) {
            this.startTimer();
        } else {
            this.stopTimer();
        }
    }

    startTimer() {
        this.startTime = new Date();
        if (this.energyInterval) {
            clearInterval(this.energyInterval);
        }
        this.energyInterval = setInterval(() => this.updateEnergyDisplay(), 1000);
    }

    stopTimer() {
        clearInterval(this.energyInterval);
        this.updateEnergyDisplay();
    }

    updateEnergyDisplay() {
        const currentTime = new Date();
        const timeSpentHours = (currentTime - this.startTime) / 1000 / 3600; // Time in hours

        const powerConsumptionCurrentTheme = this.isDarkMode ? this.powerConsumptionDarkTheme : this.powerConsumptionLightTheme;
        const energyConsumption = timeSpentHours * powerConsumptionCurrentTheme;

        document.getElementById('energy-display').textContent = isNaN(energyConsumption) ? '0.0000' : energyConsumption.toFixed(4);
    }
}

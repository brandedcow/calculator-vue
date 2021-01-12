const themes = {
  light: {
    primary: "#ffffff",
    secondary: '#4285F4',
    textPrimary: "#000000",
    textSecondary: "#dddddd",
    buttonPrimary: '#EBEBEB'
  },
  dark: {
    primary: "#222222",
    secondary: '#4285F4',
    textPrimary: "#FFFFFF",
    textSecondary: "#dddddd",
    buttonPrimary: '#1F1F1F'
  }
}

export function mapTheme({
  primary,
  secondary,
  textPrimary,
  textSecondary,
  buttonPrimary
}) {
  return {
    '--color-primary': primary || '',
    '--color-secondary': secondary || '',
    '--color-text-primary': textPrimary || '',
    '--color-text-secondary': textSecondary || '',
    '--color-button-primary': buttonPrimary || '',
  }
}

export function applyTheme(themeType) {
  const theme = mapTheme(themes[themeType])

  const root = document.documentElement;

  Object.keys(theme).forEach(property => {
    root.style.setProperty(property, theme[property])
  })
}

// Change to light when 7am, change to dark when 7pm
export default function setupThemeChanger() {
  const currentHour = new Date().getHours()
  const next7 = new Date()
  next7.setMinutes(0)
  next7.setMilliseconds(0)

  if (currentHour >= 7 && currentHour < 19) {
    applyTheme('light')
    next7.setHours(19)
  } else {
    applyTheme('dark')
    next7.setHours(7)
  }

  const timeUntilNext7 = next7.getTime() - new Date().getTime()

  setTimeout(setupThemeChanger, timeUntilNext7)
}
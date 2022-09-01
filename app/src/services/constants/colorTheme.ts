export interface ThemeState {
  color: {
    mainColor: string,
    subColor: string
  }[]
}

export const themeColor: ThemeState = {
  color: [
    { mainColor: "#FFA200", subColor: "#B86800" },
    { mainColor: "#87DAFF", subColor: "#007DA4" },
    { mainColor: "#E07CFE", subColor: "#9800A2" },
    { mainColor: "#00C280", subColor: "#005B09" },
    { mainColor: "#AB0000", subColor: "#FFC400" },
    { mainColor: "#A8A8A8", subColor: "#5A5A5A" },
    { mainColor: "#FFA5A5", subColor: "#007DA4" },
    { mainColor: "#FFFFFF", subColor: "#000000" },
    { mainColor: "#1D1D1D", subColor: "#DEDEDE" }
  ]
}
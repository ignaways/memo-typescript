export interface ColorState {
  color: string[]
}
export interface ThemeState {
  color: {
    mainColor: string,
    subColor: string,
    color:string
  }[]
}

export const Color: ColorState = {
  color: ["orange", "blue", "purle", "green", "red", "grey", "pink", "white", "black"]
}

export const themeColor: ThemeState = {
  color: [
    { mainColor: "#FFA200", subColor: "#B86800", color:"orange" },
    { mainColor: "#87DAFF", subColor: "#007DA4", color:"blue" },
    { mainColor: "#E07CFE", subColor: "#9800A2", color:"purle" },
    { mainColor: "#00C280", subColor: "#005B09", color:"green" },
    { mainColor: "#AB0000", subColor: "#FFC400", color:"red" },
    { mainColor: "#A8A8A8", subColor: "#5A5A5A", color:"grey" },
    { mainColor: "#FFA5A5", subColor: "#007DA4", color:"pink" },
    { mainColor: "#FFFFFF", subColor: "#000000", color:"black" },
    { mainColor: "#1D1D1D", subColor: "#DEDEDE", color:"white" }
  ]
}
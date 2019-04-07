// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  error: ['red', 'white'],
  delete: ['red', 'white'],
  article: ['#f5f5f5', '#e3e3e3'],
  normal: ['#428bca', 'white'],
  normalInput: ['#66afe9', 'rgb(20, 20, 20)', 'red'],
  mainText: ['rgb(20, 20, 20)'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: '"Open Sans", sans-serif',
}

theme.sizes = {
}

export default theme

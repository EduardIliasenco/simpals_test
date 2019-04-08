// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  error: ['rgb(222,139,130)', 'white'],
  delete: ['rgb(222,139,130)', 'white'],
  article: ['#f5f5f5', '#e3e3e3'],
  normal: ['#428bca', 'white'],
  link: ['rgba(20, 20, 20)', '#428bca'],
  normalInput: ['#66afe9', 'rgb(20, 20, 20)', 'rgb(222,139,130)'],
  mainText: ['rgb(20, 20, 20)'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: '"Open Sans", sans-serif',
}

theme.sizes = {
}

export default theme

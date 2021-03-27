import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export const HostDataBase = 'http://localhost:3001'

export function RenderWithTemplate(ComponentRender: ReactNode) {
  return <ThemeProvider theme={theme}>{ComponentRender}</ThemeProvider>
}

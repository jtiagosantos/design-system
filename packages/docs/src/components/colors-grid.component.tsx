import { colors } from '@tiago_santos/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => (
    <div
      key={key}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: color,
        padding: '2rem',
        fontFamily: 'monospace',
        color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
      }}
    >
      <strong>${key}</strong>
      <span>{color}</span>
    </div>
  ))
}

import React, { ReactNode } from 'react'
import * as S from './Slider.styles'
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText, FormLabel, Checkbox, Slider, Typography, Box } from '@mui/material';

type SliderProps = {
  name: string
  label: string
  children?: ReactNode
  onChange(event: Event, newValue: number | number[]): void
  type?: any
  variant?: string
  marks?: { value: number; label: string; }[]
  min?: number
  max?: number
}

function UiSlider({ name, label, children, onChange, type, variant, marks, min, max, ...rest }: SliderProps) {
  return (
    <FormControl
      fullWidth
    >
      <Typography id={name} gutterBottom>
        {label}
      </Typography>
      <Slider
        defaultValue={0}
        aria-labelledby={name}
        valueLabelDisplay="auto"
        step={null}
        marks={marks}
        min={min}
        max={max}
        onChange={onChange}
      />
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          sx={{ cursor: 'pointer' }}
        >
          {min}K min
        </Typography>
        <Typography
          variant="body2"
          sx={{ cursor: 'pointer' }}
        >
          {max/1000}M max
        </Typography>
      </Box> */}
    </FormControl>
  )
}

export default UiSlider

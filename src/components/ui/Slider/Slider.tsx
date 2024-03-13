import React, { ReactNode } from 'react'
import * as S from './Slider.styles'
import { FormControl, Button, FormControlLabel, FormGroup, Switch, FormHelperText, FormLabel, Checkbox, Slider, Typography, Box, styled, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';

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

const PrettoSlider = styled(Slider)({
  height: 10,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 30,
    width: 30,
    backgroundColor: '#1976d2',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 15,
    background: 'unset',
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#1976d2',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  }
});

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    alignItems: 'center',
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

function UiSlider({ name, label, children, onChange, type, variant, marks, min, max, ...rest }: SliderProps) {
  return (
    <FormControl
      fullWidth
    >
      <Typography id={name} gutterBottom>
        {label}
      </Typography>
      <HtmlTooltip
        placement='bottom'
        title={
          <React.Fragment>
            <Typography color="inherit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at maximus leo, sit amet bibendum orci.</Typography>
          </React.Fragment>
        }
      >
        <PrettoSlider
          defaultValue={min}
          aria-labelledby={name}
          valueLabelDisplay="on"
          step={35}
          marks={marks}
          min={min}
          max={max}
          onChange={onChange}
        />
      </HtmlTooltip>
      
      {/* <Slider
        defaultValue={min}
        aria-labelledby={name}
        valueLabelDisplay="auto"
        step={35}
        marks={marks}
        min={min}
        max={max}
        onChange={onChange}
      /> */}
    </FormControl>
  )
}

export default UiSlider

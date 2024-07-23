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
  color: '#FF5A62',
  height: 3,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: '#FF5A62',
    border: '2px solid #FF5A62',
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
    backgroundColor: '#FF5A62',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-rail': {
    color: '#333333',
    opacity: 1,
  },
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
      <Typography sx={{ color: '#333333', fontSize: 16, fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }} id={name} gutterBottom>
        {label}
      </Typography>
      {/* <HtmlTooltip
        placement='bottom'
        title={
          <React.Fragment>
            <Typography color="inherit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at maximus leo, sit amet bibendum orci.</Typography>
          </React.Fragment>
        }
      >
        
      </HtmlTooltip> */}
      <PrettoSlider
        defaultValue={min}
        aria-labelledby={name}
        valueLabelDisplay="off"
        step={35}
        min={min}
        max={max}
        onChange={onChange}
      />
      
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

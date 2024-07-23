import React from 'react';
import { TextField, FormControl, Stack, InputLabel } from '@mui/material';
import { IMaskInput } from 'react-imask';

interface TextMaskProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, TextMaskProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        sx={{
          borderRadius: '35px',
          '& fieldset': {
            borderRadius: '35px',
          },
          '& .Mui-focused fieldset': {
            borderColor: '#FF5A62 !important',
            '& legend': {
              visibility: 'visible',
              backgroundColor: '#FF5A62'
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#D9D9D9',
            backgroundColor: '#FF5A62',
            padding: '1px 8px',
            marginLeft: '-5px',
          },
        }}
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: TextMaskCustom as any,
        }}
        variant="standard"
      />
    </Stack>
  );
}
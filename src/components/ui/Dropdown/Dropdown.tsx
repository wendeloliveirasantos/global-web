import React, { ReactNode } from 'react'
import { Button, Divider, Menu, MenuItem } from '@mui/material';

type DropdownProps = {
  onClose(item: { nome: string, href: string }): void
  itens: Array<{ nome: string, href: string }>
  anchorEl: HTMLElement | null
  open: boolean
}

function UiDropdown({ onClose, itens, anchorEl, open, ...rest }: DropdownProps) {
  const handleItemClick = (item: { nome: string, href: string }) => {
    onClose(item);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => onClose({ nome: '', href: '' })}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {itens?.map((item, index) => (
          <MenuItem key={index} onClick={() => handleItemClick(item)}>
            {item.nome}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default UiDropdown

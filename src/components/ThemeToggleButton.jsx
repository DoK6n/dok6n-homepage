import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
      
    ></IconButton>
  );
}

export default ThemeToggleButton;

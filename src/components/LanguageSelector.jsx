import { Box, Menu, MenuButton, MenuItem, MenuList, Button, Text } from '@chakra-ui/react';
import { LANGUAGE_VERSIONS } from '../constants';

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = () => {
  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu>
        <MenuButton as={Button}>javascriopt</MenuButton>
        <MenuList>
          {languages.map(([language, version]) => (
            <MenuItem key={language}>
              {language}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;

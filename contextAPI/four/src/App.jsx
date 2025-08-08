// App.jsx - Complete debugged version
import { ChakraProvider, Box, Flex, Grid, Button, useColorMode } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthContextProvider } from './AuthContext';
import { ThemeContext, ThemeContextProvider } from './ThemeContext';

// Main App Component (now properly consuming contexts)
function AppContent() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setColorMode } = useColorMode();

  // 🔧 FIX: Sync Chakra UI color mode with custom theme context
  useEffect(() => {
    setColorMode(theme);
  }, [theme, setColorMode]);

  return (
    <Box minH="100vh" bg={theme === 'light' ? 'gray.50' : 'gray.800'}>
      {/* 🔧 NAVBAR FIX: Proper theme-aware styling and button functionality */}
      <Flex
        as="nav"
        p="4"
        bg={theme === 'light' ? 'white' : 'gray.700'} // Theme-aware background
        justifyContent="space-between"
        alignItems="center"
        shadow="sm"
        borderBottom="1px"
        borderColor={theme === 'light' ? 'gray.200' : 'gray.600'}
      >
        {/* Login/Logout Button - Now functions correctly */}
        <Button 
          onClick={toggleAuth} // ✅ Direct function call, not reference
          colorScheme={isLoggedIn ? 'red' : 'blue'}
          variant="solid"
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        
        {/* Theme Toggle Button - Now updates correctly */}
        <Button 
          onClick={toggleTheme} // ✅ Direct function call
          colorScheme="purple"
          variant="outline"
        >
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      {/* Main Content Area */}
      <Box p="4" flex="1">
        {/* Status Display */}
        <Box 
          mb="6" 
          p="4" 
          bg={theme === 'light' ? 'white' : 'gray.700'}
          borderRadius="md"
          shadow="sm"
          textAlign="center"
          color={theme === 'light' ? 'gray.800' : 'white'}
        >
          <Box 
            fontSize="xl" 
            fontWeight="bold"
            color={isLoggedIn ? 'green.500' : 'red.500'}
          >
            Status: {isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}
          </Box>
          <Box mt="2" fontSize="sm">
            Current Theme: {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
          </Box>
        </Box>

        {/* 🔧 RESPONSIVE GRID FIX: Mobile-first responsive design */}
        <Grid 
          templateColumns={{
            base: "1fr",           // 1 column on mobile (0-768px)
            md: "repeat(2, 1fr)",  // 2 columns on tablet (768px-992px)
            lg: "repeat(3, 1fr)"   // 3 columns on desktop (992px+)
          }} 
          gap="4"
        >
          {['Card 1', 'Card 2', 'Card 3'].map((card, index) => (
            <Box 
              key={card} 
              p="6" 
              shadow="md" 
              borderRadius="md"
              // 🔧 THEME-AWARE CARD COLORS FIX
              bg={theme === 'light' ? 'white' : 'gray.700'}
              color={theme === 'light' ? 'gray.800' : 'white'}
              border="1px"
              borderColor={theme === 'light' ? 'gray.200' : 'gray.600'}
              transition="all 0.2s"
              _hover={{
                shadow: "lg",
                transform: "translateY(-2px)"
              }}
            >
              <Box fontSize="lg" fontWeight="semibold" mb="2">
                {card}
              </Box>
              <Box 
                fontSize="sm" 
                color={theme === 'light' ? 'gray.600' : 'gray.300'}
              >
                Theme: {theme} • Auth: {isLoggedIn ? 'Active' : 'Guest'}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* 🔧 FOOTER THEME FIX: Proper theme-aware background */}
      <Box 
        as="footer" 
        p="6" 
        bg={theme === 'light' ? 'gray.100' : 'gray.900'} // ✅ Theme-aware bg
        color={theme === 'light' ? 'gray.700' : 'gray.200'} // ✅ Theme-aware text
        borderTop="1px"
        borderColor={theme === 'light' ? 'gray.200' : 'gray.600'}
        textAlign="center"
        mt="auto"
      >
        <Box fontSize="sm" fontWeight="medium">
          🔧 Fixed Footer • Theme: <strong>{theme}</strong> • 
          User: <strong>{isLoggedIn ? 'Authenticated' : 'Guest'}</strong>
        </Box>
      </Box>
    </Box>
  );
}

// 🔧 ROOT FIX: Proper provider nesting
function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <ChakraProvider>
          <AppContent />
        </ChakraProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;

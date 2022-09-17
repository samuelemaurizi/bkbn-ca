import TodoState from './context/todo/TodoState';

// COMPONENTS
import FormSubmit from './components/FormSubmit';
import TodoList from './components/TodoList';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  return (
    <TodoState>
      <CssBaseline />
      <Container
        maxWidth='sm'
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - var(--m2) * 2)',
          marginBlock: 'var(--m2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '3rem',
          boxShadow: 5,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '0px',
            width: '100%',
            padding: '24px',
            background:
              'linear-gradient(114deg, rgba(118,25,210,1) 0%, rgba(211,6,221,1) 61%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            keep track of your todos
          </Typography>
        </Box>
        <FormSubmit />
        <TodoList />
      </Container>
    </TodoState>
  );
}

export default App;

import TodoState from './context/todo/TodoState';

// COMPONENTS
import FormSubmit from './components/FormSubmit';
import TodoList from './components/TodoList';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <TodoState>
      <CssBaseline />
      <Container
        maxWidth='sm'
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '3rem',

          outline: '1px solid pink',
        }}
      >
        <Typography variant='h4'>keep track of your todos</Typography>
        <FormSubmit />
        <TodoList />
      </Container>
    </TodoState>
  );
}

export default App;

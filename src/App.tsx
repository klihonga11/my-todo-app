import { Text } from '@chakra-ui/react';
import './App.css';
import TodoHome from './components/TodoHome';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Text fontSize="5xl">Todo app</Text>
      <TodoHome></TodoHome>
    </Provider>
  );
}

export default App;

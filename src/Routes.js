import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import NewDebt from './pages/NewDebt';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home: Home,
            NewDebt: NewDebt,
        },
        {
            initialRouteName: 'Home'
        }

    )
);

export default Routes;
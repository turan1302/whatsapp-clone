import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Platform, StyleSheet } from 'react-native';
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Communities from '../screens/Communities';
import Calls from '../screens/Calls';
import { colors } from '../screens/Chats/styles';
import UpdatesTabIcon from '../common/icons/UpdatesTabIcon';

const Tab = createBottomTabNavigator();

const TAB_BAR_BG = colors.tabBarBg;
const TAB_COLOR_ACTIVE = colors.tabActive;
const TAB_COLOR_INACTIVE = colors.tabInactive;
const TAB_PILL_ACTIVE = colors.tabPillActive;

const CHATS_TAB_BADGE = 1;

const TAB_ICONS = {
    Chats: { family: 'material', name: 'message-text-outline' },
    Updates: { family: 'custom', name: 'updates' },
    Communities: { family: 'material', name: 'account-group' },
    Calls: { family: 'feather', name: 'phone' },
};

const tabBarStyles = StyleSheet.create({
    iconWrapper: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -10,
        minWidth: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        color: colors.badgeText,
    },
    pill: {
        backgroundColor: TAB_PILL_ACTIVE,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const renderIcon = (routeName, focused, color) => {
    const icon = TAB_ICONS[routeName] ?? { family: 'feather', name: 'circle' };
    const iconColor = focused ? TAB_COLOR_ACTIVE : color;

    if (icon.family === 'custom' && icon.name === 'updates') {
        return <UpdatesTabIcon size={22} color={iconColor} />;
    }

    const IconComponent =
        icon.family === 'material' ? MaterialCommunityIcons : Feather;

    return <IconComponent name={icon.name} size={22} color={iconColor} />;
};

const renderTabIcon = (routeName, focused, color, badge) => {
    const iconElement = (
        <View style={tabBarStyles.iconWrapper}>
            {renderIcon(routeName, focused, color)}
            {badge != null && badge > 0 && (
                <View style={tabBarStyles.badge}>
                    <Text style={tabBarStyles.badgeText}>{badge}</Text>
                </View>
            )}
        </View>
    );

    if (focused) {
        return <View style={tabBarStyles.pill}>{iconElement}</View>;
    }

    return iconElement;
};

const WelcomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                const tabBarHidden = [];

                return {
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: TAB_COLOR_ACTIVE,
                    tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
                    tabBarLabelStyle: {
                        fontWeight: '500',
                        fontSize: 12,
                        marginTop: 2,
                    },
                    tabBarIcon: ({ focused, color }) =>
                        renderTabIcon(
                            route.name,
                            focused,
                            color,
                            route.name === 'Chats' ? CHATS_TAB_BADGE : undefined,
                        ),
                    tabBarStyle: tabBarHidden.includes(routeName)
                        ? { display: 'none' }
                        : {
                            backgroundColor: TAB_BAR_BG,
                            borderTopWidth: StyleSheet.hairlineWidth,
                            borderTopColor: '#222d34',
                            height: Platform.OS === 'ios' ? 88 : 72,
                            paddingTop: 8,
                            paddingBottom: Platform.OS === 'ios' ? 28 : 12,
                            elevation: 0,
                        },
                };
            }}
        >
            <Tab.Screen
                name="Chats"
                component={Chats}
                options={{ tabBarLabel: 'Sohbetler' }}
            />
            <Tab.Screen
                name="Updates"
                component={Updates}
                options={{ tabBarLabel: 'Güncellemeler' }}
            />
            <Tab.Screen
                name="Communities"
                component={Communities}
                options={{ tabBarLabel: 'Topluluklar' }}
            />
            <Tab.Screen
                name="Calls"
                component={Calls}
                options={{ tabBarLabel: 'Aramalar' }}
            />
        </Tab.Navigator>
    );
};

export default WelcomeNavigator;

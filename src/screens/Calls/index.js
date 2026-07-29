import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from './styles';
import { emptyState } from '../../datas/calls';

const EmptyIllustration = () => (
    <View style={styles.illustration}>
        <View style={styles.phoneIcon}>
            <MaterialCommunityIcons
                name="phone"
                size={52}
                color={colors.accent}
            />
        </View>
        <View style={styles.lockWrapper}>
            <Feather name="lock" size={36} color={colors.background} />
        </View>
        <View style={styles.heartIcon}>
            <MaterialCommunityIcons
                name="heart"
                size={22}
                color={colors.accent}
            />
        </View>
    </View>
);

const Calls = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Aramalar</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity hitSlop={8}>
                        <Feather name="search" size={22} color={colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity hitSlop={8}>
                        <Feather name="more-vertical" size={22} color={colors.textSecondary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.emptyState}>
                <EmptyIllustration />
                <Text style={styles.emptyTitle}>{emptyState.title}</Text>
                <Text style={styles.emptySubtitle}>{emptyState.subtitle}</Text>
            </View>

            <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
                <MaterialCommunityIcons
                    name="phone-plus"
                    size={26}
                    color={colors.badgeText}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Calls;

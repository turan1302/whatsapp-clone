import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from './styles';

const Updates = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Güncellemeler</Text>
                    <View style={styles.headerActions}>
                        <TouchableOpacity hitSlop={8}>
                            <Feather name="search" size={22} color={colors.textSecondary} />
                        </TouchableOpacity>
                        <TouchableOpacity hitSlop={8}>
                            <Feather name="more-vertical" size={22} color={colors.textSecondary} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Durum</Text>

                    <TouchableOpacity style={styles.statusRow} activeOpacity={0.6}>
                        <View style={styles.avatarWrapper}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>M</Text>
                            </View>
                            <View style={styles.addStatusBadge}>
                                <Feather name="plus" size={14} color={colors.badgeText} />
                            </View>
                        </View>
                        <View style={styles.statusTextBlock}>
                            <Text style={styles.statusTitle}>Durum ekle</Text>
                            <Text style={styles.statusSubtitle}>
                                24 saat sonra kaybolur
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.hiddenRow} activeOpacity={0.6}>
                        <Text style={styles.hiddenText}>Gizlenen güncellemeler</Text>
                        <Feather name="chevron-down" size={20} color={colors.textSecondary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Kanallar</Text>

                    <Text style={styles.channelsDescription}>
                        İlginizi çeken konulardaki son gelişmelerden haberdar olun.
                        Takip edebileceğiniz kanalları aşağıda bulabilirsiniz.
                    </Text>

                    <TouchableOpacity style={styles.findChannelsRow} activeOpacity={0.6}>
                        <Text style={styles.findChannelsText}>
                            Takip edebileceğiniz kanallar bulun
                        </Text>
                        <View style={styles.chevronCircle}>
                            <Feather name="chevron-down" size={20} color={colors.textSecondary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                        <MaterialCommunityIcons
                            name="view-grid-outline"
                            size={20}
                            color={colors.accent}
                        />
                        <Text style={styles.actionButtonText}>Daha fazlasını keşfet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                        <Feather name="plus" size={20} color={colors.accent} />
                        <Text style={styles.actionButtonText}>Kanal oluştur</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.fabContainer}>
                <TouchableOpacity style={styles.fabEdit} activeOpacity={0.8}>
                    <Feather name="edit-2" size={22} color={colors.textPrimary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fabCamera} activeOpacity={0.8}>
                    <Feather name="camera" size={26} color={colors.badgeText} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Updates;

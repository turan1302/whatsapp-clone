import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from './styles';
import { communities as COMMUNITIES } from '../../datas/communities';

const NewCommunityItem = ({ item }) => (
    <TouchableOpacity style={styles.newCommunityRow} activeOpacity={0.6}>
        <View style={styles.newCommunityIconWrapper}>
            <View style={styles.newCommunityIcon}>
                <MaterialCommunityIcons
                    name="account-group-outline"
                    size={26}
                    color={colors.textSecondary}
                />
            </View>
            <View style={styles.newCommunityBadge}>
                <Feather name="plus" size={14} color={colors.badgeText} />
            </View>
        </View>
        <Text style={styles.rowTitle}>{item.title}</Text>
    </TouchableOpacity>
);

const CommunityHeader = ({ item }) => (
    <>
        <TouchableOpacity style={styles.communityHeader} activeOpacity={0.6}>
            <View style={[styles.communityAvatar, { backgroundColor: item.avatarColor }]}>
                <Text style={styles.communityAvatarText}>{item.initials}</Text>
            </View>
            <Text style={styles.communityTitle}>{item.title}</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
    </>
);

const AnnouncementChannel = ({ channel, isLast }) => (
    <TouchableOpacity style={styles.channelRow} activeOpacity={0.6}>
        <View style={[styles.channelIcon, { backgroundColor: channel.iconColor }]}>
            <MaterialCommunityIcons
                name={channel.iconName}
                size={24}
                color={colors.accent}
            />
        </View>
        <View style={[styles.channelContent, isLast && styles.channelContentLast]}>
            <View style={styles.channelTopRow}>
                <Text style={styles.channelTitle}>{channel.title}</Text>
                <Text style={styles.channelTime}>{channel.time}</Text>
            </View>
            <Text style={styles.channelSubtitle} numberOfLines={1}>
                {channel.subtitle}
            </Text>
        </View>
    </TouchableOpacity>
);

const ChatChannel = ({ channel, isLast }) => (
    <TouchableOpacity style={styles.channelRow} activeOpacity={0.6}>
        <View style={[styles.channelAvatar, { backgroundColor: channel.avatarColor }]}>
            <Text style={styles.channelAvatarText}>{channel.initials}</Text>
        </View>
        <View style={[styles.channelContent, isLast && styles.channelContentLast]}>
            <View style={styles.channelTopRow}>
                <Text style={styles.channelTitle}>{channel.title}</Text>
                <Text style={styles.channelTime}>{channel.time}</Text>
            </View>
            <Text style={styles.channelSubtitle} numberOfLines={1}>
                {channel.subtitle}
            </Text>
        </View>
    </TouchableOpacity>
);

const SeeAllItem = ({ channel }) => (
    <TouchableOpacity style={styles.seeAllRow} activeOpacity={0.6}>
        <Feather name="chevron-right" size={20} color={colors.textSecondary} />
        <Text style={styles.seeAllText}>{channel.title}</Text>
    </TouchableOpacity>
);

const renderChannel = (channel, index, channels) => {
    const isLast = index === channels.length - 1;

    if (channel.type === 'seeAll') {
        return <SeeAllItem key={channel.id} channel={channel} />;
    }

    if (channel.type === 'announcement') {
        return (
            <AnnouncementChannel
                key={channel.id}
                channel={channel}
                isLast={isLast}
            />
        );
    }

    return (
        <ChatChannel
            key={channel.id}
            channel={channel}
            isLast={isLast}
        />
    );
};

const CommunityBlock = ({ item }) => (
    <View>
        <CommunityHeader item={item} />
        {item.channels?.map((channel, index) =>
            renderChannel(channel, index, item.channels),
        )}
    </View>
);

const renderItem = ({ item }) => {
    if (item.type === 'newCommunity') {
        return <NewCommunityItem item={item} />;
    }

    if (item.type === 'community') {
        return <CommunityBlock item={item} />;
    }

    return null;
};

const Communities = () => {
    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Topluluklar</Text>
            <TouchableOpacity hitSlop={8}>
                <Feather name="more-vertical" size={22} color={colors.textSecondary} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <FlatList
                data={COMMUNITIES}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default Communities;

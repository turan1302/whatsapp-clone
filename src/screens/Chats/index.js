import { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from './styles';
import { chats as CHATS } from '../../datas/messages';

const FILTERS = [
    { id: 'all', label: 'Tümü' },
    { id: 'unread', label: 'Okunmamış', count: 1 },
    { id: 'favorites', label: 'Favoriler' },
    { id: 'groups', label: 'Gruplar', count: 1 },
];

const FilterChip = ({ filter, isActive, onPress }) => (
    <TouchableOpacity
        style={[styles.filterChip, isActive && styles.filterChipActive]}
        onPress={onPress}
        activeOpacity={0.7}
    >
        <Text
            style={[
                styles.filterChipText,
                isActive && styles.filterChipTextActive,
            ]}
        >
            {filter.label}
        </Text>
        {filter.count != null && (
            <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>{filter.count}</Text>
            </View>
        )}
    </TouchableOpacity>
);

const ChatItem = ({ item, isLast }) => (
    <TouchableOpacity style={styles.chatRow} activeOpacity={0.6}>
        <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
            <Text style={styles.avatarText}>{item.initials}</Text>
        </View>
        <View style={[styles.chatContent, isLast && styles.chatRowLast]}>
            <View style={styles.chatTopRow}>
                <Text style={styles.chatName} numberOfLines={1}>
                    {item.name}
                </Text>
                <View style={styles.chatMeta}>
                    {item.pinned && (
                        <Feather
                            name="bookmark"
                            size={14}
                            color={colors.textSecondary}
                            style={{ transform: [{ rotate: '-90deg' }] }}
                        />
                    )}
                    <Text
                        style={[
                            styles.chatTime,
                            item.unreadCount > 0 && styles.chatTimeUnread,
                        ]}
                    >
                        {item.time}
                    </Text>
                </View>
            </View>
            <View style={styles.chatBottomRow}>
                <Text
                    style={[
                        styles.chatMessage,
                        item.unreadCount > 0 && styles.chatMessageUnread,
                    ]}
                    numberOfLines={1}
                >
                    {item.lastMessage}
                </Text>
                {item.read && (
                    <MaterialCommunityIcons
                        name="check-all"
                        size={18}
                        color="#53bdeb"
                    />
                )}
                {item.unreadCount > 0 && (
                    <View style={styles.chatBadge}>
                        <Text style={styles.chatBadgeText}>
                            {item.unreadCount}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    </TouchableOpacity>
);

const Chats = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const renderHeader = () => (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>WhatsApp</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity hitSlop={8}>
                        <Feather name="camera" size={22} color={colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity hitSlop={8}>
                        <Feather name="more-vertical" size={22} color={colors.textSecondary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.searchWrapper}>
                <View style={styles.searchBar}>
                    <Feather name="search" size={18} color={colors.textSecondary} />
                    <Text style={styles.searchPlaceholder}>
                        Meta AI'a Sor veya Ara
                    </Text>
                </View>
            </View>

            <View style={styles.filtersContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filtersContent}
                >
                    {FILTERS.map(filter => (
                        <FilterChip
                            key={filter.id}
                            filter={filter}
                            isActive={activeFilter === filter.id}
                            onPress={() => setActiveFilter(filter.id)}
                        />
                    ))}
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.archivedRow} activeOpacity={0.6}>
                <View style={styles.archivedIconWrapper}>
                    <Feather name="archive" size={20} color={colors.textSecondary} />
                </View>
                <Text style={styles.archivedText}>Arşivlenmiş</Text>
            </TouchableOpacity>
        </>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <FlatList
                data={CHATS}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <ChatItem
                        item={item}
                        isLast={index === CHATS.length - 1}
                    />
                )}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.fabContainer}>
                <TouchableOpacity style={styles.fabMetaAi} activeOpacity={0.8}>
                    <MaterialCommunityIcons
                        name="star-four-points"
                        size={22}
                        color="#a78bfa"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fabNewChat} activeOpacity={0.8}>
                    <MaterialCommunityIcons
                        name="message-plus"
                        size={26}
                        color={colors.badgeText}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Chats;

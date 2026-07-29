import { StyleSheet } from 'react-native';
import { colors } from '../Chats/styles';

export { colors };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        paddingBottom: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
        backgroundColor: colors.surface,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.textPrimary,
        letterSpacing: 0.2,
    },
    newCommunityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: colors.background,
    },
    newCommunityIconWrapper: {
        position: 'relative',
        marginRight: 16,
    },
    newCommunityIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: colors.surfaceLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    newCommunityBadge: {
        position: 'absolute',
        right: -4,
        bottom: -4,
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.background,
    },
    rowTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: colors.textPrimary,
    },
    communityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.background,
    },
    communityAvatar: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    communityAvatarText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.accent,
    },
    communityTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: colors.textPrimary,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.divider,
        marginLeft: 80,
        marginRight: 16,
    },
    channelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 32,
        paddingRight: 16,
        paddingVertical: 10,
        backgroundColor: colors.background,
    },
    channelIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    channelAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    channelAvatarText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textPrimary,
    },
    channelContent: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.divider,
        paddingBottom: 10,
        minHeight: 54,
        justifyContent: 'center',
    },
    channelContentLast: {
        borderBottomWidth: 0,
    },
    channelTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    channelTitle: {
        flex: 1,
        fontSize: 17,
        fontWeight: '500',
        color: colors.textPrimary,
        marginRight: 8,
    },
    channelTime: {
        fontSize: 12,
        color: colors.textSecondary,
    },
    channelSubtitle: {
        fontSize: 15,
        color: colors.textSecondary,
    },
    seeAllRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 48,
        paddingRight: 16,
        paddingVertical: 14,
        backgroundColor: colors.background,
        gap: 20,
    },
    seeAllText: {
        fontSize: 15,
        color: colors.textSecondary,
    },
});

export default styles;

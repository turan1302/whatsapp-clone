import { StyleSheet } from 'react-native';
import { colors } from '../Chats/styles';

export { colors };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
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
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingBottom: 80,
    },
    illustration: {
        width: 200,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
    },
    phoneIcon: {
        position: 'absolute',
        left: 18,
        top: 28,
        transform: [{ rotate: '-35deg' }],
    },
    lockWrapper: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: colors.textPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    heartIcon: {
        position: 'absolute',
        right: 28,
        top: 18,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.textPrimary,
        textAlign: 'center',
        marginBottom: 12,
    },
    emptySubtitle: {
        fontSize: 15,
        lineHeight: 22,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: colors.fab,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
});

export default styles;

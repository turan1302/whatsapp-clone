import { View } from 'react-native';

const UpdatesTabIcon = ({ size = 22, color = '#ffffff' }) => {
    const ringSize = size;
    const stroke = 2.2;
    const innerRingSize = size * 0.62;
    const dotSize = size * 0.22;

    return (
        <View
            style={{
                width: ringSize,
                height: ringSize,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    width: ringSize - 1,
                    height: ringSize - 1,
                    borderRadius: (ringSize - 1) / 2,
                    borderWidth: stroke,
                    borderColor: color,
                    borderRightColor: 'transparent',
                    borderBottomColor: 'transparent',
                    transform: [{ rotate: '135deg' }],
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: innerRingSize,
                    height: innerRingSize,
                    borderRadius: innerRingSize / 2,
                    borderWidth: 1.6,
                    borderColor: color,
                    borderLeftColor: 'transparent',
                    borderTopColor: 'transparent',
                    transform: [{ rotate: '-45deg' }],
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: dotSize,
                    height: dotSize,
                    borderRadius: dotSize / 2,
                    backgroundColor: color,
                    bottom: ringSize * 0.16,
                    right: ringSize * 0.12,
                }}
            />
        </View>
    );
};

export default UpdatesTabIcon;

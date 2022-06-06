// import '@testing-library/jest-native/extend-expect'
import {jest} from '@jest/globals'

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
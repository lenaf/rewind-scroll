import { createContext } from 'react';

import { DeviceInfo } from '@/types/DeviceInfo';

export const DeviceInfoContext = createContext<DeviceInfo>({
  browserName: '',
  browserVersion: '',
  osName: '',
  osVersion: '',
});

import mockserver from 'mockserver-node';
import { mockClient, mockServerPort, specUrlOrPayload } from './utils';

beforeAll(async () => {
  await mockserver.start_mockserver({
    serverPort: mockServerPort,
  });
});

beforeEach(async () => {
  await mockClient.openAPIExpectation({
    specUrlOrPayload,
  });
});

afterAll(async () => {
  await mockserver.stop_mockserver({
    serverPort: mockServerPort,
  });
});

afterEach(async () => {
  await mockClient.reset();
});

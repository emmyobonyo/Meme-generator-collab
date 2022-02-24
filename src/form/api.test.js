import getMemes from './api';

test('fetch memes', () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    success: true,
    data: {
      memes: [
        {
          id: '181913649',
          name: 'Drake Hotline Bling',
          url: 'https://i.imgflip.com/30b1gx.jpg',
          width: 1200,
          height: 1200,
          box_count: 2,
        },
        {
          id: '87743020',
          name: 'Two Buttons',
          url: 'https://i.imgflip.com/1g8my4.jpg',
          width: 600,
          height: 908,
          box_count: 3,
        },
      ],
    },
  }));

  expect(getMemes()).resolves.toHaveProperty('success', true);
  expect(getMemes()).resolves.toHaveProperty('data.memes.0.id', '181913649');
  expect(getMemes()).resolves.toHaveProperty('data.memes.0.url', 'https://i.imgflip.com/30b1gx.jpg');
});
